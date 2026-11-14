import type {
  IPublicTypeJSExpression,
  IPublicTypeJSFunction,
} from '@alilc/lowcode-types'
import type { Program } from '@babel/types'
import { parse } from 'acorn'
import MagicString from 'magic-string'

interface ImportStatement {
  type: 'import'
  from: string
  name: string
  importedName: string | null
}

interface NormalStatement {
  type: 'expression'
  code: string
}

type UsageStatement = ImportStatement | NormalStatement

/** Bindings returned by `setup()`, as far as they can be read statically. */
export interface SetupBindings {
  /** Returned values, with their initial value when it is a literal. */
  state: Record<string, unknown>
  /** Returned functions. */
  methods: string[]
}

const REF_FACTORIES = [
  'ref',
  'shallowRef',
  'reactive',
  'shallowReactive',
  'readonly',
]

/** The value of a literal expression; `null` for anything else. */
function staticValue(node: any): unknown {
  if (!node) return null
  switch (node.type) {
    case 'Literal':
      return node.regex ? null : node.value
    case 'TemplateLiteral':
      return node.expressions.length === 0 ? node.quasis[0].value.cooked : null
    case 'UnaryExpression':
      return (node.operator === '-' || node.operator === '+') &&
        typeof node.argument.value === 'number'
        ? Number(`${node.operator}${node.argument.value}`)
        : null
    case 'ArrayExpression':
      return node.elements.map(staticValue)
    case 'ObjectExpression': {
      const result: Record<string, unknown> = {}
      for (const prop of node.properties) {
        if (prop.type === 'Property' && !prop.computed) {
          result[getPropName(prop.key)] = staticValue(prop.value)
        }
      }
      return result
    }
    default:
      return null
  }
}

function isFunctionNode(node: any) {
  return (
    node?.type === 'FunctionExpression' ||
    node?.type === 'ArrowFunctionExpression' ||
    node?.type === 'FunctionDeclaration'
  )
}

/**
 * Reads the bindings of a `setup()` whose body ends with `return { ... }`:
 * functions are methods, other values are state (initial value when it is
 * `ref(literal)` / `reactive({...})` or a literal).
 */
function readSetupBindings(setupNode: any): SetupBindings {
  const bindings: SetupBindings = { state: {}, methods: [] }
  const body = setupNode?.body
  if (body?.type !== 'BlockStatement') return bindings
  const returned = [...body.body]
    .reverse()
    .find((node: any) => node.type === 'ReturnStatement')
  if (returned?.argument?.type !== 'ObjectExpression') return bindings

  const declared = new Map<string, any>()
  for (const node of body.body) {
    if (node.type === 'FunctionDeclaration' && node.id) {
      declared.set(node.id.name, node)
    } else if (node.type === 'VariableDeclaration') {
      for (const d of node.declarations) {
        if (d.id.type === 'Identifier') declared.set(d.id.name, d.init)
      }
    }
  }

  for (const prop of returned.argument.properties) {
    if (prop.type !== 'Property' || prop.computed) continue
    const name = getPropName(prop.key)
    const value =
      prop.value.type === 'Identifier'
        ? declared.get(prop.value.name)
        : prop.value
    if (isFunctionNode(value)) {
      bindings.methods.push(name)
    } else if (
      value?.type === 'CallExpression' &&
      value.callee.type === 'Identifier' &&
      REF_FACTORIES.includes(value.callee.name)
    ) {
      bindings.state[name] = staticValue(value.arguments[0])
    } else {
      bindings.state[name] = staticValue(value)
    }
  }
  return bindings
}

function createInitModuleCode(id: string, code: string) {
  return `(() => {const $id = ${JSON.stringify(
    id,
  )}; return ($cached, $scope = window) => {
  if ($id in $cached) return $cached[$id];
  const exports = $cached[$id] = {};
  ${code}
  return exports;
}})()`
}

function parseLocalName(name: string) {
  if (
    name === '$id' ||
    name === '$cached' ||
    name === '$scope' ||
    name === 'exports'
  ) {
    return '_' + name
  } else {
    return name
  }
}

function getPropName(propKey: any) {
  if (propKey.type === 'Identifier') {
    return propKey.name
  } else {
    return propKey.value
  }
}

function parseFunction(s: MagicString, node: any): IPublicTypeJSFunction {
  const code = s.slice(node.start, node.end)
  let prefix = ''
  if (node.async) {
    prefix += 'async '
  }
  if (!code.startsWith('function')) {
    prefix += 'function '
  }
  return {
    type: 'JSFunction',
    value: prefix + code,
  }
}

function parseExpression(s: MagicString, node: any): IPublicTypeJSExpression {
  return {
    type: 'JSExpression',
    value: s.slice(node.start, node.end),
  }
}

function parseObjectExpression(
  s: MagicString,
  node: any,
): Record<string, unknown> {
  const properties: Record<string, unknown> = {}
  for (const prop of node.properties) {
    if (prop.value.type === 'FunctionExpression') {
      properties[getPropName(prop.key)] = parseFunction(s, prop.value)
    } else if (prop.value.type === 'Literal') {
      properties[getPropName(prop.key)] = prop.value.value
    } else if (prop.value.type === 'ArrayExpression') {
      const elements: unknown[] = (properties[getPropName(prop.key)] = [])
      for (const element of prop.value.elements) {
        if (element.type === 'ObjectExpression') {
          elements.push(parseObjectExpression(s, element))
        } else if (element.type === 'FunctionExpression') {
          elements.push(parseFunction(s, element))
        } else if (element.type === 'Literal') {
          elements.push(element.value)
        } else {
          elements.push(parseExpression(s, element))
        }
      }
    } else if (prop.value.type === 'ObjectExpression') {
      properties[getPropName(prop.key)] = parseObjectExpression(s, prop.value)
    } else {
      properties[getPropName(prop.key)] = parseExpression(s, prop.value)
    }
  }
  return properties
}

export function parseCode(
  id: string,
  code: string,
  libraryMap: Record<string, string>,
) {
  const s = new MagicString(code)
  const program = parse(code, {
    ecmaVersion: 'latest',
    sourceType: 'module',
  }) as Program

  const state = {}
  const methods = {}
  const lifeCycles = {}
  let setupBindings: SetupBindings = { state: {}, methods: [] }

  const statements: UsageStatement[] = []
  const globalVars: Record<string, string> = {}

  let compNode: any = null
  if (program.type === 'Program') {
    for (const node of program.body) {
      if (node.type === 'ImportDeclaration') {
        const from = node.source.value
        node.specifiers.forEach((item) => {
          const localName = parseLocalName(item.local.name)
          globalVars[localName] = localName
          statements.push({
            type: 'import',
            from,
            importedName:
              item.type === 'ImportSpecifier'
                ? item.imported.type === 'Identifier'
                  ? item.imported.name
                  : item.imported.value
                : item.type === 'ImportDefaultSpecifier'
                  ? 'default'
                  : null,
            name: localName,
          })
        })
      } else if (node.type === 'ExportDefaultDeclaration') {
        const declaration = node.declaration
        if (
          declaration.type === 'CallExpression' &&
          declaration.callee.type === 'Identifier' &&
          declaration.callee.name === 'defineComponent' &&
          declaration.arguments.length > 0 &&
          declaration.arguments[0].type === 'ObjectExpression'
        ) {
          compNode = declaration.arguments[0]
        } else if (declaration.type === 'ObjectExpression') {
          compNode = declaration
        }
      } else if (
        node.type === 'ExportAllDeclaration' ||
        node.type === 'ExportNamedDeclaration'
      ) {
        // ignore export * from 'xxx' & export const xxx & export { xxx }
        // do nothing
      } else {
        if (node.type === 'VariableDeclaration') {
          node.declarations.forEach((d) => {
            if (d.id.type === 'Identifier') {
              const localName = parseLocalName(d.id.name)
              globalVars[d.id.name] = localName
              if (localName !== d.id.name) {
                s.overwrite(d.id.start!, d.id.end!, localName)
              }
            }
          })
        } else if (node.type === 'FunctionDeclaration') {
          if (node.id?.name) {
            const localName = parseLocalName(node.id.name)
            globalVars[node.id.name] = localName
            if (localName !== node.id.name) {
              s.overwrite(node.id.start!, node.id.end!, localName)
            }
          }
        }
        statements.push({
          type: 'expression',
          code: s.slice(node.start!, node.end!),
        })
      }
    }
  }

  const varCount = Object.keys(globalVars).length
  // 初始化 module
  if (
    (varCount > 1 && 'defineComponent' in globalVars) ||
    (varCount > 0 && !('defineComponent' in globalVars))
  ) {
    const code: string[] = []
    const imports: Record<string, [string | null, string][]> = {}
    statements.forEach((stat) => {
      if (stat.type === 'import') {
        const library = libraryMap[stat.from] ?? stat.from
        const record = imports[library] || (imports[library] = [])
        record.push([stat.importedName, stat.name])
      } else {
        code.push(new MagicString(stat.code).indent('  ').toString())
      }
    })
    const importCodes = Object.keys(imports).map((name) => {
      const items: string[] = []
      for (const [importName, exportName] of imports[name]) {
        if (importName == null) {
          return `const ${exportName} = $scope["${name}"]`
        } else if (importName === exportName) {
          items.push(importName)
        } else {
          items.push(`${importName}: ${exportName}`)
        }
      }
      return `const {${items.join(',')}} = $scope["${name}"];`
    })
    code.unshift(...importCodes)
    Object.keys(globalVars).forEach((varName) => {
      code.push(`  exports.${varName} = ${globalVars[varName]};`)
    })
    lifeCycles['initModule'] = {
      type: 'JSExpression',
      value: createInitModuleCode(id, code.join('\n')),
    }
  }

  // 处理组件内容
  if (compNode != null) {
    for (const property of compNode.properties) {
      if (property.computed || property.shorthand) {
        continue
      }

      const { method, value } = property

      switch (property.key.name) {
        case 'data': {
          let dataObject: any = null
          if (value.type === 'ArrowFunctionExpression') {
            if (value.body.type === 'ObjectExpression') {
              /**
               * // 解析箭头函数语法，且直接返回一个对象字面量
               * ```js
               * {
               *    data: () => ({
               *      name: 'name'
               *    })
               * }
               * ```
               */
              dataObject = value.body
            } else if (
              value.body.type === 'BlockStatement' &&
              value.body.body.length === 1 &&
              value.body.body[0].type === 'ReturnStatement' &&
              value.body.body[0].argument.type === 'ObjectExpression'
            ) {
              /**
               * // 解析箭头函数语法，且直接返回一个对象字面量
               * ```js
               * {
               *    data: () => {
               *      return {
               *        name: 'name'
               *      }
               *    }
               * }
               * ```
               */
              dataObject = value.body.body[0].argument
            }
          } else if (
            value.type === 'FunctionExpression' &&
            value.body.type === 'BlockStatement' &&
            value.body.body.length === 1 &&
            value.body.body[0].type === 'ReturnStatement' &&
            value.body.body[0].argument.type === 'ObjectExpression'
          ) {
            /**
             * // 解析普通函数，且直接返回一个对象字面量
             * ```js
             * {
             *    data() {
             *      return {
             *        name: 'name'
             *      }
             *    }
             * }
             * ```
             */
            dataObject = value.body.body[0].argument
          }
          if (dataObject) {
            Object.assign(state, parseObjectExpression(s, dataObject))
          } else {
            lifeCycles['initData'] = method
              ? parseFunction(s, value)
              : parseExpression(s, value)
          }
          break
        }
        case 'props': {
          if (
            value.type === 'ArrayExpression' ||
            value.type === 'ObjectExpression'
          ) {
            lifeCycles['initProps'] = parseExpression(s, value)
          }
          break
        }
        case 'emits': {
          if (
            value.type === 'ArrayExpression' ||
            value.type === 'ObjectExpression'
          ) {
            lifeCycles['initEmits'] = parseExpression(s, value)
          }
          break
        }
        case 'methods': {
          if (value.type === 'ObjectExpression') {
            Object.assign(methods, parseObjectExpression(s, value))
          }
          break
        }
        case 'watch': {
          const initWatch: Record<string, unknown> = {}
          if (value.type === 'ObjectExpression') {
            Object.assign(initWatch, parseObjectExpression(s, value))
          }
          if (Object.keys(initWatch).length > 0) {
            lifeCycles['initWatch'] = initWatch
          }
          break
        }
        case 'computed': {
          if (value.type === 'ObjectExpression') {
            const initComputed = parseObjectExpression(s, value)
            if (Object.keys(initComputed).length > 0) {
              lifeCycles['initComputed'] = initComputed
            }
          }
          break
        }
        case 'provide': {
          if (value.type === 'ObjectExpression') {
            const initProvide = parseObjectExpression(s, value)
            if (Object.keys(initProvide).length > 0) {
              lifeCycles['initProvide'] = initProvide
            }
          } else if (value.type === 'FunctionExpression') {
            lifeCycles['initProvide'] = parseExpression(s, value)
          } else if (value.type === 'ArrowFunctionExpression') {
            lifeCycles['initProvide'] = parseExpression(s, value)
          }
          break
        }
        case 'inject': {
          if (value.type === 'ObjectExpression') {
            const initInject: Record<string, unknown> = {}
            Object.assign(initInject, parseObjectExpression(s, value))
            if (Object.keys(initInject).length > 0) {
              lifeCycles['initInject'] = initInject
            }
          } else if (value.type === 'ArrayExpression') {
            lifeCycles['initInject'] = parseExpression(s, value)
          }
          break
        }
        default: {
          if (property.key.name === 'setup') {
            setupBindings = readSetupBindings(value)
          }
          if (value.type === 'FunctionExpression') {
            lifeCycles[getPropName(property.key)] = parseFunction(s, value)
          } else if (value.type === 'ArrowFunctionExpression') {
            lifeCycles[getPropName(property.key)] = parseExpression(s, value)
          }
        }
      }
    }
  }

  return { state, methods, lifeCycles, setupBindings }
}

export function findOptionNode(program: any, optionName: string) {
  let compNode: any = null

  if (program.type === 'Program') {
    for (const node of program.body) {
      if (node.type === 'ExportDefaultDeclaration') {
        const declaration = node.declaration
        if (
          declaration.type === 'CallExpression' &&
          declaration.callee.type === 'Identifier' &&
          declaration.callee.name === 'defineComponent' &&
          declaration.arguments.length > 0 &&
          declaration.arguments[0].type === 'ObjectExpression'
        ) {
          compNode = declaration.arguments[0]
        } else if (declaration.type === 'ObjectExpression') {
          compNode = declaration
        }
        break
      }
    }
  }

  if (!compNode) return null

  if (optionName === 'root') {
    return compNode
  }

  for (const property of compNode.properties) {
    if (property.computed || property.shorthand) {
      continue
    }

    const { value, key } = property
    if (key.name === optionName) {
      return value
    }
  }

  return null
}

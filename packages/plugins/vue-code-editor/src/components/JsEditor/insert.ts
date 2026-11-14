import { parse } from 'acorn'
import MagicString from 'magic-string'
import { findOptionNode } from './parse'

export interface FunctionEventParams {
  functionName: string
  /** Function source, as method shorthand (`name(args) {}`). */
  template?: string
}

const propName = (key: any): string =>
  key.type === 'Identifier' ? key.name : key.value

/** `name(args) {}` (method shorthand) as a function declaration. */
function toFunctionDeclaration(code: string) {
  const trimmed = code.trim()
  if (/^(async\s+)?function\b/.test(trimmed)) return trimmed
  return /^async\s/.test(trimmed)
    ? `async function ${trimmed.replace(/^async\s+/, '')}`
    : `function ${trimmed}`
}

/** Names declared at the top level of a function body. */
function declaredNames(body: any[]) {
  const names = new Set<string>()
  for (const node of body) {
    if (node.type === 'FunctionDeclaration' && node.id) names.add(node.id.name)
    if (node.type === 'VariableDeclaration') {
      for (const d of node.declarations) {
        if (d.id.type === 'Identifier') names.add(d.id.name)
      }
    }
  }
  return names
}

/**
 * Adds an event handler to the component: to `setup()` and its returned
 * object when the component has one ending with `return { ... }`, otherwise
 * to the `methods` option. Returns the new code (unchanged when the
 * component cannot be found).
 */
export function insertFunction(code: string, params: FunctionEventParams) {
  const { functionName: name, template } = params
  const ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' })
  const s = new MagicString(code)

  const setupNode = findOptionNode(ast, 'setup')
  const body =
    setupNode?.body?.type === 'BlockStatement' ? setupNode.body.body : null
  const returned = body
    ?.slice()
    .reverse()
    .find((node: any) => node.type === 'ReturnStatement')
  if (returned?.argument?.type === 'ObjectExpression') {
    if (!declaredNames(body).has(name)) {
      const lineStart = code.lastIndexOf('\n', returned.start) + 1
      const indent = code.slice(lineStart, returned.start)
      const fn = toFunctionDeclaration(template ?? `${name}() {}`)
        .split('\n')
        .map((line, i) => (i === 0 ? line : `${indent}${line}`))
        .join('\n')
      s.appendLeft(lineStart, `${indent}${fn}\n\n`)
    }
    const object = returned.argument
    const properties = object.properties.filter(
      (prop: any) => prop.type === 'Property' && !prop.computed,
    )
    if (!properties.some((prop: any) => propName(prop.key) === name)) {
      if (object.properties.length > 0) {
        s.appendLeft(
          object.properties[object.properties.length - 1].end,
          `, ${name}`,
        )
      } else {
        s.overwrite(object.start, object.end, `{ ${name} }`)
      }
    }
    return s.toString()
  }

  const indentStr = s.getIndentString()
  const functionCode = template ?? `${name}() {\n}`
  const indent = (text: string, indentStart: boolean, count = 1): string => {
    let result = new MagicString(text)
    while (count--) {
      result = result.indent(indentStr, { indentStart })
    }
    return result.toString()
  }
  const methodNode = findOptionNode(ast, 'methods')
  if (methodNode) {
    if (methodNode.type !== 'ObjectExpression') {
      console.error(
        '[vue-code-editor]: 组件 methods 选项不是对象字面量，无法自动注册事件处理函数',
      )
      return code
    }
    const propertyLen = methodNode.properties.length
    if (propertyLen > 0) {
      const lastProperty = methodNode.properties[propertyLen - 1]
      s.appendRight(lastProperty.end, `,\n${indent(functionCode, true, 2)}`)
    } else {
      const content = indent(`{\n${indent(functionCode, true)}\n}`, false)
      s.overwrite(methodNode.start, methodNode.end, content)
    }
    return s.toString()
  }
  const rootNode = findOptionNode(ast, 'root')
  if (!rootNode) {
    console.error(
      '[vue-code-editor]: 组件 Options 未找到，无法自动注册事件处理函数',
    )
    return code
  }
  const propertyLen = rootNode.properties.length
  if (propertyLen > 0) {
    const lastProperty = rootNode.properties[propertyLen - 1]
    const methodsCode = `\nmethods: {\n${indent(functionCode, true)}\n}`
    s.appendRight(lastProperty.end, `,${indent(methodsCode, true)}`)
  } else {
    const methodsCode = `methods: {\n${indent(functionCode, true, 1)}\n}`
    s.overwrite(
      rootNode.start,
      rootNode.end,
      `{\n${indent(methodsCode, true)}\n}`,
    )
  }
  return s.toString()
}

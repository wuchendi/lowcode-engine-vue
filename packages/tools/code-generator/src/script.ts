import { withGlobalDataHandler } from '@cdlab996/lowcode-vue-core/schema'
import MagicString from 'magic-string'
import type { ResolvedComponent } from './components'
import type { AstNode } from './expression'
import { CONTEXT_KEYS, parseModule, rewriteSetupContext } from './expression'
import type { VueVersion } from './types'
import { isJSExpression, isJSFunction, toCode } from './value'

export interface RootSchema {
  componentName: string
  fileName?: string
  state?: Record<string, unknown>
  methods?: Record<string, unknown>
  lifeCycles?: Record<string, unknown>
  dataSource?: { list?: unknown[]; dataHandler?: unknown }
  meta?: { originCode?: unknown }
}

/** React lifecycle names the renderer accepts, as Vue options. */
const LIFECYCLES: Record<string, Partial<Record<VueVersion, string>> | string> =
  {
    componentDidMount: 'mounted',
    componentWillMount: 'beforeMount',
    componentDidUpdate: 'updated',
    componentWillUnmount: { 2: 'beforeDestroy', 3: 'beforeUnmount' },
    componentDidCatch: 'errorCaptured',
    constructor: 'created',
  }
const VUE_LIFECYCLES = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'beforeUnmount',
  'unmounted',
  'beforeDestroy',
  'destroyed',
  'errorCaptured',
  'renderTracked',
  'renderTriggered',
  'serverPrefetch',
  'setup',
]
/** `init*` option hooks of the source panel, as component options. */
const OPTION_HOOKS: Record<string, string> = {
  initProps: 'props',
  initEmits: 'emits',
  initData: 'data',
  initComputed: 'computed',
  initWatch: 'watch',
  initProvide: 'provide',
  initInject: 'inject',
}

const CONTEXT_USE = new RegExp(`\\bthis\\.(${CONTEXT_KEYS.join('|')})\\b`)

/** An Options API component from the state, methods and lifecycles of a schema. */
function optionsComponent(
  root: RootSchema,
  vue: VueVersion,
  warn: (m: string) => void,
) {
  const options: string[] = []
  const code = (value: unknown) => toCode(value)
  if (root.state && Object.keys(root.state).length) {
    options.push(`data() {\n    return ${code(root.state)}\n  }`)
  }
  for (const [key, value] of Object.entries(root.lifeCycles ?? {})) {
    if (key === 'initModule' || key === 'render') continue
    if (OPTION_HOOKS[key]) {
      options.push(`${OPTION_HOOKS[key]}: ${code(value)}`)
      continue
    }
    const mapped = LIFECYCLES[key]
    const name =
      typeof mapped === 'string'
        ? mapped
        : mapped
          ? mapped[vue]
          : VUE_LIFECYCLES.includes(key)
            ? key
            : undefined
    if (!name || !(isJSFunction(value) || isJSExpression(value))) {
      warn(`Lifecycle "${key}" of ${root.fileName} is not exported`)
      continue
    }
    if (name === 'setup') {
      warn(
        `setup() of ${root.fileName} has no source code; its imports are not exported`,
      )
    }
    options.push(`${name}: ${code(value)}`)
  }
  if (root.methods && Object.keys(root.methods).length) {
    const methods = Object.entries(root.methods).map(
      ([name, fn]) => `    ${name}: ${code(fn)},`,
    )
    options.push(`methods: {\n${methods.join('\n')}\n  }`)
  }
  return `import { defineComponent } from 'vue'\n\nexport default defineComponent({\n${options
    .map((option) => `  ${option},`)
    .join('\n')}\n})\n`
}

/** The component options object of the default export. */
function findOptions(program: AstNode): AstNode | null {
  for (const node of program.body as AstNode[]) {
    if (node.type !== 'ExportDefaultDeclaration') continue
    const declaration = node.declaration as AstNode
    if (declaration.type === 'ObjectExpression') return declaration
    if (
      declaration.type === 'CallExpression' &&
      declaration.arguments[0]?.type === 'ObjectExpression'
    ) {
      return declaration.arguments[0]
    }
  }
  return null
}

const propName = (key: AstNode): string =>
  key.type === 'Identifier' ? key.name : key.value

function findProperty(options: AstNode, name: string): AstNode | undefined {
  return (options.properties as AstNode[]).find(
    (p) => p.type === 'Property' && !p.computed && propName(p.key) === name,
  )
}

export interface ScriptInput {
  root: RootSchema
  vue: VueVersion
  components: Map<string, ResolvedComponent>
  /** Whether the template uses the page context. */
  templateUsesContext: boolean
  /** Import path of the generated `src/lowcode` from this file. */
  contextImport: string
  warn: (message: string) => void
}

export interface ScriptResult {
  script: string
  usesContext: boolean
}

/** Data source configuration as code: expressions are evaluated on the instance. */
function dataSourceCode(list: unknown[]) {
  return toCode(list, {
    expression: (code) => `expression(function () {\n  return (${code})\n})`,
  })
}

export function pageScript(input: ScriptInput): ScriptResult {
  const { root, vue, components, warn } = input
  const origin = root.meta?.originCode
  const source =
    typeof origin === 'string' && /export\s+default/.test(origin)
      ? origin
      : optionsComponent(root, vue, warn)
  const program = parseModule(source)
  const s = new MagicString(source)
  const options = findOptions(program)

  // The global data handler applies to the items without their own
  const globalHandler = root.dataSource?.dataHandler
  const dataSource = withGlobalDataHandler(
    (root.dataSource?.list ?? []) as object[],
    globalHandler,
  )
  for (const item of dataSource as {
    id?: string
    options?: { uri?: unknown }
  }[]) {
    const uri = item.options?.uri
    // Relative to the designer before, to the generated app now
    if (typeof uri === 'string' && !/^([a-z][\w+.-]*:)?\/\//i.test(uri)) {
      warn(
        `Data source "${item.id}" requests "${uri}" relative to the generated app`,
      )
    }
  }
  const usesContext =
    dataSource.length > 0 ||
    input.templateUsesContext ||
    CONTEXT_USE.test(source)

  const imports: string[] = []
  const statements: string[] = []
  const byLibrary = new Map<string, string[]>()
  for (const { importFrom, sub, tag } of components.values()) {
    if (!importFrom) continue
    if (importFrom.imported === 'default') {
      imports.push(`import ${importFrom.local} from '${importFrom.source}'`)
    } else {
      const specifier =
        importFrom.imported === importFrom.local
          ? importFrom.local
          : `${importFrom.imported} as ${importFrom.local}`
      const list = byLibrary.get(importFrom.source) ?? []
      if (!list.includes(specifier)) list.push(specifier)
      byLibrary.set(importFrom.source, list)
    }
    if (sub) statements.push(`const ${tag} = ${sub}`)
  }
  imports.unshift(
    ...[...byLibrary].map(
      ([lib, names]) => `import { ${names.join(', ')} } from '${lib}'`,
    ),
  )

  if (!options) {
    warn(
      `The component of ${root.fileName} is not an object literal: components are not registered`,
    )
  } else {
    const additions: string[] = []
    if (components.size) {
      const existing = findProperty(options, 'components')
      const names = [...components.keys()].join(', ')
      if (existing && existing.value.type === 'ObjectExpression') {
        const props = existing.value.properties as AstNode[]
        if (props.length)
          s.appendLeft(props[props.length - 1].end, `, ${names}`)
        else
          s.overwrite(existing.value.start, existing.value.end, `{ ${names} }`)
      } else {
        additions.push(`components: { ${names} }`)
      }
    }
    if (usesContext) {
      const existing = findProperty(options, 'mixins')
      if (existing && existing.value.type === 'ArrayExpression') {
        s.appendLeft(existing.value.start + 1, 'lowcode.mixin, ')
      } else {
        additions.push('mixins: [lowcode.mixin]')
      }
      const setupFn = findProperty(options, 'setup')?.value
      if (setupFn?.body) rewriteSetupContext(s, setupFn.body, 'lowcode')
      const config = dataSource.length ? dataSourceCode(dataSource) : ''
      const helpers = [
        'createPageContext',
        ...(config.includes('expression(') ? ['expression'] : []),
      ]
      imports.push(
        `import { ${helpers.join(', ')} } from '${input.contextImport}'`,
      )
      statements.push(
        `const lowcode = createPageContext(${config ? `{ dataSource: ${config} }` : ''})`,
      )
    }
    if (additions.length) {
      s.appendRight(options.start + 1, `\n  ${additions.join(',\n  ')},`)
    }
  }

  const lastImport = (program.body as AstNode[])
    .filter((n) => n.type === 'ImportDeclaration')
    .pop()
  const header = [
    ...imports,
    ...(statements.length ? ['', ...statements] : []),
  ].join('\n')
  if (header) {
    if (lastImport) s.appendRight(lastImport.end, `\n${header}`)
    else s.prepend(`${header}\n\n`)
  }
  return { script: s.toString(), usesContext }
}

import type { ComponentResolver, ResolvedComponent } from './components'
import { templateExpression } from './expression'
import { APP_DIRECTIVES } from './project'
import type { VueVersion } from './types'
import {
  isI18nData,
  isJSExpression,
  isJSFunction,
  isJSSlot,
  isPlainObject,
  toCode,
} from './value'

interface NodeSchema {
  componentName: string
  props?: Record<string, unknown>
  children?: unknown
  condition?: unknown
  loop?: unknown
  loopArgs?: [string?, string?]
}

export interface TemplateResult {
  template: string
  /** Components the template uses, by tag. */
  components: Map<string, ResolvedComponent>
  /** Whether the template uses the page context (i18n, utils, ...). */
  usesContext: boolean
  /** Directives the generated app registers (see `APP_DIRECTIVES`). */
  directives: Set<string>
}

const INDENT = '  '
const BUILTIN_DIRECTIVES = ['v-show', 'v-html', 'v-text', 'v-model', 'v-once']
const CONTEXT_REFERENCE =
  /\b(i18n|utils|constants|dataSourceMap|reloadDataSource)\b/
/** `this.<method>.apply(...)` handlers written by the event binding dialog. */
const BOUND_HANDLER =
  /^function\s*\(\s*\)\s*\{\s*return\s+this\.([\w$]+)\.apply\(\s*this\s*,\s*Array\.prototype\.slice\.call\(\s*arguments\s*\)\.concat\(\[([\s\S]*)\]\)\s*\)\s*;?\s*\}$/

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

function escapeText(text: string) {
  if (text.includes('{{')) return `{{ ${JSON.stringify(text)} }}`
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
}

const lowerFirst = (value: string) => value[0].toLowerCase() + value.slice(1)
const camelize = (value: string) =>
  value.replace(/-(\w)/g, (_, char: string) => char.toUpperCase())

/** Node children: text, nodes and expressions (as the renderer reads them). */
function isNodeData(value: unknown): boolean {
  if (Array.isArray(value)) return value.every(isNodeData)
  return (
    typeof value === 'string' ||
    isJSExpression(value) ||
    (isPlainObject(value) && typeof value.componentName === 'string')
  )
}

export class TemplateBuilder {
  private readonly components = new Map<string, ResolvedComponent>()
  private usesContext = false
  private readonly directives = new Set<string>()

  constructor(
    private readonly resolver: ComponentResolver,
    private readonly vue: VueVersion,
    private readonly warn: (message: string) => void,
  ) {}

  private expr(code: string) {
    const result = templateExpression(code)
    if (result === null) {
      this.warn(`Expression "${code}" does not parse; kept as is`)
      return code
    }
    if (CONTEXT_REFERENCE.test(result)) this.usesContext = true
    return result
  }

  private value(value: unknown) {
    const code = toCode(value, {
      expression: (code) => this.expr(code),
      fn: (code) => this.expr(code),
    })
    if (isI18nData(value) || CONTEXT_REFERENCE.test(code))
      this.usesContext = true
    return code
  }

  private resolve(componentName: string) {
    const resolved = this.resolver.resolve(componentName)
    if (!resolved) {
      this.warn(
        `Component "${componentName}" has no import: it is not in the material manifests`,
      )
      return { tag: componentName }
    }
    if (resolved.importFrom) this.components.set(resolved.tag, resolved)
    return resolved
  }

  /** Attributes and slot templates of the props. */
  private props(props: Record<string, unknown>, depth: number) {
    const attrs: string[] = []
    const slots: string[] = []
    for (const [key, value] of Object.entries(props)) {
      if (key.startsWith('__')) continue
      if (key === 'children' && (isNodeData(value) || isJSSlot(value))) continue
      let name = key === 'className' ? 'class' : key
      // A v-model of a literal value is a plain prop, as in the renderer
      if (name.startsWith('v-model') && !isJSExpression(value)) {
        const arg = name.match(/^v-model:([\w-]+)$/)?.[1]
        name = arg
          ? lowerFirst(camelize(arg))
          : this.vue === 3
            ? 'modelValue'
            : 'value'
      }
      if (isJSSlot(value)) {
        // A slot without content is not passed (the renderer skips it)
        if (value.value) slots.push(this.slot(name, value, depth))
      } else if (name.startsWith('v-')) {
        const directive = name.split(':')[0].split('.')[0]
        if (directive in APP_DIRECTIVES) {
          this.directives.add(directive)
        } else if (!BUILTIN_DIRECTIVES.includes(directive)) {
          this.warn(
            `Directive "${directive}" must be registered in the generated app`,
          )
        }
        attrs.push(`${name}="${escapeAttr(this.value(value))}"`)
      } else if (/^on[A-Z]/.test(name) && isJSFunction(value)) {
        // onUpdateXxx / onUpdate:xxx listen to update:xxx
        const update = name.match(/^onUpdate:?([\w-]+)$/)?.[1]
        const event = update
          ? `update:${lowerFirst(camelize(update))}`
          : lowerFirst(name.slice(2))
        attrs.push(`@${event}="${escapeAttr(this.handler(value.value))}"`)
      } else if (typeof value === 'string' && name !== 'ref') {
        attrs.push(`${name}="${escapeAttr(value)}"`)
      } else if (name === 'ref' && typeof value === 'string') {
        attrs.push(`ref="${escapeAttr(value)}"`)
      } else {
        attrs.push(`:${name}="${escapeAttr(this.value(value))}"`)
      }
    }
    return { attrs, slots }
  }

  private handler(code: string) {
    const bound = BOUND_HANDLER.exec(code.trim())
    if (!bound) return this.expr(code)
    const [, method, params] = bound
    return params.trim()
      ? `(...args) => ${method}(...args, ${this.expr(params.trim())})`
      : method
  }

  private slot(
    name: string,
    slot: { value?: unknown; params?: string[] },
    depth: number,
  ) {
    const pad = INDENT.repeat(depth)
    const scope = slot.params?.[0] ? `="${slot.params[0]}"` : ''
    const slotName = name === 'children' ? 'default' : name
    const children = this.children(slot.value, depth + 1)
    return children.length
      ? `${pad}<template #${slotName}${scope}>\n${children.join('\n')}\n${pad}</template>`
      : `${pad}<template #${slotName}${scope} />`
  }

  /** Lines of the children at `depth`. */
  children(children: unknown, depth: number): string[] {
    if (children === undefined || children === null || children === '')
      return []
    const list = Array.isArray(children) ? children : [children]
    return list.map((child) => this.node(child, depth)).filter(Boolean)
  }

  node(node: unknown, depth: number): string {
    const pad = INDENT.repeat(depth)
    if (typeof node === 'string') return pad + escapeText(node)
    if (typeof node === 'number' || typeof node === 'boolean')
      return pad + String(node)
    if (isJSExpression(node) || isI18nData(node))
      return `${pad}{{ ${this.value(node)} }}`
    if (!isPlainObject(node) || typeof node.componentName !== 'string')
      return ''
    const schema = node as unknown as NodeSchema
    if (schema.condition === false) return ''

    const props = schema.props ?? {}
    // A children prop overrides the node children, as in the renderer
    const children = isNodeData(props.children)
      ? props.children
      : schema.children
    if (schema.componentName === 'Leaf')
      return this.children(children, depth).join('\n')

    const { tag } = this.resolve(schema.componentName)
    const directives: string[] = []
    const hasCondition =
      schema.condition !== undefined && schema.condition !== true
    const hasLoop = schema.loop !== undefined && schema.loop !== null
    const condition = hasCondition ? this.value(schema.condition) : ''
    if (hasLoop) {
      const [item = 'item', index = 'index'] = schema.loopArgs ?? []
      directives.push(
        `v-for="(${item}, ${index}) in ${escapeAttr(this.value(schema.loop))}"`,
      )
      directives.push(`:key="${index}"`)
    } else if (hasCondition) {
      directives.push(`v-if="${escapeAttr(condition)}"`)
    }

    const innerDepth = hasLoop && hasCondition ? depth + 1 : depth
    const innerPad = INDENT.repeat(innerDepth)
    const { attrs, slots } = this.props(props, innerDepth + 1)
    const open = [tag, ...directives, ...attrs].join(' ')
    const body = [...this.children(children, innerDepth + 1), ...slots]
    let element: string
    if (body.length === 0) {
      element = `${innerPad}<${open} />`
    } else if (
      body.length === 1 &&
      !body[0].includes('\n') &&
      !body[0].trim().startsWith('<')
    ) {
      element = `${innerPad}<${open}>${body[0].trim()}</${tag}>`
    } else {
      element = `${innerPad}<${open}>\n${body.join('\n')}\n${innerPad}</${tag}>`
    }
    // The condition is evaluated before the loop, in the outer scope
    return hasLoop && hasCondition
      ? `${pad}<template v-if="${escapeAttr(condition)}">\n${element}\n${pad}</template>`
      : element
  }

  /** Template of a root (Page, Block, Component). */
  root(root: NodeSchema & { props?: Record<string, unknown> }): TemplateResult {
    const children = this.children(root.children, 2)
    let body: string
    if (root.componentName === 'Page') {
      const className = ['lc-page', root.props?.className]
        .filter((c) => typeof c === 'string' && c)
        .join(' ')
      body = children.length
        ? `  <div class="${className}" style="height: 100%">\n${children.join('\n')}\n  </div>`
        : `  <div class="${className}" style="height: 100%" />`
    } else if (this.vue === 2 || children.length !== 1) {
      // Vue 2 needs one root element
      body =
        this.vue === 2
          ? `  <div>\n${children.join('\n')}\n  </div>`
          : this.children(root.children, 1).join('\n')
    } else {
      body = this.children(root.children, 1).join('\n')
    }
    return {
      template: `<template>\n${body}\n</template>`,
      components: this.components,
      usesContext: this.usesContext,
      directives: this.directives,
    }
  }
}

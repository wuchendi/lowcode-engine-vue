import type { SchemaSlot } from '@cdlab996/lowcode-vue-core/schema'
import {
  eventNameOf,
  isEventKey,
  loopArgsOf,
  modelOf,
  splitNodeSchema,
} from '@cdlab996/lowcode-vue-core/schema'
import type { ComponentResolver, ResolvedComponent } from './components'
import { templateExpression } from './expression'
import { APP_DIRECTIVES } from './project'
import type { VueVersion } from './types'
import {
  isI18nData,
  isJSExpression,
  isJSFunction,
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

/**
 * Whether child lines include text or an interpolation: whitespace next to
 * text renders as a space, so such children are written on one line.
 */
const hasText = (lines: string[]) =>
  lines.some((line) => !line.trim().startsWith('<'))
const inline = (lines: string[]) => lines.map((line) => line.trim()).join('')

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

  /** Attributes and slot templates of a node (see `splitNodeSchema`). */
  private props(node: NodeSchema, depth: number) {
    const split = splitNodeSchema(node)
    const attrs: string[] = []
    for (const [key, value] of Object.entries(split.props)) {
      if (key.startsWith('__')) continue
      const model = modelOf(key)
      // A v-model of a literal value is a plain prop
      const name =
        model && !isJSExpression(value)
          ? (model.arg ?? (this.vue === 3 ? 'modelValue' : 'value'))
          : key
      if (model?.arg && name === key && this.vue === 2) {
        // Vue 2 has no v-model arguments: `.sync` listens to update:<arg>
        attrs.push(`:${model.arg}.sync="${escapeAttr(this.value(value))}"`)
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
      } else if (isEventKey(name) && isJSFunction(value)) {
        attrs.push(
          `@${eventNameOf(name)}="${escapeAttr(this.handler(value.value))}"`,
        )
      } else if (typeof value === 'string') {
        attrs.push(`${name}="${escapeAttr(value)}"`)
      } else {
        attrs.push(`:${name}="${escapeAttr(this.value(value))}"`)
      }
    }
    const slots = Object.entries(split.slots).map(([name, slot]) =>
      this.slot(name, slot, depth),
    )
    return { attrs, slots, children: split.children }
  }

  private handler(code: string) {
    const bound = BOUND_HANDLER.exec(code.trim())
    if (!bound) return this.expr(code)
    const [, method, params] = bound
    return params.trim()
      ? `(...args) => ${method}(...args, ${this.expr(params.trim())})`
      : method
  }

  private slot(name: string, slot: SchemaSlot, depth: number) {
    const pad = INDENT.repeat(depth)
    const scope = slot.params?.[0] ? `="${slot.params[0]}"` : ''
    const children = this.children(slot.children, depth + 1)
    return children.length
      ? `${pad}<template #${name}${scope}>\n${children.join('\n')}\n${pad}</template>`
      : `${pad}<template #${name}${scope} />`
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

    if (schema.componentName === 'Leaf')
      return this.children(splitNodeSchema(schema).children, depth).join('\n')

    const { tag } = this.resolve(schema.componentName)
    const directives: string[] = []
    const hasCondition =
      schema.condition !== undefined && schema.condition !== true
    const hasLoop = schema.loop !== undefined && schema.loop !== null
    const condition = hasCondition ? this.value(schema.condition) : ''
    if (hasLoop) {
      const [item, index] = loopArgsOf(schema)
      directives.push(
        `v-for="(${item}, ${index}) in ${escapeAttr(this.value(schema.loop))}"`,
      )
      directives.push(`:key="${index}"`)
    } else if (hasCondition) {
      directives.push(`v-if="${escapeAttr(condition)}"`)
    }

    const innerDepth = hasLoop && hasCondition ? depth + 1 : depth
    const innerPad = INDENT.repeat(innerDepth)
    const { attrs, slots, children } = this.props(schema, innerDepth + 1)
    const open = [tag, ...directives, ...attrs].join(' ')
    const body = [...this.children(children, innerDepth + 1), ...slots]
    let element: string
    if (body.length === 0) {
      element = `${innerPad}<${open} />`
    } else if (hasText(body)) {
      element = `${innerPad}<${open}>${inline(body)}</${tag}>`
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
      const open = `<div class="${className}" style="height: 100%">`
      body = !children.length
        ? `  <div class="${className}" style="height: 100%" />`
        : hasText(children)
          ? `  ${open}${inline(children)}</div>`
          : `  ${open}\n${children.join('\n')}\n  </div>`
    } else if (this.vue === 2 || children.length !== 1) {
      // Vue 2 needs one root element
      const top = this.children(root.children, 1)
      body =
        this.vue === 2
          ? hasText(children)
            ? `  <div>${inline(children)}</div>`
            : `  <div>\n${children.join('\n')}\n  </div>`
          : hasText(top)
            ? `  ${inline(top)}`
            : top.join('\n')
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

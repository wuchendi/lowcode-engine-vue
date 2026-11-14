/**
 * How a node schema is read: shared by the renderer and the code generator
 * (`@cdlab996/lowcode-vue-core/schema`), so the canvas, the preview and the
 * generated code agree. Pure functions, no Vue import.
 */

interface Typed {
  type?: unknown
}

const isTyped = (value: unknown, type: string) =>
  !!value && typeof value === 'object' && (value as Typed).type === type

/** A node schema: an object with a `componentName`. */
export const isNodeSchemaLike = (
  value: unknown,
): value is { componentName: string } =>
  !!value &&
  typeof value === 'object' &&
  !Array.isArray(value) &&
  typeof (value as { componentName?: unknown }).componentName === 'string'

/** Node children: text, node schemas, expressions, or arrays of them. */
export function isNodeData(value: unknown): boolean {
  if (Array.isArray(value)) return value.every(isNodeData)
  return (
    typeof value === 'string' ||
    isTyped(value, 'JSExpression') ||
    isNodeSchemaLike(value)
  )
}

export interface SchemaSlot {
  params?: string[]
  /** The slot content (`JSSlot.value`). */
  children: unknown
}

export interface SplitNode {
  /** Component props (`className` as `class`). */
  props: Record<string, unknown>
  /** Named slots from the `JSSlot` props with content. */
  slots: Record<string, SchemaSlot>
  /** Default slot content: the `children` prop if it is node data, else the node children. */
  children: unknown[]
}

const toArray = (value: unknown): unknown[] =>
  value === undefined || value === null
    ? []
    : Array.isArray(value)
      ? value
      : [value]

/**
 * Splits a node schema into props, named slots and default children:
 * - a `JSSlot` prop with content is a named slot (`children`: the default
 *   one); one without is left out
 * - a `children` prop that is node data replaces the node children
 * - `className` is `class`
 */
export function splitNodeSchema(schema: {
  props?: Record<string, unknown>
  children?: unknown
}): SplitNode {
  const props: Record<string, unknown> = {}
  const slots: Record<string, SchemaSlot> = {}
  let children = toArray(schema.children)
  for (const [key, value] of Object.entries(schema.props ?? {})) {
    if (isTyped(value, 'JSSlot')) {
      const slot = value as { value?: unknown; params?: string[] }
      // A `children` slot is the default slot
      const name = key === 'children' ? 'default' : key
      if (slot.value)
        slots[name] = { params: slot.params, children: slot.value }
    } else if (key === 'className') {
      props.class = value
    } else if (key === 'children' && isNodeData(value)) {
      children = toArray(value)
    } else {
      props[key] = value
    }
  }
  return { props, slots, children: slots.default ? [] : children }
}

const camelize = (value: string) =>
  value.replace(/-(\w)/g, (_, char: string) => char.toUpperCase())
const lowerFirst = (value: string) =>
  value ? value[0].toLowerCase() + value.slice(1) : value

/** Whether a prop key is an event handler (`onClick`, `onUpdate:value`). */
export const isEventKey = (key: string) => /^on[A-Z]/.test(key)

/**
 * The handler key of an event prop: `onUpdateXxx` and `onUpdate:xxx` are
 * `onUpdate:xxx` (the handler of the `update:xxx` event).
 */
export function normalizeEventKey(key: string): string {
  const update = key.match(/^onUpdate:?([\w-]+)$/)?.[1]
  return update ? `onUpdate:${lowerFirst(camelize(update))}` : key
}

/** The event an event prop listens to: `onClick` -> `click`, `onUpdate:value` -> `update:value`. */
export function eventNameOf(key: string): string {
  const normalized = normalizeEventKey(key)
  return normalized.startsWith('onUpdate:')
    ? normalized.slice(2).replace(/^U/, 'u')
    : lowerFirst(normalized.slice(2))
}

/**
 * The model of a `v-model` prop key: `{ arg }` for `v-model:arg` (camelized),
 * `{}` for `v-model` (the component's default model), `null` otherwise.
 */
export function modelOf(key: string): { arg?: string } | null {
  const matched = key.match(/^v-model(?::([\w-]+))?$/)
  if (!matched) return null
  return matched[1] ? { arg: lowerFirst(camelize(matched[1])) } : {}
}

/** Loop item and index names (`item`, `index` by default). */
export function loopArgsOf(schema: { loopArgs?: unknown }): [string, string] {
  const args: [string, string] = ['item', 'index']
  if (Array.isArray(schema.loopArgs)) {
    schema.loopArgs.forEach((name, index) => {
      if (index < 2 && typeof name === 'string' && name) args[index] = name
    })
  }
  return args
}

/** Data source items with the global `dataHandler` applied to those without their own. */
export function withGlobalDataHandler<T extends object>(
  list: T[],
  dataHandler: unknown,
): T[] {
  return dataHandler ? list.map((item) => ({ dataHandler, ...item })) : list
}

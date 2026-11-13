import { camelize } from '@cdlab996/lowcode-vue-core'
import type { ScopedSlot, VNodeData, VNodeDirective } from 'vue/types/vnode'

type AnyComponent = unknown
type EventHandlers = NonNullable<VNodeData['on']>

const DIRECTIVE = /^v-([\w-]+)(:\w+)?((\.\w+)*)$/
const EVENT = /^on[A-Z]/
const PASS_THROUGH = ['attrs', 'domProps', 'nativeOn'] as const

/**
 * Reads an option from a component: `comp.options[name]` for a Vue.extend
 * constructor, else `comp[name]`.
 */
export function getComponentOption(comp: AnyComponent, name: string): unknown {
  if (!comp || typeof comp === 'string') return undefined
  const options =
    typeof comp === 'function'
      ? (comp as { options?: Record<string, unknown> }).options
      : undefined
  return (options ?? (comp as Record<string, unknown>))[name]
}

function getDeclaredProps(comp: AnyComponent): Set<string> {
  const declared = getComponentOption(comp, 'props')
  if (!declared) return new Set()
  const names = Array.isArray(declared) ? declared : Object.keys(declared)
  return new Set(names.map((name: string) => camelize(name)))
}

// Shape kept from the original adapter: `arg` keeps its leading colon and the
// modifiers live under `directives`.
interface NormalizedDirective extends VNodeDirective {
  rawName: string
  directives: Record<string, boolean>
}

function toDirective(key: string, value: unknown): NormalizedDirective {
  const match = key.match(DIRECTIVE)!
  return {
    name: match[1],
    rawName: key,
    value,
    arg: match[2],
    directives: (match[3] || '')
      .split('.')
      .filter((s) => !!s)
      .reduce(
        (p, c) => {
          p[c] = true
          return p
        },
        {} as Record<string, boolean>,
      ),
  }
}

/**
 * Converts the renderer's flat, Vue 3 style props into Vue 2 VNodeData.
 *
 * - `key` / `ref` / `class` / `style` map to the same-named fields;
 * - keys declared as props by `comp` map to `props`;
 * - `onXxx` / `onUpdate:xxx` map to `on` (`xxx` / `update:xxx`);
 * - `v-xxx[:arg][.mod]` keys map to `directives`;
 * - everything else maps to `attrs`, except functions and non-null objects
 *   which are never written as DOM attributes;
 * - plain-object `attrs` / `domProps` / `nativeOn` merge into the same-named
 *   fields, winning over generated entries;
 * - every slot (including `default`) maps to `scopedSlots`, marked as
 *   `proxy` so it is exposed on `$slots` as well.
 */
export function toVNodeData(
  comp: AnyComponent,
  flatProps: Record<string, unknown>,
  slots?: Record<string, ScopedSlot | undefined>,
): VNodeData {
  const declared = getDeclaredProps(comp)
  const on: EventHandlers = {}
  const props: Record<string, unknown> = {}
  const attrs: Record<string, unknown> = {}
  const directives: VNodeDirective[] = []
  const data: VNodeData = { on, props, attrs, directives }

  Object.keys(flatProps).forEach((key) => {
    const value = flatProps[key]
    // Always VNodeData pass-through, even if the component declares the prop
    if ((PASS_THROUGH as readonly string[]).includes(key)) return
    if (key === 'key' || key === 'ref' || key === 'class' || key === 'style') {
      ;(data as Record<string, unknown>)[key] = value
    } else if (declared.has(camelize(key))) {
      // A declared prop wins over the event and directive conventions
      props[camelize(key)] = value
    } else if (EVENT.test(key)) {
      const name = key.slice(2)
      on[name[0].toLowerCase() + name.slice(1)] = value as EventHandlers[string]
    } else if (DIRECTIVE.test(key)) {
      directives.push(toDirective(key, value))
    } else if (
      typeof value !== 'function' &&
      (value === null || typeof value !== 'object')
    ) {
      attrs[key] = value
    }
  })

  PASS_THROUGH.forEach((key) => {
    const value = flatProps[key]
    if (Object.prototype.toString.call(value) === '[object Object]') {
      data[key] = { ...data[key], ...(value as Record<string, never>) }
    }
  })

  if (slots) {
    const scopedSlots: Record<string, ScopedSlot> = {}
    Object.keys(slots).forEach((name) => {
      const slot = slots[name]
      if (typeof slot === 'function') {
        // Proxied scoped slots are also exposed on `$slots` by Vue 2.
        ;(slot as ScopedSlot & { proxy?: boolean }).proxy = true
        scopedSlots[name] = slot
      }
    })
    if (Object.keys(scopedSlots).length > 0) {
      data.scopedSlots = scopedSlots
    }
  }

  return data
}

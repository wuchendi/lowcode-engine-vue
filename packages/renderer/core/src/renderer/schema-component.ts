import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import { defineComponent } from 'vue'
import type { VueComponent } from '../adapter'
import {
  evaluateExpression,
  isFunction,
  isPlainObject,
  isString,
} from '../shared'

type PropOption = Record<string, unknown> | null

export interface DeclaredOptions {
  props: Record<string, PropOption>
  emits: string[]
}

function evaluateOption(value: unknown): unknown {
  if (!isPlainObject(value)) return undefined
  const { type, value: source } = value as { type?: string; value?: unknown }
  if ((type !== 'JSExpression' && type !== 'JSFunction') || !isString(source)) {
    return undefined
  }
  try {
    return evaluateExpression(source)
  } catch {
    // an invalid declaration declares nothing
    return undefined
  }
}

/**
 * Props and emits a schema declares with `initProps` / `initEmits` (array of
 * names or options object, as in a Vue component).
 */
export function declaredOptions(
  schema: Pick<IPublicTypeRootSchema, 'lifeCycles'>,
): DeclaredOptions {
  const lifeCycles = (schema.lifeCycles ?? {}) as Record<string, unknown>
  const props: Record<string, PropOption> = {}
  const rawProps = evaluateOption(lifeCycles.initProps)
  if (Array.isArray(rawProps)) {
    for (const name of rawProps) if (isString(name)) props[name] = null
  } else if (isPlainObject(rawProps)) {
    for (const [name, opt] of Object.entries(rawProps)) {
      props[name] = isPlainObject(opt)
        ? opt
        : isFunction(opt) || Array.isArray(opt)
          ? { type: opt }
          : null
    }
  }
  const rawEmits = evaluateOption(lifeCycles.initEmits)
  const emits = Array.isArray(rawEmits)
    ? rawEmits.filter(isString)
    : isPlainObject(rawEmits)
      ? Object.keys(rawEmits)
      : []
  return { props, emits }
}

const cache = new WeakMap<object, Map<string, VueComponent>>()

/**
 * The container renderer for a schema: `base` itself, or a component that
 * also declares the schema's props and emits, so Vue handles them like the
 * props and emits of any component. Cached per schema declaration.
 */
export function schemaComponent(
  base: VueComponent,
  schema: Pick<IPublicTypeRootSchema, 'lifeCycles' | 'id'>,
): VueComponent {
  const lifeCycles = (schema.lifeCycles ?? {}) as Record<string, unknown>
  if (!lifeCycles.initProps && !lifeCycles.initEmits) return base
  const key = JSON.stringify([
    schema.id,
    lifeCycles.initProps,
    lifeCycles.initEmits,
  ])
  let byKey = cache.get(base)
  if (!byKey) cache.set(base, (byKey = new Map()))
  const cached = byKey.get(key)
  if (cached) return cached

  const { props, emits } = declaredOptions(schema)
  // Vue 2 caches the constructor on the options object (`_Ctor`): leave it
  // out, or the derived component would reuse the base constructor
  const { _Ctor, ...options } = base as Record<string, unknown>
  const derived = defineComponent({
    ...options,
    props: { ...(options.props as object), ...props },
    emits,
  } as never) as VueComponent
  byKey.set(key, derived)
  return derived
}

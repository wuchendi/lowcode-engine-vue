import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import type { Ref } from 'vue'
import { computed, inject, provide, unref, watch } from 'vue'
import {
  isFunction,
  isObject,
  isPlainObject,
  isPromise,
  isString,
  parseSchema,
} from '../../shared'
import type { RuntimeScope } from '../scope'

type Callback = (...args: any[]) => any

/** Parsed `lifeCycles` of a container schema: functions bound to the scope. */
export type SchemaHooks = Record<string, Callback | undefined> & {
  /** Raw (unparsed) values of the `init*` option hooks. */
  options: Record<string, unknown>
}

/**
 * Option-style hooks: their value is an option object, not a callback.
 * `initProps` and `initEmits` are applied when the schema's component is
 * defined (see schema-component.ts).
 */
const OPTION_HOOKS = [
  'initModule',
  'initProps',
  'initEmits',
  'initData',
  'initComputed',
  'initWatch',
  'initProvide',
  'initInject',
]

export function parseHooks(
  lifeCycles: IPublicTypeRootSchema['lifeCycles'],
  scope: RuntimeScope,
): SchemaHooks {
  const hooks = { options: {} } as SchemaHooks
  if (!isObject(lifeCycles)) return hooks
  for (const [name, value] of Object.entries(lifeCycles)) {
    const parsed = parseSchema(value, scope)
    if (OPTION_HOOKS.includes(name)) {
      hooks.options[name] = parsed
    } else if (isFunction(parsed)) {
      hooks[name] = parsed.bind(scope)
    }
  }
  return hooks
}

/** Module cache shared by every renderer on the page, keyed by schema id. */
const moduleCache: Record<string, unknown> = {}

/**
 * `initModule` evaluates to `($cached, $scope) => exports`; the exports
 * (imports of the source panel) become scope variables.
 */
export function initModule(hooks: SchemaHooks, scope: RuntimeScope): void {
  const factory = hooks.options.initModule
  if (!isFunction(factory)) return
  const exports = factory(moduleCache, window)
  if (!isObject(exports)) return
  for (const [key, value] of Object.entries(exports)) {
    if (!(key in scope)) Reflect.set(scope, key, value)
  }
}

/** Calls `setup(props, context)`; returns its bindings once available. */
export function runSetup(
  hooks: SchemaHooks,
  props: object,
  context: object,
): Record<string, unknown> | Promise<Record<string, unknown>> {
  const result = hooks.setup?.(props, context)
  if (isPromise(result)) {
    return result.then((res) => (isObject(res) ? res : {}))
  }
  return isObject(result) ? result : {}
}

/** Data returned by `initData`, merged over the schema `state`. */
export function initData(
  hooks: SchemaHooks,
  scope: RuntimeScope,
): Record<string, unknown> {
  const data = hooks.options.initData
  const value = isFunction(data) ? data.call(scope) : data
  return isPlainObject(value) ? value : {}
}

/** Computed refs to return from setup, one per `initComputed` key. */
export function initComputed(
  hooks: SchemaHooks,
  scope: RuntimeScope,
): Record<string, Ref> {
  const options = hooks.options.initComputed
  const result: Record<string, Ref> = {}
  if (!isPlainObject(options)) return result
  for (const [key, opt] of Object.entries(options)) {
    if (isFunction(opt)) {
      result[key] = computed(() => opt.call(scope))
    } else if (isPlainObject(opt) && isFunction(opt.get)) {
      const { get, set } = opt as { get: Callback; set?: Callback }
      result[key] = computed({
        get: () => get.call(scope),
        set: (v) => set?.call(scope, v),
      })
    }
  }
  return result
}

/** `inject` options; refs stay refs so they are unwrapped on the instance. */
export function initInject(hooks: SchemaHooks): Record<string, unknown> {
  const options = hooks.options.initInject
  const normalized: Record<string, unknown> = {}
  if (Array.isArray(options)) {
    for (const name of options) if (isString(name)) normalized[name] = name
  } else if (isPlainObject(options)) {
    Object.assign(normalized, options)
  }
  const result: Record<string, unknown> = {}
  for (const [key, opt] of Object.entries(normalized)) {
    if (isPlainObject(opt)) {
      const from = (opt.from ?? key) as string
      result[key] =
        'default' in opt ? inject(from, opt.default, true) : inject(from)
    } else {
      result[key] = inject(opt as string)
    }
  }
  return result
}

export function initProvide(hooks: SchemaHooks, scope: RuntimeScope): void {
  const options = hooks.options.initProvide
  const provides = isFunction(options) ? options.call(scope) : options
  if (!isObject(provides)) return
  for (const key of Reflect.ownKeys(provides)) {
    provide(key as string, Reflect.get(provides, key))
  }
}

type WatchHandler = (value: unknown, oldValue: unknown) => void

function resolveHandler(
  raw: unknown,
  scope: RuntimeScope,
): WatchHandler | null {
  if (isFunction(raw)) return raw.bind(scope)
  if (isString(raw) && isFunction(scope[raw])) return scope[raw]
  return null
}

function createWatcher(raw: unknown, scope: RuntimeScope, path: string) {
  const segments = path.split('.')
  const getter = () => {
    let cur: unknown = scope
    for (const segment of segments) {
      if (!isObject(cur)) return undefined
      cur = unref(cur[segment])
    }
    return cur
  }
  if (Array.isArray(raw)) {
    for (const item of raw) createWatcher(item, scope, path)
    return
  }
  const handler = resolveHandler(isPlainObject(raw) ? raw.handler : raw, scope)
  if (!handler) {
    console.warn(`[lowcode-vue]: invalid watch handler for "${path}"`, raw)
    return
  }
  const options = isPlainObject(raw)
    ? { deep: !!raw.deep, immediate: !!raw.immediate }
    : {}
  watch(getter, handler, options)
}

/**
 * Creates the `initWatch` watchers. Called in the created phase, when the
 * state is already reachable through the instance.
 */
export function initWatch(hooks: SchemaHooks, scope: RuntimeScope): void {
  const options = hooks.options.initWatch
  if (!isPlainObject(options)) return
  for (const [path, raw] of Object.entries(options)) {
    createWatcher(raw, scope, path)
  }
}

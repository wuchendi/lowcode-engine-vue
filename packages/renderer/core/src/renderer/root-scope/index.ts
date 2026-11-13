import type { Ref } from 'vue'
import { getCurrentInstance, isRef, ref } from 'vue'
import { getAdapter } from '../../adapter'
import { isFunction } from '../../shared'
import type { RendererProps } from '../base'
import type { RuntimeScope } from '../scope'
import { registerRuntimeScope } from '../scope'
import { useRootCss } from './css'
import { useRootDataSource } from './data-source'
import {
  initComputed,
  initData,
  initInject,
  initModule,
  initProvide,
  initWatch,
  parseHooks,
  runSetup,
} from './hooks'
import { useRootLifecycles } from './lifecycle'
import { useRootMethods } from './methods'
import { createAddToScope, useRootExtraScope } from './scope'
import type { RootData } from './state'
import { useRootState } from './state'

export { isLifecycleKey } from './lifecycle'
export { useScopeVersion } from './scope'

/** Exposes values on the scope after setup returned (async `setup`). */
function exposeLate(scope: RuntimeScope, values: Record<string, unknown>) {
  for (const [key, value] of Object.entries(values)) {
    if (isRef(value)) {
      Object.defineProperty(scope, key, {
        configurable: true,
        enumerable: true,
        get: () => value.value,
        set: (v) => (value.value = v),
      })
    } else {
      Reflect.set(scope, key, value)
    }
  }
}

/**
 * Builds the runtime scope of a page, block or component schema. Must run in
 * the renderer component's `setup`, which returns `bindings` so that state,
 * computed values and refs become reactive instance properties.
 *
 * Order follows the Vue options API: module, beforeCreate, setup,
 * inject, methods, data, computed, provide; `created` (after the watchers
 * and the initial data source load) runs once the bindings are on the
 * instance.
 */
export function useRootScope(
  rendererProps: RendererProps,
  context: { attrs: Record<string, unknown> },
): {
  scope: RuntimeScope
  bindings: RootData
  ready: Ref<boolean>
  scopeVersion: Ref<number>
} {
  const adapter = getAdapter()
  const schema = rendererProps.__schema ?? {}
  const scope = getCurrentInstance()!.proxy as unknown as RuntimeScope
  registerRuntimeScope(scope)

  const hooks = parseHooks(schema.lifeCycles, scope)
  let loadDataSource = () => {}
  // Registered before any other lifecycle hook so that it runs first
  adapter.onCreated(() => {
    initWatch(hooks, scope)
    loadDataSource()
    hooks.created?.()
  })

  initModule(hooks, scope)
  hooks.beforeCreate?.()

  const bindings: RootData = {}
  const ready = ref(true)
  // Declared props (`initProps`) are props of the renderer component
  const setupResult = runSetup(hooks, rendererProps, context)
  if (setupResult instanceof Promise) {
    ready.value = false
    setupResult.then((values) => {
      exposeLate(scope, values)
      ready.value = true
    })
  } else {
    Object.assign(bindings, setupResult)
  }

  for (const [key, value] of Object.entries(initInject(hooks))) {
    if (isRef(value) || !isFunction(value)) bindings[key] = value
    else Reflect.set(scope, key, value)
  }
  useRootMethods(schema.methods, scope)
  Object.assign(bindings, useRootState(schema.state, initData(hooks, scope)))
  Object.assign(bindings, initComputed(hooks, scope))
  initProvide(hooks, scope)
  useRootLifecycles(hooks)
  useRootCss(rendererProps)

  const addToScope = createAddToScope(scope, bindings)
  const scopeVersion = useRootExtraScope(rendererProps, addToScope)
  loadDataSource = useRootDataSource(
    rendererProps,
    scope,
    bindings,
    addToScope.add,
  )

  rendererProps.__onRuntimeScope?.(scope)
  return { scope, bindings, ready, scopeVersion }
}

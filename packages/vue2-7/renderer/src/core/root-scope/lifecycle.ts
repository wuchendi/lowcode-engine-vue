import type { IPublicTypeRootSchema } from '@alilc/lowcode-types'
import type Vue from 'vue'
import {
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
} from 'vue'
import type VueRouter from 'vue-router'
import type { Route, RouteRecord } from 'vue-router'
import type { RuntimeScope } from '../../utils'
import { isObject, parseSchema } from '../../utils'

export const VUE_LIFTCYCLES_MAP = {
  beforeMount: onBeforeMount,
  mounted: onMounted,
  beforeUpdate: onBeforeUpdate,
  updated: onUpdated,
  activated: onActivated,
  deactivated: onDeactivated,
  beforeUnmount: onBeforeUnmount,
  unmounted: onUnmounted,
  beforeDestroy: onBeforeUnmount,
  destroyed: onUnmounted,
  errorCaptured: onErrorCaptured,
  renderTracked: onRenderTracked,
  renderTriggered: onRenderTriggered,
  serverPrefetch: onServerPrefetch,
}

// 适配 react lifecycle
export const REACT_ADATPOR_LIFTCYCLES_MAP = {
  componentDidMount: onMounted,
  componentDidCatch: onErrorCaptured,
  shouldComponentUpdate: onBeforeUpdate,
  componentWillUnmount: onBeforeUnmount,
}

export const LIFTCYCLES_MAP = {
  ...VUE_LIFTCYCLES_MAP,
  ...REACT_ADATPOR_LIFTCYCLES_MAP,
}

// Vue 2 names without a composition hook, handled in useRootLifecycles
const SETUP_LIFTCYCLES = ['beforeCreate', 'created'] as const
type SetupLifecycle = (typeof SETUP_LIFTCYCLES)[number]

export function isLifecycleKey(
  key: string,
): key is keyof typeof LIFTCYCLES_MAP | SetupLifecycle {
  return (
    key in LIFTCYCLES_MAP ||
    (SETUP_LIFTCYCLES as readonly string[]).includes(key)
  )
}

type RouteGuard = (to: Route, from: Route, next: () => void) => unknown

function findPageRecord(matched: RouteRecord[], vm: Vue | null) {
  for (let cur = vm; cur; cur = cur.$parent) {
    const record = matched.find((r) => r.instances.default === cur)
    if (record) return record
  }
}

/**
 * Registers schema route guards through `router.beforeEach` instead of
 * mutating the route component's constructor options; the guard is removed
 * when the page unmounts. `beforeRouteEnter` is not supported: the page is
 * set up after the navigation that renders it has been confirmed, so it can
 * never fire for that navigation.
 */
function useRouteGuards(
  guards: { beforeRouteUpdate?: RouteGuard; beforeRouteLeave?: RouteGuard },
  scope: RuntimeScope,
) {
  const router = scope.$router as VueRouter | undefined
  if (!router || (!guards.beforeRouteUpdate && !guards.beforeRouteLeave)) {
    return
  }
  const vm = scope as unknown as Vue
  const unregister = router.beforeEach((to, from, next) => {
    const record = findPageRecord(from.matched, vm)
    const callback =
      record &&
      (to.matched.includes(record)
        ? guards.beforeRouteUpdate
        : guards.beforeRouteLeave)
    if (callback) {
      callback.call(scope, to, from, next)
    } else {
      next()
    }
  })
  onBeforeUnmount(unregister)
}

export function useRootLifecycles(
  lifeCyclesSchema: IPublicTypeRootSchema['lifeCycles'],
  scope: RuntimeScope,
) {
  // 处理 lifecycle
  const lifeCycles = parseSchema(lifeCyclesSchema, scope) as
    | Record<string, ((...args: any[]) => any) | undefined>
    | undefined
  let created: (() => unknown) | undefined
  if (isObject(lifeCycles)) {
    Object.keys(lifeCycles).forEach((lifeCycle) => {
      const callback = lifeCycles[lifeCycle]
      if (typeof callback !== 'function') return
      if (lifeCycle === 'beforeCreate') {
        callback.call(scope)
      } else if (lifeCycle === 'created') {
        created = callback
      } else if (lifeCycle in LIFTCYCLES_MAP) {
        const hook = LIFTCYCLES_MAP[lifeCycle as keyof typeof LIFTCYCLES_MAP]
        hook(callback)
      }
    })
    useRouteGuards(
      {
        beforeRouteUpdate:
          typeof lifeCycles.beforeRouteUpdate === 'function'
            ? lifeCycles.beforeRouteUpdate
            : undefined,
        beforeRouteLeave:
          typeof lifeCycles.beforeRouteLeave === 'function'
            ? lifeCycles.beforeRouteLeave
            : undefined,
      },
      scope,
    )
  }
  return {
    /**
     * Schedules the schema `created` callback. Setup bindings (state) are only
     * proxied onto the instance after setup returns, so the callback is queued
     * on this instance's own `created` hooks (a fresh per-instance array, the
     * constructor options are untouched), which Vue 2 calls right after setup.
     */
    runCreated: () => {
      if (!created) return
      const callback = created
      const options = (scope as unknown as Vue).$options as {
        created?: Array<() => void>
      }
      options.created = [...(options.created ?? []), () => callback.call(scope)]
    },
  }
}

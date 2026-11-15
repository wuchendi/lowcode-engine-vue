import {
  getCurrentInstance,
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
import type { ComponentInstance, RouteGuard } from '../../adapter'
import type { SchemaHooks } from './hooks'

type Callback = (...args: any[]) => any

const VUE_LIFECYCLES: Record<string, (hook: Callback) => void> = {
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
  // React names used by schemas written for the React renderer
  componentDidMount: onMounted,
  componentDidCatch: onErrorCaptured,
  shouldComponentUpdate: onBeforeUpdate,
  componentWillUnmount: onBeforeUnmount,
}

/** Lifecycle names a schema can use. */
export function isLifecycleKey(key: string): boolean {
  return key in VUE_LIFECYCLES || key === 'beforeCreate' || key === 'created'
}

/** The router as both vue-router 3 and 4 / 5 expose it on an instance. */
interface RouteRecordLike {
  instances: Record<string, unknown>
}
interface RouteLike {
  matched: RouteRecordLike[]
}
interface RouterLike {
  beforeEach(
    guard: (to: RouteLike, from: RouteLike, next: () => void) => void,
  ): () => void
}

function findPageRecord(
  matched: RouteRecordLike[],
  instance: ComponentInstance | null,
) {
  for (let cur = instance; cur; cur = cur.$parent) {
    const record = matched.find((r) => r.instances.default === cur)
    if (record) return record
  }
}

/**
 * Route guards of the page: `$router.beforeEach` on the route record that
 * renders it (the same API in both vue-router lines; the composition guards
 * of vue-router 4 would import vue-router into the renderer).
 */
function useRouteGuards(guards: {
  beforeRouteUpdate?: RouteGuard
  beforeRouteLeave?: RouteGuard
}) {
  const proxy = (getCurrentInstance()?.proxy ??
    null) as ComponentInstance | null
  const router = (proxy as { $router?: RouterLike } | null)?.$router
  if (!proxy || !router) return
  const unregister = router.beforeEach((to, from, next) => {
    const record = findPageRecord(from.matched, proxy)
    const callback =
      record &&
      (to.matched.includes(record)
        ? guards.beforeRouteUpdate
        : guards.beforeRouteLeave)
    if (callback) callback.call(proxy, to, from, next)
    else next()
  })
  onBeforeUnmount(unregister)
}

/** Registers the schema's mount/update/unmount hooks and route guards. */
export function useRootLifecycles(hooks: SchemaHooks): void {
  for (const [name, register] of Object.entries(VUE_LIFECYCLES)) {
    const callback = hooks[name]
    if (callback) register(callback)
  }
  const { beforeRouteUpdate, beforeRouteLeave } = hooks
  if (beforeRouteUpdate || beforeRouteLeave) {
    useRouteGuards({
      beforeRouteUpdate: beforeRouteUpdate as RouteGuard | undefined,
      beforeRouteLeave: beforeRouteLeave as RouteGuard | undefined,
    })
  }
}

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
import type { RouteGuard } from '../../adapter'
import { getAdapter } from '../../adapter'
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

/** Registers the schema's mount/update/unmount hooks and route guards. */
export function useRootLifecycles(hooks: SchemaHooks): void {
  for (const [name, register] of Object.entries(VUE_LIFECYCLES)) {
    const callback = hooks[name]
    if (callback) register(callback)
  }
  const { beforeRouteUpdate, beforeRouteLeave } = hooks
  if (beforeRouteUpdate || beforeRouteLeave) {
    getAdapter().onRouteGuards({
      beforeRouteUpdate: beforeRouteUpdate as RouteGuard | undefined,
      beforeRouteLeave: beforeRouteLeave as RouteGuard | undefined,
    })
  }
}

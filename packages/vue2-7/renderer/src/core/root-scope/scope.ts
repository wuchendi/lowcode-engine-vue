import type Vue from 'vue'
import { computed, getCurrentInstance, isRef, watch } from 'vue'
import type { BlockScope, RuntimeScope } from '../../utils'
import { getI18n } from '../../utils'
import type { RendererProps } from '../base'
import type { RootData } from './state'

export type AddToScope = (source: BlockScope) => void

/** Removers paired with each addToScope, used to undo previously added keys. */
const scopeRemovers = new WeakMap<AddToScope, (source: BlockScope) => void>()

/** Keys that `__scope` may neither override nor remove. */
const RESERVED_SCOPE_KEYS = ['i18n', 'currentLocale']

/**
 * 添加属性到作用域，若属性为 ref，则添加到 data 中，否则添加到 ctx 中
 */
export function createAddToScope(
  scope: RuntimeScope,
  data: RootData,
): AddToScope {
  /**
   * @param source - 作用域属性来源
   */
  const addToScope = (source: BlockScope) => {
    Object.keys(source).forEach((key) => {
      const val = source[key]
      const target = isRef(val) ? data : scope
      Reflect.set(target, key, val)
    })
  }
  scopeRemovers.set(addToScope, (source: BlockScope) => {
    Object.keys(source).forEach((key) => {
      const target = isRef(source[key]) ? data : scope
      Reflect.deleteProperty(target, key)
    })
  })
  return addToScope
}

function forceUpdateTree(vm: Vue) {
  vm.$forceUpdate()
  vm.$children.forEach(forceUpdateTree)
}

export function useRootExtraScope(
  rendererProps: RendererProps,
  addToScope: AddToScope,
) {
  const instance = getCurrentInstance()
  let prevScope: BlockScope | null = null

  // Apply the extra `__scope`; re-apply when it is replaced or a top-level key changes
  watch(
    () => ({ ...rendererProps.__scope }) as BlockScope,
    (extraScope) => {
      const next: BlockScope = {}
      Object.keys(extraScope).forEach((key) => {
        if (!RESERVED_SCOPE_KEYS.includes(key)) next[key] = extraScope[key]
      })
      const prev = prevScope
      if (prev) {
        const removed: BlockScope = {}
        Object.keys(prev).forEach((key) => {
          if (!(key in next)) removed[key] = prev[key]
        })
        scopeRemovers.get(addToScope)?.(removed)
      }
      addToScope(next)
      // Scope keys are not reactive, so re-render the page and its descendants
      if (prev && instance?.proxy) forceUpdateTree(instance.proxy)
      prevScope = next
    },
    { immediate: true },
  )

  // 处理 i18n
  const i18n = (key: string, values?: Record<string, unknown>) => {
    const { __locale: locale, __messages: messages } = rendererProps
    return getI18n(key, values, locale, messages)
  }

  const currentLocale = computed(() => rendererProps.__locale)
  addToScope({ i18n, currentLocale })
}

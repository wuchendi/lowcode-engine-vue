import type { InjectionKey, Ref } from 'vue'
import { computed, inject, isRef, provide, ref, watch } from 'vue'
import type { BlockScope } from '../../shared'
import { getI18n } from '../../shared'
import type { RendererProps } from '../base'
import type { RuntimeScope } from '../scope'
import type { RootData } from './state'

export type AddToScope = (source: BlockScope) => void

/** Keys that `__scope` may neither override nor remove. */
const RESERVED_SCOPE_KEYS = ['i18n', 'currentLocale']

const SCOPE_VERSION: InjectionKey<Ref<number>> = Symbol('SCOPE_VERSION')

/**
 * Version of the non-reactive scope keys of the enclosing renderer. Leaves
 * read it while rendering, so bumping it re-renders the whole page.
 */
export function useScopeVersion(): Ref<number> {
  return inject(SCOPE_VERSION, null) ?? ref(0)
}

/**
 * Adds keys to the scope: refs go to the setup bindings (reactive on the
 * instance), everything else directly onto the instance.
 */
export function createAddToScope(
  scope: RuntimeScope,
  bindings: RootData,
): { add: AddToScope; remove: AddToScope } {
  return {
    add: (source) => {
      for (const key of Object.keys(source)) {
        const val = source[key]
        Reflect.set(isRef(val) ? bindings : scope, key, val)
      }
    },
    remove: (source) => {
      for (const key of Object.keys(source)) {
        Reflect.deleteProperty(isRef(source[key]) ? bindings : scope, key)
      }
    },
  }
}

export function useRootExtraScope(
  rendererProps: RendererProps,
  scope: { add: AddToScope; remove: AddToScope },
): Ref<number> {
  const version = ref(0)
  provide(SCOPE_VERSION, version)
  let prevScope: BlockScope | null = null

  // Apply the extra `__scope`; re-apply when it is replaced or a top-level key changes
  watch(
    () => ({ ...rendererProps.__scope }) as BlockScope,
    (extraScope) => {
      const next: BlockScope = {}
      for (const key of Object.keys(extraScope)) {
        if (!RESERVED_SCOPE_KEYS.includes(key)) next[key] = extraScope[key]
      }
      const prev = prevScope
      if (prev) {
        const removed: BlockScope = {}
        for (const key of Object.keys(prev)) {
          if (!(key in next)) removed[key] = prev[key]
        }
        scope.remove(removed)
      }
      scope.add(next)
      // Scope keys are not reactive: re-render the page and its descendants
      if (prev) version.value++
      prevScope = next
    },
    { immediate: true },
  )

  const i18n = (key: string, values?: Record<string, unknown>) => {
    const { __locale: locale, __messages: messages } = rendererProps
    return getI18n(key, values, locale, messages)
  }

  const currentLocale = computed(() => rendererProps.__locale)
  scope.add({ i18n, currentLocale })
  return version
}

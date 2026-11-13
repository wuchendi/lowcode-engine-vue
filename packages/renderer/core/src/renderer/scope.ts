import { isProxy, reactive } from 'vue'
import type { ComponentInstance } from '../adapter'
import type { BlockScope, MaybeArray } from '../shared'
import { isObject } from '../shared'
import type { DataSourceItem } from './data-source'

export type { BlockScope }

/**
 * `this` of a renderer: the component instance of a page, block or
 * component schema, extended with the schema's state, methods and context.
 */
export interface RuntimeScope extends BlockScope, ComponentInstance {
  i18n(key: string, values?: Record<string, unknown>): string
  currentLocale: string | undefined
  dataSourceMap: Record<string, DataSourceItem>
  reloadDataSource(): Promise<unknown>
  __loopScope?: boolean
  __loopRefIndex?: number
  __loopRefOffset?: number
}

const runtimeScopes = new WeakSet<object>()

/** Marks a component instance as the runtime scope of a renderer. */
export function registerRuntimeScope(scope: object): void {
  runtimeScopes.add(scope)
}

/** True for a runtime scope and for objects created on top of one. */
export function isRuntimeScope(scope: object): scope is RuntimeScope {
  for (
    let cur: object | null = scope;
    cur;
    cur = Object.getPrototypeOf(cur) as object | null
  ) {
    if (runtimeScopes.has(cur)) return true
  }
  return false
}

function isValidScope(scope: unknown): scope is BlockScope | RuntimeScope {
  if (!scope || !isObject(scope)) return false
  if (isRuntimeScope(scope)) return true
  return Object.keys(scope).length > 0
}

/**
 * Layers block scopes (loop item, slot arguments) over a runtime scope. The
 * result inherits from the runtime scope, so `this` still reaches the
 * component instance.
 */
export function mergeScope(
  scope: RuntimeScope,
  ...blockScope: MaybeArray<BlockScope | undefined | null>[]
): RuntimeScope
export function mergeScope(
  ...blockScope: MaybeArray<BlockScope | undefined | null>[]
): BlockScope
export function mergeScope(
  ...scopes: MaybeArray<RuntimeScope | BlockScope | undefined | null>[]
): RuntimeScope | BlockScope {
  const normalized: (RuntimeScope | BlockScope)[] = []
  scopes.flat().forEach((scope) => {
    isValidScope(scope) && normalized.push(scope)
  })

  if (normalized.length <= 1) return normalized[0]

  const [rootScope, ...rest] = normalized
  return rest.reduce((result, scope) => {
    if (isRuntimeScope(scope)) {
      if (!isRuntimeScope(result)) {
        const temp = result
        result = scope
        scope = temp
      } else {
        return scope
      }
    }

    const descriptors = Object.getOwnPropertyDescriptors(scope)
    result = Object.create(result, descriptors)
    return isProxy(scope) ? reactive(result) : result
  }, rootScope)
}

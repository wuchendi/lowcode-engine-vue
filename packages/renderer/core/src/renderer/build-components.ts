import type {
  IPublicTypeComponentSchema,
  IPublicTypeNpmInfo,
} from '@alilc/lowcode-types'
import type { VueComponent } from '../adapter'
import { getAdapter } from '../adapter'
import { isESModule, isObject } from '../shared'

export type ComponentsMapItem =
  | IPublicTypeNpmInfo
  | VueComponent
  | IPublicTypeComponentSchema

export function isComponentSchema(
  val: unknown,
): val is IPublicTypeComponentSchema {
  return isObject(val) && val.componentName === 'Component'
}

/** A lower-case name without a library is a native tag. */
const NATIVE_TAG = /^[a-z][a-z0-9-]*$/

export function accessLibrary(library: string | Record<string, unknown>) {
  if (typeof library !== 'string') {
    return library
  }
  const found = (window as unknown as Record<string, unknown>)[library]
  if (found) return found
  return NATIVE_TAG.test(library) ? getAdapter().wrapTag(library) : undefined
}

export function getSubComponent(library: any, paths: string[]) {
  const l = paths.length
  if (l < 1 || !library) {
    return library
  }
  let i = 0
  let component: any
  while (i < l) {
    const key = paths[i]!
    let ex: unknown
    try {
      component = library[key]
    } catch (e) {
      ex = e
      component = null
    }
    if (i === 0 && component == null && key === 'default') {
      if (ex) {
        return l === 1 ? library : null
      }
      component = library
    } else if (component == null) {
      return null
    }
    library = component
    i++
  }
  return component
}

export function findComponent(
  libraryMap: Record<string, string>,
  componentName: string,
  npm?: IPublicTypeNpmInfo,
) {
  if (!npm) {
    return accessLibrary(componentName)
  }
  const exportName = npm.exportName || npm.componentName || componentName
  const libraryName = libraryMap[npm.package] || exportName
  const library = accessLibrary(libraryName)
  const paths = npm.exportName && npm.subName ? npm.subName.split('.') : []
  if (npm.destructuring) {
    paths.unshift(exportName)
  } else if (isESModule(library)) {
    paths.unshift('default')
  }
  return getSubComponent(library, paths)
}

export function buildComponents(
  libraryMap: Record<string, string>,
  componentsMap: Record<string, ComponentsMapItem>,
  createComponent?: (schema: IPublicTypeComponentSchema) => VueComponent | null,
): Record<string, VueComponent> {
  const adapter = getAdapter()
  const components: Record<string, VueComponent> = {}
  Object.keys(componentsMap).forEach((componentName) => {
    const component = componentsMap[componentName]
    if (isComponentSchema(component)) {
      if (createComponent) {
        const created = createComponent(component)
        if (created) components[componentName] = created
      }
    } else if (adapter.isComponent(component)) {
      components[componentName] = adapter.normalizeComponent(
        component as VueComponent,
      )
    } else {
      const found = findComponent(
        libraryMap,
        componentName,
        component as IPublicTypeNpmInfo,
      )
      if (found) {
        components[componentName] = (found as { functional?: boolean })
          .functional
          ? adapter.wrapTag(found)
          : adapter.normalizeComponent(found)
      }
    }
  })
  return components
}

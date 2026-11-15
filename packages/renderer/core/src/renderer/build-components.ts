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

/**
 * The Component root of a component-map entry: the root itself, or the first
 * root of a project schema (the `schema` of a `devMode: 'lowCode'` component
 * in the engine assets).
 */
export function componentSchemaOf(
  val: unknown,
): IPublicTypeComponentSchema | undefined {
  // `{ devMode: 'lowCode', componentName }` is a componentsMap entry, not a schema
  if (isComponentSchema(val)) return 'devMode' in val ? undefined : val
  const tree = isObject(val) ? val.componentsTree : undefined
  const root = Array.isArray(tree) ? tree[0] : undefined
  return isComponentSchema(root) ? root : undefined
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

/**
 * Registers the directives the loaded libraries export as `directives`
 * (`{ loading: vLoading }`), so that `v-<name>` props resolve them. Vue 3
 * has no global registration a library script could do by itself.
 */
function registerLibraryDirectives(libraryMap: Record<string, string>) {
  const adapter = getAdapter()
  const globals = window as unknown as Record<string, unknown>
  for (const libraryName of Object.values(libraryMap)) {
    const library = globals[libraryName]
    const directives = isObject(library) ? library.directives : undefined
    if (!isObject(directives)) continue
    for (const [name, directive] of Object.entries(directives)) {
      if (directive) adapter.registerDirective(name, directive as object)
    }
  }
}

export function buildComponents(
  libraryMap: Record<string, string>,
  componentsMap: Record<string, ComponentsMapItem>,
  createComponent?: (schema: IPublicTypeComponentSchema) => VueComponent | null,
): Record<string, VueComponent> {
  const adapter = getAdapter()
  registerLibraryDirectives(libraryMap)
  const components: Record<string, VueComponent> = {}
  Object.keys(componentsMap).forEach((componentName) => {
    const component = componentsMap[componentName]
    const schema = componentSchemaOf(component)
    if (schema) {
      if (createComponent) {
        const created = createComponent(schema)
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

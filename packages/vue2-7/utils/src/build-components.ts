import type {
  IPublicTypeComponentSchema,
  IPublicTypeNpmInfo,
} from '@alilc/lowcode-types'
import type { Component } from 'vue'
import { defineComponent, h } from 'vue'
import { isESModule, isFunction, isObject } from './check'

export function isVueComponent(val: unknown): val is Component {
  if (isFunction(val)) return true
  if (isObject(val) && ('render' in val || 'setup' in val)) {
    return true
  }
  return false
}

export function isComponentSchema(
  val: unknown,
): val is IPublicTypeComponentSchema {
  return isObject(val) && val.componentName === 'Component'
}

export function accessLibrary(library: string | Record<string, unknown>) {
  if (typeof library !== 'string') {
    return library
  }

  return (
    (window as unknown as Record<string, unknown>)[library] ||
    generateHtmlComp(library)
  )
}

// Native elements have no slot outlets, so every slot (default first, then
// named/scoped ones) is rendered as children of the element.
function createTagWrapper(tag: string | Component) {
  return defineComponent({
    setup(_props, { attrs, listeners, slots }) {
      return () => {
        const { default: defaultSlot, ...namedSlots } = slots
        const children = [defaultSlot, ...Object.values(namedSlots)].flatMap(
          (slot) => (slot ? slot() || [] : []),
        )
        // Copy attrs: Vue removes the keys it extracts as props from the object
        // it is given, which would strip them from this component's own attrs.
        return h(tag, { attrs: { ...attrs }, on: listeners }, children)
      }
    },
  })
}

export function generateHtmlComp(library: string) {
  if (/^[a-z][a-z0-9-]*$/.test(library)) {
    return createTagWrapper(library)
  }
}
export function functionalComp(library: Component) {
  const component = createTagWrapper(library)
  // component.__htmlComponent = true;
  return component
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
  componentsMap: Record<
    string,
    IPublicTypeNpmInfo | Component | IPublicTypeComponentSchema
  >,
  createComponent?: (schema: IPublicTypeComponentSchema) => Component | null,
) {
  const components: any = {}
  Object.keys(componentsMap).forEach((componentName) => {
    const component = componentsMap[componentName]
    if (isComponentSchema(component)) {
      if (createComponent) {
        components[componentName] = createComponent(
          component as IPublicTypeComponentSchema,
        )
      }
    } else if (isVueComponent(component)) {
      components[componentName] = component
    } else {
      const found = findComponent(libraryMap, componentName, component)
      if (found) {
        components[componentName] = found.functional
          ? functionalComp(found)
          : found
      }
    }
  })
  return components
}

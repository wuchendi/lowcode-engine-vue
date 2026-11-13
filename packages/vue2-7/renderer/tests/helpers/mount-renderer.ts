import type {
  IPublicTypeNpmInfo,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'
import { buildComponents } from '@cdlab996/lowcode-utils2.7'
import type { RendererProps } from '@cdlab996/lowcode-vue-renderer2.7'
import Renderer from '@cdlab996/lowcode-vue-renderer2.7'
import type { Component } from 'vue'
import Vue, { nextTick } from 'vue'

/**
 * Component map for tests: a string value is a native tag name
 * (e.g. `{ Button: 'button' }`), anything else is a Vue component object.
 */
export type TestComponentsMap = Record<string, string | Component>

export function buildTestComponents(
  componentsMap: TestComponentsMap,
): Record<string, Component> {
  const map: Record<string, IPublicTypeNpmInfo | Component> = {}
  for (const [name, value] of Object.entries(componentsMap)) {
    map[name] =
      typeof value === 'string'
        ? ({ package: value, componentName: value } as IPublicTypeNpmInfo)
        : value
  }
  return buildComponents({}, map)
}

export interface MountRendererOptions
  extends Omit<RendererProps, 'schema' | 'components'> {
  schema: IPublicTypeRootSchema | Record<string, unknown>
  components?: TestComponentsMap
  /** Extra Renderer props not declared in RendererProps (e.g. `appHelper`). */
  [key: string]: unknown
}

export interface MountedRenderer {
  vm: Vue
  el: HTMLElement
  html: () => string
  flush: () => Promise<void>
  destroy: () => void
}

/**
 * Mounts `Renderer` into a fresh element attached to `document.body`.
 * Live mode is the default; pass `designMode: 'design'` for design mode
 * (no extra props are required for a static schema; `getNode` and
 * `onCompGetCtx` are optional).
 */
export async function mountRenderer(
  options: MountRendererOptions,
): Promise<MountedRenderer> {
  const { components = {}, ...props } = options
  const target = document.createElement('div')
  document.body.appendChild(target)

  const rendererProps = {
    ...props,
    components: buildTestComponents(components),
  }
  const vm = new Vue({
    render: (h) => h(Renderer as Component, { props: rendererProps }),
  }).$mount(target)
  await nextTick()

  return {
    vm,
    get el() {
      return vm.$el as HTMLElement
    },
    html: () => (vm.$el as HTMLElement).outerHTML,
    flush: () => nextTick(),
    destroy: () => {
      vm.$destroy()
      ;(vm.$el as HTMLElement).remove()
    },
  }
}

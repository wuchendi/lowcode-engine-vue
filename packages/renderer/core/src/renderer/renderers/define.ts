import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
import type { ComponentInstance, VNode, VueComponent } from '../../adapter'
import type { RendererComponent, RendererProps } from '../base'
import { rendererProps } from '../base'
import { useRenderer } from '../use'

const renderFns = new WeakMap<object, () => VNode | null>()

export interface RendererDefinition {
  name: string
  /** Root component when the components map has none for the schema. */
  root: (components: Record<string, VueComponent>) => VueComponent
  /** Reports the renderer itself as the root node instance when true. */
  reportSelf?: (root: VueComponent) => boolean
}

/**
 * Defines a container renderer (page, block, component). Setup returns the
 * scope bindings so they become reactive instance properties; the render
 * function is kept outside the instance.
 */
export function defineRenderer(def: RendererDefinition): RendererComponent {
  return defineComponent({
    name: def.name,
    props: rendererProps,
    __renderer__: true,
    setup(props, context) {
      const rendererProps = props as unknown as RendererProps
      const { renderComp, componentsRef, bindings, ready, scopeVersion } =
        useRenderer(rendererProps, context)
      const instance = getCurrentInstance()!.proxy as unknown as object
      const root = def.root(componentsRef.value)

      if (def.reportSelf?.(root)) {
        onMounted(() =>
          rendererProps.__triggerCompGetCtx(
            rendererProps.__schema as IPublicTypeNodeSchema,
            instance as ComponentInstance,
          ),
        )
      }

      renderFns.set(instance, () => {
        void scopeVersion.value
        if (!ready.value) return null
        const vnode = renderComp(
          rendererProps.__schema as IPublicTypeNodeSchema,
          null,
          root,
        )
        // A looped root keeps its first item: a component has one root
        return Array.isArray(vnode) ? (vnode[0] ?? null) : vnode
      })
      return bindings
    },
    render() {
      // `this` may be a dev-mode proxy of the instance (Vue 2): look the
      // instance up instead
      const instance = getCurrentInstance()?.proxy as unknown as object
      return renderFns.get(instance)?.() ?? null
    },
  }) as unknown as RendererComponent
}

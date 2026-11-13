import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { ComponentInstance, VueComponent } from '../adapter'
import { getAdapter, getRouterAdapter } from '../adapter'
import { Renderer } from '../renderer'
import type { DocumentInstance, VueSimulatorRenderer } from './interface'

const simulatorProp = {
  type: Object as PropType<VueSimulatorRenderer>,
  required: true,
} as const

/** Wraps the canvas in the layout component configured by the project. */
export const Layout = defineComponent({
  name: 'Layout',
  props: { simulator: simulatorProp },
  setup(props, { slots }) {
    const { h } = getAdapter()
    return () => {
      const { simulator } = props
      const { layout, getComponent } = simulator
      const Component =
        layout?.Component ??
        (layout?.componentName ? getComponent(layout.componentName) : null)
      if (Component) {
        return h(
          Component,
          { ...layout.props, simulator, key: 'layout' },
          slots,
        )
      }
      return h('div', null, slots)
    }
  },
})

export const SimulatorRendererView = defineComponent({
  name: 'SimulatorRendererView',
  props: { simulator: simulatorProp },
  setup(props) {
    const { h } = getAdapter()
    const { RouterView } = getRouterAdapter()
    return () =>
      h(
        Layout,
        { simulator: props.simulator },
        { default: () => [h(RouterView)] },
      )
  },
})

/** Route component of one document. */
export const DocumentView = defineComponent({
  name: 'DocumentView',
  props: {
    simulator: simulatorProp,
    documentInstance: {
      type: Object as PropType<DocumentInstance>,
      required: true,
    },
  },
  setup(props) {
    const { h } = getAdapter()
    return () => {
      const { documentInstance, simulator } = props
      if (!simulator.autoRender) return null
      const { schema, scope, messages, key } = documentInstance
      return h(Renderer as VueComponent, {
        key,
        scope,
        schema,
        messages,
        locale: simulator.locale,
        device: simulator.device,
        components: simulator.components,
        designMode: simulator.designMode,
        requestHandlersMap: simulator.requestHandlersMap,
        getNode: (id: string) => documentInstance.getNode(id),
        onCompGetCtx: (
          schema: IPublicTypeNodeSchema,
          instance: ComponentInstance | null,
        ) => documentInstance.mountInstance(schema.id!, instance),
      })
    }
  },
})

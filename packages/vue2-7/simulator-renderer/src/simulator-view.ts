import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'
import LowCodeRenderer from '@cdlab996/lowcode-vue-renderer2.7'
import type { Component, PropType, VNode } from 'vue'
import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'
import type {
  ComponentInstance,
  DocumentInstance,
  VueSimulatorRenderer,
} from './interface'

export const Layout = defineComponent({
  name: 'Layout',
  props: {
    simulator: {
      type: Object as PropType<VueSimulatorRenderer>,
      required: true,
    },
  },
  render() {
    const { simulator } = this.$props as { simulator: VueSimulatorRenderer }
    const { $slots } = this
    const { layout, getComponent } = simulator
    if (layout) {
      const { Component, props = {}, componentName } = layout
      if (Component) {
        return h(
          Component,
          { props: { ...props, simulator }, key: 'layout' },
          $slots.default,
        )
      }
      const ComputedComponent = componentName && getComponent(componentName)
      if (ComputedComponent) {
        return h(
          ComputedComponent,
          { props: { ...props, simulator }, key: 'layout' },
          $slots.default,
        )
      }
    }
    return h('div', $slots.default)
  },
})

export const SimulatorRendererView = defineComponent({
  name: 'SimulatorRendererView',
  props: {
    simulator: {
      type: Object as PropType<VueSimulatorRenderer>,
      required: true,
    },
  },
  render() {
    const { simulator } = this.$props as { simulator: VueSimulatorRenderer }
    return h(
      Layout,
      {
        props: {
          simulator,
        },
      },
      [h(RouterView as unknown as Component)],
    ) as VNode
  },
})

export const Renderer = defineComponent({
  name: 'Renderer',
  props: {
    simulator: {
      type: Object as PropType<VueSimulatorRenderer>,
      required: true,
    },
    documentInstance: {
      type: Object as PropType<DocumentInstance>,
      required: true,
    },
  },
  render() {
    const { documentInstance, simulator } = this.$props as {
      documentInstance: DocumentInstance
      simulator: VueSimulatorRenderer
    }
    const { schema, scope, messages, key } = documentInstance
    const { designMode, device, locale, components } = simulator

    if (!simulator.autoRender) return null

    return h(LowCodeRenderer as unknown as Component, {
      key,
      props: {
        scope: scope,
        schema: schema,
        locale: locale,
        device: device,
        messages: messages,
        components: components,
        designMode: designMode,
        requestHandlersMap: simulator.requestHandlersMap,
        getNode: (id: string) => documentInstance.getNode(id),
        onCompGetCtx: (schema: IPublicTypeNodeSchema, ref: ComponentInstance) =>
          documentInstance.mountInstance(schema.id!, ref),
      },
    })
  },
})

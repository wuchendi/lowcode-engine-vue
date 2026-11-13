import { defineComponent } from 'vue'
import { getAdapter } from '../../adapter'
import type { RendererComponent } from '../base'
import { defineRenderer } from './define'

/** Default page root: a full-height `div.lc-page`. */
const Page = defineComponent({
  name: 'Page',
  setup(_props, { slots }) {
    return () =>
      getAdapter().h(
        'div',
        { class: 'lc-page', style: { height: '100%' } },
        slots,
      )
  },
})

export const PageRenderer = defineRenderer({
  name: 'PageRenderer',
  root: (components) => components.Page || Page,
})

export const BlockRenderer = defineRenderer({
  name: 'BlockRenderer',
  root: (components) => components.Block || getAdapter().Fragment,
  reportSelf: (root) => root === getAdapter().Fragment,
})

export const ComponentRenderer = defineRenderer({
  name: 'ComponentRenderer',
  root: (components) => components.Component || getAdapter().Fragment,
  reportSelf: (root) => root === getAdapter().Fragment,
})

export const RENDERER_COMPS: Record<string, RendererComponent> = {
  PageRenderer,
  BlockRenderer,
  ComponentRenderer,
}

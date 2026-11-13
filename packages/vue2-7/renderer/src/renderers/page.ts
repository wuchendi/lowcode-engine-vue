import { defineComponent, h } from 'vue'
import { rendererProps, useRenderer } from '../core'

// import { h } from '../utils/Vue3Adapter';
// const Page = defineComponent((props, { slots }) => {
//   return () => h('div', { class: 'lc-page', ...props }, slots);
// });

const Page = defineComponent({
  setup(props, { attrs, slots }) {
    return () =>
      h(
        'div',
        { class: 'lc-page', ...props, attrs },
        slots && slots.default && slots.default(),
      )
  },
})

export const PageRenderer = defineComponent({
  props: rendererProps,
  __renderer__: true,
  setup(props) {
    const { renderComp, componentsRef, data } = useRenderer(props)
    return {
      renderComp,
      componentsRef,
      // vue实例添加state响应式变量
      ...data,
    }
  },
  render() {
    const { __schema: schema, renderComp, componentsRef } = this
    // the root node renders a single element; a looped root keeps its first item
    const vnode = renderComp(schema, null, componentsRef.Page || Page)
    return Array.isArray(vnode) ? vnode[0] : vnode
  },
})

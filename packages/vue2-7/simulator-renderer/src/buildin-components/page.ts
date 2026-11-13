import { defineComponent, h } from 'vue'

// import { h } from '@cdlab996/lowcode-vue-renderer2.7';

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
// const Page = defineComponent((props, { slots }) => {
//   return () => h('div', { class: 'lc-page', ...props }, slots);
// });

Object.assign(Page, {
  displayName: 'Page',
  componentMetadata: {
    componentName: 'Page',
    configure: {
      supports: {
        style: true,
        className: true,
      },
      component: {
        isContainer: true,
        disableBehaviors: '*',
      },
    },
  },
})

export default Page

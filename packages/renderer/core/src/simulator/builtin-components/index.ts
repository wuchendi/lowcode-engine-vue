import { defineComponent } from 'vue'
import type { VueComponent } from '../../adapter'
import { getAdapter } from '../../adapter'

function withMetadata<T extends object>(component: T, metadata: object): T {
  return Object.assign(component, metadata)
}

/** Text leaf: renders only its default slot. */
export const Leaf = withMetadata(
  defineComponent({
    name: 'Leaf',
    setup(_props, { slots }) {
      const { h, PassThrough } = getAdapter()
      return () => h(PassThrough as VueComponent, null, slots)
    },
  }),
  {
    displayName: 'Leaf',
    componentMetadata: {
      componentName: 'Leaf',
      configure: {
        props: [{ name: 'children', setter: 'StringSetter' }],
        supports: false,
      },
    },
  },
)

export const Page = withMetadata(
  defineComponent({
    name: 'Page',
    setup(_props, { slots }) {
      return () => getAdapter().h('div', { class: 'lc-page' }, slots)
    },
  }),
  {
    displayName: 'Page',
    componentMetadata: {
      componentName: 'Page',
      configure: {
        supports: { style: true, className: true },
        component: { isContainer: true, disableBehaviors: '*' },
      },
    },
  },
)

export const Slot = withMetadata(
  defineComponent({
    name: 'Slot',
    setup(_props, { slots }) {
      return () => getAdapter().h('div', { class: 'lc-container' }, slots)
    },
  }),
  {
    displayName: 'Slot',
    componentMetadata: {
      componentName: 'Slot',
      configure: {
        props: [
          {
            name: '___title',
            title: '插槽标题',
            setter: 'StringSetter',
            defaultValue: '插槽容器',
          },
          {
            name: '___params',
            title: '插槽入参',
            setter: {
              componentName: 'ArraySetter',
              props: {
                itemSetter: {
                  componentName: 'StringSetter',
                  props: { placeholder: '参数名称' },
                },
              },
            },
          },
        ],
        component: { isContainer: true, disableBehaviors: '*' },
        supports: false,
      },
    },
  },
)

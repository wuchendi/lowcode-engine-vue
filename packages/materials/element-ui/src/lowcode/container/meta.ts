import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (container); see https://element.eleme.cn/#/zh-CN/component/container
const meta = {
  componentName: 'ElContainer',
  title: '布局容器',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/container',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子元素的排列方向',
            'en-US': 'direction',
          },
          tip: '子元素的排列方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '布局容器',
      screenshot: './screenshots/container.webp',
      schema: {
        componentName: 'ElContainer',
        children: [
          {
            componentName: 'ElHeader',
            props: {},
            children: 'Header',
          },
          {
            componentName: 'ElFooter',
            props: {},
            children: 'Footer',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

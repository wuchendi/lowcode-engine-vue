import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (container); see https://element.eleme.cn/#/zh-CN/component/container
const meta = {
  componentName: 'ElHeader',
  title: '布局容器 Header',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/container',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶栏高度',
            'en-US': 'height',
          },
          tip: '顶栏高度',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '60px',
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
      title: '布局容器 Header',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElHeader',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

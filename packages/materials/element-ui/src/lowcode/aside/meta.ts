import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (container); see https://element.eleme.cn/#/zh-CN/component/container
const meta = {
  componentName: 'ElAside',
  title: '布局容器 Aside',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/container',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '侧边栏宽度',
            'en-US': 'width',
          },
          tip: '侧边栏宽度',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '300px',
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
      title: '布局容器 Aside',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElAside',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

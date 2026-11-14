import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (container); see https://element-plus.org/zh-CN/component/container.html
const meta = {
  componentName: 'ElAside',
  title: '布局容器 Aside',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/container.html',
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
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '布局容器 Aside',
      screenshot: './screenshots/aside.webp',
      schema: {
        componentName: 'ElAside',
        props: {},
        children: '布局容器',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

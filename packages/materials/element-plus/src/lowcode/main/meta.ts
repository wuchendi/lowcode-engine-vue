import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (container); see https://element-plus.org/zh-CN/component/container.html
const meta = {
  componentName: 'ElMain',
  title: '布局容器 Main',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/container.html',
  devMode: 'proCode',
  configure: {
    props: [],
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
      title: '布局容器 Main',
      screenshot: './screenshots/main.webp',
      schema: {
        componentName: 'ElMain',
        props: {},
        children: '布局容器',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

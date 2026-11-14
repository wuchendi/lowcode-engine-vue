import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (breadcrumb); see https://element-plus.org/zh-CN/component/breadcrumb.html
const meta = {
  componentName: 'ElBreadcrumb',
  title: '面包屑',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/breadcrumb.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'separator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分隔符',
            'en-US': 'separator',
          },
          tip: '分隔符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'separatorIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标分隔符的组件或组件名',
            'en-US': 'separatorIcon',
          },
          tip: '图标分隔符的组件或组件名',
        },
        setter: 'StringSetter',
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
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '面包屑',
      screenshot: './screenshots/breadcrumb.webp',
      schema: {
        componentName: 'ElBreadcrumb',
        children: [
          {
            componentName: 'ElBreadcrumbItem',
            props: {},
            children: '首页',
          },
          {
            componentName: 'ElBreadcrumbItem',
            props: {},
            children: '当前页',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

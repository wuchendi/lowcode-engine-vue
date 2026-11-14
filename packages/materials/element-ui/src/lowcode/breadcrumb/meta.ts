import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (breadcrumb); see https://element.eleme.cn/#/zh-CN/component/breadcrumb
const meta = {
  componentName: 'ElBreadcrumb',
  title: '面包屑',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/breadcrumb',
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
        name: 'separatorClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标分隔符 class',
            'en-US': 'separatorClass',
          },
          tip: '图标分隔符 class',
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
    component: {},
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

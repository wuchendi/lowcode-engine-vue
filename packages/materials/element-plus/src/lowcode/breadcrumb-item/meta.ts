import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (breadcrumb); see https://element-plus.org/zh-CN/component/breadcrumb.html
const meta = {
  componentName: 'ElBreadcrumbItem',
  title: '面包屑 BreadcrumbItem',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/breadcrumb.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'to',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '路由跳转目标',
            'en-US': 'to',
          },
          tip: '路由跳转目标，同 vue-router 的 to 属性',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'replace',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '如果设置该属性为 true',
            'en-US': 'replace',
          },
          tip: '如果设置该属性为 true, 导航将不会留下历史记录',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      nestingRule: {
        parentWhitelist: ['ElBreadcrumb'],
      },
    },
  },
  snippets: [
    {
      title: '面包屑 BreadcrumbItem',
      screenshot: './screenshots/breadcrumb-item.webp',
      schema: {
        componentName: 'ElBreadcrumbItem',
        props: {},
        children: '面包屑',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (breadcrumb); see https://element.eleme.cn/#/zh-CN/component/breadcrumb
const meta = {
  componentName: 'ElBreadcrumbItem',
  title: '面包屑 BreadcrumbItem',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/breadcrumb',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'to',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '路由跳转对象',
            'en-US': 'to',
          },
          tip: '路由跳转对象，同 vue-router 的 to',
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
            'zh-CN': '在使用 to 进行路由跳转时',
            'en-US': 'replace',
          },
          tip: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
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

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (breadcrumb); see https://antdv.com/components/breadcrumb-cn
const meta = {
  componentName: 'ABreadcrumb',
  title: '面包屑',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/breadcrumb-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'itemRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义链接函数',
            'en-US': 'itemRender',
          },
          tip: '自定义链接函数，和 vue-router 配置使用， 也可使用 #itemRender="props"',
        },
        setter: [
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'params',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '路由的参数',
            'en-US': 'params',
          },
          tip: '路由的参数',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'routes',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'router 的路由栈信息',
            'en-US': 'routes',
          },
          tip: 'router 的路由栈信息',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'separator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分隔符自定义',
            'en-US': 'separator',
          },
          tip: '分隔符自定义',
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
        componentName: 'ABreadcrumb',
        children: [
          {
            componentName: 'ABreadcrumbItem',
            props: {},
            children: '首页',
          },
          {
            componentName: 'ABreadcrumbItem',
            props: {},
            children: '当前页',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

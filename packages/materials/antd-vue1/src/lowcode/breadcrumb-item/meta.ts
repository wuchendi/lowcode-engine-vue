import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (breadcrumb); see https://1x.antdv.com/components/breadcrumb-cn/
const meta = {
  componentName: 'ABreadcrumbItem',
  title: '面包屑 Item',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://1x.antdv.com/components/breadcrumb-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'href',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'href',
            'en-US': 'href',
          },
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'overlay',
            'en-US': 'overlay',
          },
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '单击事件',
          template:
            "onClick(extParams) {\n  // 单击事件\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['ABreadcrumb'],
      },
    },
  },
  snippets: [
    {
      title: '面包屑 Item',
      screenshot: './screenshots/breadcrumb-item.webp',
      schema: {
        componentName: 'ABreadcrumbItem',
        props: {},
        children: '面包屑',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

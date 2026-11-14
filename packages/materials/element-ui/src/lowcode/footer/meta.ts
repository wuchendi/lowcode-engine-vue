import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (container); see https://element.eleme.cn/#/zh-CN/component/container
const meta = {
  componentName: 'ElFooter',
  title: '布局容器 Footer',
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
            'zh-CN': '底栏高度',
            'en-US': 'height',
          },
          tip: '底栏高度',
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
      title: '布局容器 Footer',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElFooter',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

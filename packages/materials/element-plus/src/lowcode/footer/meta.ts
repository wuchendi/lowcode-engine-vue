import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (container); see https://element-plus.org/zh-CN/component/container.html
const meta = {
  componentName: 'ElFooter',
  title: '布局容器 Footer',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/container.html',
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
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '布局容器 Footer',
      screenshot: './screenshots/footer.webp',
      schema: {
        componentName: 'ElFooter',
        props: {},
        children: '布局容器',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

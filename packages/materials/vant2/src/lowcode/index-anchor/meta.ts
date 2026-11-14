import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (index-bar); see https://vant-ui.github.io/vant/v2/#/zh-CN/index-bar
const meta = {
  componentName: 'VanIndexAnchor',
  title: '索引栏 IndexAnchor',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/index-bar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'index',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '索引字符',
            'en-US': 'index',
          },
          tip: '索引字符',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
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
      nestingRule: {
        parentWhitelist: ['VanIndexBar'],
      },
    },
  },
  snippets: [
    {
      title: '索引栏 IndexAnchor',
      screenshot: './screenshots/index-anchor.webp',
      schema: {
        componentName: 'VanIndexAnchor',
        props: {},
        children: '索引栏',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

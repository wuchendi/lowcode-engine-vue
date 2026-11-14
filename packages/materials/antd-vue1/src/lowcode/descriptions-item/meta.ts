import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (descriptions); see https://1x.antdv.com/components/descriptions-cn/
const meta = {
  componentName: 'ADescriptionsItem',
  title: '描述列表 Item',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/descriptions-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容的描述',
            'en-US': 'label',
          },
          tip: '内容的描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'span',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '包含列的数量',
            'en-US': 'span',
          },
          tip: '包含列的数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
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
        parentWhitelist: ['ADescriptions'],
      },
    },
  },
  snippets: [
    {
      title: '描述列表 Item',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ADescriptionsItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

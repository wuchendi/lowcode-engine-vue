import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (mentions); see https://1x.antdv.com/components/mentions-cn/
const meta = {
  componentName: 'AMentionsOption',
  title: '提及 Option',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/mentions-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择时填充的值',
            'en-US': 'value',
          },
          tip: '选择时填充的值',
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
      nestingRule: {
        parentWhitelist: ['AMentions'],
      },
    },
  },
  snippets: [],
} as IPublicTypeComponentMetadata

export default meta

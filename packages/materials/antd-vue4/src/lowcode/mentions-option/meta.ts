import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (mentions); see https://antdv.com/components/mentions-cn
const meta = {
  componentName: 'AMentionsOption',
  title: '提及 MentionsOption',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/mentions-cn',
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
        defaultValue: 'number',
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项的标题',
            'en-US': 'label',
          },
          tip: '选项的标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可选',
            'en-US': 'disabled',
          },
          tip: '是否可选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'payload',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '其它数据',
            'en-US': 'payload',
          },
          tip: '其它数据',
        },
        setter: 'JsonSetter',
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
  snippets: [
    {
      title: '提及 MentionsOption',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AMentionsOption',
        props: {
          value: 'option',
        },
        children: '选项',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

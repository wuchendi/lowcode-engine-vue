import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (card); see https://1x.antdv.com/components/card-cn/
const meta = {
  componentName: 'ACardMeta',
  title: '卡片 Meta',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/card-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'avatar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '头像/图标',
            'en-US': 'avatar',
          },
          tip: '头像/图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述内容',
            'en-US': 'description',
          },
          tip: '描述内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题内容',
            'en-US': 'title',
          },
          tip: '标题内容',
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
        parentWhitelist: ['ACard'],
      },
    },
  },
  snippets: [
    {
      title: '卡片 Meta',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ACardMeta',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

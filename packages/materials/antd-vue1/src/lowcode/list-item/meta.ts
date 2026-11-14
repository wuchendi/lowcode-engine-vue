import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (list); see https://1x.antdv.com/components/list-cn/
const meta = {
  componentName: 'AListItem',
  title: '列表 Item',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/list-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'actions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表操作组',
            'en-US': 'actions',
          },
          tip: '列表操作组，根据 itemLayout 的不同, 位置在卡片底部或者最右侧',
        },
        setter: 'JsonSetter',
        supportVariable: true,
        defaultValue: 'slot',
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '额外内容',
            'en-US': 'extra',
          },
          tip: '额外内容, 通常用在 itemLayout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧',
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
        parentWhitelist: ['AList'],
      },
    },
  },
  snippets: [
    {
      title: '列表 Item',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AListItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

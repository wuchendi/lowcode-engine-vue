import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (table); see https://antdv.com/components/table-cn
const meta = {
  componentName: 'ATableColumnGroup',
  title: '表格 TableColumnGroup',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/table-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列头显示文字',
            'en-US': 'title',
          },
          tip: '列头显示文字',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
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
        parentWhitelist: ['ATable'],
      },
    },
  },
  snippets: [
    {
      title: '表格 TableColumnGroup',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATableColumnGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

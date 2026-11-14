import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (table); see https://antdv.com/components/table-cn
const meta = {
  componentName: 'ATableColumn',
  title: '表格 TableColumn',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/table-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'filterDropdown',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可以自定义筛选菜单',
            'en-US': 'filterDropdown',
          },
          tip: '可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互',
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
        name: 'filterIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 filter 图标',
            'en-US': 'filterIcon',
          },
          tip: '自定义 filter 图标。',
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
        parentWhitelist: ['ATable', 'ATableColumnGroup'],
      },
    },
  },
  snippets: [
    {
      title: '表格 TableColumn',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATableColumn',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

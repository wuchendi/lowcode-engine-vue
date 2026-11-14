import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (table); see https://1x.antdv.com/components/table-cn/
const meta = {
  componentName: 'ATableColumnGroup',
  title: '表格 ColumnGroup',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/table-cn/',
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
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'fixed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列是否固定',
            'en-US': 'fixed',
          },
          tip: "列是否固定，可选 true(等效于 left) 'left' 'right'",
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'false',
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
  snippets: [],
} as IPublicTypeComponentMetadata

export default meta

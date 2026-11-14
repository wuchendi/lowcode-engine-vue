import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (time-picker); see https://antdv.com/components/time-picker-cn
const meta = {
  componentName: 'ATimeRangePicker',
  title: '时间选择框 TimeRangePicker',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/time-picker-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'order',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '始末时间是否自动排序',
            'en-US': 'order',
          },
          tip: '始末时间是否自动排序',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'disabledTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可选择的时间',
            'en-US': 'disabledTime',
          },
          tip: '不可选择的时间',
        },
        setter: 'FunctionSetter',
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
    component: {},
  },
  snippets: [
    {
      title: '时间选择框 TimeRangePicker',
      screenshot: './screenshots/time-range-picker.webp',
      schema: {
        componentName: 'ATimeRangePicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

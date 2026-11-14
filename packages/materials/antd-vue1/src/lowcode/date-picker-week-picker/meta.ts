import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (date-picker); see https://1x.antdv.com/components/date-picker-cn/
const meta = {
  componentName: 'ADatePickerWeekPicker',
  title: '日期选择框 WeekPicker',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/date-picker-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认日期',
            'en-US': 'defaultValue',
          },
          tip: '默认日期',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultPickerValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认面板日期',
            'en-US': 'defaultPickerValue',
          },
          tip: '默认面板日期',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示的日期格式',
            'en-US': 'format',
          },
          tip: '展示的日期格式，配置参考 moment.js',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'YYYY-wo',
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '日期',
            'en-US': 'v-model',
          },
          tip: '日期',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'renderExtraFooter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在面板中添加额外的页脚',
            'en-US': 'renderExtraFooter',
          },
          tip: '在面板中添加额外的页脚',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '时间发生变化的回调，发生在用户选择时间时',
          template:
            "onChange(extParams) {\n  // 时间发生变化的回调，发生在用户选择时间时\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '日期选择框 WeekPicker',
      screenshot: './screenshots/date-picker-week-picker.webp',
      schema: {
        componentName: 'ADatePickerWeekPicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

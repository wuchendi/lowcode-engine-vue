import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (date-picker); see https://1x.antdv.com/components/date-picker-cn/
const meta = {
  componentName: 'ADatePickerRangePicker',
  title: '日期选择框 RangePicker',
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
        setter: 'JsonSetter',
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
        setter: 'JsonSetter',
        supportVariable: true,
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
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'start',
                  value: 'start',
                },
                {
                  title: 'end',
                  value: 'end',
                },
              ],
            },
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
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
          tip: '展示的日期格式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'ranges',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预设时间范围快捷选择',
            'en-US': 'ranges',
          },
          tip: '预设时间范围快捷选择',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
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
      {
        name: 'separator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置分隔符',
            'en-US': 'separator',
          },
          tip: '设置分隔符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '增加时间选择功能',
            'en-US': 'showTime',
          },
          tip: '增加时间选择功能',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
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
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onCalendarChange',
          description: '待选日期发生变化的回调',
          template:
            "onCalendarChange(extParams) {\n  // 待选日期发生变化的回调\n  console.log('onCalendarChange', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '日期范围发生变化的回调',
          template:
            "onChange(extParams) {\n  // 日期范围发生变化的回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onOk',
          description: '点击确定按钮的回调',
          template:
            "onOk(extParams) {\n  // 点击确定按钮的回调\n  console.log('onOk', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '日期选择框 RangePicker',
      screenshot: './screenshots/date-picker-range-picker.webp',
      schema: {
        componentName: 'ADatePickerRangePicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

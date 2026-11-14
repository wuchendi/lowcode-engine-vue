import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (date-picker); see https://antdv.com/components/date-picker-cn
const meta = {
  componentName: 'ARangePicker',
  title: '日期选择框 RangePicker',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/date-picker-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'allowEmpty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '允许起始项部分为空',
            'en-US': 'allowEmpty',
          },
          tip: '允许起始项部分为空',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'dateRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义日期单元格的内容',
            'en-US': 'dateRender',
          },
          tip: '自定义日期单元格的内容。',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用起始项',
            'en-US': 'disabled',
          },
          tip: '禁用起始项',
        },
        setter: 'BoolSetter',
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
            componentName: 'StringSetter',
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
        name: 'presets',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预设时间范围快捷选择',
            'en-US': 'presets',
          },
          tip: '预设时间范围快捷选择',
        },
        setter: 'JsonSetter',
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
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '日期',
            'en-US': 'v-model:value',
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
      screenshot: './screenshots/range-picker.webp',
      schema: {
        componentName: 'ARangePicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

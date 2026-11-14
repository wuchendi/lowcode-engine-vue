import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (date-picker-panel); see https://element-plus.org/zh-CN/component/date-picker-panel.html
const meta = {
  componentName: 'ElDatePickerPanel',
  title: '日期选择器面板 beta',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/date-picker-panel.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: 'binding value, if it is an range picker, the length of the array should be 2',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'border',
            'en-US': 'border',
          },
          tip: 'whether the date picker is bordered',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: 'whether DatePicker is disabled',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'clearable',
            'en-US': 'clearable',
          },
          tip: 'whether to show clear button',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'editable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'editable',
            'en-US': 'editable',
          },
          tip: 'whether the input is editable',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: 'type of the picker. quarter, quarters, and quarterrange are supported since ^(2.14.5)',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'year',
                value: 'year',
              },
              {
                title: 'years',
                value: 'years',
              },
              {
                title: 'month',
                value: 'month',
              },
              {
                title: 'months',
                value: 'months',
              },
              {
                title: 'date',
                value: 'date',
              },
              {
                title: 'dates',
                value: 'dates',
              },
              {
                title: 'datetime',
                value: 'datetime',
              },
              {
                title: 'week',
                value: 'week',
              },
              {
                title: 'quarter',
                value: 'quarter',
              },
              {
                title: 'quarters',
                value: 'quarters',
              },
              {
                title: 'datetimerange',
                value: 'datetimerange',
              },
              {
                title: 'daterange',
                value: 'daterange',
              },
              {
                title: 'monthrange',
                value: 'monthrange',
              },
              {
                title: 'yearrange',
                value: 'yearrange',
              },
              {
                title: 'quarterrange',
                value: 'quarterrange',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'date',
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultValue',
            'en-US': 'defaultValue',
          },
          tip: 'optional, default date of the calendar',
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
        name: 'defaultTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultTime',
            'en-US': 'defaultTime',
          },
          tip: 'optional, the time value to use when selecting date range',
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
        name: 'valueFormat',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'valueFormat',
            'en-US': 'valueFormat',
          },
          tip: 'optional, format of binding value. If not specified, the binding value will be a Date object',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'dateFormat',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dateFormat',
            'en-US': 'dateFormat',
          },
          tip: "optional, format of the date displayed in input's inner panel",
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'YYYY-MM-DD',
      },
      {
        name: 'timeFormat',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'timeFormat',
            'en-US': 'timeFormat',
          },
          tip: "optional, format of the time displayed in input's inner panel",
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'unlinkPanels',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'unlinkPanels',
            'en-US': 'unlinkPanels',
          },
          tip: 'unlink two date-panels in range-picker',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabledDate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabledDate',
            'en-US': 'disabledDate',
          },
          tip: 'a function determining if a date is disabled with that date as its parameter. Should return a Boolean',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'shortcuts',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'shortcuts',
            'en-US': 'shortcuts',
          },
          tip: 'an object array to set shortcut options',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'cellClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cellClassName',
            'en-US': 'cellClassName',
          },
          tip: 'set custom className',
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
        name: 'showFooter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showFooter',
            'en-US': 'showFooter',
          },
          tip: "whether to show footer where the date picker is one enum 'dates' | 'months' | 'years' | 'quarters' | 'datetime' | 'datetimerange'",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showConfirm',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showConfirm',
            'en-US': 'showConfirm',
          },
          tip: 'whether to show the confirm button',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showWeekNumber',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showWeekNumber',
            'en-US': 'showWeekNumber',
          },
          tip: 'show the week number besides the week',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'prev-month',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prev-month',
            'en-US': 'prev-month',
          },
          tip: 'prev month icon',
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
        name: 'next-month',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'next-month',
            'en-US': 'next-month',
          },
          tip: 'next month icon',
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
        name: 'prev-year',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prev-year',
            'en-US': 'prev-year',
          },
          tip: 'prev year icon',
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
        name: 'next-year',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'next-year',
            'en-US': 'next-year',
          },
          tip: 'next year icon',
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
      events: [
        {
          name: 'onCalendarChange',
          description: '在日历所选日期更改时触发仅限“range”类型。',
          template:
            "onCalendarChange(...args, extParams) {\n  // 在日历所选日期更改时触发仅限“range”类型。\n  console.log('onCalendarChange', ...args)\n}",
        },
        {
          name: 'onPanelChange',
          description: '当日期面板改变时触发。',
          template:
            "onPanelChange(...args, extParams) {\n  // 当日期面板改变时触发。\n  console.log('onPanelChange', ...args)\n}",
        },
        {
          name: 'onClear',
          description: 'triggers when a clear button is clicked',
          template:
            "onClear(...args, extParams) {\n  // triggers when a clear button is clicked\n  console.log('onClear', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '日期选择器面板 beta',
      screenshot: './screenshots/date-picker-panel.webp',
      schema: {
        componentName: 'ElDatePickerPanel',
        props: {},
        children: '日期选择器面板',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

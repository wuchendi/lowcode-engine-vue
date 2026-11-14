import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (date-picker); see https://element-plus.org/zh-CN/component/date-picker.html
const meta = {
  componentName: 'ElDatePicker',
  title: '日期选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/date-picker.html',
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
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'readonly',
            'en-US': 'readonly',
          },
          tip: 'whether DatePicker is read only',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'size of Input',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
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
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placeholder',
            'en-US': 'placeholder',
          },
          tip: 'placeholder in non-range mode',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'startPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'startPlaceholder',
            'en-US': 'startPlaceholder',
          },
          tip: 'placeholder for the start date in range mode',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'endPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'endPlaceholder',
            'en-US': 'endPlaceholder',
          },
          tip: 'placeholder for the end date in range mode',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'format',
            'en-US': 'format',
          },
          tip: 'format of the displayed value in the input box',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'YYYY-MM-DD',
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: "custom class name for DatePicker's dropdown",
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperStyle',
            'en-US': 'popperStyle',
          },
          tip: "custom style for DatePicker's dropdown",
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
        name: 'popperOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperOptions',
            'en-US': 'popperOptions',
          },
          tip: 'Customized popper option see more at popper.js',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'rangeSeparator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rangeSeparator',
            'en-US': 'rangeSeparator',
          },
          tip: 'range separator',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'id',
            'en-US': 'id',
          },
          tip: 'same as id in native input',
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
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'same as name in native input',
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
        name: 'singlePanel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'singlePanel',
            'en-US': 'singlePanel',
          },
          tip: 'show only one panel in range-picker',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'prefixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prefixIcon',
            'en-US': 'prefixIcon',
          },
          tip: 'custom prefix icon component. By default, if the value of type is TimeLikeType, the value is Clock, else is Calendar',
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
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'clearIcon',
            'en-US': 'clearIcon',
          },
          tip: 'custom clear icon component',
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
        defaultValue: 'CircleClose',
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validateEvent',
            'en-US': 'validateEvent',
          },
          tip: 'whether to trigger form validation',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        name: 'emptyValues',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'emptyValues',
            'en-US': 'emptyValues',
          },
          tip: 'empty values of component, see config-provider',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'valueOnClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'valueOnClear',
            'en-US': 'valueOnClear',
          },
          tip: 'clear return value, see config-provider',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
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
        name: 'fallbackPlacements',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fallbackPlacements',
            'en-US': 'fallbackPlacements',
          },
          tip: 'list of possible positions for Tooltip popper.js',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placement',
            'en-US': 'placement',
          },
          tip: 'position of dropdown',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'showFooter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showFooter',
            'en-US': 'showFooter',
          },
          tip: "whether to show footer where the date picker is one enum 'dates' | 'months' | 'years' | 'quarters'",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        defaultValue: true,
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
        name: 'automaticDropdown',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'automaticDropdown',
            'en-US': 'automaticDropdown',
          },
          tip: 'this prop decides if the date picker panel pops up when the input is focused. (The default value will be set to false in version 3.0)',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'range-separator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'range-separator',
            'en-US': 'range-separator',
          },
          tip: 'custom range separator content',
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
          name: 'onChange',
          description: 'triggers when user confirms the value or click outside',
          template:
            "onChange(...args, extParams) {\n  // triggers when user confirms the value or click outside\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: 'triggers when Input blurs',
          template:
            "onBlur(...args, extParams) {\n  // triggers when Input blurs\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: 'triggers when Input focuses',
          template:
            "onFocus(...args, extParams) {\n  // triggers when Input focuses\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onClear',
          description: 'triggers when a clear button is clicked',
          template:
            "onClear(...args, extParams) {\n  // triggers when a clear button is clicked\n  console.log('onClear', ...args)\n}",
        },
        {
          name: 'onCalendarChange',
          description:
            'triggers when the calendar selected date is changed. Only for range',
          template:
            "onCalendarChange(...args, extParams) {\n  // triggers when the calendar selected date is changed. Only for range\n  console.log('onCalendarChange', ...args)\n}",
        },
        {
          name: 'onPanelChange',
          description: 'triggers when the navigation button click.',
          template:
            "onPanelChange(...args, extParams) {\n  // triggers when the navigation button click.\n  console.log('onPanelChange', ...args)\n}",
        },
        {
          name: 'onVisibleChange',
          description:
            "triggers when the DatePicker's dropdown appears/disappears",
          template:
            "onVisibleChange(...args, extParams) {\n  // triggers when the DatePicker's dropdown appears/disappears\n  console.log('onVisibleChange', ...args)\n}",
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
      title: '日期选择器',
      screenshot: './screenshots/date-picker.webp',
      schema: {
        componentName: 'ElDatePicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

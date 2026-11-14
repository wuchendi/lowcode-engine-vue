import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (time-picker); see https://element-plus.org/zh-CN/component/time-picker.html
const meta = {
  componentName: 'ElTimePicker',
  title: '时间选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/time-picker.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值，如果它是数组，长度应该是 2',
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
            'zh-CN': '完全只读',
            'en-US': 'readonly',
          },
          tip: '完全只读',
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
            'zh-CN': '禁用',
            'en-US': 'disabled',
          },
          tip: '禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'editable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本框可输入',
            'en-US': 'editable',
          },
          tip: '文本框可输入',
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
            'zh-CN': '是否显示清除按钮',
            'en-US': 'clearable',
          },
          tip: '是否显示清除按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尺寸',
            'en-US': 'size',
          },
          tip: '输入框尺寸',
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
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '非范围选择时的占位内容',
            'en-US': 'placeholder',
          },
          tip: '非范围选择时的占位内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'startPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '范围选择时开始日期的占位内容',
            'en-US': 'startPlaceholder',
          },
          tip: '范围选择时开始日期的占位内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'endPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '范围选择时结束日期的占位内容',
            'en-US': 'endPlaceholder',
          },
          tip: '范围选择时结束日期的占位内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'isRange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为时间范围选择',
            'en-US': 'isRange',
          },
          tip: '是否为时间范围选择',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'arrowControl',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用箭头进行时间选择',
            'en-US': 'arrowControl',
          },
          tip: '是否使用箭头进行时间选择',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: 'TimePicker 下拉框的类名',
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
          tip: '为 TimePicke 的下拉菜单自定义样式',
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
            'zh-CN': '自定义 popper 选项',
            'en-US': 'popperOptions',
          },
          tip: '自定义 popper 选项，更多请参考 popper.js',
        },
        setter: 'JsonSetter',
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
        name: 'rangeSeparator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择范围时的分隔符',
            'en-US': 'rangeSeparator',
          },
          tip: '选择范围时的分隔符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示在输入框中的格式',
            'en-US': 'format',
          },
          tip: '显示在输入框中的格式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选',
            'en-US': 'defaultValue',
          },
          tip: '可选，选择器打开时默认显示的时间',
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
            'zh-CN': '可选',
            'en-US': 'valueFormat',
          },
          tip: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
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
          tip: '等价于原生 input id 属性',
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
          tip: '等价于原生 input name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'same as aria-label in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prefixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义前缀图标',
            'en-US': 'prefixIcon',
          },
          tip: '自定义前缀图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Clock',
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义清除图标',
            'en-US': 'clearIcon',
          },
          tip: '自定义清除图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'CircleClose',
      },
      {
        name: 'disabledHours',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁止选择部分小时选项',
            'en-US': 'disabledHours',
          },
          tip: '禁止选择部分小时选项',
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
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'disabledMinutes',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁止选择部分分钟选项',
            'en-US': 'disabledMinutes',
          },
          tip: '禁止选择部分分钟选项',
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
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'disabledSeconds',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁止选择部分秒选项',
            'en-US': 'disabledSeconds',
          },
          tip: '禁止选择部分秒选项',
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
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框的 tabindex',
            'en-US': 'tabindex',
          },
          tip: '输入框的 tabindex',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '0',
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
        name: 'saveOnBlur',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'saveOnBlur',
            'en-US': 'saveOnBlur',
          },
          tip: 'Whether to auto-fill the input with the current time on focus when no value is selected',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: 'triggers when user confirms the value',
          template:
            "onChange(...args, extParams) {\n  // triggers when user confirms the value\n  console.log('onChange', ...args)\n}",
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
          description:
            'triggers when the clear icon is clicked in a clearable TimePicker',
          template:
            "onClear(...args, extParams) {\n  // triggers when the clear icon is clicked in a clearable TimePicker\n  console.log('onClear', ...args)\n}",
        },
        {
          name: 'onVisibleChange',
          description:
            "triggers when the TimePicker's dropdown appears/disappears",
          template:
            "onVisibleChange(...args, extParams) {\n  // triggers when the TimePicker's dropdown appears/disappears\n  console.log('onVisibleChange', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '时间选择器',
      screenshot: './screenshots/time-picker.webp',
      schema: {
        componentName: 'ElTimePicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

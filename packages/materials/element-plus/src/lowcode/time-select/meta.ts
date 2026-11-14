import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (time-select); see https://element-plus.org/zh-CN/component/time-select.html
const meta = {
  componentName: 'ElTimeSelect',
  title: '时间选择',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/time-select.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中项绑定值',
            'en-US': 'v-model',
          },
          tip: '选中项绑定值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用状态',
            'en-US': 'disabled',
          },
          tip: '禁用状态',
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
        name: 'includeEndTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'includeEndTime',
            'en-US': 'includeEndTime',
          },
          tip: 'whether end is included in options',
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
        defaultValue: 'default',
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
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'same as name in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 主题',
            'en-US': 'effect',
          },
          tip: 'Tooltip 主题，内置了 dark / light 两种主题',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
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
        name: 'start',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开始时间',
            'en-US': 'start',
          },
          tip: '开始时间',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'end',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '结束时间',
            'en-US': 'end',
          },
          tip: '结束时间',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'step',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '间隔时间',
            'en-US': 'step',
          },
          tip: '间隔时间',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'minTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最早时间点',
            'en-US': 'minTime',
          },
          tip: '最早时间点，早于该时间的时间段将被禁用',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'maxTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最晚时间点',
            'en-US': 'maxTime',
          },
          tip: '最晚时间点，晚于该时间的时间段将被禁用',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置时间格式',
            'en-US': 'format',
          },
          tip: '设置时间格式',
        },
        setter: 'StringSetter',
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
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: "custom class name for TimeSelect's dropdown",
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
          tip: "custom style for TimeSelect's dropdown",
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '用户确认选定的值时触发',
          template:
            "onChange(...args, extParams) {\n  // 用户确认选定的值时触发\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: '在组件 Input 失去焦点时触发',
          template:
            "onBlur(...args, extParams) {\n  // 在组件 Input 失去焦点时触发\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: '在组件 Input 获得焦点时触发',
          template:
            "onFocus(...args, extParams) {\n  // 在组件 Input 获得焦点时触发\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onClear',
          description:
            'triggers when the clear icon is clicked in a clearable TimeSelect',
          template:
            "onClear(...args, extParams) {\n  // triggers when the clear icon is clicked in a clearable TimeSelect\n  console.log('onClear', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '时间选择',
      screenshot: './screenshots/time-select.webp',
      schema: {
        componentName: 'ElTimeSelect',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

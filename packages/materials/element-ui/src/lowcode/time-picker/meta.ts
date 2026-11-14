import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (time-picker); see https://element.eleme.cn/#/zh-CN/component/time-picker
const meta = {
  componentName: 'ElTimePicker',
  title: '时间选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/time-picker',
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
          tip: '绑定值',
        },
        setter: 'StringSetter',
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
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
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
            'zh-CN': '范围选择时开始日期的占位内容',
            'en-US': 'endPlaceholder',
          },
          tip: '范围选择时开始日期的占位内容',
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
          tip: '是否为时间范围选择，仅对有效',
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
          tip: '是否使用箭头进行时间选择，仅对有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对齐方式',
            'en-US': 'align',
          },
          tip: '对齐方式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
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
        name: 'pickerOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pickerOptions',
            'en-US': 'pickerOptions',
          },
          tip: '当前时间日期选择器特有的选项参考下表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        name: 'valueFormat',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选',
            'en-US': 'valueFormat',
          },
          tip: '可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象',
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
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生属性',
            'en-US': 'name',
          },
          tip: '原生属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prefixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义头部图标的类名',
            'en-US': 'prefixIcon',
          },
          tip: '自定义头部图标的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'el-icon-time',
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义清空图标的类名',
            'en-US': 'clearIcon',
          },
          tip: '自定义清空图标的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'el-icon-circle-close',
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

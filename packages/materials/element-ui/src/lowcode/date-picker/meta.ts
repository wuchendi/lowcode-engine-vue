import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (date-picker); see https://element.eleme.cn/#/zh-CN/component/date-picker
const meta = {
  componentName: 'ElDatePicker',
  title: '日期选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/date-picker',
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
            'zh-CN': '范围选择时结束日期的占位内容',
            'en-US': 'endPlaceholder',
          },
          tip: '范围选择时结束日期的占位内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示类型',
            'en-US': 'type',
          },
          tip: '显示类型',
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
                title: 'month',
                value: 'month',
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
                title: 'months',
                value: 'months',
              },
              {
                title: 'datetime',
                value: 'datetime',
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
            'zh-CN': '显示在输入框中的格式',
            'en-US': 'format',
          },
          tip: '显示在输入框中的格式',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'yyyy-MM-dd',
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
          tip: 'DatePicker 下拉框的类名',
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
        name: 'defaultTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultTime',
            'en-US': 'defaultTime',
          },
          tip: '范围选择时选中日期所使用的当日内具体时刻',
        },
        setter: [
          {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '数组',
                  value: '数组',
                },
                {
                  title: '每项值为字符串',
                  value: '每项值为字符串',
                },
                {
                  title: '形如`12:00:00',
                  value: '形如`12:00:00',
                },
                {
                  title: '第一项指定开始日期的时刻',
                  value: '第一项指定开始日期的时刻',
                },
                {
                  title: '第二项指定结束日期的时刻',
                  value: '第二项指定结束日期的时刻',
                },
              ],
            },
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
        name: 'unlinkPanels',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'unlinkPanels',
            'en-US': 'unlinkPanels',
          },
          tip: '在范围选择器里取消两个日期面板之间的联动',
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
            'zh-CN': '自定义头部图标的类名',
            'en-US': 'prefixIcon',
          },
          tip: '自定义头部图标的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'el-icon-date',
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
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入时是否触发表单的校验',
            'en-US': 'validateEvent',
          },
          tip: '输入时是否触发表单的校验',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'appendToBody',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendToBody',
            'en-US': 'appendToBody',
          },
          tip: 'DetePicker 自身是否插入至 body 元素上。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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

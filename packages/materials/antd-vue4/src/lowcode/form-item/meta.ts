import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (form); see https://antdv.com/components/form-cn
const meta = {
  componentName: 'AFormItem',
  title: '表单 FormItem',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/form-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoLink',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动关联表单域',
            'en-US': 'autoLink',
          },
          tip: '是否自动关联表单域，对于大部分情况都可以使用自动关联，如果不满足自动关联的条件，可以手动关联，参见下方注意事项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'colon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配合 label 属性使用',
            'en-US': 'colon',
          },
          tip: '配合 label 属性使用，表示是否显示 label 后面的冒号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '额外的提示信息',
            'en-US': 'extra',
          },
          tip: '额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hasFeedback',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hasFeedback',
            'en-US': 'hasFeedback',
          },
          tip: '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'help',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '提示信息',
            'en-US': 'help',
          },
          tip: '提示信息，如不设置，则会根据校验规则自动生成',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'htmlFor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'htmlFor',
            'en-US': 'htmlFor',
          },
          tip: '设置子元素 label htmlFor 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'label 标签的文本',
            'en-US': 'label',
          },
          tip: 'label 标签的文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签文本对齐方式',
            'en-US': 'labelAlign',
          },
          tip: '标签文本对齐方式',
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
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'labelCol',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'label 标签布局',
            'en-US': 'labelCol',
          },
          tip: 'label 标签布局，同  组件，设置 span offset 值，如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单域 model 字段',
            'en-US': 'name',
          },
          tip: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',
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
        name: 'required',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否必填',
            'en-US': 'required',
          },
          tip: '是否必填，如不设置，则会根据校验规则自动生成',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'rules',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单验证规则',
            'en-US': 'rules',
          },
          tip: '表单验证规则',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'tooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配置提示信息',
            'en-US': 'tooltip',
          },
          tip: '配置提示信息',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'validateFirst',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当某一规则校验不通过时',
            'en-US': 'validateFirst',
          },
          tip: '当某一规则校验不通过时，是否停止剩下的规则的校验。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'validateStatus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '校验状态',
            'en-US': 'validateStatus',
          },
          tip: "校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'",
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'validateTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置字段校验的时机',
            'en-US': 'validateTrigger',
          },
          tip: '设置字段校验的时机',
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
        defaultValue: 'change',
      },
      {
        name: 'wrapperCol',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '需要为输入控件设置布局样式时',
            'en-US': 'wrapperCol',
          },
          tip: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
        },
        setter: 'JsonSetter',
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
    component: {
      nestingRule: {
        parentWhitelist: ['AForm'],
      },
    },
  },
  snippets: [
    {
      title: '表单 FormItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AFormItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

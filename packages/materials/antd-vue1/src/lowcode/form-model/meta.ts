import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (form-model); see https://1x.antdv.com/components/form-model-cn/
const meta = {
  componentName: 'AFormModel',
  title: '表单',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://1x.antdv.com/components/form-model-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单数据对象',
            'en-US': 'model',
          },
          tip: '表单数据对象',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        name: 'hideRequiredMark',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏所有表单项的必选标记',
            'en-US': 'hideRequiredMark',
          },
          tip: '隐藏所有表单项的必选标记',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'labelAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelAlign',
            'en-US': 'labelAlign',
          },
          tip: 'label 标签的文本对齐方式',
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
        name: 'layout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单布局',
            'en-US': 'layout',
          },
          tip: '表单布局',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
              {
                title: 'inline',
                value: 'inline',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'horizontal',
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
      {
        name: 'colon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'colon',
            'en-US': 'colon',
          },
          tip: '配置 Form.Item 的 colon 的默认值 (只有在属性 layout 为 horizontal 时有效)',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'validateOnRuleChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'validateOnRuleChange',
            'en-US': 'validateOnRuleChange',
          },
          tip: '是否在 rules 属性改变后立即触发一次验证',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大长度',
            'en-US': 'max',
          },
          tip: '最大长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最小长度',
            'en-US': 'min',
          },
          tip: '最小长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onSubmit',
          description: '数据验证成功后回调事件',
          template:
            "onSubmit(extParams) {\n  // 数据验证成功后回调事件\n  console.log('onSubmit', extParams)\n}",
        },
        {
          name: 'onValidate',
          description: '任一表单项被校验后触发',
          template:
            "onValidate(extParams) {\n  // 任一表单项被校验后触发\n  console.log('onValidate', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '表单',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AFormModel',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

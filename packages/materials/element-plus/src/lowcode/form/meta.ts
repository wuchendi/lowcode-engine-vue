import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (form); see https://element-plus.org/zh-CN/component/form.html
const meta = {
  componentName: 'ElForm',
  title: '表单',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/form.html',
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
        name: 'inline',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '行内表单模式',
            'en-US': 'inline',
          },
          tip: '行内表单模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'labelPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单域标签的位置',
            'en-US': 'labelPosition',
          },
          tip: '表单域标签的位置，当设置为 left 或 right 时，则也需要设置 label-width 属性',
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
              {
                title: 'top',
                value: 'top',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签的长度',
            'en-US': 'labelWidth',
          },
          tip: '标签的长度，例如 &#39;50px&#39;。作为 Form 直接子元素的 form-item 会继承该值。可以使用 auto。',
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
      },
      {
        name: 'labelSuffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单域标签的后缀',
            'en-US': 'labelSuffix',
          },
          tip: '表单域标签的后缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hideRequiredAsterisk',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hideRequiredAsterisk',
            'en-US': 'hideRequiredAsterisk',
          },
          tip: '是否隐藏必填字段标签旁边的红色星号。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'requireAsteriskPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '星号的位置',
            'en-US': 'requireAsteriskPosition',
          },
          tip: '星号的位置。',
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
        defaultValue: 'left',
      },
      {
        name: 'showMessage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示校验错误信息',
            'en-US': 'showMessage',
          },
          tip: '是否显示校验错误信息',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'inlineMessage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否以行内形式展示校验信息',
            'en-US': 'inlineMessage',
          },
          tip: '是否以行内形式展示校验信息',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'statusIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'statusIcon',
            'en-US': 'statusIcon',
          },
          tip: '是否在输入框中显示校验结果反馈图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        defaultValue: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于控制该表单内组件的尺寸',
            'en-US': 'size',
          },
          tip: '用于控制该表单内组件的尺寸',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用该表单内的所有组件',
            'en-US': 'disabled',
          },
          tip: '是否禁用该表单内的所有组件。在 2.12.0 以前，如果设置为 true，它将覆盖内部组件的 disabled 属性。在 2.12.0 之后，内部组件的配置优先。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'scrollToError',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当校验失败时',
            'en-US': 'scrollToError',
          },
          tip: '当校验失败时，滚动到第一个错误表单项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'scrollIntoViewOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'scrollIntoViewOptions',
            'en-US': 'scrollIntoViewOptions',
          },
          tip: 'When validation fails, it scrolls to the first error item based on the scrollIntoView option. scrollIntoView.',
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
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onValidate',
          description: '任一表单项被校验后触发',
          template:
            "onValidate(...args, extParams) {\n  // 任一表单项被校验后触发\n  console.log('onValidate', ...args)\n}",
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
      title: '表单',
      screenshot: './screenshots/form.webp',
      schema: {
        componentName: 'ElForm',
        props: {
          labelWidth: '80px',
        },
        children: [
          {
            componentName: 'ElFormItem',
            props: {
              label: '名称',
            },
            children: [
              {
                componentName: 'ElInput',
                props: {},
              },
            ],
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

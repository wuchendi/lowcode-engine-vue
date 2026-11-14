import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (form); see https://element-plus.org/zh-CN/component/form.html
const meta = {
  componentName: 'ElFormItem',
  title: '表单 FormItem',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/form.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'prop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'model 的键名',
            'en-US': 'prop',
          },
          tip: 'model 的键名。它可以是属性的路径（如 a.b.0 或 [&#39;a&#39;, &#39;b&#39;, &#39;0&#39;]）。在使用了 validate、resetFields 的方法时，该属性是必填的。',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签文本',
            'en-US': 'label',
          },
          tip: '标签文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelPosition',
            'en-US': 'labelPosition',
          },
          tip: "Position of item label. If set to 'left' or 'right', label-width prop is also required. Default extend label-position of form.",
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
      },
      {
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签宽度',
            'en-US': 'labelWidth',
          },
          tip: '标签宽度，例如 &#39;50px&#39;。可以使用 auto。',
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
        name: 'required',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为必填项',
            'en-US': 'required',
          },
          tip: '是否为必填项，如不设置，则会根据校验规则确认',
        },
        setter: 'BoolSetter',
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
          tip: '表单验证规则, 具体配置见下表, 更多内容可以参考async-validator',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单域验证错误时的提示信息',
            'en-US': 'error',
          },
          tip: '表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
            'zh-CN': '是否在行内显示校验信息',
            'en-US': 'inlineMessage',
          },
          tip: '是否在行内显示校验信息',
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
          tip: '用于控制该表单域下组件的默认尺寸',
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
        name: 'for',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '和原生标签相同能力',
            'en-US': 'for',
          },
          tip: '和原生标签相同能力',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'validateStatus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'formitem 校验的状态',
            'en-US': 'validateStatus',
          },
          tip: 'formitem 校验的状态',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'validating',
                value: 'validating',
              },
              {
                title: 'success',
                value: 'success',
              },
            ],
          },
        },
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
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['ElForm'],
      },
    },
  },
  snippets: [
    {
      title: '表单 FormItem',
      screenshot: './screenshots/form-item.webp',
      schema: {
        componentName: 'ElFormItem',
        props: {},
        children: '表单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

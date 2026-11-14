import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (form); see https://element.eleme.cn/#/zh-CN/component/form
const meta = {
  componentName: 'ElFormItem',
  title: '表单 FormItem',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/form',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'prop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单域 model 字段',
            'en-US': 'prop',
          },
          tip: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',
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
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单域标签的的宽度',
            'en-US': 'labelWidth',
          },
          tip: "表单域标签的的宽度，例如 '50px'。支持 auto。",
        },
        setter: 'StringSetter',
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
        name: 'error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单域验证错误信息',
            'en-US': 'error',
          },
          tip: '表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息',
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
            'zh-CN': '以行内形式展示校验信息',
            'en-US': 'inlineMessage',
          },
          tip: '以行内形式展示校验信息',
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
            'zh-CN': '用于控制该表单域下组件的尺寸',
            'en-US': 'size',
          },
          tip: '用于控制该表单域下组件的尺寸',
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
        parentWhitelist: ['ElForm'],
      },
    },
  },
  snippets: [
    {
      title: '表单 FormItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElFormItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

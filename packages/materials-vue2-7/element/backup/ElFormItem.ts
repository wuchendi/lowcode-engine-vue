import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElFormItem: ComponentMetadata = {
  title: '表单项',
  group: '基础组件',
  category: 'Element 组件',
  priority: 1010,
  hidden: true,
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/form',
  componentName: 'ElFormItem',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'FormItem',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'prop',
        title: {
          label: '表单字段',
          tip: '对应表单数据 model 里的字段',
        },
        setter: 'StringSetter',
      },
      {
        name: 'label',
        title: '标签文本',
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'labelWidth',
        title: {
          label: '标签宽度',
          tip: '表单域标签的的宽度，例如 50p, 支持 auto。',
        },
        setter: 'StringSetter',
      },
      {
        name: 'required',
        title: '必填',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'rules',
        title: '校验规则',
        setter: 'JsonSetter',
      },
      {
        name: 'error',
        title: {
          label: '验证错误信息',
          tip: '表单域验证错误信息，设置该值会使表单验证状态变为error，并显示该错误信息',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'showMessage',
        title: '显示校验错误信息',
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        name: 'inlineMessage',
        title: '行内形式展示校验信息',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '默认',
                value: '',
              },
              {
                title: '中等',
                value: 'medium',
              },
              {
                title: '小型',
                value: 'small',
              },
              {
                title: '迷你',
                value: 'mini',
              },
            ],
          },
          initialValue: '',
        },
      },
    ],
    supports: {
      style: true,
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
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-item-1.jpg',
      title: '表单项',
      schema: {
        componentName: 'ElFormItem',
        props: {
          label: '表单项',
          prop: '',
          labelWidth: '',
          required: false,
          rules: [],
          error: '',
          showMessage: true,
          size: '',
          disabled: false,
        },
      },
    },
  ],
}

export default ElFormItem

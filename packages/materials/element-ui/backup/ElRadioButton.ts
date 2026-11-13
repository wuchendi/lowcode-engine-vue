import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElRadioButton: ComponentMetadata = {
  title: '单选框-按钮',
  group: '基础组件',
  category: 'Element 组件',
  hidden: true,
  priority: 1000,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/radio',
  componentName: 'ElRadioButton',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'RadioButton',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'children',
        title: '文本内容',
        setter: 'StringSetter',
      },
      {
        name: 'label',
        title: '选项值',
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
        ],
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: '原生属性',
        title: {
          label: '原生属性',
          tip: '原生 HTML 属性',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'name',
            title: 'name',
            setter: 'StringSetter',
          },
        ],
      },
    ],
    supports: {
      loop: true,
    },
  },
  snippets: [
    {
      title: '单选框-按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-1.png',
      schema: {
        componentName: 'ElRadioButton',
        props: {
          children: '选项一',
        },
      },
    },
  ],
}

export default ElRadioButton

import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElOption: ComponentMetadata = {
  title: '选择器-选项',
  group: '基础组件',
  category: 'Element 组件',
  hidden: true,
  priority: 1001,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/select',
  componentName: 'ElOption',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Option',
    destructuring: true,
  },
  props: [
    {
      name: 'value',
      description: '选项值',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'object'],
      },
    },
    {
      name: 'label',
      description: '选项的标签',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
    },
    {
      name: 'disabled',
      description: '禁用',
      propType: 'bool',
      defaultValue: false,
    },
  ],
  snippets: [
    {
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
      title: '选择器-选项',
      schema: {
        componentName: 'ElOption',
        props: {
          label: '选项',
          value: String(Math.floor(Math.random() * 10000)),
        },
      },
    },
  ],
}

export default ElOption

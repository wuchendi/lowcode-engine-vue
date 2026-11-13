import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '选择器-选项',
  group: 'Element 组件',
  category: 'Form',
  hidden: true,
  priority: 1001,
  docUrl: 'https://element.eleme.cn/2.14/#/zh-CN/component/select',
  componentName: 'ElOption',
  // npm: {
  //   package: 'element-ui',
  //   version: '2.30.6',
  //   exportName: 'Option',
  //   destructuring: true,
  // },
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

export default meta

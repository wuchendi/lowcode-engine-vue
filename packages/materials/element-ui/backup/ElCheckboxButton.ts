import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElRadio: ComponentMetadata = {
  title: '多选框-按钮',
  group: '基础组件',
  category: 'Element 组件',
  hidden: true,
  priority: 1000,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/checkbox',
  componentName: 'ElCheckboxButton',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'CheckboxButton',
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
      title: '多选框-按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-1.png',
      schema: {
        componentName: 'ElCheckboxButton',
        props: {
          label: '复选框',
        },
      },
    },
  ],
}
export default ElRadio

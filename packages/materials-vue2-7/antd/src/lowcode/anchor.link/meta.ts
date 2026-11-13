import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  group: 'Antd 组件',
  componentName: 'AAnchorLink',
  title: '锚点链接',
  category: '其他',
  // npm: {
  //   package: 'ant-design-vue',
  //   version: '1.7.8',
  //   exportName: 'Anchor',
  //   subName: 'Link',
  //   destructuring: true,
  // },
  configure: {
    props: [
      {
        name: 'href',
        title: { label: '锚点链接', tip: '锚点链接' },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'target',
        title: {
          label: 'target',
          tip: '该属性指定在何处显示链接的资源',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'title',
        title: { label: '内容', tip: '内容' },
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {
      style: true,
    },
  },
  snippets: [],
}

export default meta

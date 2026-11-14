import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (empty); see https://element.eleme.cn/#/zh-CN/component/empty
const meta = {
  componentName: 'ElEmpty',
  title: '空状态',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/empty',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'image',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片地址',
            'en-US': 'image',
          },
          tip: '图片地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'imageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片大小',
            'en-US': 'imageSize',
          },
          tip: '图片大小（宽度）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本描述',
            'en-US': 'description',
          },
          tip: '文本描述',
        },
        setter: 'StringSetter',
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
    },
  },
  snippets: [
    {
      title: '空状态',
      screenshot: './screenshots/empty.webp',
      schema: {
        componentName: 'ElEmpty',
        props: {},
        children: '空状态',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

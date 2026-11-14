import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (empty); see https://element-plus.org/zh-CN/component/empty.html
const meta = {
  componentName: 'ElEmpty',
  title: '空状态',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/empty.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'image',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'empty 组件的图像地址',
            'en-US': 'image',
          },
          tip: 'empty 组件的图像地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'imageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'empty 组件的图像尺寸',
            'en-US': 'imageSize',
          },
          tip: 'empty 组件的图像尺寸（宽度）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'empty 组件的描述信息',
            'en-US': 'description',
          },
          tip: 'empty 组件的描述信息',
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

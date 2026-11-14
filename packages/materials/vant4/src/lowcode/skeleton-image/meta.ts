import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (skeleton); see https://vant-ui.github.io/vant/#/zh-CN/skeleton
const meta = {
  componentName: 'VanSkeletonImage',
  title: '骨架屏 SkeletonImage',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/skeleton',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'imageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片占位图大小',
            'en-US': 'imageSize',
          },
          tip: '图片占位图大小',
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
        defaultValue: '32px',
      },
      {
        name: 'imageShape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片占位图形状',
            'en-US': 'imageShape',
          },
          tip: '图片占位图形状，可选值为 square',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'round',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '骨架屏 SkeletonImage',
      screenshot: './screenshots/skeleton-image.webp',
      schema: {
        componentName: 'VanSkeletonImage',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

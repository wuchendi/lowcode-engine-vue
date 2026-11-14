import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (skeleton); see https://vant-ui.github.io/vant/#/zh-CN/skeleton
const meta = {
  componentName: 'VanSkeletonTitle',
  title: '骨架屏 SkeletonTitle',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/skeleton',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否将标题显示为圆角风格',
            'en-US': 'round',
          },
          tip: '是否将标题显示为圆角风格',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'titleWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题占位图宽度',
            'en-US': 'titleWidth',
          },
          tip: '标题占位图宽度',
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
        defaultValue: '40%',
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
      title: '骨架屏 SkeletonTitle',
      screenshot: './screenshots/skeleton-title.webp',
      schema: {
        componentName: 'VanSkeletonTitle',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

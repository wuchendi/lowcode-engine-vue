import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (skeleton); see https://vant-ui.github.io/vant/#/zh-CN/skeleton
const meta = {
  componentName: 'VanSkeletonParagraph',
  title: '骨架屏 SkeletonParagraph',
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
            'zh-CN': '是否将段落显示为圆角风格',
            'en-US': 'round',
          },
          tip: '是否将段落显示为圆角风格',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'rowWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '段落占位图宽度',
            'en-US': 'rowWidth',
          },
          tip: '段落占位图宽度',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '100%',
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
      title: '骨架屏 SkeletonParagraph',
      screenshot: './screenshots/skeleton-paragraph.webp',
      schema: {
        componentName: 'VanSkeletonParagraph',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (skeleton); see https://vant-ui.github.io/vant/#/zh-CN/skeleton
const meta = {
  componentName: 'VanSkeletonAvatar',
  title: '骨架屏 SkeletonAvatar',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/skeleton',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'avatarSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '头像占位图大小',
            'en-US': 'avatarSize',
          },
          tip: '头像占位图大小',
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
        name: 'avatarShape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '头像占位图形状',
            'en-US': 'avatarShape',
          },
          tip: '头像占位图形状，可选值为 square',
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
      title: '骨架屏 SkeletonAvatar',
      screenshot: './screenshots/skeleton-avatar.webp',
      schema: {
        componentName: 'VanSkeletonAvatar',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

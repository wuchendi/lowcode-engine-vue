import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (skeleton); see https://antdv.com/components/skeleton-cn
const meta = {
  componentName: 'ASkeleton',
  title: '骨架屏',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://antdv.com/components/skeleton-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'active',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示动画效果',
            'en-US': 'active',
          },
          tip: '是否展示动画效果',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'avatar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示头像占位图',
            'en-US': 'avatar',
          },
          tip: '是否显示头像占位图',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '为 true 时',
            'en-US': 'loading',
          },
          tip: '为 true 时，显示占位图。反之则直接展示子组件',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'paragraph',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示段落占位图',
            'en-US': 'paragraph',
          },
          tip: '是否显示段落占位图',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示标题占位图',
            'en-US': 'title',
          },
          tip: '是否显示标题占位图',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
      title: '骨架屏',
      screenshot: './screenshots/skeleton.webp',
      schema: {
        componentName: 'ASkeleton',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

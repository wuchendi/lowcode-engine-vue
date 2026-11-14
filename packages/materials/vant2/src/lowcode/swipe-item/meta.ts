import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (swipe); see https://vant-ui.github.io/vant/v2/#/zh-CN/swipe
const meta = {
  componentName: 'VanSwipeItem',
  title: '轮播 SwipeItem',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/swipe',
  devMode: 'proCode',
  configure: {
    props: [],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(extParams) {\n  // 点击时触发\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['VanSwipe'],
      },
    },
  },
  snippets: [
    {
      title: '轮播 SwipeItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanSwipeItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

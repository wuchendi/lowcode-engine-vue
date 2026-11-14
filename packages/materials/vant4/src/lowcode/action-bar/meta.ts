import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (action-bar); see https://vant-ui.github.io/vant/#/zh-CN/action-bar
const meta = {
  componentName: 'VanActionBar',
  title: '动作栏',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/action-bar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'safeAreaInsetBottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启底部安全区适配',
            'en-US': 'safeAreaInsetBottom',
          },
          tip: '是否开启底部安全区适配',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placeholder',
            'en-US': 'placeholder',
          },
          tip: '是否在标签位置生成一个等高的占位元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      title: '动作栏',
      screenshot: './screenshots/action-bar.webp',
      schema: {
        componentName: 'VanActionBar',
        children: [
          {
            componentName: 'VanActionBarIcon',
            props: {
              icon: 'chat-o',
              text: '客服',
            },
          },
          {
            componentName: 'VanActionBarButton',
            props: {
              type: 'danger',
              text: '立即购买',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

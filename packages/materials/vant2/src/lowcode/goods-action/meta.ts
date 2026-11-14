import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (goods-action); see https://vant-ui.github.io/vant/v2/#/zh-CN/goods-action
const meta = {
  componentName: 'VanGoodsAction',
  title: '商品导航',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/goods-action',
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
      title: '商品导航',
      screenshot: './screenshots/goods-action.webp',
      schema: {
        componentName: 'VanGoodsAction',
        children: [
          {
            componentName: 'VanGoodsActionIcon',
            props: {
              icon: 'chat-o',
              text: '客服',
            },
          },
          {
            componentName: 'VanGoodsActionButton',
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

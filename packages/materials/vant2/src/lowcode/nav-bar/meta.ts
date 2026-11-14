import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (nav-bar); see https://vant-ui.github.io/vant/v2/#/zh-CN/nav-bar
const meta = {
  componentName: 'VanNavBar',
  title: '导航栏',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/nav-bar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'leftText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧文案',
            'en-US': 'leftText',
          },
          tip: '左侧文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rightText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧文案',
            'en-US': 'rightText',
          },
          tip: '右侧文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'leftArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示左侧箭头',
            'en-US': 'leftArrow',
          },
          tip: '是否显示左侧箭头',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示下边框',
            'en-US': 'border',
          },
          tip: '是否显示下边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'fixed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否固定在顶部',
            'en-US': 'fixed',
          },
          tip: '是否固定在顶部',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '固定在顶部时',
            'en-US': 'placeholder',
          },
          tip: '固定在顶部时，是否在标签位置生成一个等高的占位元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '导航栏 z-index',
            'en-US': 'zIndex',
          },
          tip: '导航栏 z-index',
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
        defaultValue: '1',
      },
      {
        name: 'safeAreaInsetTop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启顶部安全区适配',
            'en-US': 'safeAreaInsetTop',
          },
          tip: '是否开启顶部安全区适配',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'left',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义左侧区域内容',
            'en-US': 'left',
          },
          tip: '自定义左侧区域内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'right',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧区域内容',
            'en-US': 'right',
          },
          tip: '自定义右侧区域内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick-left',
          description: '点击左侧按钮时触发',
          template:
            "onClickLeft(extParams) {\n  // 点击左侧按钮时触发\n  console.log('onClickLeft', extParams)\n}",
        },
        {
          name: 'onClick-right',
          description: '点击右侧按钮时触发',
          template:
            "onClickRight(extParams) {\n  // 点击右侧按钮时触发\n  console.log('onClickRight', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '导航栏',
      screenshot: './screenshots/nav-bar.webp',
      schema: {
        componentName: 'VanNavBar',
        props: {
          title: '导航栏',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

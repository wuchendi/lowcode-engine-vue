import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (tabbar); see https://vant-ui.github.io/vant/v2/#/zh-CN/tabbar
const meta = {
  componentName: 'VanTabbar',
  title: '标签栏',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/tabbar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中标签的名称或索引值',
            'en-US': 'v-model',
          },
          tip: '当前选中标签的名称或索引值',
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
        defaultValue: '0',
      },
      {
        name: 'fixed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否固定在底部',
            'en-US': 'fixed',
          },
          tip: '是否固定在底部',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示外边框',
            'en-US': 'border',
          },
          tip: '是否显示外边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '元素 z-index',
            'en-US': 'zIndex',
          },
          tip: '元素 z-index',
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
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中标签的颜色',
            'en-US': 'activeColor',
          },
          tip: '选中标签的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'inactiveColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未选中标签的颜色',
            'en-US': 'inactiveColor',
          },
          tip: '未选中标签的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#7d7e80',
      },
      {
        name: 'route',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启路由模式',
            'en-US': 'route',
          },
          tip: '是否开启路由模式',
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
            'zh-CN': '固定在底部时',
            'en-US': 'placeholder',
          },
          tip: '固定在底部时，是否在标签位置生成一个等高的占位元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'safeAreaInsetBottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启底部安全区适配',
            'en-US': 'safeAreaInsetBottom',
          },
          tip: '是否开启底部安全区适配，设置 fixed 时默认开启',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'beforeChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '切换标签前的回调函数',
            'en-US': 'beforeChange',
          },
          tip: '切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '切换标签时触发',
          template:
            "onChange(extParams) {\n  // 切换标签时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '标签栏',
      screenshot: './screenshots/tabbar.webp',
      schema: {
        componentName: 'VanTabbar',
        children: [
          {
            componentName: 'VanTabbarItem',
            props: {
              icon: 'home-o',
            },
            children: '首页',
          },
          {
            componentName: 'VanTabbarItem',
            props: {
              icon: 'user-o',
            },
            children: '我的',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

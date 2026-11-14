import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (config-provider); see https://vant-ui.github.io/vant/#/zh-CN/config-provider
const meta = {
  componentName: 'VanConfigProvider',
  title: '全局配置',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/config-provider',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'theme',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '主题风格',
            'en-US': 'theme',
          },
          tip: '主题风格，设置为 dark 来开启深色模式，全局生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'themeVars',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义主题变量',
            'en-US': 'themeVars',
          },
          tip: '自定义主题变量，局部生效',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'themeVarsDark',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '仅在深色模式下生效的主题变量',
            'en-US': 'themeVarsDark',
          },
          tip: '仅在深色模式下生效的主题变量，优先级高于 theme-vars',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'themeVarsLight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '仅在浅色模式下生效的主题变量',
            'en-US': 'themeVarsLight',
          },
          tip: '仅在浅色模式下生效的主题变量，优先级高于 theme-vars',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'themeVarsScope',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认仅影响子组件的样式',
            'en-US': 'themeVarsScope',
          },
          tip: '默认仅影响子组件的样式，设置为 global 整个页面生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'local',
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tag',
            'en-US': 'tag',
          },
          tip: '根节点对应的 HTML 标签名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'div',
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '设置所有弹窗类组件的 z-index，该属性对全局生效',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 2000,
      },
      {
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '所有图标的类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '所有图标的类名前缀，等同于 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
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
      title: '全局配置',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanConfigProvider',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

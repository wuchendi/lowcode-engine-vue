import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (tab); see https://vant-ui.github.io/vant/v2/#/zh-CN/tab
const meta = {
  componentName: 'VanTab',
  title: '标签页 Tab',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/tab',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用标签',
            'en-US': 'disabled',
          },
          tip: '是否禁用标签',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在标题右上角显示小红点',
            'en-US': 'dot',
          },
          tip: '是否在标题右上角显示小红点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'badge',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标右上角徽标的内容',
            'en-US': 'badge',
          },
          tip: '图标右上角徽标的内容',
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
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签名称',
            'en-US': 'name',
          },
          tip: '标签名称，作为匹配的标识符',
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
      },
      {
        name: 'url',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的链接地址',
            'en-US': 'url',
          },
          tip: '点击后跳转的链接地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'to',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的目标路由对象',
            'en-US': 'to',
          },
          tip: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'replace',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在跳转时替换当前页面历史',
            'en-US': 'replace',
          },
          tip: '是否在跳转时替换当前页面历史',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'titleStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标题样式',
            'en-US': 'titleStyle',
          },
          tip: '自定义标题样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'titleClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标题类名',
            'en-US': 'titleClass',
          },
          tip: '自定义标题类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['VanTabs'],
      },
    },
  },
  snippets: [
    {
      title: '标签页 Tab',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanTab',
        props: {
          title: '标签',
        },
        children: [
          {
            componentName: 'div',
            props: {},
            children: '内容',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

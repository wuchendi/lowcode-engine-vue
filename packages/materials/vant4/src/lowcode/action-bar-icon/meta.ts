import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (action-bar); see https://vant-ui.github.io/vant/#/zh-CN/action-bar
const meta = {
  componentName: 'VanActionBarIcon',
  title: '动作栏 ActionBarIcon',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/action-bar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮文字',
            'en-US': 'text',
          },
          tip: '按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标',
            'en-US': 'icon',
          },
          tip: '图标',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'vant',
          },
        },
        supportVariable: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标颜色',
            'en-US': 'color',
          },
          tip: '图标颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#323233',
      },
      {
        name: 'iconClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标额外类名',
            'en-US': 'iconClass',
          },
          tip: '图标额外类名',
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
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '图标类名前缀，等同于 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示图标右上角小红点',
            'en-US': 'dot',
          },
          tip: '是否显示图标右上角小红点',
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
        name: 'badgeProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义徽标的属性',
            'en-US': 'badgeProps',
          },
          tip: '自定义徽标的属性，传入的对象会被透传给 Badge 组件的 props',
        },
        setter: 'JsonSetter',
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
          tip: '点击后跳转的目标路由对象，等同于 Vue Router 的 to 属性',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用图标',
            'en-US': 'disabled',
          },
          tip: '是否禁用图标',
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
      title: '动作栏 ActionBarIcon',
      screenshot: './screenshots/action-bar-icon.webp',
      schema: {
        componentName: 'VanActionBarIcon',
        props: {
          text: '动作栏',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

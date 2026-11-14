import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (sidebar); see https://vant-ui.github.io/vant/#/zh-CN/sidebar
const meta = {
  componentName: 'VanSidebarItem',
  title: '侧边导航 SidebarItem',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/sidebar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容',
            'en-US': 'title',
          },
          tip: '内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示右上角小红点',
            'en-US': 'dot',
          },
          tip: '是否显示右上角小红点',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用该项',
            'en-US': 'disabled',
          },
          tip: '是否禁用该项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
    ],
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
        parentWhitelist: ['VanSidebar'],
      },
    },
  },
  snippets: [
    {
      title: '侧边导航 SidebarItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanSidebarItem',
        props: {
          title: '侧边导航',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (menu); see https://element.eleme.cn/#/zh-CN/component/menu
const meta = {
  componentName: 'ElMenuItem',
  title: '导航菜单 MenuItem',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/menu',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'index',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '唯一标志',
            'en-US': 'index',
          },
          tip: '唯一标志',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'route',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'route',
            'en-US': 'route',
          },
          tip: 'Vue Router 路径对象',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
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
    component: {
      nestingRule: {
        parentWhitelist: ['ElMenu', 'ElSubmenu', 'ElMenuItemGroup'],
      },
    },
  },
  snippets: [
    {
      title: '导航菜单 MenuItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElMenuItem',
        props: {},
        children: '导航菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

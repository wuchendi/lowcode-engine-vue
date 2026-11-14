import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (menu); see https://element.eleme.cn/#/zh-CN/component/menu
const meta = {
  componentName: 'ElMenuItemGroup',
  title: '导航菜单 MenuItemGroup',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/menu',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分组标题',
            'en-US': 'title',
          },
          tip: '分组标题',
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
      nestingRule: {
        parentWhitelist: ['ElMenu', 'ElSubmenu'],
      },
    },
  },
  snippets: [
    {
      title: '导航菜单 MenuItemGroup',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElMenuItemGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

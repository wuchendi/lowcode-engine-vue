import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (menu); see https://element-plus.org/zh-CN/component/menu.html
const meta = {
  componentName: 'ElMenuItemGroup',
  title: '菜单 MenuItemGroup',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/menu.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '组标题',
            'en-US': 'title',
          },
          tip: '组标题',
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
        parentWhitelist: ['ElMenu', 'ElSubMenu'],
      },
    },
  },
  snippets: [
    {
      title: '菜单 MenuItemGroup',
      screenshot: './screenshots/menu-item-group.webp',
      schema: {
        componentName: 'ElMenuItemGroup',
        props: {},
        children: '菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (menu); see https://antdv.com/components/menu-cn
const meta = {
  componentName: 'AMenuItemGroup',
  title: '导航菜单 MenuItemGroup',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/menu-cn',
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
        parentWhitelist: ['AMenu', 'ASubMenu'],
      },
    },
  },
  snippets: [
    {
      title: '导航菜单 MenuItemGroup',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AMenuItemGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

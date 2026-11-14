import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (menu); see https://antdv.com/components/menu-cn
const meta = {
  componentName: 'AMenuDivider',
  title: '导航菜单 MenuDivider',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/menu-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'dashed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否虚线',
            'en-US': 'dashed',
          },
          tip: '是否虚线',
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
        parentWhitelist: ['AMenu', 'ASubMenu', 'AMenuItemGroup'],
      },
    },
  },
  snippets: [
    {
      title: '导航菜单 MenuDivider',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AMenuDivider',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

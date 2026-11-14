import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (menu); see https://1x.antdv.com/components/menu-cn/
const meta = {
  componentName: 'AMenuItem',
  title: '导航菜单 Item',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://1x.antdv.com/components/menu-cn/',
  devMode: 'proCode',
  configure: {
    props: [
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
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置收缩时展示的悬浮标题',
            'en-US': 'title',
          },
          tip: '设置收缩时展示的悬浮标题',
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
        parentWhitelist: ['AMenu', 'AMenuSubMenu', 'AMenuItemGroup'],
      },
    },
  },
  snippets: [
    {
      title: '导航菜单 Item',
      screenshot: './screenshots/menu-item.webp',
      schema: {
        componentName: 'AMenuItem',
        props: {},
        children: '导航菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

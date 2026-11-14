import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (menu); see https://1x.antdv.com/components/menu-cn/
const meta = {
  componentName: 'AMenuSubMenu',
  title: '导航菜单 SubMenu',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://1x.antdv.com/components/menu-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'popupClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子菜单样式',
            'en-US': 'popupClassName',
          },
          tip: '子菜单样式',
        },
        setter: 'StringSetter',
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
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子菜单项值',
            'en-US': 'title',
          },
          tip: '子菜单项值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onTitleClick',
          description: '点击子菜单标题',
          template:
            "onTitleClick(extParams) {\n  // 点击子菜单标题\n  console.log('onTitleClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['AMenu', 'AMenuItemGroup'],
      },
    },
  },
  snippets: [
    {
      title: '导航菜单 SubMenu',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AMenuSubMenu',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

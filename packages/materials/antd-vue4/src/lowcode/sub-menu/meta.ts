import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (menu); see https://antdv.com/components/menu-cn
const meta = {
  componentName: 'ASubMenu',
  title: '导航菜单 SubMenu',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/menu-cn',
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
        name: 'expandIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandIcon',
            'en-US': 'expandIcon',
          },
          tip: '自定义 Menu 展开收起图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单图标',
            'en-US': 'icon',
          },
          tip: '菜单图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
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
        name: 'popupOffset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子菜单偏移量',
            'en-US': 'popupOffset',
          },
          tip: '子菜单偏移量，mode="inline" 时无效',
        },
        setter: 'NumberSetter',
        supportVariable: true,
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
        componentName: 'ASubMenu',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (menu); see https://element.eleme.cn/#/zh-CN/component/menu
const meta = {
  componentName: 'ElSubmenu',
  title: '导航菜单 Submenu',
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
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出菜单的自定义类名',
            'en-US': 'popperClass',
          },
          tip: '弹出菜单的自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showTimeout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showTimeout',
            'en-US': 'showTimeout',
          },
          tip: '展开 sub-menu 的延时',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'hideTimeout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hideTimeout',
            'en-US': 'hideTimeout',
          },
          tip: '收起 sub-menu 的延时',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
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
        name: 'popperAppendToBody',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperAppendToBody',
            'en-US': 'popperAppendToBody',
          },
          tip: '是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性',
        },
        setter: 'BoolSetter',
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
        parentWhitelist: ['ElMenu', 'ElMenuItemGroup'],
      },
    },
  },
  snippets: [
    {
      title: '导航菜单 Submenu',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElSubmenu',
        props: {
          index: '',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

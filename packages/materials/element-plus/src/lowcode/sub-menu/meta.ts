import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (menu); see https://element-plus.org/zh-CN/component/menu.html
const meta = {
  componentName: 'ElSubMenu',
  title: '菜单 SubMenu',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/menu.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'index',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'index',
            'en-US': 'index',
          },
          tip: 'unique identification',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '为 popper 添加类名',
            'en-US': 'popperClass',
          },
          tip: '为 popper 添加类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperStyle',
            'en-US': 'popperStyle',
          },
          tip: 'custom style for the popup menu',
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
        name: 'showTimeout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子菜单出现之前的延迟',
            'en-US': 'showTimeout',
          },
          tip: '子菜单出现之前的延迟，(继承 menu 的 show-timeout 配置)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'hideTimeout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子菜单消失之前的延迟',
            'en-US': 'hideTimeout',
          },
          tip: '子菜单消失之前的延迟，(继承 menu 的 hide-timeout 配置)',
        },
        setter: 'NumberSetter',
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
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: '是否将弹出菜单挂载到 body 上，第一级SubMenu默认值为 true，其他SubMenus 的值为 false',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'popperOffset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出窗口的偏移量',
            'en-US': 'popperOffset',
          },
          tip: '弹出窗口的偏移量 (覆盖 popper的菜单)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'expandCloseIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandCloseIcon',
            'en-US': 'expandCloseIcon',
          },
          tip: '父菜单展开且子菜单关闭时的图标， expand-close-icon 和 expand-open-icon 需要一起配置才能生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'expandOpenIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandOpenIcon',
            'en-US': 'expandOpenIcon',
          },
          tip: '父菜单展开且子菜单打开时的图标， expand-open-icon 和 expand-close-icon 需要一起配置才能生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'collapseCloseIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseCloseIcon',
            'en-US': 'collapseCloseIcon',
          },
          tip: '父菜单收起且子菜单关闭时的图标， collapse-close-icon 和 collapse-open-icon 需要一起配置才能生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'collapseOpenIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseOpenIcon',
            'en-US': 'collapseOpenIcon',
          },
          tip: '父菜单收起且子菜单打开时的图标， collapse-open-icon 和 collapse-close-icon 需要一起配置才能生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标题内容',
            'en-US': 'title',
          },
          tip: '自定义标题内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
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
        parentWhitelist: ['ElMenu', 'ElMenuItemGroup'],
      },
    },
  },
  snippets: [
    {
      title: '菜单 SubMenu',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElSubMenu',
        props: {
          index: '',
        },
        children: '菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

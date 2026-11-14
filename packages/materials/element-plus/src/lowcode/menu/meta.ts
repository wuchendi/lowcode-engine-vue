import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (menu); see https://element-plus.org/zh-CN/component/menu.html
const meta = {
  componentName: 'ElMenu',
  title: '菜单',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/menu.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单展示模式',
            'en-US': 'mode',
          },
          tip: '菜单展示模式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'vertical',
      },
      {
        name: 'collapse',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否水平折叠收起菜单',
            'en-US': 'collapse',
          },
          tip: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'ellipsis',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否省略多余的子项',
            'en-US': 'ellipsis',
          },
          tip: '是否省略多余的子项（仅在横向模式生效）',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'ellipsisIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ellipsisIcon',
            'en-US': 'ellipsisIcon',
          },
          tip: 'custom ellipsis icon (available only in horizontal mode and ellipsis is true)',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperOffset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperOffset',
            'en-US': 'popperOffset',
          },
          tip: 'offset of the popper (effective for all submenus)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 6,
      },
      {
        name: 'defaultActive',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultActive',
            'en-US': 'defaultActive',
          },
          tip: '页面加载时默认激活菜单的 index',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultOpeneds',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultOpeneds',
            'en-US': 'defaultOpeneds',
          },
          tip: '默认打开的 sub-menu 的 index 的数组',
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
        name: 'uniqueOpened',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否只保持一个子菜单的展开',
            'en-US': 'uniqueOpened',
          },
          tip: '是否只保持一个子菜单的展开',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'menuTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子菜单打开的触发方式',
            'en-US': 'menuTrigger',
          },
          tip: '子菜单打开的触发方式，只在 mode 为 horizontal 时有效。',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'hover',
                value: 'hover',
              },
              {
                title: 'click',
                value: 'click',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'router',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'router',
            'en-US': 'router',
          },
          tip: '是否启用 vue-router 模式。启用该模式会在激活导航时以 index 作为 path 进行路由跳转使用 default-active 来设置加载时的激活项。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'collapseTransition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启折叠动画',
            'en-US': 'collapseTransition',
          },
          tip: '是否开启折叠动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'popperEffect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperEffect',
            'en-US': 'popperEffect',
          },
          tip: 'Tooltip theme, built-in theme: dark / light when menu is collapsed',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'dark',
      },
      {
        name: 'closeOnClickOutside',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnClickOutside',
            'en-US': 'closeOnClickOutside',
          },
          tip: 'optional, whether menu is collapsed when clicking outside',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: "custom class name for all popup menus and titles' tooltips",
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
          tip: "custom style for all popup menus and titles' tooltips",
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
            'zh-CN': 'showTimeout',
            'en-US': 'showTimeout',
          },
          tip: 'control timeout for all menus before showing',
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
          tip: 'control timeout for all menus before hiding',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: 'when menu inactive and persistent is false , dropdown menu will be destroyed',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onSelect',
          description: '菜单激活回调',
          template:
            "onSelect(...args, extParams) {\n  // 菜单激活回调\n  console.log('onSelect', ...args)\n}",
        },
        {
          name: 'onOpen',
          description: 'sub-menu 展开的回调',
          template:
            "onOpen(...args, extParams) {\n  // sub-menu 展开的回调\n  console.log('onOpen', ...args)\n}",
        },
        {
          name: 'onClose',
          description: 'sub-menu 收起的回调',
          template:
            "onClose(...args, extParams) {\n  // sub-menu 收起的回调\n  console.log('onClose', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '菜单',
      screenshot: './screenshots/menu.webp',
      schema: {
        componentName: 'ElMenu',
        props: {
          mode: 'horizontal',
        },
        children: [
          {
            componentName: 'ElMenuItem',
            props: {
              index: '1',
            },
            children: '菜单一',
          },
          {
            componentName: 'ElMenuItem',
            props: {
              index: '2',
            },
            children: '菜单二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

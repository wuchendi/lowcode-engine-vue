import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (menu); see https://element.eleme.cn/#/zh-CN/component/menu
const meta = {
  componentName: 'ElMenu',
  title: '导航菜单',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/menu',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '模式',
            'en-US': 'mode',
          },
          tip: '模式',
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
        name: 'backgroundColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单的背景色',
            'en-US': 'backgroundColor',
          },
          tip: '菜单的背景色（仅支持 hex 格式）',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ffffff',
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单的文字颜色',
            'en-US': 'textColor',
          },
          tip: '菜单的文字颜色（仅支持 hex 格式）',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#303133',
      },
      {
        name: 'activeTextColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前激活菜单的文字颜色',
            'en-US': 'activeTextColor',
          },
          tip: '当前激活菜单的文字颜色（仅支持 hex 格式）',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#409EFF',
      },
      {
        name: 'defaultActive',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前激活菜单的 index',
            'en-US': 'defaultActive',
          },
          tip: '当前激活菜单的 index',
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
          tip: '当前打开的 sub-menu 的 index 的数组',
        },
        setter: 'JsonSetter',
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
          tip: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
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
          tip: '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onSelect',
          description: '菜单激活回调',
          template:
            "onSelect(extParams) {\n  // 菜单激活回调\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: 'sub-menu 展开的回调',
          template:
            "onOpen(extParams) {\n  // sub-menu 展开的回调\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: 'sub-menu 收起的回调',
          template:
            "onClose(extParams) {\n  // sub-menu 收起的回调\n  console.log('onClose', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '导航菜单',
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

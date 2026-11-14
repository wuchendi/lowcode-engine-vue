import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (menu); see https://element-plus.org/zh-CN/component/menu.html
const meta = {
  componentName: 'ElMenuItem',
  title: '菜单 MenuItem',
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
        name: 'route',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'route',
            'en-US': 'route',
          },
          tip: 'Vue Route 路由位置参数',
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
      events: [
        {
          name: 'onClick',
          description: '点击菜单项时回调函数, 参数为菜单项实例',
          template:
            "onClick(...args, extParams) {\n  // 点击菜单项时回调函数, 参数为菜单项实例\n  console.log('onClick', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['ElMenu', 'ElSubMenu', 'ElMenuItemGroup'],
      },
    },
  },
  snippets: [
    {
      title: '菜单 MenuItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElMenuItem',
        props: {
          index: '',
        },
        children: '菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

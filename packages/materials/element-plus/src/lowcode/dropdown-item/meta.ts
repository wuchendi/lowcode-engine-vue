import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (dropdown); see https://element-plus.org/zh-CN/component/dropdown.html
const meta = {
  componentName: 'ElDropdownItem',
  title: '下拉菜单 DropdownItem',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/dropdown.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'command',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'command',
            'en-US': 'command',
          },
          tip: '派发到command回调函数的指令参数',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
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
        name: 'divided',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示分隔符',
            'en-US': 'divided',
          },
          tip: '是否显示分隔符',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标',
        },
        setter: 'CIconSetter',
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
        parentWhitelist: ['ElDropdownMenu'],
      },
    },
  },
  snippets: [
    {
      title: '下拉菜单 DropdownItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDropdownItem',
        props: {},
        children: '下拉菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

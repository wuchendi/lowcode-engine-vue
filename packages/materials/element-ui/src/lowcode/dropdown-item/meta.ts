import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (dropdown); see https://element.eleme.cn/#/zh-CN/component/dropdown
const meta = {
  componentName: 'ElDropdownItem',
  title: '下拉菜单 DropdownItem',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/dropdown',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'command',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指令',
            'en-US': 'command',
          },
          tip: '指令',
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
            'zh-CN': '禁用',
            'en-US': 'disabled',
          },
          tip: '禁用',
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
            'zh-CN': '显示分割线',
            'en-US': 'divided',
          },
          tip: '显示分割线',
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
            'zh-CN': '图标类名',
            'en-US': 'icon',
          },
          tip: '图标类名',
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
        parentWhitelist: ['ElDropdown'],
      },
    },
  },
  snippets: [
    {
      title: '下拉菜单 DropdownItem',
      screenshot: './screenshots/dropdown-item.webp',
      schema: {
        componentName: 'ElDropdownItem',
        props: {},
        children: '下拉菜单',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

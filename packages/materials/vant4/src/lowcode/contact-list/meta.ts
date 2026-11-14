import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (contact-list); see https://vant-ui.github.io/vant/#/zh-CN/contact-list
const meta = {
  componentName: 'VanContactList',
  title: '联系人列表',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/contact-list',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中联系人的 id',
            'en-US': 'v-model',
          },
          tip: '当前选中联系人的 id',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'list',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '联系人列表',
            'en-US': 'list',
          },
          tip: '联系人列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'addText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '新建按钮文案',
            'en-US': 'addText',
          },
          tip: '新建按钮文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultTagText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认联系人标签文案',
            'en-US': 'defaultTagText',
          },
          tip: '默认联系人标签文案',
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
          name: 'onAdd',
          description: '点击新增按钮时触发',
          template:
            "onAdd(extParams) {\n  // 点击新增按钮时触发\n  console.log('onAdd', extParams)\n}",
        },
        {
          name: 'onEdit',
          description: '点击编辑按钮时触发',
          template:
            "onEdit(extParams) {\n  // 点击编辑按钮时触发\n  console.log('onEdit', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '切换选中的联系人时触发',
          template:
            "onSelect(extParams) {\n  // 切换选中的联系人时触发\n  console.log('onSelect', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '联系人列表',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanContactList',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

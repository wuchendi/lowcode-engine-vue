import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (contact-card); see https://vant-ui.github.io/vant/#/zh-CN/contact-card
const meta = {
  componentName: 'VanContactCard',
  title: '联系人卡片',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/contact-card',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片类型',
            'en-US': 'type',
          },
          tip: '卡片类型，可选值为 edit',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'add',
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '联系人姓名',
            'en-US': 'name',
          },
          tip: '联系人姓名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '联系人手机号',
            'en-US': 'tel',
          },
          tip: '联系人手机号',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'addText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '添加时的文案提示',
            'en-US': 'addText',
          },
          tip: '添加时的文案提示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'editable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以编辑联系人',
            'en-US': 'editable',
          },
          tip: '是否可以编辑联系人',
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
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(extParams) {\n  // 点击时触发\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '联系人卡片',
      screenshot: './screenshots/contact-card.webp',
      schema: {
        componentName: 'VanContactCard',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

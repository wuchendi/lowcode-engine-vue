import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (contact-edit); see https://vant-ui.github.io/vant/#/zh-CN/contact-edit
const meta = {
  componentName: 'VanContactEdit',
  title: '联系人编辑',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/contact-edit',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'contactInfo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '联系人信息',
            'en-US': 'contactInfo',
          },
          tip: '联系人信息',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'isEdit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为编辑联系人',
            'en-US': 'isEdit',
          },
          tip: '是否为编辑联系人',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'isSaving',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示保存按钮加载动画',
            'en-US': 'isSaving',
          },
          tip: '是否显示保存按钮加载动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'isDeleting',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示删除按钮加载动画',
            'en-US': 'isDeleting',
          },
          tip: '是否显示删除按钮加载动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'telValidator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '手机号格式校验函数',
            'en-US': 'telValidator',
          },
          tip: '手机号格式校验函数',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'showSetDefault',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示默认联系人栏',
            'en-US': 'showSetDefault',
          },
          tip: '是否显示默认联系人栏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'setDefaultLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认联系人栏文案',
            'en-US': 'setDefaultLabel',
          },
          tip: '默认联系人栏文案',
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
          name: 'onSave',
          description: '点击保存按钮时触发',
          template:
            "onSave(extParams) {\n  // 点击保存按钮时触发\n  console.log('onSave', extParams)\n}",
        },
        {
          name: 'onDelete',
          description: '点击删除按钮时触发',
          template:
            "onDelete(extParams) {\n  // 点击删除按钮时触发\n  console.log('onDelete', extParams)\n}",
        },
        {
          name: 'onChangeDefault',
          description: '切换是否为默认联系人时触发',
          template:
            "onChangeDefault(extParams) {\n  // 切换是否为默认联系人时触发\n  console.log('onChangeDefault', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '联系人编辑',
      screenshot: './screenshots/contact-edit.webp',
      schema: {
        componentName: 'VanContactEdit',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (password-input); see https://vant-ui.github.io/vant/v2/#/zh-CN/password-input
const meta = {
  componentName: 'VanPasswordInput',
  title: '密码输入框',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/password-input',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '密码值',
            'en-US': 'value',
          },
          tip: '密码值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'info',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框下方文字提示',
            'en-US': 'info',
          },
          tip: '输入框下方文字提示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'errorInfo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框下方错误提示',
            'en-US': 'errorInfo',
          },
          tip: '输入框下方错误提示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'length',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '密码最大长度',
            'en-US': 'length',
          },
          tip: '密码最大长度',
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
        defaultValue: '6',
      },
      {
        name: 'gutter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框格子之间的间距',
            'en-US': 'gutter',
          },
          tip: '输入框格子之间的间距，如 20px 2em，默认单位为px',
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
        defaultValue: '0',
      },
      {
        name: 'mask',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否隐藏密码内容',
            'en-US': 'mask',
          },
          tip: '是否隐藏密码内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'focused',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否已聚焦',
            'en-US': 'focused',
          },
          tip: '是否已聚焦，聚焦时会显示光标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onFocus',
          description: '输入框聚焦时触发',
          template:
            "onFocus(extParams) {\n  // 输入框聚焦时触发\n  console.log('onFocus', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '密码输入框',
      screenshot: './screenshots/password-input.webp',
      schema: {
        componentName: 'VanPasswordInput',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

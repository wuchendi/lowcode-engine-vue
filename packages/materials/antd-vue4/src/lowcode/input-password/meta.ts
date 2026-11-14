import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (input); see https://antdv.com/components/input-cn
const meta = {
  componentName: 'AInputPassword',
  title: '输入框 InputPassword',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/input-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:visible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '密码是否可见',
            'en-US': 'v-model:visible',
          },
          tip: '密码是否可见',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'iconRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义切换按钮',
            'en-US': 'iconRender',
          },
          tip: '自定义切换按钮',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'visibilityToggle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'visibilityToggle',
            'en-US': 'visibilityToggle',
          },
          tip: '是否显示切换按钮或者控制密码显隐',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '输入框 InputPassword',
      screenshot: './screenshots/input-password.webp',
      schema: {
        componentName: 'AInputPassword',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

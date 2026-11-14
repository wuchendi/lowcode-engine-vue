import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (input); see https://1x.antdv.com/components/input-cn/
const meta = {
  componentName: 'AInputPassword',
  title: '输入框 Password',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/input-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'visibilityToggle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示切换按钮',
            'en-US': 'visibilityToggle',
          },
          tip: '是否显示切换按钮',
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
      title: '输入框 Password',
      screenshot: './screenshots/input-password.webp',
      schema: {
        componentName: 'AInputPassword',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

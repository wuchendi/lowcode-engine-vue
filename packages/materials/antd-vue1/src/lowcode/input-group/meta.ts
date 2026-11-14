import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (input); see https://1x.antdv.com/components/input-cn/
const meta = {
  componentName: 'AInputGroup',
  title: '输入框 Group',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/input-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'compact',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否用紧凑模式',
            'en-US': 'compact',
          },
          tip: '是否用紧凑模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'Input.Group 中所有的 Input 的大小，可选 large default small',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
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
      title: '输入框 Group',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AInputGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

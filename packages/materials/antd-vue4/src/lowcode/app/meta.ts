import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (app); see https://antdv.com/components/app-cn
const meta = {
  componentName: 'AApp',
  title: '包裹组件',
  group: 'Ant Design 组件',
  category: '其它',
  docUrl: 'https://antdv.com/components/app-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'message',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'message',
            'en-US': 'message',
          },
          tip: 'App 内 Message 的全局配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'notification',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'notification',
            'en-US': 'notification',
          },
          tip: 'App 内 Notification 的全局配置',
        },
        setter: 'JsonSetter',
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
    component: {},
  },
  snippets: [
    {
      title: '包裹组件',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AApp',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (divider); see https://1x.antdv.com/components/divider-cn/
const meta = {
  componentName: 'ADivider',
  title: '分割线',
  group: 'Ant Design 组件',
  category: '布局',
  docUrl: 'https://1x.antdv.com/components/divider-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'dashed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否虚线',
            'en-US': 'dashed',
          },
          tip: '是否虚线',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'orientation',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分割线标题的位置',
            'en-US': 'orientation',
          },
          tip: '分割线标题的位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'center',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水平还是垂直类型',
            'en-US': 'type',
          },
          tip: '水平还是垂直类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
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
      title: '分割线',
      screenshot: './screenshots/divider.webp',
      schema: {
        componentName: 'ADivider',
        props: {},
        children: '分割线',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

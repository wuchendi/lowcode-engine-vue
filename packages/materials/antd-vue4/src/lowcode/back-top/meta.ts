import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (float-button); see https://antdv.com/components/float-button-cn
const meta = {
  componentName: 'ABackTop',
  title: '悬浮按钮 BackTop',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://antdv.com/components/float-button-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '回到顶部所需时间',
            'en-US': 'duration',
          },
          tip: '回到顶部所需时间（ms）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 450,
      },
      {
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置需要监听其滚动事件的元素',
            'en-US': 'target',
          },
          tip: '设置需要监听其滚动事件的元素',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'visibilityHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'visibilityHeight',
            'en-US': 'visibilityHeight',
          },
          tip: '滚动高度达到此参数值才出现 BackTop',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 400,
      },
      {
        name: 'onClick',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击按钮的回调函数',
            'en-US': 'onClick',
          },
          tip: '点击按钮的回调函数',
        },
        setter: 'FunctionSetter',
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
      title: '悬浮按钮 BackTop',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ABackTop',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

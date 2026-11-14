import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (back-top); see https://1x.antdv.com/components/back-top-cn/
const meta = {
  componentName: 'ABackTop',
  title: '回到顶部',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://1x.antdv.com/components/back-top-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置需要监听其滚动事件的元素',
            'en-US': 'target',
          },
          tip: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击按钮的回调函数',
          template:
            "onClick(extParams) {\n  // 点击按钮的回调函数\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '回到顶部',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ABackTop',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (statistic); see https://element-plus.org/zh-CN/component/statistic.html
const meta = {
  componentName: 'ElCountdown',
  title: '统计组件 Countdown',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/statistic.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '目标时间',
            'en-US': 'value',
          },
          tip: '目标时间',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '格式化倒计时',
            'en-US': 'format',
          },
          tip: '格式化倒计时',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置倒计时前缀',
            'en-US': 'prefix',
          },
          tip: '设置倒计时前缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置倒计时的后缀',
            'en-US': 'suffix',
          },
          tip: '设置倒计时的后缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '倒计时标题',
            'en-US': 'title',
          },
          tip: '倒计时标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'valueStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '倒计时值的样式',
            'en-US': 'valueStyle',
          },
          tip: '倒计时值的样式',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '时间差改变事件',
          template:
            "onChange(...args, extParams) {\n  // 时间差改变事件\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onFinish',
          description: '倒计时结束事件',
          template:
            "onFinish(...args, extParams) {\n  // 倒计时结束事件\n  console.log('onFinish', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '统计组件 Countdown',
      screenshot: './screenshots/countdown.webp',
      schema: {
        componentName: 'ElCountdown',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

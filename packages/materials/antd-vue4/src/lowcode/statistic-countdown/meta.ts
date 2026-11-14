import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (statistic); see https://antdv.com/components/statistic-cn
const meta = {
  componentName: 'AStatisticCountdown',
  title: '统计数值 StatisticCountdown',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/statistic-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '格式化倒计时展示',
            'en-US': 'format',
          },
          tip: '格式化倒计时展示，参考 dayjs',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置数值的前缀',
            'en-US': 'prefix',
          },
          tip: '设置数值的前缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置数值的后缀',
            'en-US': 'suffix',
          },
          tip: '设置数值的后缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数值的标题',
            'en-US': 'title',
          },
          tip: '数值的标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数值内容',
            'en-US': 'value',
          },
          tip: '数值内容',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'valueStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置数值的样式',
            'en-US': 'valueStyle',
          },
          tip: '设置数值的样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onFinish',
          description: '倒计时完成时触发',
          template:
            "onFinish(extParams) {\n  // 倒计时完成时触发\n  console.log('onFinish', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '统计数值 StatisticCountdown',
      screenshot: './screenshots/statistic-countdown.webp',
      schema: {
        componentName: 'AStatisticCountdown',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

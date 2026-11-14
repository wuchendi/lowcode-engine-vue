import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (statistic); see https://1x.antdv.com/components/statistic-cn/
const meta = {
  componentName: 'AStatistic',
  title: '统计数值',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/statistic-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'decimalSeparator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置小数点',
            'en-US': 'decimalSeparator',
          },
          tip: '设置小数点',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '.',
      },
      {
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义数值展示',
            'en-US': 'formatter',
          },
          tip: '自定义数值展示',
        },
        setter: [
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'groupSeparator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置千分位标识符',
            'en-US': 'groupSeparator',
          },
          tip: '设置千分位标识符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'precision',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数值精度',
            'en-US': 'precision',
          },
          tip: '数值精度',
        },
        setter: 'NumberSetter',
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
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
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
        setter: 'StringSetter',
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
      title: '统计数值',
      screenshot: './screenshots/statistic.webp',
      schema: {
        componentName: 'AStatistic',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

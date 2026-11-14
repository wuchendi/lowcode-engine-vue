import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (statistic); see https://element-plus.org/zh-CN/component/statistic.html
const meta = {
  componentName: 'ElStatistic',
  title: '统计组件',
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
            'zh-CN': '数字内容',
            'en-US': 'value',
          },
          tip: '数字内容',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'decimalSeparator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置小数点符号',
            'en-US': 'decimalSeparator',
          },
          tip: '设置小数点符号',
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
            'zh-CN': '自定义数字格式化',
            'en-US': 'formatter',
          },
          tip: '自定义数字格式化',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
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
            'zh-CN': '数字精度',
            'en-US': 'precision',
          },
          tip: '数字精度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置数字的前缀',
            'en-US': 'prefix',
          },
          tip: '设置数字的前缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置数字的后缀',
            'en-US': 'suffix',
          },
          tip: '设置数字的后缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数字标题',
            'en-US': 'title',
          },
          tip: '数字标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'valueStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数字样式',
            'en-US': 'valueStyle',
          },
          tip: '数字样式',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '统计组件',
      screenshot: './screenshots/statistic.webp',
      schema: {
        componentName: 'ElStatistic',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

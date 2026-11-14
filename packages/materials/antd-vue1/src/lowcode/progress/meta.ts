import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (progress); see https://1x.antdv.com/components/progress-cn/
const meta = {
  componentName: 'AProgress',
  title: '进度条',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://1x.antdv.com/components/progress-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型，可选 line circle dashboard',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'line',
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容的模板函数',
            'en-US': 'format',
          },
          tip: '内容的模板函数',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'percent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '百分比',
            'en-US': 'percent',
          },
          tip: '百分比',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'showInfo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示进度数值或状态图标',
            'en-US': 'showInfo',
          },
          tip: '是否显示进度数值或状态图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '状态',
            'en-US': 'status',
          },
          tip: '状态，可选：success exception normal active(仅限 line)',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'strokeLinecap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'strokeLinecap',
            'en-US': 'strokeLinecap',
          },
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'round',
                  value: 'round',
                },
                {
                  title: 'square',
                  value: 'square',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'round',
      },
      {
        name: 'strokeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条的色彩',
            'en-US': 'strokeColor',
          },
          tip: '进度条的色彩',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'successPercent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '已完成的分段百分比',
            'en-US': 'successPercent',
          },
          tip: '已完成的分段百分比',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
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
      title: '进度条',
      screenshot: './screenshots/progress.webp',
      schema: {
        componentName: 'AProgress',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

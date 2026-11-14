import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (progress); see https://antdv.com/components/progress-cn
const meta = {
  componentName: 'AProgress',
  title: '进度条',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://antdv.com/components/progress-cn',
  devMode: 'proCode',
  configure: {
    props: [
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
        name: 'strokeLinecap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条的样式',
            'en-US': 'strokeLinecap',
          },
          tip: '进度条的样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'round',
      },
      {
        name: 'success',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '成功进度条相关配置',
            'en-US': 'success',
          },
          tip: '成功进度条相关配置',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'html 标签 title',
            'en-US': 'title',
          },
          tip: 'html 标签 title',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'trailColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未完成的分段的颜色',
            'en-US': 'trailColor',
          },
          tip: '未完成的分段的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
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
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条的尺寸',
            'en-US': 'size',
          },
          tip: '进度条的尺寸',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'small',
                  value: 'small',
                },
                {
                  title: 'default',
                  value: 'default',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
        ],
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

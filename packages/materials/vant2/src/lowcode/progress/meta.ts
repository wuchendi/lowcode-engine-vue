import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (progress); see https://vant-ui.github.io/vant/v2/#/zh-CN/progress
const meta = {
  componentName: 'VanProgress',
  title: '进度条',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/progress',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'percentage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度百分比',
            'en-US': 'percentage',
          },
          tip: '进度百分比',
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
        defaultValue: '0',
      },
      {
        name: 'strokeWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条粗细',
            'en-US': 'strokeWidth',
          },
          tip: '进度条粗细，默认单位为px',
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
        defaultValue: '4px',
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条颜色',
            'en-US': 'color',
          },
          tip: '进度条颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'trackColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '轨道颜色',
            'en-US': 'trackColor',
          },
          tip: '轨道颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#e5e5e5',
      },
      {
        name: 'pivotText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度文字内容',
            'en-US': 'pivotText',
          },
          tip: '进度文字内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'pivotColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度文字背景色',
            'en-US': 'pivotColor',
          },
          tip: '进度文字背景色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度文字颜色',
            'en-US': 'textColor',
          },
          tip: '进度文字颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'white',
      },
      {
        name: 'inactive',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否置灰',
            'en-US': 'inactive',
          },
          tip: '是否置灰',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showPivot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示进度文字',
            'en-US': 'showPivot',
          },
          tip: '是否显示进度文字',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        componentName: 'VanProgress',
        props: {
          percentage: '0',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (loading); see https://vant-ui.github.io/vant/v2/#/zh-CN/loading
const meta = {
  componentName: 'VanLoading',
  title: '加载',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/loading',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '颜色',
            'en-US': 'color',
          },
          tip: '颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#c9c9c9',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型，可选值为 spinner',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'circular',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载图标大小',
            'en-US': 'size',
          },
          tip: '加载图标大小，默认单位为 px',
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
        defaultValue: '30px',
      },
      {
        name: 'textSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文字大小',
            'en-US': 'textSize',
          },
          tip: '文字大小，默认单位为 px',
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
        defaultValue: '14px',
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文字颜色',
            'en-US': 'textColor',
          },
          tip: '文字颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#c9c9c9',
      },
      {
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否垂直排列图标和文字内容',
            'en-US': 'vertical',
          },
          tip: '是否垂直排列图标和文字内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '加载',
      screenshot: './screenshots/loading.webp',
      schema: {
        componentName: 'VanLoading',
        props: {},
        children: '加载',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

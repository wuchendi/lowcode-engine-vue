import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (rolling-text); see https://vant-ui.github.io/vant/#/zh-CN/rolling-text
const meta = {
  componentName: 'VanRollingText',
  title: '翻滚文本',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/rolling-text',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'startNum',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '起始数值',
            'en-US': 'startNum',
          },
          tip: '起始数值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'targetNum',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '目标数值',
            'en-US': 'targetNum',
          },
          tip: '目标数值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'textList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容数组',
            'en-US': 'textList',
          },
          tip: '内容数组，用于翻转非数字内容',
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
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'duration',
          },
          tip: '动画时长，单位为秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 2,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本翻滚方向',
            'en-US': 'direction',
          },
          tip: '文本翻滚方向，值为 down 和 up',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'down',
      },
      {
        name: 'autoStart',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动开始动画',
            'en-US': 'autoStart',
          },
          tip: '是否自动开始动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'stopOrder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '各个数位动画停止先后顺序',
            'en-US': 'stopOrder',
          },
          tip: '各个数位动画停止先后顺序，值为 ltr 和 rtl',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'ltr',
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数字高度',
            'en-US': 'height',
          },
          tip: '数字高度，单位为 px',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 40,
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
      title: '翻滚文本',
      screenshot: './screenshots/rolling-text.webp',
      schema: {
        componentName: 'VanRollingText',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

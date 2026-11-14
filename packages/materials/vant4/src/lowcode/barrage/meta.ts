import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (barrage); see https://vant-ui.github.io/vant/#/zh-CN/barrage
const meta = {
  componentName: 'VanBarrage',
  title: '弹幕',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/barrage',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹幕数据',
            'en-US': 'v-model',
          },
          tip: '弹幕数据',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'autoPlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动播放弹幕',
            'en-US': 'autoPlay',
          },
          tip: '是否自动播放弹幕',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'rows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹幕文字行数',
            'en-US': 'rows',
          },
          tip: '弹幕文字行数',
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
        defaultValue: '4',
      },
      {
        name: 'top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹幕文字区域顶部间距',
            'en-US': 'top',
          },
          tip: '弹幕文字区域顶部间距，单位 px',
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
        defaultValue: '10',
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹幕文字滑过容器的时间',
            'en-US': 'duration',
          },
          tip: '弹幕文字滑过容器的时间，单位 ms',
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
        defaultValue: '4000',
      },
      {
        name: 'delay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹幕动画延时',
            'en-US': 'delay',
          },
          tip: '弹幕动画延时，单位 ms',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
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
      title: '弹幕',
      screenshot: './screenshots/barrage.webp',
      schema: {
        componentName: 'VanBarrage',
        props: {},
        children: '弹幕',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

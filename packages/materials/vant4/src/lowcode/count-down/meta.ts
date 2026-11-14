import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (count-down); see https://vant-ui.github.io/vant/#/zh-CN/count-down
const meta = {
  componentName: 'VanCountDown',
  title: '倒计时',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/count-down',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'time',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '倒计时时长',
            'en-US': 'time',
          },
          tip: '倒计时时长，单位毫秒',
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
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '时间格式',
            'en-US': 'format',
          },
          tip: '时间格式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'autoStart',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动开始倒计时',
            'en-US': 'autoStart',
          },
          tip: '是否自动开始倒计时',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'millisecond',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启毫秒级渲染',
            'en-US': 'millisecond',
          },
          tip: '是否开启毫秒级渲染',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onFinish',
          description: '倒计时结束时触发',
          template:
            "onFinish(extParams) {\n  // 倒计时结束时触发\n  console.log('onFinish', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '倒计时变化时触发',
          template:
            "onChange(extParams) {\n  // 倒计时变化时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '倒计时',
      screenshot: './screenshots/count-down.webp',
      schema: {
        componentName: 'VanCountDown',
        props: {},
        children: '倒计时',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

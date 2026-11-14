import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (notice-bar); see https://vant-ui.github.io/vant/#/zh-CN/notice-bar
const meta = {
  componentName: 'VanNoticeBar',
  title: '通知栏',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/notice-bar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '通知栏模式',
            'en-US': 'mode',
          },
          tip: '通知栏模式，可选值为 closeable link',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'closeable',
                value: 'closeable',
              },
              {
                title: 'link',
                value: 'link',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '通知文本内容',
            'en-US': 'text',
          },
          tip: '通知文本内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '通知文本颜色',
            'en-US': 'color',
          },
          tip: '通知文本颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ed6a0c',
      },
      {
        name: 'background',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动条背景',
            'en-US': 'background',
          },
          tip: '滚动条背景',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '#fffbe8',
      },
      {
        name: 'leftIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧图标名称或图片链接',
            'en-US': 'leftIcon',
          },
          tip: '左侧图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'delay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画延迟时间',
            'en-US': 'delay',
          },
          tip: '动画延迟时间 (s)',
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
        defaultValue: '1',
      },
      {
        name: 'speed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动速率',
            'en-US': 'speed',
          },
          tip: '滚动速率 (px/s)',
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
        defaultValue: '60',
      },
      {
        name: 'scrollable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启滚动播放',
            'en-US': 'scrollable',
          },
          tip: '是否开启滚动播放，内容长度溢出时默认开启',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'wrapable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启文本换行',
            'en-US': 'wrapable',
          },
          tip: '是否开启文本换行，只在禁用滚动时生效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'left-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'left-icon',
            'en-US': 'left-icon',
          },
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'right-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'right-icon',
            'en-US': 'right-icon',
          },
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击通知栏时触发',
          template:
            "onClick(extParams) {\n  // 点击通知栏时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭通知栏时触发',
          template:
            "onClose(extParams) {\n  // 关闭通知栏时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onReplay',
          description: '每当滚动栏重新开始滚动时触发',
          template:
            "onReplay(extParams) {\n  // 每当滚动栏重新开始滚动时触发\n  console.log('onReplay', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '通知栏',
      screenshot: './screenshots/notice-bar.webp',
      schema: {
        componentName: 'VanNoticeBar',
        props: {
          text: '通知栏',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

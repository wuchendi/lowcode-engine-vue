import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (notify); see https://vant-ui.github.io/vant/#/zh-CN/notify
const meta = {
  componentName: 'VanNotify',
  title: '消息通知',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/notify',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示通知',
            'en-US': 'v-model:show',
          },
          tip: '是否显示通知',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型，可选值为 primary success warning',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'warning',
                value: 'warning',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'danger',
      },
      {
        name: 'message',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示文案',
            'en-US': 'message',
          },
          tip: '展示文案，支持通过\\n换行',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '将组件的 z-index 层级设置为一个固定值',
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
        name: 'position',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出位置',
            'en-US': 'position',
          },
          tip: '弹出位置，可选值为 bottom',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '字体颜色',
            'en-US': 'color',
          },
          tip: '字体颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'white',
      },
      {
        name: 'background',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '背景颜色',
            'en-US': 'background',
          },
          tip: '背景颜色',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'className',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义类名',
            'en-US': 'className',
          },
          tip: '自定义类名',
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
        name: 'lockScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否锁定背景滚动',
            'en-US': 'lockScroll',
          },
          tip: '是否锁定背景滚动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'teleport',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'teleport',
          },
          tip: '指定挂载的节点，等同于 Teleport 组件的 to 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时的回调函数',
          template:
            "onClick(extParams) {\n  // 点击时的回调函数\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭时的回调函数',
          template:
            "onClose(extParams) {\n  // 关闭时的回调函数\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: '完全展示后的回调函数',
          template:
            "onOpened(extParams) {\n  // 完全展示后的回调函数\n  console.log('onOpened', extParams)\n}",
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
      title: '消息通知',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanNotify',
        props: {},
        children: '消息通知',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

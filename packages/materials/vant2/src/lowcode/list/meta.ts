import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (list); see https://vant-ui.github.io/vant/v2/#/zh-CN/list
const meta = {
  componentName: 'VanList',
  title: '列表',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/list',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否处于加载状态',
            'en-US': 'v-model',
          },
          tip: '是否处于加载状态，加载过程中不触发load事件',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'finished',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否已加载完成',
            'en-US': 'finished',
          },
          tip: '是否已加载完成，加载完成后不再触发load事件',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否加载失败',
            'en-US': 'error',
          },
          tip: '是否加载失败，加载失败后点击错误提示可以重新触发load事件，必须使用sync修饰符',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: '滚动条与底部距离小于 offset 时触发load事件',
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
        defaultValue: '300',
      },
      {
        name: 'loadingText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载过程中的提示文案',
            'en-US': 'loadingText',
          },
          tip: '加载过程中的提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'finishedText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载完成后的提示文案',
            'en-US': 'finishedText',
          },
          tip: '加载完成后的提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'errorText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载失败后的提示文案',
            'en-US': 'errorText',
          },
          tip: '加载失败后的提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'immediateCheck',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'immediateCheck',
            'en-US': 'immediateCheck',
          },
          tip: '是否在初始化时立即执行滚动位置检查',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动触发加载的方向',
            'en-US': 'direction',
          },
          tip: '滚动触发加载的方向，可选值为up',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'down',
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义底部加载中提示',
            'en-US': 'loading',
          },
          tip: '自定义底部加载中提示',
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
          name: 'onLoad',
          description: '滚动条与底部距离小于 offset 时触发',
          template:
            "onLoad(extParams) {\n  // 滚动条与底部距离小于 offset 时触发\n  console.log('onLoad', extParams)\n}",
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
      title: '列表',
      screenshot: './screenshots/list.webp',
      schema: {
        componentName: 'VanList',
        props: {},
        children: '列表',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

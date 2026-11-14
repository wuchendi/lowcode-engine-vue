import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (list); see https://vant-ui.github.io/vant/#/zh-CN/list
const meta = {
  componentName: 'VanList',
  title: '列表',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/list',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否处于加载状态',
            'en-US': 'v-model:loading',
          },
          tip: '是否处于加载状态，加载过程中不触发 load 事件',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否加载失败',
            'en-US': 'v-model:error',
          },
          tip: '是否加载失败，加载失败后点击错误提示可以重新触发 load 事件',
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
          tip: '是否已加载完成，加载完成后不再触发 load 事件',
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
          tip: '滚动条与底部距离小于 offset 时触发 load 事件',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用滚动加载',
            'en-US': 'disabled',
          },
          tip: '是否禁用滚动加载',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动触发加载的方向',
            'en-US': 'direction',
          },
          tip: '滚动触发加载的方向，可选值为 up',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'down',
      },
      {
        name: 'scroller',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定需要监听滚动事件的节点',
            'en-US': 'scroller',
          },
          tip: '指定需要监听滚动事件的节点，默认为最近的父级滚动节点',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
      {
        name: 'error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义加载失败后的提示文案',
            'en-US': 'error',
          },
          tip: '自定义加载失败后的提示文案',
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

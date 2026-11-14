import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (floating-panel); see https://vant-ui.github.io/vant/#/zh-CN/floating-panel
const meta = {
  componentName: 'VanFloatingPanel',
  title: '浮动面板',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/floating-panel',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前面板的显示高度',
            'en-US': 'v-model:height',
          },
          tip: '当前面板的显示高度',
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
        name: 'anchors',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置自定义锚点',
            'en-US': 'anchors',
          },
          tip: '设置自定义锚点, 单位 px',
        },
        setter: [
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
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'duration',
          },
          tip: '动画时长，单位秒，设置为 0 可以禁用动画',
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
        defaultValue: '0.3',
      },
      {
        name: 'magnetic',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用磁力吸附到锚点',
            'en-US': 'magnetic',
          },
          tip: '是否启用磁力吸附到锚点。禁用后面板可在锚点边界范围内任意位置停留',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'contentDraggable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '允许拖拽内容容器',
            'en-US': 'contentDraggable',
          },
          tip: '允许拖拽内容容器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'draggable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许拖拽面板',
            'en-US': 'draggable',
          },
          tip: '是否允许拖拽面板。禁用后头部拖拽栏会被隐藏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'lockScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当不拖拽时',
            'en-US': 'lockScroll',
          },
          tip: '当不拖拽时，是否锁定背景滚动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'safeAreaInsetBottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启底部安全区适配',
            'en-US': 'safeAreaInsetBottom',
          },
          tip: '是否开启底部安全区适配',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义面板标头',
            'en-US': 'header',
          },
          tip: '自定义面板标头',
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
          name: 'onHeightChange',
          description: '面板显示高度改变且结束拖动后触发',
          template:
            "onHeightChange(extParams) {\n  // 面板显示高度改变且结束拖动后触发\n  console.log('onHeightChange', extParams)\n}",
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
      title: '浮动面板',
      screenshot: './screenshots/floating-panel.webp',
      schema: {
        componentName: 'VanFloatingPanel',
        props: {},
        children: '浮动面板',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

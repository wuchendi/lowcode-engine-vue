import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (splitter); see https://element-plus.org/zh-CN/component/splitter.html
const meta = {
  componentName: 'ElSplitterPanel',
  title: '分隔面板 beta SplitterPanel',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/splitter.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板大小',
            'en-US': 'v-model:size',
          },
          tip: '面板大小(像素或百分比)',
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
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板最小尺寸',
            'en-US': 'min',
          },
          tip: '面板最小尺寸(像素或百分比)',
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
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板的最大尺寸',
            'en-US': 'max',
          },
          tip: '面板的最大尺寸(像素或百分比)',
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
        name: 'resizable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以调整面板大小',
            'en-US': 'resizable',
          },
          tip: '是否可以调整面板大小',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'collapsible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板是否可折叠',
            'en-US': 'collapsible',
          },
          tip: '面板是否可折叠。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'start-collapsible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义起始折叠按钮的内容',
            'en-US': 'start-collapsible',
          },
          tip: '自定义起始折叠按钮的内容',
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
        name: 'end-collapsible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '结束可折叠按钮的自定义内容',
            'en-US': 'end-collapsible',
          },
          tip: '结束可折叠按钮的自定义内容',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['ElSplitter'],
      },
    },
  },
  snippets: [
    {
      title: '分隔面板 beta SplitterPanel',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElSplitterPanel',
        props: {},
        children: '分隔面板',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

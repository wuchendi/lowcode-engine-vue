import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (panel); see https://vant-ui.github.io/vant/v2/#/zh-CN/panel
const meta = {
  componentName: 'VanPanel',
  title: '面板',
  group: 'Vant 组件',
  category: '废弃',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/panel',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'desc',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述',
            'en-US': 'desc',
          },
          tip: '描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '状态',
            'en-US': 'status',
          },
          tip: '状态',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题左侧图标名称或图片链接',
            'en-US': 'icon',
          },
          tip: '标题左侧图标名称或图片链接',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'vant',
          },
        },
        supportVariable: true,
      },
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 header',
            'en-US': 'header',
          },
          tip: '自定义 header',
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
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 footer',
            'en-US': 'footer',
          },
          tip: '自定义 footer',
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
    },
  },
  snippets: [
    {
      title: '面板',
      screenshot: './screenshots/panel.webp',
      schema: {
        componentName: 'VanPanel',
        props: {},
        children: '面板',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tabs); see https://antdv.com/components/tabs-cn
const meta = {
  componentName: 'ATabPane',
  title: '标签页 TabPane',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/tabs-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'forceRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'forceRender',
            'en-US': 'forceRender',
          },
          tip: '被隐藏时是否渲染 DOM 结构',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tab',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项卡头显示文字',
            'en-US': 'tab',
          },
          tip: '选项卡头显示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'closeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义关闭图标',
            'en-US': 'closeIcon',
          },
          tip: '自定义关闭图标，在 type="editable-card"时有效',
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
      nestingRule: {
        parentWhitelist: ['ATabs'],
      },
    },
  },
  snippets: [
    {
      title: '标签页 TabPane',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATabPane',
        props: {
          tab: '标签',
        },
        children: '内容',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (collapse); see https://1x.antdv.com/components/collapse-cn/
const meta = {
  componentName: 'ACollapsePanel',
  title: '折叠面板 Panel',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/collapse-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: '禁用后的面板展开与否将无法通过用户交互改变',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
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
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板头内容',
            'en-US': 'header',
          },
          tip: '面板头内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示当前面板上的箭头',
            'en-US': 'showArrow',
          },
          tip: '是否展示当前面板上的箭头',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'extra',
            'en-US': 'extra',
          },
          tip: '自定义渲染每个面板右上角的内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
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
        parentWhitelist: ['ACollapse'],
      },
    },
  },
  snippets: [
    {
      title: '折叠面板 Panel',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ACollapsePanel',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

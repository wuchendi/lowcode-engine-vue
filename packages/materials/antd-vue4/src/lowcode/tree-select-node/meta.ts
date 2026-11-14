import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tree-select); see https://antdv.com/components/tree-select-cn
const meta = {
  componentName: 'ATreeSelectNode',
  title: '树选择 TreeSelectNode',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/tree-select-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '树节点显示的内容',
            'en-US': 'title',
          },
          tip: '树节点显示的内容',
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
        parentWhitelist: ['ATreeSelect'],
      },
    },
  },
  snippets: [
    {
      title: '树选择 TreeSelectNode',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATreeSelectNode',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

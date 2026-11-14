import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tree); see https://1x.antdv.com/components/tree-cn/
const meta = {
  componentName: 'ATreeTreeNode',
  title: '树形控件 TreeNode',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/tree-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'checkable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'checkable',
            'en-US': 'checkable',
          },
          tip: '当树为 checkable 时，设置独立节点是否展示 Checkbox',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'disableCheckbox',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁掉 checkbox',
            'en-US': 'disableCheckbox',
          },
          tip: '禁掉 checkbox',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁掉响应',
            'en-US': 'disabled',
          },
          tip: '禁掉响应',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标。可接收组件，props 为当前节点 props',
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
      {
        name: 'isLeaf',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置为叶子节点',
            'en-US': 'isLeaf',
          },
          tip: '设置为叶子节点(设置了loadData时有效)',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'selectable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置节点是否可被选中',
            'en-US': 'selectable',
          },
          tip: '设置节点是否可被选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
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
        parentWhitelist: ['ATree'],
      },
    },
  },
  snippets: [
    {
      title: '树形控件 TreeNode',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATreeTreeNode',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

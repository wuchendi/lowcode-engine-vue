import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tree-select); see https://antdv.com/components/tree-select-cn
const meta = {
  componentName: 'ATreeNode',
  title: '树选择 TreeNode',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/tree-select-cn',
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
        name: 'isLeaf',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否是叶子节点',
            'en-US': 'isLeaf',
          },
          tip: '是否是叶子节点',
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
            'zh-CN': '是否可选',
            'en-US': 'selectable',
          },
          tip: '是否可选',
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
            'zh-CN': '树节点显示的内容',
            'en-US': 'title',
          },
          tip: '树节点显示的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
  snippets: [],
} as IPublicTypeComponentMetadata

export default meta

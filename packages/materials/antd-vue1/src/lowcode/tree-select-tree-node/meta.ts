import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tree-select); see https://1x.antdv.com/components/tree-select-cn/
const meta = {
  componentName: 'ATreeSelectTreeNode',
  title: '树型选择控件 TreeNode',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/tree-select-cn/',
  devMode: 'proCode',
  configure: {
    props: [
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
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认根据此属性值进行筛选',
            'en-US': 'value',
          },
          tip: '默认根据此属性值进行筛选（其值在整个树范围内唯一）',
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
        parentWhitelist: ['ATreeSelect'],
      },
    },
  },
  snippets: [
    {
      title: '树型选择控件 TreeNode',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATreeSelectTreeNode',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

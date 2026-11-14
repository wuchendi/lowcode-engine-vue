import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tree-v2); see https://element-plus.org/zh-CN/component/tree-v2.html
const meta = {
  componentName: 'ElTreeV2',
  title: '虚拟化树形控件beta',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/tree-v2.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示数据',
            'en-US': 'data',
          },
          tip: '展示数据',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'emptyText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容为空的时候展示的文本',
            'en-US': 'emptyText',
          },
          tip: '内容为空的时候展示的文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配置选项',
            'en-US': 'props',
          },
          tip: '配置选项，具体看下表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'highlightCurrent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否高亮当前选中节点',
            'en-US': 'highlightCurrent',
          },
          tip: '是否高亮当前选中节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'expandOnClickNode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandOnClickNode',
            'en-US': 'expandOnClickNode',
          },
          tip: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'checkOnClickNode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击节点的时候选中节点',
            'en-US': 'checkOnClickNode',
          },
          tip: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'checkOnClickLeaf',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'checkOnClickLeaf',
            'en-US': 'checkOnClickLeaf',
          },
          tip: 'whether to check or uncheck node when clicking on leaf node (last children).',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'defaultExpandedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultExpandedKeys',
            'en-US': 'defaultExpandedKeys',
          },
          tip: '默认展开的节点的 key 的数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'showCheckbox',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '节点是否可被选择',
            'en-US': 'showCheckbox',
          },
          tip: '节点是否可被选择',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'checkStrictly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在显示复选框的情况下',
            'en-US': 'checkStrictly',
          },
          tip: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultCheckedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultCheckedKeys',
            'en-US': 'defaultCheckedKeys',
          },
          tip: '默认勾选的节点的 key 的数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'currentNodeKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中的节点',
            'en-US': 'currentNodeKey',
          },
          tip: '当前选中的节点',
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
        name: 'filterMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对树节点进行筛选时执行的方法',
            'en-US': 'filterMethod',
          },
          tip: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'indent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '相邻级节点间的水平缩进',
            'en-US': 'indent',
          },
          tip: '相邻级节点间的水平缩进，单位为像素',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 16,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义树节点图标组件',
            'en-US': 'icon',
          },
          tip: '自定义树节点图标组件',
        },
        setter: 'CIconSetter',
        supportVariable: true,
      },
      {
        name: 'itemSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'itemSize',
            'en-US': 'itemSize',
          },
          tip: 'custom tree node height',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 26,
      },
      {
        name: 'scrollbarAlwaysOn',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'scrollbarAlwaysOn',
            'en-US': 'scrollbarAlwaysOn',
          },
          tip: 'always show scrollbar',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tree 的高度',
            'en-US': 'height',
          },
          tip: 'tree 的高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 200,
      },
      {
        name: 'empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'empty',
            'en-US': 'empty',
          },
          tip: 'custom content when data is empty',
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
          name: 'onNodeClick',
          description: 'triggers when a node is clicked',
          template:
            "onNodeClick(extParams) {\n  // triggers when a node is clicked\n  console.log('onNodeClick', extParams)\n}",
        },
        {
          name: 'onNodeDrop',
          description: 'triggers when drag something and drop on a node',
          template:
            "onNodeDrop(extParams) {\n  // triggers when drag something and drop on a node\n  console.log('onNodeDrop', extParams)\n}",
        },
        {
          name: 'onNodeContextmenu',
          description: 'triggers when a node is clicked by right button',
          template:
            "onNodeContextmenu(extParams) {\n  // triggers when a node is clicked by right button\n  console.log('onNodeContextmenu', extParams)\n}",
        },
        {
          name: 'onCheckChange',
          description: 'triggers when the selected state of the node changes',
          template:
            "onCheckChange(extParams) {\n  // triggers when the selected state of the node changes\n  console.log('onCheckChange', extParams)\n}",
        },
        {
          name: 'onCheck',
          description: 'triggers after clicking the checkbox of a node',
          template:
            "onCheck(extParams) {\n  // triggers after clicking the checkbox of a node\n  console.log('onCheck', extParams)\n}",
        },
        {
          name: 'onCurrentChange',
          description: 'triggers when current node changes',
          template:
            "onCurrentChange(extParams) {\n  // triggers when current node changes\n  console.log('onCurrentChange', extParams)\n}",
        },
        {
          name: 'onNodeExpand',
          description: 'triggers when current node open',
          template:
            "onNodeExpand(extParams) {\n  // triggers when current node open\n  console.log('onNodeExpand', extParams)\n}",
        },
        {
          name: 'onNodeCollapse',
          description: 'triggers when current node close',
          template:
            "onNodeCollapse(extParams) {\n  // triggers when current node close\n  console.log('onNodeCollapse', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '虚拟化树形控件beta',
      screenshot: './screenshots/tree-v2.webp',
      schema: {
        componentName: 'ElTreeV2',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

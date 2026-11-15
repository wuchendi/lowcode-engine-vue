import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tree); see https://element-plus.org/zh-CN/component/tree.html
const meta = {
  componentName: 'ElTree',
  title: '树形控件',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/tree.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'data',
            'en-US': 'data',
          },
          tip: 'tree data',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'emptyText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'emptyText',
            'en-US': 'emptyText',
          },
          tip: 'text displayed when data is void',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'nodeKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'nodeKey',
            'en-US': 'nodeKey',
          },
          tip: 'unique identity key name for nodes, its value should be unique across the whole tree',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'props',
            'en-US': 'props',
          },
          tip: 'configuration options, see the following table',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'renderAfterExpand',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'renderAfterExpand',
            'en-US': 'renderAfterExpand',
          },
          tip: 'whether to render child nodes only after a parent node is expanded for the first time',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'load',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'load',
            'en-US': 'load',
          },
          tip: 'method for loading subtree data, only works when lazy is true',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'renderContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'renderContent',
            'en-US': 'renderContent',
          },
          tip: 'render function for tree node',
        },
        setter: [
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'highlightCurrent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'highlightCurrent',
            'en-US': 'highlightCurrent',
          },
          tip: 'whether current node is highlighted',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultExpandAll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultExpandAll',
            'en-US': 'defaultExpandAll',
          },
          tip: 'whether to expand all nodes by default',
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
          tip: 'whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.',
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
            'zh-CN': 'checkOnClickNode',
            'en-US': 'checkOnClickNode',
          },
          tip: 'whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.',
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
        name: 'autoExpandParent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autoExpandParent',
            'en-US': 'autoExpandParent',
          },
          tip: 'whether to expand father node when a child node is expanded',
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
          tip: 'array of keys of initially expanded nodes',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'showCheckbox',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showCheckbox',
            'en-US': 'showCheckbox',
          },
          tip: 'whether node is selectable',
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
            'zh-CN': 'checkStrictly',
            'en-US': 'checkStrictly',
          },
          tip: 'whether checked state of a node not affects its father and child nodes when show-checkbox is true',
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
          tip: 'array of keys of initially checked nodes',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'currentNodeKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'currentNodeKey',
            'en-US': 'currentNodeKey',
          },
          tip: 'key of initially selected node',
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
        name: 'filterNodeMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterNodeMethod',
            'en-US': 'filterNodeMethod',
          },
          tip: 'this function will be executed on each node when use filter method. if return false, tree node will be hidden.',
        },
        setter: [
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
        name: 'accordion',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'accordion',
            'en-US': 'accordion',
          },
          tip: 'whether only one node among the same level can be expanded at one time',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'indent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'indent',
            'en-US': 'indent',
          },
          tip: 'horizontal indentation of nodes in adjacent levels in pixels',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 18,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: 'custom tree node icon component',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'lazy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'lazy',
            'en-US': 'lazy',
          },
          tip: 'whether to lazy load leaf node, used with load attribute',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'draggable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'draggable',
            'en-US': 'draggable',
          },
          tip: 'whether enable tree nodes drag and drop',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'allowDrag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'allowDrag',
            'en-US': 'allowDrag',
          },
          tip: 'this function will be executed before dragging a node. If false is returned, the node can not be dragged',
        },
        setter: [
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
        name: 'allowDrop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'allowDrop',
            'en-US': 'allowDrop',
          },
          tip: "this function will be executed before the dragging node is dropped. If false is returned, the dragging node can not be dropped at the target node. type has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node)",
        },
        setter: [
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: '指定节点选择框是否禁用为节点对象的某个属性值',
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
        {
          name: 'onNodeDragStart',
          description: 'triggers when dragging starts',
          template:
            "onNodeDragStart(extParams) {\n  // triggers when dragging starts\n  console.log('onNodeDragStart', extParams)\n}",
        },
        {
          name: 'onNodeDragEnter',
          description: 'triggers when the dragging node enters another node',
          template:
            "onNodeDragEnter(extParams) {\n  // triggers when the dragging node enters another node\n  console.log('onNodeDragEnter', extParams)\n}",
        },
        {
          name: 'onNodeDragLeave',
          description: 'triggers when the dragging node leaves a node',
          template:
            "onNodeDragLeave(extParams) {\n  // triggers when the dragging node leaves a node\n  console.log('onNodeDragLeave', extParams)\n}",
        },
        {
          name: 'onNodeDragOver',
          description:
            'triggers when dragging over a node (like mouseover event)',
          template:
            "onNodeDragOver(extParams) {\n  // triggers when dragging over a node (like mouseover event)\n  console.log('onNodeDragOver', extParams)\n}",
        },
        {
          name: 'onNodeDragEnd',
          description: 'triggers when dragging ends',
          template:
            "onNodeDragEnd(extParams) {\n  // triggers when dragging ends\n  console.log('onNodeDragEnd', extParams)\n}",
        },
        {
          name: 'onNodeDrop',
          description: 'triggers after the dragging node is dropped',
          template:
            "onNodeDrop(extParams) {\n  // triggers after the dragging node is dropped\n  console.log('onNodeDrop', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '树形控件',
      screenshot: './screenshots/tree.webp',
      schema: {
        componentName: 'ElTree',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

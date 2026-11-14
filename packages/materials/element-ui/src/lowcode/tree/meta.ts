import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (tree); see https://element.eleme.cn/#/zh-CN/component/tree
const meta = {
  componentName: 'ElTree',
  title: '树形控件',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/tree',
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
        name: 'nodeKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'nodeKey',
            'en-US': 'nodeKey',
          },
          tip: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
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
        name: 'renderAfterExpand',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'renderAfterExpand',
            'en-US': 'renderAfterExpand',
          },
          tip: '是否在第一次展开某个树节点后才渲染其子节点',
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
            'zh-CN': '加载子树数据的方法',
            'en-US': 'load',
          },
          tip: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
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
          tip: '树节点的内容区的渲染 Function',
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
            'zh-CN': '是否高亮当前选中节点',
            'en-US': 'highlightCurrent',
          },
          tip: '是否高亮当前选中节点，默认值是 false。',
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
            'zh-CN': '是否默认展开所有节点',
            'en-US': 'defaultExpandAll',
          },
          tip: '是否默认展开所有节点',
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
          tip: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
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
          tip: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'autoExpandParent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autoExpandParent',
            'en-US': 'autoExpandParent',
          },
          tip: '展开子节点的时候是否自动展开父节点',
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
        name: 'filterNodeMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对树节点进行筛选时执行的方法',
            'en-US': 'filterNodeMethod',
          },
          tip: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
        },
        setter: 'FunctionSetter',
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
          tip: '是否每次只打开一个同级树节点展开',
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
        name: 'iconClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义树节点的图标',
            'en-US': 'iconClass',
          },
          tip: '自定义树节点的图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'lazy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否懒加载子节点',
            'en-US': 'lazy',
          },
          tip: '是否懒加载子节点，需与 load 方法结合使用',
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
            'zh-CN': '是否开启拖拽节点功能',
            'en-US': 'draggable',
          },
          tip: '是否开启拖拽节点功能',
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
            'zh-CN': '判断节点能否被拖拽',
            'en-US': 'allowDrag',
          },
          tip: '判断节点能否被拖拽',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'allowDrop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '拖拽时判定目标节点能否被放置',
            'en-US': 'allowDrop',
          },
          tip: "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
        },
        setter: 'FunctionSetter',
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
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onNode-click',
          description: '节点被点击时的回调',
          template:
            "onNodeClick(extParams) {\n  // 节点被点击时的回调\n  console.log('onNodeClick', extParams)\n}",
        },
        {
          name: 'onNode-contextmenu',
          description: '当某一节点被鼠标右键点击时会触发该事件',
          template:
            "onNodeContextmenu(extParams) {\n  // 当某一节点被鼠标右键点击时会触发该事件\n  console.log('onNodeContextmenu', extParams)\n}",
        },
        {
          name: 'onCheck-change',
          description: '节点选中状态发生变化时的回调',
          template:
            "onCheckChange(extParams) {\n  // 节点选中状态发生变化时的回调\n  console.log('onCheckChange', extParams)\n}",
        },
        {
          name: 'onCheck',
          description: '当复选框被点击的时候触发',
          template:
            "onCheck(extParams) {\n  // 当复选框被点击的时候触发\n  console.log('onCheck', extParams)\n}",
        },
        {
          name: 'onCurrent-change',
          description: '当前选中节点变化时触发的事件',
          template:
            "onCurrentChange(extParams) {\n  // 当前选中节点变化时触发的事件\n  console.log('onCurrentChange', extParams)\n}",
        },
        {
          name: 'onNode-expand',
          description: '节点被展开时触发的事件',
          template:
            "onNodeExpand(extParams) {\n  // 节点被展开时触发的事件\n  console.log('onNodeExpand', extParams)\n}",
        },
        {
          name: 'onNode-collapse',
          description: '节点被关闭时触发的事件',
          template:
            "onNodeCollapse(extParams) {\n  // 节点被关闭时触发的事件\n  console.log('onNodeCollapse', extParams)\n}",
        },
        {
          name: 'onNode-drag-start',
          description: '节点开始拖拽时触发的事件',
          template:
            "onNodeDragStart(extParams) {\n  // 节点开始拖拽时触发的事件\n  console.log('onNodeDragStart', extParams)\n}",
        },
        {
          name: 'onNode-drag-enter',
          description: '拖拽进入其他节点时触发的事件',
          template:
            "onNodeDragEnter(extParams) {\n  // 拖拽进入其他节点时触发的事件\n  console.log('onNodeDragEnter', extParams)\n}",
        },
        {
          name: 'onNode-drag-leave',
          description: '拖拽离开某个节点时触发的事件',
          template:
            "onNodeDragLeave(extParams) {\n  // 拖拽离开某个节点时触发的事件\n  console.log('onNodeDragLeave', extParams)\n}",
        },
        {
          name: 'onNode-drag-over',
          description: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）',
          template:
            "onNodeDragOver(extParams) {\n  // 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）\n  console.log('onNodeDragOver', extParams)\n}",
        },
        {
          name: 'onNode-drag-end',
          description: '拖拽结束时（可能未成功）触发的事件',
          template:
            "onNodeDragEnd(extParams) {\n  // 拖拽结束时（可能未成功）触发的事件\n  console.log('onNodeDragEnd', extParams)\n}",
        },
        {
          name: 'onNode-drop',
          description: '拖拽成功完成时触发的事件',
          template:
            "onNodeDrop(extParams) {\n  // 拖拽成功完成时触发的事件\n  console.log('onNodeDrop', extParams)\n}",
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

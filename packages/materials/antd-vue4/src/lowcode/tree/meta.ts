import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tree); see https://antdv.com/components/tree-cn
const meta = {
  componentName: 'ATree',
  title: '树形控件',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/tree-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'allowDrop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许拖拽时放置在该节点',
            'en-US': 'allowDrop',
          },
          tip: '是否允许拖拽时放置在该节点',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
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
        name: 'autoExpandParent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动展开父节点',
            'en-US': 'autoExpandParent',
          },
          tip: '是否自动展开父节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'blockNode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否节点占据一行',
            'en-US': 'blockNode',
          },
          tip: '是否节点占据一行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'checkable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'checkable',
            'en-US': 'checkable',
          },
          tip: '节点前添加 Checkbox 复选框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:checkedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:checkedKeys',
            'en-US': 'v-model:checkedKeys',
          },
          tip: '（受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置checkable和checkStrictly，它是一个有checked和halfChecked属性的对象，并且父子节点的选中与否不再关联',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'checkStrictly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'checkStrictly',
            'en-US': 'checkStrictly',
          },
          tip: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联）',
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
            'zh-CN': '默认展开所有树节点',
            'en-US': 'defaultExpandAll',
          },
          tip: '默认展开所有树节点, 如果是异步数据，需要在数据返回后再实例化，建议用 v-if="data.length"；当有 expandedKeys 时，defaultExpandAll 将失效',
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
            'zh-CN': '将树禁用',
            'en-US': 'disabled',
          },
          tip: '将树禁用',
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
            'zh-CN': '设置节点可拖拽',
            'en-US': 'draggable',
          },
          tip: '设置节点可拖拽',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:expandedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:expandedKeys',
            'en-US': 'v-model:expandedKeys',
          },
          tip: '（受控）展开指定的树节点',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'fieldNames',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fieldNames',
            'en-US': 'fieldNames',
          },
          tip: '替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'filterTreeNode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按需筛选树节点',
            'en-US': 'filterTreeNode',
          },
          tip: '按需筛选树节点（高亮），返回 true',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置虚拟滚动容器高度',
            'en-US': 'height',
          },
          tip: '设置虚拟滚动容器高度，设置后内部节点不再支持横向滚动',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'loadData',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '异步加载数据',
            'en-US': 'loadData',
          },
          tip: '异步加载数据',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'loadedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loadedKeys',
            'en-US': 'loadedKeys',
          },
          tip: '（受控）已经加载的节点，需要配合 loadData 使用',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '支持点选多个节点',
            'en-US': 'multiple',
          },
          tip: '支持点选多个节点（节点本身）',
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
            'zh-CN': '是否可选中',
            'en-US': 'selectable',
          },
          tip: '是否可选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'v-model:selectedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:selectedKeys',
            'en-US': 'v-model:selectedKeys',
          },
          tip: '（受控）设置选中的树节点',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'showIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showIcon',
            'en-US': 'showIcon',
          },
          tip: '是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showLine',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示连接线',
            'en-US': 'showLine',
          },
          tip: '是否展示连接线',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'switcherIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义树节点的展开/折叠图标',
            'en-US': 'switcherIcon',
          },
          tip: '自定义树节点的展开/折叠图标',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标题',
            'en-US': 'title',
          },
          tip: '自定义标题',
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
        name: 'treeData',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeNodes 数据',
            'en-US': 'treeData',
          },
          tip: 'treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一）',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'virtual',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtual',
            'en-US': 'virtual',
          },
          tip: '设置 false 时关闭虚拟滚动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onCheck',
          description: '点击复选框触发',
          template:
            "onCheck(extParams) {\n  // 点击复选框触发\n  console.log('onCheck', extParams)\n}",
        },
        {
          name: 'onDragend',
          description: 'dragend 触发时调用',
          template:
            "onDragend(extParams) {\n  // dragend 触发时调用\n  console.log('onDragend', extParams)\n}",
        },
        {
          name: 'onDragenter',
          description: 'dragenter 触发时调用',
          template:
            "onDragenter(extParams) {\n  // dragenter 触发时调用\n  console.log('onDragenter', extParams)\n}",
        },
        {
          name: 'onDragleave',
          description: 'dragleave 触发时调用',
          template:
            "onDragleave(extParams) {\n  // dragleave 触发时调用\n  console.log('onDragleave', extParams)\n}",
        },
        {
          name: 'onDragover',
          description: 'dragover 触发时调用',
          template:
            "onDragover(extParams) {\n  // dragover 触发时调用\n  console.log('onDragover', extParams)\n}",
        },
        {
          name: 'onDragstart',
          description: '开始拖拽时调用',
          template:
            "onDragstart(extParams) {\n  // 开始拖拽时调用\n  console.log('onDragstart', extParams)\n}",
        },
        {
          name: 'onDrop',
          description: 'drop 触发时调用',
          template:
            "onDrop(extParams) {\n  // drop 触发时调用\n  console.log('onDrop', extParams)\n}",
        },
        {
          name: 'onExpand',
          description: '展开/收起节点时触发',
          template:
            "onExpand(extParams) {\n  // 展开/收起节点时触发\n  console.log('onExpand', extParams)\n}",
        },
        {
          name: 'onLoad',
          description: '节点加载完毕时触发',
          template:
            "onLoad(extParams) {\n  // 节点加载完毕时触发\n  console.log('onLoad', extParams)\n}",
        },
        {
          name: 'onRightClick',
          description: '响应右键点击',
          template:
            "onRightClick(extParams) {\n  // 响应右键点击\n  console.log('onRightClick', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '点击树节点触发',
          template:
            "onSelect(extParams) {\n  // 点击树节点触发\n  console.log('onSelect', extParams)\n}",
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
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATree',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

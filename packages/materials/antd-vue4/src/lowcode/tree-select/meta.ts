import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tree-select); see https://antdv.com/components/tree-select-cn
const meta = {
  componentName: 'ATreeSelect',
  title: '树选择',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/tree-select-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示清除按钮',
            'en-US': 'allowClear',
          },
          tip: '显示清除按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定默认选中的条目',
            'en-US': 'defaultValue',
          },
          tip: '指定默认选中的条目',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
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
        name: 'popupClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popupClassName',
            'en-US': 'popupClassName',
          },
          tip: '下拉菜单的 className 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'dropdownMatchSelectWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉菜单和选择器同宽',
            'en-US': 'dropdownMatchSelectWidth',
          },
          tip: '下拉菜单和选择器同宽。默认将设置 min-width，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'dropdownStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉菜单的样式',
            'en-US': 'dropdownStyle',
          },
          tip: '下拉菜单的样式',
        },
        setter: 'JsonSetter',
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
          tip: '替换 treeNode 中 label,value,children 字段为 treeData 中对应的字段',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'filterTreeNode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否根据输入项进行筛选',
            'en-US': 'filterTreeNode',
          },
          tip: '是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值',
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
        defaultValue: 'Function',
      },
      {
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单渲染父节点',
            'en-US': 'getPopupContainer',
          },
          tip: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'labelInValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelInValue',
            'en-US': 'labelInValue',
          },
          tip: '是否把每个选项的 label 包装到 value 中，会把 value 类型从 string 变为 {value: string, label: VNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'listHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置弹窗滚动高度',
            'en-US': 'listHeight',
          },
          tip: '设置弹窗滚动高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 256,
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
        name: 'maxTagCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最多显示多少个 tag',
            'en-US': 'maxTagCount',
          },
          tip: '最多显示多少个 tag',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'maxTagPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏 tag 时显示的内容',
            'en-US': 'maxTagPlaceholder',
          },
          tip: '隐藏 tag 时显示的内容',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '支持多选',
            'en-US': 'multiple',
          },
          tip: '支持多选（当设置 treeCheckable 时自动变为 true）',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'notFoundContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当下拉列表为空时显示的内容',
            'en-US': 'notFoundContent',
          },
          tip: '当下拉列表为空时显示的内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
        defaultValue: 'Not Found',
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择框默认文字',
            'en-US': 'placeholder',
          },
          tip: '选择框默认文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择框弹出的位置',
            'en-US': 'placement',
          },
          tip: '选择框弹出的位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottomLeft',
      },
      {
        name: 'replaceFields',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'replaceFields',
            'en-US': 'replaceFields',
          },
          tip: '替换 treeNode 中 label,value,key,children 字段为 treeData 中对应的字段',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'searchPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索框默认文字',
            'en-US': 'searchPlaceholder',
          },
          tip: '搜索框默认文字',
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
        name: 'v-model:searchValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索框的值',
            'en-US': 'v-model:searchValue',
          },
          tip: '搜索框的值，可以通过 search 事件获取用户输入',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showCheckedStrategy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '定义选中项回填的方式',
            'en-US': 'showCheckedStrategy',
          },
          tip: '定义选中项回填的方式。TreeSelect.SHOW_ALL: 显示所有选中节点(包括父节点). TreeSelect.SHOW_PARENT: 只显示父节点(当父节点下所有子节点都选中时). 默认只显示子节点.',
        },
        setter: 'JsonSetter',
        supportVariable: true,
        defaultValue: 'TreeSelect.SHOW_CHILD',
      },
      {
        name: 'showSearch',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在下拉中显示搜索框',
            'en-US': 'showSearch',
          },
          tip: '在下拉中显示搜索框(仅在单选模式下生效)',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择框大小',
            'en-US': 'size',
          },
          tip: '选择框大小，可选 large small',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置校验状态',
            'en-US': 'status',
          },
          tip: '设置校验状态',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'warning',
                value: 'warning',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的选择框后缀图标',
            'en-US': 'suffixIcon',
          },
          tip: '自定义的选择框后缀图标',
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
        name: 'tagRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 tag 内容',
            'en-US': 'tagRender',
          },
          tip: '自定义 tag 内容，多选时生效',
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
        name: 'treeCheckable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示 checkbox',
            'en-US': 'treeCheckable',
          },
          tip: '显示 checkbox',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'treeCheckStrictly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeCheckStrictly',
            'en-US': 'treeCheckStrictly',
          },
          tip: 'checkable 状态下节点选择完全受控（父子节点选中状态不再关联），会使得 labelInValue 强制为 true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'treeData',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeNodes 数据',
            'en-US': 'treeData',
          },
          tip: 'treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'treeDataSimpleMode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeDataSimpleMode',
            'en-US': 'treeDataSimpleMode',
          },
          tip: '使用简单格式的 treeData，具体设置参考可设置的类型 (此时 treeData 应变为这样的数据结构: \\[{id:1, pId:0, value:\'1\', label:"test1",...},...], pId 是父节点的 id)',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'treeDefaultExpandAll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认展开所有树节点',
            'en-US': 'treeDefaultExpandAll',
          },
          tip: '默认展开所有树节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'treeDefaultExpandedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认展开的树节点',
            'en-US': 'treeDefaultExpandedKeys',
          },
          tip: '默认展开的树节点',
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
        name: 'v-model:treeExpandedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置展开的树节点',
            'en-US': 'v-model:treeExpandedKeys',
          },
          tip: '设置展开的树节点',
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
        name: 'treeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeIcon',
            'en-US': 'treeIcon',
          },
          tip: '是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'treeLine',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示线条样式',
            'en-US': 'treeLine',
          },
          tip: '是否展示线条样式，请参考 Tree - showLine',
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
        name: 'treeLoadedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeLoadedKeys',
            'en-US': 'treeLoadedKeys',
          },
          tip: '（受控）已经加载的节点，需要配合 loadData 使用',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'treeNodeFilterProp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeNodeFilterProp',
            'en-US': 'treeNodeFilterProp',
          },
          tip: '输入项过滤对应的 treeNode 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'value',
      },
      {
        name: 'treeNodeLabelProp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '作为显示的 prop 设置',
            'en-US': 'treeNodeLabelProp',
          },
          tip: '作为显示的 prop 设置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'title',
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前选中的条目',
            'en-US': 'v-model:value',
          },
          tip: '指定当前选中的条目',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
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
          name: 'onChange',
          description: '选中树节点或输入值发生变化时调用此函数',
          template:
            "onChange(extParams) {\n  // 选中树节点或输入值发生变化时调用此函数\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onDropdownVisibleChange',
          description: '展开下拉菜单的回调',
          template:
            "onDropdownVisibleChange(extParams) {\n  // 展开下拉菜单的回调\n  console.log('onDropdownVisibleChange', extParams)\n}",
        },
        {
          name: 'onSearch',
          description: '文本框值变化时回调',
          template:
            "onSearch(extParams) {\n  // 文本框值变化时回调\n  console.log('onSearch', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '树节点被选中时调用',
          template:
            "onSelect(extParams) {\n  // 树节点被选中时调用\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onTreeExpand',
          description: '展开树节点时调用',
          template:
            "onTreeExpand(extParams) {\n  // 展开树节点时调用\n  console.log('onTreeExpand', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '树选择',
      screenshot: './screenshots/tree-select.webp',
      schema: {
        componentName: 'ATreeSelect',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

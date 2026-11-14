import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (table); see https://element.eleme.cn/#/zh-CN/component/table
const meta = {
  componentName: 'ElTable',
  title: '表格',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/table',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示的数据',
            'en-US': 'data',
          },
          tip: '显示的数据',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Table 的高度',
            'en-US': 'height',
          },
          tip: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
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
        name: 'maxHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Table 的最大高度',
            'en-US': 'maxHeight',
          },
          tip: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
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
        name: 'stripe',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为斑马纹 table',
            'en-US': 'stripe',
          },
          tip: '是否为斑马纹 table',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否带有纵向边框',
            'en-US': 'border',
          },
          tip: '是否带有纵向边框',
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
            'zh-CN': 'Table 的尺寸',
            'en-US': 'size',
          },
          tip: 'Table 的尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'fit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的宽度是否自撑开',
            'en-US': 'fit',
          },
          tip: '列的宽度是否自撑开',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showHeader',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示表头',
            'en-US': 'showHeader',
          },
          tip: '是否显示表头',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'highlightCurrentRow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否要高亮当前行',
            'en-US': 'highlightCurrentRow',
          },
          tip: '是否要高亮当前行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'highlightSelectionRow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否要高亮复选框选中行',
            'en-US': 'highlightSelectionRow',
          },
          tip: '是否要高亮复选框选中行（仅针对开启 selection 有效）',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'currentRowKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前行的 key',
            'en-US': 'currentRowKey',
          },
          tip: '当前行的 key，只写属性',
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
        name: 'rowClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rowClassName',
            'en-US': 'rowClassName',
          },
          tip: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
        },
        setter: [
          {
            componentName: 'StringSetter',
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
        name: 'rowStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '行的 style 的回调方法',
            'en-US': 'rowStyle',
          },
          tip: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
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
        name: 'cellClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cellClassName',
            'en-US': 'cellClassName',
          },
          tip: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
        },
        setter: [
          {
            componentName: 'StringSetter',
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
        name: 'cellStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cellStyle',
            'en-US': 'cellStyle',
          },
          tip: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
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
        name: 'headerRowClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerRowClassName',
            'en-US': 'headerRowClassName',
          },
          tip: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
        },
        setter: [
          {
            componentName: 'StringSetter',
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
        name: 'headerRowStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerRowStyle',
            'en-US': 'headerRowStyle',
          },
          tip: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
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
        name: 'headerCellClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerCellClassName',
            'en-US': 'headerCellClassName',
          },
          tip: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
        },
        setter: [
          {
            componentName: 'StringSetter',
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
        name: 'headerCellStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerCellStyle',
            'en-US': 'headerCellStyle',
          },
          tip: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
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
        name: 'rowKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '行数据的 Key',
            'en-US': 'rowKey',
          },
          tip: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'emptyText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '空数据时显示的文本内容',
            'en-US': 'emptyText',
          },
          tip: '空数据时显示的文本内容，也可以通过 slot="empty" 设置',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultExpandAll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否默认展开所有行',
            'en-US': 'defaultExpandAll',
          },
          tip: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'expandRowKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandRowKeys',
            'en-US': 'expandRowKeys',
          },
          tip: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'defaultSort',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultSort',
            'en-US': 'defaultSort',
          },
          tip: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'tooltipEffect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltipEffect',
            'en-US': 'tooltipEffect',
          },
          tip: 'tooltip effect 属性',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'showSummary',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在表尾显示合计行',
            'en-US': 'showSummary',
          },
          tip: '是否在表尾显示合计行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'sumText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '合计行第一列的文本',
            'en-US': 'sumText',
          },
          tip: '合计行第一列的文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'summaryMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的合计计算方法',
            'en-US': 'summaryMethod',
          },
          tip: '自定义的合计计算方法',
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
        name: 'spanMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '合并行或列的计算方法',
            'en-US': 'spanMethod',
          },
          tip: '合并行或列的计算方法',
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
        name: 'selectOnIndeterminate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在多选表格中',
            'en-US': 'selectOnIndeterminate',
          },
          tip: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'indent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示树形数据时',
            'en-US': 'indent',
          },
          tip: '展示树形数据时，树节点的缩进',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 16,
      },
      {
        name: 'lazy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否懒加载子节点数据',
            'en-US': 'lazy',
          },
          tip: '是否懒加载子节点数据',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'load',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载子节点数据的函数',
            'en-US': 'load',
          },
          tip: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'treeProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '渲染嵌套数据的配置选项',
            'en-US': 'treeProps',
          },
          tip: '渲染嵌套数据的配置选项',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'append',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '插入至表格最后一行之后的内容',
            'en-US': 'append',
          },
          tip: '插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。',
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
          name: 'onSelect',
          description: '当用户手动勾选数据行的 Checkbox 时触发的事件',
          template:
            "onSelect(extParams) {\n  // 当用户手动勾选数据行的 Checkbox 时触发的事件\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onSelect-all',
          description: '当用户手动勾选全选 Checkbox 时触发的事件',
          template:
            "onSelectAll(extParams) {\n  // 当用户手动勾选全选 Checkbox 时触发的事件\n  console.log('onSelectAll', extParams)\n}",
        },
        {
          name: 'onSelection-change',
          description: '当选择项发生变化时会触发该事件',
          template:
            "onSelectionChange(extParams) {\n  // 当选择项发生变化时会触发该事件\n  console.log('onSelectionChange', extParams)\n}",
        },
        {
          name: 'onCell-mouse-enter',
          description: '当单元格 hover 进入时会触发该事件',
          template:
            "onCellMouseEnter(extParams) {\n  // 当单元格 hover 进入时会触发该事件\n  console.log('onCellMouseEnter', extParams)\n}",
        },
        {
          name: 'onCell-mouse-leave',
          description: '当单元格 hover 退出时会触发该事件',
          template:
            "onCellMouseLeave(extParams) {\n  // 当单元格 hover 退出时会触发该事件\n  console.log('onCellMouseLeave', extParams)\n}",
        },
        {
          name: 'onCell-click',
          description: '当某个单元格被点击时会触发该事件',
          template:
            "onCellClick(extParams) {\n  // 当某个单元格被点击时会触发该事件\n  console.log('onCellClick', extParams)\n}",
        },
        {
          name: 'onCell-dblclick',
          description: '当某个单元格被双击击时会触发该事件',
          template:
            "onCellDblclick(extParams) {\n  // 当某个单元格被双击击时会触发该事件\n  console.log('onCellDblclick', extParams)\n}",
        },
        {
          name: 'onRow-click',
          description: '当某一行被点击时会触发该事件',
          template:
            "onRowClick(extParams) {\n  // 当某一行被点击时会触发该事件\n  console.log('onRowClick', extParams)\n}",
        },
        {
          name: 'onRow-contextmenu',
          description: '当某一行被鼠标右键点击时会触发该事件',
          template:
            "onRowContextmenu(extParams) {\n  // 当某一行被鼠标右键点击时会触发该事件\n  console.log('onRowContextmenu', extParams)\n}",
        },
        {
          name: 'onRow-dblclick',
          description: '当某一行被双击时会触发该事件',
          template:
            "onRowDblclick(extParams) {\n  // 当某一行被双击时会触发该事件\n  console.log('onRowDblclick', extParams)\n}",
        },
        {
          name: 'onHeader-click',
          description: '当某一列的表头被点击时会触发该事件',
          template:
            "onHeaderClick(extParams) {\n  // 当某一列的表头被点击时会触发该事件\n  console.log('onHeaderClick', extParams)\n}",
        },
        {
          name: 'onHeader-contextmenu',
          description: '当某一列的表头被鼠标右键点击时触发该事件',
          template:
            "onHeaderContextmenu(extParams) {\n  // 当某一列的表头被鼠标右键点击时触发该事件\n  console.log('onHeaderContextmenu', extParams)\n}",
        },
        {
          name: 'onSort-change',
          description: '当表格的排序条件发生变化的时候会触发该事件',
          template:
            "onSortChange(extParams) {\n  // 当表格的排序条件发生变化的时候会触发该事件\n  console.log('onSortChange', extParams)\n}",
        },
        {
          name: 'onFilter-change',
          description:
            '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
          template:
            "onFilterChange(extParams) {\n  // 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。\n  console.log('onFilterChange', extParams)\n}",
        },
        {
          name: 'onCurrent-change',
          description:
            '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
          template:
            "onCurrentChange(extParams) {\n  // 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性\n  console.log('onCurrentChange', extParams)\n}",
        },
        {
          name: 'onHeader-dragend',
          description: '当拖动表头改变了列的宽度的时候会触发该事件',
          template:
            "onHeaderDragend(extParams) {\n  // 当拖动表头改变了列的宽度的时候会触发该事件\n  console.log('onHeaderDragend', extParams)\n}",
        },
        {
          name: 'onExpand-change',
          description:
            '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）',
          template:
            "onExpandChange(extParams) {\n  // 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）\n  console.log('onExpandChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '表格',
      screenshot: './screenshots/table.webp',
      schema: {
        componentName: 'ElTable',
        props: {
          data: [
            {
              name: '张三',
              age: 18,
            },
            {
              name: '李四',
              age: 20,
            },
          ],
        },
        children: [
          {
            componentName: 'ElTableColumn',
            props: {
              prop: 'name',
              label: '姓名',
            },
          },
          {
            componentName: 'ElTableColumn',
            props: {
              prop: 'age',
              label: '年龄',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

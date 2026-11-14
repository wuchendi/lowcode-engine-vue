import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (table-v2); see https://element-plus.org/zh-CN/component/table-v2.html
const meta = {
  componentName: 'ElTableV2',
  title: '虚拟化表格 beta',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/table-v2.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'cache',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cache',
            'en-US': 'cache',
          },
          tip: '为了更好的渲染效果预先多加载的行数',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 2,
      },
      {
        name: 'estimatedRowHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '渲染动态的单元格的预估高度',
            'en-US': 'estimatedRowHeight',
          },
          tip: '渲染动态的单元格的预估高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'headerClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerClass',
            'en-US': 'headerClass',
          },
          tip: 'header 部分的自定义 class 名',
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
        name: 'headerProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerProps',
            'en-US': 'headerProps',
          },
          tip: 'header 部分的自定义 props 名',
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
        name: 'headerCellProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerCellProps',
            'en-US': 'headerCellProps',
          },
          tip: 'header cell 部分的自定义 props 名',
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
        name: 'headerHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerHeight',
            'en-US': 'headerHeight',
          },
          tip: 'Header 的高度由height设置。如果传入数组，它会使 header row 等于数组长度',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 50,
      },
      {
        name: 'footerHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Footer 部分的高度',
            'en-US': 'footerHeight',
          },
          tip: 'Footer 部分的高度，当传入值时，这部分将被计算入 table 的高度里',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'rowClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rowClass',
            'en-US': 'rowClass',
          },
          tip: 'row wrapper 部分的自定义 class 名',
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
        name: 'rowKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每行的 key 值',
            'en-US': 'rowKey',
          },
          tip: '每行的 key 值，如果不提供，将使用索引 index 代替',
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
        defaultValue: 'id',
      },
      {
        name: 'rowProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rowProps',
            'en-US': 'rowProps',
          },
          tip: 'row component 部分的自定义 class 名',
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
        name: 'rowHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每行的高度',
            'en-US': 'rowHeight',
          },
          tip: '每行的高度, 用于计算表的总高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 50,
      },
      {
        name: 'rowEventHandlers',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rowEventHandlers',
            'en-US': 'rowEventHandlers',
          },
          tip: '当每行添加了一系列事件处理器时触发',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'cellProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cellProps',
            'en-US': 'cellProps',
          },
          tip: '每个单元格 cell 的自定义 props (除了 header cell 以外)',
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
        name: 'columns',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列 column 的配置数组',
            'en-US': 'columns',
          },
          tip: '列 column 的配置数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '要在表中渲染的数据数组',
            'en-US': 'data',
          },
          tip: '要在表中渲染的数据数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'dataGetter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dataGetter',
            'en-US': 'dataGetter',
          },
          tip: '一个自定义方法从数据源获取数据',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'fixedData',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fixedData',
            'en-US': 'fixedData',
          },
          tip: '渲染行在表格主内容上方和 header 下方区域的数据',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'expandColumnKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandColumnKey',
            'en-US': 'expandColumnKey',
          },
          tip: '列的 key 来标记哪个行可以被展开',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'expandedRowKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expandedRowKeys',
            'en-US': 'expandedRowKeys',
          },
          tip: '存放行展开状态的 key 的数组，可以和 v-model 搭配使用',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'defaultExpandedRowKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultExpandedRowKeys',
            'en-US': 'defaultExpandedRowKeys',
          },
          tip: '默认展开的行的 key 的数组, 这个数据不是响应式的',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'fixed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '单元格宽度是自适应还是固定',
            'en-US': 'fixed',
          },
          tip: '单元格宽度是自适应还是固定',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'width',
            'en-US': 'width',
          },
          tip: 'Width of the table',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'height',
            'en-US': 'height',
          },
          tip: 'Height of the table',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'maxHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表格的最大高度',
            'en-US': 'maxHeight',
          },
          tip: '表格的最大高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'indentSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '树形表的水平缩进',
            'en-US': 'indentSize',
          },
          tip: '树形表的水平缩进',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 12,
      },
      {
        name: 'hScrollbarSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配置表格的水平滚动条大小',
            'en-US': 'hScrollbarSize',
          },
          tip: '配置表格的水平滚动条大小，防止水平和垂直滚动条重叠。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 6,
      },
      {
        name: 'vScrollbarSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配置表格的垂直滚动条大小',
            'en-US': 'vScrollbarSize',
          },
          tip: '配置表格的垂直滚动条大小，防止水平和垂直滚动条重叠。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 6,
      },
      {
        name: 'scrollbarAlwaysOn',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '如果开启',
            'en-US': 'scrollbarAlwaysOn',
          },
          tip: '如果开启，滚动条将一直显示，反之只会在鼠标经过时显示。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'sortBy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '排序方式',
            'en-US': 'sortBy',
          },
          tip: '排序方式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'sortState',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多个排序',
            'en-US': 'sortState',
          },
          tip: '多个排序',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'cell',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cell',
            'en-US': 'cell',
          },
          tip: 'object&lt;CellSlotProps&gt;',
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
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'header',
            'en-US': 'header',
          },
          tip: 'object&lt;HeaderSlotProps&gt;',
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
        name: 'header-cell',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'header-cell',
            'en-US': 'header-cell',
          },
          tip: 'object&lt;HeaderCellSlotProps&gt;',
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
        name: 'row',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'row',
            'en-US': 'row',
          },
          tip: 'object&lt;RowSlotProps&gt;',
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
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'footer',
            'en-US': 'footer',
          },
          tip: '—',
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
        name: 'empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'empty',
            'en-US': 'empty',
          },
          tip: '—',
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
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'overlay',
            'en-US': 'overlay',
          },
          tip: '—',
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
          name: 'onColumnSort',
          description: '列排序时调用',
          template:
            "onColumnSort(extParams) {\n  // 列排序时调用\n  console.log('onColumnSort', extParams)\n}",
        },
        {
          name: 'onExpandedRowsChange',
          description: '行展开状态改变时触发',
          template:
            "onExpandedRowsChange(extParams) {\n  // 行展开状态改变时触发\n  console.log('onExpandedRowsChange', extParams)\n}",
        },
        {
          name: 'onEndReached',
          description:
            '到达表格末尾时触发。回调包含剩余距离，它通常是滚动条高度。',
          template:
            "onEndReached(extParams) {\n  // 到达表格末尾时触发。回调包含剩余距离，它通常是滚动条高度。\n  console.log('onEndReached', extParams)\n}",
        },
        {
          name: 'onScroll',
          description: '表格被用户滚动后触发',
          template:
            "onScroll(extParams) {\n  // 表格被用户滚动后触发\n  console.log('onScroll', extParams)\n}",
        },
        {
          name: 'onRowsRendered',
          description: '当行被渲染后触发',
          template:
            "onRowsRendered(extParams) {\n  // 当行被渲染后触发\n  console.log('onRowsRendered', extParams)\n}",
        },
        {
          name: 'onRowExpand',
          description: '点击箭头图标展开/折叠树节点时触发',
          template:
            "onRowExpand(extParams) {\n  // 点击箭头图标展开/折叠树节点时触发\n  console.log('onRowExpand', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '虚拟化表格 beta',
      screenshot: './screenshots/table-v2.webp',
      schema: {
        componentName: 'ElTableV2',
        props: {
          columns: [],
          data: [],
          width: 50,
          height: 50,
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

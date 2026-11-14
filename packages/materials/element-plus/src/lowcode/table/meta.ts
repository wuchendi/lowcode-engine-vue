import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (config-provider); see https://element-plus.org/zh-CN/component/config-provider.html
const meta = {
  componentName: 'ElTable',
  title: '全局配置 Table',
  group: 'Element 组件',
  category: '配置组件',
  docUrl: 'https://element-plus.org/zh-CN/component/config-provider.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'showOverflowTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showOverflowTooltip',
            'en-US': 'showOverflowTooltip',
          },
          tip: 'whether to hide extra content and show them in a tooltip when hovering on the cell.It will affect all the table columns, refer to table tooltip-options',
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
      },
      {
        name: 'tooltipEffect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltipEffect',
            'en-US': 'tooltipEffect',
          },
          tip: 'the effect of the overflow tooltip',
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
        defaultValue: 'dark',
      },
      {
        name: 'tooltipOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltipOptions',
            'en-US': 'tooltipOptions',
          },
          tip: 'the options for the overflow tooltip, see the following tooltip component',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'tooltipFormatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltipFormatter',
            'en-US': 'tooltipFormatter',
          },
          tip: 'customize tooltip content when using show-overflow-tooltip',
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
        name: 'data',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'data',
            'en-US': 'data',
          },
          tip: 'table data',
        },
        setter: 'JsonSetter',
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
          tip: "table's height. By default it has an auto height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles",
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
            'zh-CN': 'maxHeight',
            'en-US': 'maxHeight',
          },
          tip: "table's max-height. The legal value is a number or the height in px",
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
            'zh-CN': 'stripe',
            'en-US': 'stripe',
          },
          tip: 'whether Table is striped',
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
            'zh-CN': 'border',
            'en-US': 'border',
          },
          tip: 'whether Table has vertical border',
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
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'size of Table',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
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
            'zh-CN': 'fit',
            'en-US': 'fit',
          },
          tip: 'whether width of column automatically fits its container',
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
            'zh-CN': 'showHeader',
            'en-US': 'showHeader',
          },
          tip: 'whether Table header is visible',
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
            'zh-CN': 'highlightCurrentRow',
            'en-US': 'highlightCurrentRow',
          },
          tip: 'whether current row is highlighted',
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
            'zh-CN': 'currentRowKey',
            'en-US': 'currentRowKey',
          },
          tip: 'key of current row, a set only prop',
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
          tip: 'function that returns custom class names for a row, or a string assigning class names for every row',
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
            'zh-CN': 'rowStyle',
            'en-US': 'rowStyle',
          },
          tip: 'function that returns custom style for a row, or an object assigning custom style for every row',
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
          tip: 'function that returns custom class names for a cell, or a string assigning class names for every cell',
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
          tip: 'function that returns custom style for a cell, or an object assigning custom style for every cell',
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
          tip: 'function that returns custom class names for a row in table header, or a string assigning class names for every row in table header',
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
          tip: 'function that returns custom style for a row in table header, or an object assigning custom style for every row in table header',
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
          tip: 'function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header',
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
          tip: 'function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header',
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
            'zh-CN': 'rowKey',
            'en-US': 'rowKey',
          },
          tip: 'key of row data, used for optimizing rendering. Required if reserve-selection is on or display tree data. When its type is String, multi-level access is supported, e.g. user.info.id, but user.info[0].id is not supported, in which case Function should be used',
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
            'zh-CN': 'emptyText',
            'en-US': 'emptyText',
          },
          tip: 'displayed text when data is empty. You can customize this area with #empty',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'No Data',
      },
      {
        name: 'defaultExpandAll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultExpandAll',
            'en-US': 'defaultExpandAll',
          },
          tip: 'whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data',
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
          tip: "set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop.",
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
          tip: 'set the default sort column and order. property prop is used to set default sort column, property order is used to set default sort order',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'appendFilterPanelTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendFilterPanelTo',
            'en-US': 'appendFilterPanelTo',
          },
          tip: 'which element the filter panels appends to',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showSummary',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showSummary',
            'en-US': 'showSummary',
          },
          tip: 'whether to display a summary row',
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
            'zh-CN': 'sumText',
            'en-US': 'sumText',
          },
          tip: 'displayed text for the first column of summary row',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Sum',
      },
      {
        name: 'summaryMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'summaryMethod',
            'en-US': 'summaryMethod',
          },
          tip: 'custom summary method',
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
        name: 'spanMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'spanMethod',
            'en-US': 'spanMethod',
          },
          tip: 'method that returns rowspan and colspan',
        },
        setter: [
          {
            componentName: 'NumberSetter',
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
        name: 'selectOnIndeterminate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'selectOnIndeterminate',
            'en-US': 'selectOnIndeterminate',
          },
          tip: 'controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected',
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
            'zh-CN': 'indent',
            'en-US': 'indent',
          },
          tip: 'horizontal indentation of tree data',
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
            'zh-CN': 'lazy',
            'en-US': 'lazy',
          },
          tip: 'whether to lazy loading data',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'load',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'load',
            'en-US': 'load',
          },
          tip: 'method for loading child row data, only works when lazy is true',
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
        name: 'treeProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'treeProps',
            'en-US': 'treeProps',
          },
          tip: 'configuration for rendering nested data',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'tableLayout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tableLayout',
            'en-US': 'tableLayout',
          },
          tip: 'sets the algorithm used to lay out table cells, rows, and columns',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'fixed',
                value: 'fixed',
              },
              {
                title: 'auto',
                value: 'auto',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'fixed',
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
        name: 'flexible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'flexible',
            'en-US': 'flexible',
          },
          tip: "ensure main axis minimum-size doesn't follow the content",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'scrollbarTabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'scrollbarTabindex',
            'en-US': 'scrollbarTabindex',
          },
          tip: "body scrollbar's wrap container tabindex",
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
        name: 'allowDragLastColumn',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'allowDragLastColumn',
            'en-US': 'allowDragLastColumn',
          },
          tip: 'whether to allow drag the last column',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'preserveExpandedContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'preserveExpandedContent',
            'en-US': 'preserveExpandedContent',
          },
          tip: 'whether to preserve expanded row content in DOM when collapsed',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'nativeScrollbar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'nativeScrollbar',
            'en-US': 'nativeScrollbar',
          },
          tip: 'whether to use native scrollbars',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'rowExpandable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rowExpandable',
            'en-US': 'rowExpandable',
          },
          tip: 'enable expandable rows, works when the table has a column type="expand"',
        },
        setter: [
          {
            componentName: 'NumberSetter',
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
        name: 'append',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'append',
            'en-US': 'append',
          },
          tip: 'Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.',
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
          tip: 'you can customize content when data is empty.',
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
          description: 'triggers when user clicks the checkbox in a row',
          template:
            "onSelect(...args, extParams) {\n  // triggers when user clicks the checkbox in a row\n  console.log('onSelect', ...args)\n}",
        },
        {
          name: 'onSelectAll',
          description: 'triggers when user clicks the checkbox in table header',
          template:
            "onSelectAll(...args, extParams) {\n  // triggers when user clicks the checkbox in table header\n  console.log('onSelectAll', ...args)\n}",
        },
        {
          name: 'onSelectionChange',
          description: 'triggers when selection changes',
          template:
            "onSelectionChange(...args, extParams) {\n  // triggers when selection changes\n  console.log('onSelectionChange', ...args)\n}",
        },
        {
          name: 'onCellMouseEnter',
          description: 'triggers when hovering into a cell',
          template:
            "onCellMouseEnter(...args, extParams) {\n  // triggers when hovering into a cell\n  console.log('onCellMouseEnter', ...args)\n}",
        },
        {
          name: 'onCellMouseLeave',
          description: 'triggers when hovering out of a cell',
          template:
            "onCellMouseLeave(...args, extParams) {\n  // triggers when hovering out of a cell\n  console.log('onCellMouseLeave', ...args)\n}",
        },
        {
          name: 'onCellClick',
          description: 'triggers when clicking a cell',
          template:
            "onCellClick(...args, extParams) {\n  // triggers when clicking a cell\n  console.log('onCellClick', ...args)\n}",
        },
        {
          name: 'onCellDblclick',
          description: 'triggers when double clicking a cell',
          template:
            "onCellDblclick(...args, extParams) {\n  // triggers when double clicking a cell\n  console.log('onCellDblclick', ...args)\n}",
        },
        {
          name: 'onCellContextmenu',
          description: 'triggers when user right clicks on a cell',
          template:
            "onCellContextmenu(...args, extParams) {\n  // triggers when user right clicks on a cell\n  console.log('onCellContextmenu', ...args)\n}",
        },
        {
          name: 'onRowClick',
          description: 'triggers when clicking a row',
          template:
            "onRowClick(...args, extParams) {\n  // triggers when clicking a row\n  console.log('onRowClick', ...args)\n}",
        },
        {
          name: 'onRowContextmenu',
          description: 'triggers when user right clicks on a row',
          template:
            "onRowContextmenu(...args, extParams) {\n  // triggers when user right clicks on a row\n  console.log('onRowContextmenu', ...args)\n}",
        },
        {
          name: 'onRowDblclick',
          description: 'triggers when double clicking a row',
          template:
            "onRowDblclick(...args, extParams) {\n  // triggers when double clicking a row\n  console.log('onRowDblclick', ...args)\n}",
        },
        {
          name: 'onHeaderClick',
          description: 'triggers when clicking a column header',
          template:
            "onHeaderClick(...args, extParams) {\n  // triggers when clicking a column header\n  console.log('onHeaderClick', ...args)\n}",
        },
        {
          name: 'onHeaderContextmenu',
          description: 'triggers when user right clicks on a column header',
          template:
            "onHeaderContextmenu(...args, extParams) {\n  // triggers when user right clicks on a column header\n  console.log('onHeaderContextmenu', ...args)\n}",
        },
        {
          name: 'onSortChange',
          description: "triggers when Table's sorting changes",
          template:
            "onSortChange(...args, extParams) {\n  // triggers when Table's sorting changes\n  console.log('onSortChange', ...args)\n}",
        },
        {
          name: 'onFilterChange',
          description: "triggers when the table's filter changes",
          template:
            "onFilterChange(...args, extParams) {\n  // triggers when the table's filter changes\n  console.log('onFilterChange', ...args)\n}",
        },
        {
          name: 'onCurrentChange',
          description: 'triggers when current row changes',
          template:
            "onCurrentChange(...args, extParams) {\n  // triggers when current row changes\n  console.log('onCurrentChange', ...args)\n}",
        },
        {
          name: 'onHeaderDragend',
          description:
            "triggers after changing a column's width by dragging the column header's border",
          template:
            "onHeaderDragend(...args, extParams) {\n  // triggers after changing a column's width by dragging the column header's border\n  console.log('onHeaderDragend', ...args)\n}",
        },
        {
          name: 'onExpandChange',
          description:
            'triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)',
          template:
            "onExpandChange(...args, extParams) {\n  // triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)\n  console.log('onExpandChange', ...args)\n}",
        },
        {
          name: 'onScroll',
          description: 'Invoked after scrolled',
          template:
            "onScroll(...args, extParams) {\n  // Invoked after scrolled\n  console.log('onScroll', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '全局配置 Table',
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

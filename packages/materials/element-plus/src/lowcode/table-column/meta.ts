import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (table); see https://element-plus.org/zh-CN/component/table.html
const meta = {
  componentName: 'ElTableColumn',
  title: '表格 TableColumn',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/table.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: 'type of the column. If set to selection, the column will display checkbox. If set to index, the column will display index of the row (staring from 1). If set to expand, the column will display expand icon',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'selection',
                value: 'selection',
              },
              {
                title: 'index',
                value: 'index',
              },
              {
                title: 'expand',
                value: 'expand',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'index',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'index',
            'en-US': 'index',
          },
          tip: 'customize indices for each row, works on columns with type=index',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'label',
            'en-US': 'label',
          },
          tip: 'column label',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'columnKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'columnKey',
            'en-US': 'columnKey',
          },
          tip: "column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered",
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prop',
            'en-US': 'prop',
          },
          tip: 'field name. You can also use its alias: property',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'width',
            'en-US': 'width',
          },
          tip: 'column width',
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
        name: 'minWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'minWidth',
            'en-US': 'minWidth',
          },
          tip: 'column minimum width. Columns with width has a fixed width, while columns with min-width has a width that is distributed in proportion',
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
        name: 'fixed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fixed',
            'en-US': 'fixed',
          },
          tip: 'whether column is fixed at left / right. Will be fixed at left if true',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'left',
                  value: 'left',
                },
                {
                  title: 'right',
                  value: 'right',
                },
              ],
            },
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'renderHeader',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'renderHeader',
            'en-US': 'renderHeader',
          },
          tip: 'render function for table header of this column',
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
        name: 'sortable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sortable',
            'en-US': 'sortable',
          },
          tip: "whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the sort-change event of Table",
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'sortMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sortMethod',
            'en-US': 'sortMethod',
          },
          tip: 'sorting method, works when sortable is true. Should return a number, just like Array.sort',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'sortBy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sortBy',
            'en-US': 'sortBy',
          },
          tip: 'specify which property to sort by, works when sortable is true and sort-method is undefined. If set to an Array, the column will sequentially sort by the next property if the previous one is equal',
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
        name: 'sortOrders',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sortOrders',
            'en-US': 'sortOrders',
          },
          tip: 'the order of the sorting strategies used when sorting the data, works when sortable is true. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'resizable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'resizable',
            'en-US': 'resizable',
          },
          tip: 'whether column width can be resized, works when border of el-table is true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'formatter',
            'en-US': 'formatter',
          },
          tip: 'function that formats cell content',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'showOverflowTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showOverflowTooltip',
            'en-US': 'showOverflowTooltip',
          },
          tip: 'whether to hide extra content and show them in a tooltip when hovering on the cell',
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
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'align',
            'en-US': 'align',
          },
          tip: 'alignment',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'headerAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerAlign',
            'en-US': 'headerAlign',
          },
          tip: 'alignment of the table header. If omitted, the value of the above align attribute will be applied',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'className',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'className',
            'en-US': 'className',
          },
          tip: 'class name of cells in the column',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelClassName',
            'en-US': 'labelClassName',
          },
          tip: 'class name of the label of this column',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'selectable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'selectable',
            'en-US': 'selectable',
          },
          tip: "function that determines if a certain row can be selected, works when type is 'selection'",
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
        name: 'reserveSelection',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'reserveSelection',
            'en-US': 'reserveSelection',
          },
          tip: "whether to reserve selection after data refreshing, works when type is 'selection'. Note that row-key is required for this to work",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'filters',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filters',
            'en-US': 'filters',
          },
          tip: 'an array of data filtering options. For each element in this array, text and value are required',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'filterPlacement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterPlacement',
            'en-US': 'filterPlacement',
          },
          tip: 'placement for the filter dropdown',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'top-start',
                value: 'top-start',
              },
              {
                title: 'top-end',
                value: 'top-end',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
              {
                title: 'bottom-start',
                value: 'bottom-start',
              },
              {
                title: 'bottom-end',
                value: 'bottom-end',
              },
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'left-start',
                value: 'left-start',
              },
              {
                title: 'left-end',
                value: 'left-end',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'right-start',
                value: 'right-start',
              },
              {
                title: 'right-end',
                value: 'right-end',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'filterClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterClassName',
            'en-US': 'filterClassName',
          },
          tip: 'className for the filter dropdown',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterMultiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterMultiple',
            'en-US': 'filterMultiple',
          },
          tip: 'whether data filtering supports multiple options',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'filterMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterMethod',
            'en-US': 'filterMethod',
          },
          tip: 'data filtering method. If filter-multiple is on, this method will be called multiple times for each row, and a row will display if one of the calls returns true',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'filteredValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filteredValue',
            'en-US': 'filteredValue',
          },
          tip: 'filter value for selected data, might be useful when table header is rendered with render-header',
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
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'header',
            'en-US': 'header',
          },
          tip: 'Custom content for table header',
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
        name: 'filter-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filter-icon',
            'en-US': 'filter-icon',
          },
          tip: 'Custom content for filter icon',
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
        name: 'expand',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'expand',
            'en-US': 'expand',
          },
          tip: 'Custom content for expand columns. The expandable property is supported starting from v2.13.2.',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['ElTable'],
      },
    },
  },
  snippets: [
    {
      title: '表格 TableColumn',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElTableColumn',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

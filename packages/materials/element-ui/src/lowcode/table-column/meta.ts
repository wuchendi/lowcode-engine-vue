import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (table); see https://element.eleme.cn/#/zh-CN/component/table
const meta = {
  componentName: 'ElTableColumn',
  title: '表格 TableColumn',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/table',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对应列的类型',
            'en-US': 'type',
          },
          tip: '对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
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
      },
      {
        name: 'index',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'index',
            'en-US': 'index',
          },
          tip: '如果设置了 type=index，可以通过传递 index 属性来自定义索引',
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
        name: 'columnKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'column 的 key',
            'en-US': 'columnKey',
          },
          tip: 'column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示的标题',
            'en-US': 'label',
          },
          tip: '显示的标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对应列内容的字段名',
            'en-US': 'prop',
          },
          tip: '对应列内容的字段名，也可以使用 property 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对应列的宽度',
            'en-US': 'width',
          },
          tip: '对应列的宽度',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'minWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对应列的最小宽度',
            'en-US': 'minWidth',
          },
          tip: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'fixed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列是否固定在左侧或者右侧',
            'en-US': 'fixed',
          },
          tip: '列是否固定在左侧或者右侧，true 表示固定在左侧',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'true',
                  value: 'true',
                },
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
      },
      {
        name: 'renderHeader',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'renderHeader',
            'en-US': 'renderHeader',
          },
          tip: '列标题 Label 区域渲染使用的 Function',
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
        name: 'sortable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对应列是否可以排序',
            'en-US': 'sortable',
          },
          tip: "对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'true',
                  value: 'true',
                },
                {
                  title: 'false',
                  value: 'false',
                },
                {
                  title: 'custom',
                  value: 'custom',
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
        name: 'sortMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sortMethod',
            'en-US': 'sortMethod',
          },
          tip: '对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'sortBy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定数据按照哪个属性进行排序',
            'en-US': 'sortBy',
          },
          tip: '指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推',
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
        name: 'sortOrders',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sortOrders',
            'en-US': 'sortOrders',
          },
          tip: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序',
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
          tip: '对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）',
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
            'zh-CN': '用来格式化内容',
            'en-US': 'formatter',
          },
          tip: '用来格式化内容',
        },
        setter: 'FunctionSetter',
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
          tip: '当内容过长被隐藏时显示 tooltip',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对齐方式',
            'en-US': 'align',
          },
          tip: '对齐方式',
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
            'zh-CN': '表头对齐方式',
            'en-US': 'headerAlign',
          },
          tip: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
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
      },
      {
        name: 'className',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的 className',
            'en-US': 'className',
          },
          tip: '列的 className',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前列标题的自定义类名',
            'en-US': 'labelClassName',
          },
          tip: '当前列标题的自定义类名',
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
          tip: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选',
        },
        setter: 'FunctionSetter',
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
          tip: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）',
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
            'zh-CN': '数据过滤的选项',
            'en-US': 'filters',
          },
          tip: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'filterPlacement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '过滤弹出框的定位',
            'en-US': 'filterPlacement',
          },
          tip: '过滤弹出框的定位',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterMultiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数据过滤的选项是否多选',
            'en-US': 'filterMultiple',
          },
          tip: '数据过滤的选项是否多选',
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
            'zh-CN': '数据过滤使用的方法',
            'en-US': 'filterMethod',
          },
          tip: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'filteredValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中的数据过滤项',
            'en-US': 'filteredValue',
          },
          tip: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。',
        },
        setter: 'JsonSetter',
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

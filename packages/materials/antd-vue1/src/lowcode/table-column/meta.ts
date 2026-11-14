import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (table); see https://1x.antdv.com/components/table-cn/
const meta = {
  componentName: 'ATableColumn',
  title: '表格 Column',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/table-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置列内容的对齐方式',
            'en-US': 'align',
          },
          tip: '设置列内容的对齐方式',
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
                title: 'right',
                value: 'right',
              },
              {
                title: 'center',
                value: 'center',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'ellipsis',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '超过宽度将自动省略',
            'en-US': 'ellipsis',
          },
          tip: '超过宽度将自动省略，暂不支持和排序筛选一起使用。 设置为 true 时，表格布局将变成 tableLayout="fixed"。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'colSpan',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表头列合并',
            'en-US': 'colSpan',
          },
          tip: '表头列合并,设置为 0 时，不渲染',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'dataIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dataIndex',
            'en-US': 'dataIndex',
          },
          tip: '列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultFilteredValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认筛选值',
            'en-US': 'defaultFilteredValue',
          },
          tip: '默认筛选值',
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
        name: 'filterDropdown',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可以自定义筛选菜单',
            'en-US': 'filterDropdown',
          },
          tip: '可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互',
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
        name: 'filterDropdownVisible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterDropdownVisible',
            'en-US': 'filterDropdownVisible',
          },
          tip: '用于控制自定义筛选菜单是否可见。在 template 中可用 .sync 后缀, 参见 update:filterDropdownVisible',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'filtered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标识数据是否经过过滤',
            'en-US': 'filtered',
          },
          tip: '标识数据是否经过过滤，筛选图标会高亮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'filteredValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '筛选的受控属性',
            'en-US': 'filteredValue',
          },
          tip: '筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组',
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
        name: 'filterIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 filter 图标',
            'en-US': 'filterIcon',
          },
          tip: '自定义 filter 图标。',
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
        defaultValue: false,
      },
      {
        name: 'filterMultiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否多选',
            'en-US': 'filterMultiple',
          },
          tip: '是否多选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'filters',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表头的筛选菜单项',
            'en-US': 'filters',
          },
          tip: '表头的筛选菜单项',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'fixed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列是否固定',
            'en-US': 'fixed',
          },
          tip: "列是否固定，可选 true(等效于 left) 'left' 'right'",
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
        name: 'customRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '生成复杂数据的渲染函数',
            'en-US': 'customRender',
          },
          tip: '生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并',
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
        name: 'sorter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '排序函数',
            'en-US': 'sorter',
          },
          tip: '排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true',
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
        name: 'sortOrder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '排序的受控属性',
            'en-US': 'sortOrder',
          },
          tip: "排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false",
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
      },
      {
        name: 'sortDirections',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '支持的排序方式',
            'en-US': 'sortDirections',
          },
          tip: "支持的排序方式，取值为 'ascend' 'descend'",
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列头显示文字',
            'en-US': 'title',
          },
          tip: '列头显示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列宽度',
            'en-US': 'width',
          },
          tip: '列宽度',
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
        name: 'customCell',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置单元格属性',
            'en-US': 'customCell',
          },
          tip: '设置单元格属性',
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
        name: 'customHeaderCell',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头部单元格属性',
            'en-US': 'customHeaderCell',
          },
          tip: '设置头部单元格属性',
        },
        setter: 'FunctionSetter',
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
        parentWhitelist: ['ATable', 'ATableColumnGroup'],
      },
    },
  },
  snippets: [],
} as IPublicTypeComponentMetadata

export default meta

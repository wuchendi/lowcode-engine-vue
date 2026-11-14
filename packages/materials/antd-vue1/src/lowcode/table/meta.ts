import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (table); see https://1x.antdv.com/components/table-cn/
const meta = {
  componentName: 'ATable',
  title: '表格',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/table-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'tableLayout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tableLayout',
            'en-US': 'tableLayout',
          },
          tip: '表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'auto',
                value: 'auto',
              },
              {
                title: 'fixed',
                value: 'fixed',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示外边框和列边框',
            'en-US': 'bordered',
          },
          tip: '是否展示外边框和列边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'childrenColumnName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定树形结构的列名',
            'en-US': 'childrenColumnName',
          },
          tip: '指定树形结构的列名',
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
        defaultValue: 'children',
      },
      {
        name: 'columns',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表格列的配置描述',
            'en-US': 'columns',
          },
          tip: '表格列的配置描述，具体项见下表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'components',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '覆盖默认的 table 元素',
            'en-US': 'components',
          },
          tip: '覆盖默认的 table 元素',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'dataSource',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数据数组',
            'en-US': 'dataSource',
          },
          tip: '数据数组',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'defaultExpandAllRows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始时',
            'en-US': 'defaultExpandAllRows',
          },
          tip: '初始时，是否展开所有行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultExpandedRowKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认展开的行',
            'en-US': 'defaultExpandedRowKeys',
          },
          tip: '默认展开的行',
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
        name: 'expandedRowKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展开的行',
            'en-US': 'expandedRowKeys',
          },
          tip: '展开的行，控制属性。可用 .sync 后缀, 参见 update:expandedRowKeys',
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
        name: 'expandedRowRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '额外的展开行',
            'en-US': 'expandedRowRender',
          },
          tip: '额外的展开行',
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
        name: 'expandIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义展开图标',
            'en-US': 'expandIcon',
          },
          tip: '自定义展开图标',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'expandRowByClick',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '通过点击行来展开子行',
            'en-US': 'expandRowByClick',
          },
          tip: '通过点击行来展开子行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'expandIconColumnIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展开的图标显示在哪一列',
            'en-US': 'expandIconColumnIndex',
          },
          tip: '展开的图标显示在哪一列，如果没有 rowSelection，默认显示在第一列，否则显示在选择框后面',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表格尾部',
            'en-US': 'footer',
          },
          tip: '表格尾部',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'indentSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示树形数据时',
            'en-US': 'indentSize',
          },
          tip: '展示树形数据时，每层缩进的宽度，以 px 为单位',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 15,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '页面是否加载中',
            'en-US': 'loading',
          },
          tip: '页面是否加载中',
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
        name: 'locale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认文案设置',
            'en-US': 'locale',
          },
          tip: '默认文案设置，目前包括排序、过滤、空数据文案',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'pagination',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分页器',
            'en-US': 'pagination',
          },
          tip: '分页器，参考配置项或 pagination文档，设为 false 时不展示和进行分页',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'rowClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表格行的类名',
            'en-US': 'rowClassName',
          },
          tip: '表格行的类名',
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
        name: 'rowKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表格行 key 的取值',
            'en-US': 'rowKey',
          },
          tip: '表格行 key 的取值，可以是字符串或一个函数',
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
        defaultValue: 'key',
      },
      {
        name: 'rowSelection',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表项是否可选择',
            'en-US': 'rowSelection',
          },
          tip: '列表项是否可选择，配置项',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'scroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置横向或纵向滚动',
            'en-US': 'scroll',
          },
          tip: '设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个数字，如果要设置为 true，需要配合样式 .ant-table td { white-space: nowrap; }',
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
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表格大小',
            'en-US': 'size',
          },
          tip: '表格大小',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表格标题',
            'en-US': 'title',
          },
          tip: '表格标题',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'customHeaderRow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头部行属性',
            'en-US': 'customHeaderRow',
          },
          tip: '设置头部行属性',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'customRow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置行属性',
            'en-US': 'customRow',
          },
          tip: '设置行属性',
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
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置表格内各类浮层的渲染节点',
            'en-US': 'getPopupContainer',
          },
          tip: '设置表格内各类浮层的渲染节点，如筛选菜单',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'transformCellText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数据渲染前可以再次改变',
            'en-US': 'transformCellText',
          },
          tip: '数据渲染前可以再次改变，一般用户空数据的默认配置，可以通过 ConfigProvider 全局统一配置',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '分页、排序、筛选变化时触发',
          template:
            "onChange(extParams) {\n  // 分页、排序、筛选变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onExpand',
          description: '点击展开图标时触发',
          template:
            "onExpand(extParams) {\n  // 点击展开图标时触发\n  console.log('onExpand', extParams)\n}",
        },
        {
          name: 'onExpandedRowsChange',
          description: '展开的行变化时触发',
          template:
            "onExpandedRowsChange(extParams) {\n  // 展开的行变化时触发\n  console.log('onExpandedRowsChange', extParams)\n}",
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
        componentName: 'ATable',
        props: {
          columns: [
            {
              title: '姓名',
              dataIndex: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
            },
          ],
          dataSource: [
            {
              key: '1',
              name: '张三',
              age: 18,
            },
            {
              key: '2',
              name: '李四',
              age: 20,
            },
          ],
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

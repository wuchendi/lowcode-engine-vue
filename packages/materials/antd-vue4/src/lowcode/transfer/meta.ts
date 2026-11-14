import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (transfer); see https://antdv.com/components/transfer-cn
const meta = {
  componentName: 'ATransfer',
  title: '穿梭框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/transfer-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'dataSource',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数据源',
            'en-US': 'dataSource',
          },
          tip: '数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。',
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
        name: 'filterOption',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterOption',
            'en-US': 'filterOption',
          },
          tip: '接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可以设置为一个 作用域插槽',
            'en-US': 'footer',
          },
          tip: '可以设置为一个 作用域插槽',
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
        name: 'listStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '两个穿梭框的自定义样式',
            'en-US': 'listStyle',
          },
          tip: '两个穿梭框的自定义样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'locale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '各种语言',
            'en-US': 'locale',
          },
          tip: '各种语言',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'oneWay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示为单向样式',
            'en-US': 'oneWay',
          },
          tip: '展示为单向样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'operations',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '操作文案集合',
            'en-US': 'operations',
          },
          tip: '操作文案集合，顺序从上至下',
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
        name: 'operationStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '操作栏的自定义样式',
            'en-US': 'operationStyle',
          },
          tip: '操作栏的自定义样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'pagination',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '使用分页样式',
            'en-US': 'pagination',
          },
          tip: '使用分页样式，自定义渲染列表下无效',
        },
        setter: [
          {
            componentName: 'NumberSetter',
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
        name: 'render',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '每行数据渲染函数',
            'en-US': 'render',
          },
          tip: '每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title',
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
        name: 'selectAllLabels',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义顶部多选框标题的集合',
            'en-US': 'selectAllLabels',
          },
          tip: '自定义顶部多选框标题的集合',
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
        name: 'v-model:selectedKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置哪些项应该被选中',
            'en-US': 'v-model:selectedKeys',
          },
          tip: '设置哪些项应该被选中',
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
        name: 'showSearch',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示搜索框',
            'en-US': 'showSearch',
          },
          tip: '是否显示搜索框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showSelectAll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示全选勾选框',
            'en-US': 'showSelectAll',
          },
          tip: '是否展示全选勾选框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        name: 'v-model:targetKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:targetKeys',
            'en-US': 'v-model:targetKeys',
          },
          tip: '显示在右侧框数据的 key 集合',
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
        name: 'titles',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题集合',
            'en-US': 'titles',
          },
          tip: '标题集合，顺序从左至右',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '选项在两栏之间转移时的回调函数',
          template:
            "onChange(extParams) {\n  // 选项在两栏之间转移时的回调函数\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onScroll',
          description: '选项列表滚动时的回调函数',
          template:
            "onScroll(extParams) {\n  // 选项列表滚动时的回调函数\n  console.log('onScroll', extParams)\n}",
        },
        {
          name: 'onSearch',
          description: '搜索框内容时改变时的回调函数',
          template:
            "onSearch(extParams) {\n  // 搜索框内容时改变时的回调函数\n  console.log('onSearch', extParams)\n}",
        },
        {
          name: 'onSelectChange',
          description: '选中项发生改变时的回调函数',
          template:
            "onSelectChange(extParams) {\n  // 选中项发生改变时的回调函数\n  console.log('onSelectChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '穿梭框',
      screenshot: './screenshots/transfer.webp',
      schema: {
        componentName: 'ATransfer',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (auto-complete); see https://1x.antdv.com/components/auto-complete-cn/
const meta = {
  componentName: 'AAutoComplete',
  title: '自动完成',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/auto-complete-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '支持清除',
            'en-US': 'allowClear',
          },
          tip: '支持清除, 单选模式有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autoFocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'backfill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'backfill',
            'en-US': 'backfill',
          },
          tip: '使用键盘选择选项的时候把选中项回填到输入框中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dataSource',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动完成的数据源',
            'en-US': 'dataSource',
          },
          tip: '自动完成的数据源',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'dropdownMenuStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dropdownMenuStyle',
            'en-US': 'dropdownMenuStyle',
          },
          tip: 'dropdown 菜单自定义样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'defaultActiveFirstOption',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否默认高亮第一个选项',
            'en-US': 'defaultActiveFirstOption',
          },
          tip: '是否默认高亮第一个选项。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        name: 'filterOption',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否根据输入项进行筛选',
            'en-US': 'filterOption',
          },
          tip: '是否根据输入项进行筛选。当其为一个函数时，会接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。',
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
        defaultValue: true,
      },
      {
        name: 'optionLabelProp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'optionLabelProp',
            'en-US': 'optionLabelProp',
          },
          tip: '回填到选择框的 Option 的属性值，默认是 Option 的子元素。比如在子元素需要高亮效果时，此值可以设为 value。',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'children',
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框提示',
            'en-US': 'placeholder',
          },
          tip: '输入框提示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前选中的条目',
            'en-US': 'v-model',
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
        name: 'defaultOpen',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否默认展开下拉菜单',
            'en-US': 'defaultOpen',
          },
          tip: '是否默认展开下拉菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展开下拉菜单',
            'en-US': 'open',
          },
          tip: '是否展开下拉菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '选中 option，或 input 的 value 变化时，调用此函数',
          template:
            "onChange(extParams) {\n  // 选中 option，或 input 的 value 变化时，调用此函数\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '失去焦点时的回调',
          template:
            "onBlur(extParams) {\n  // 失去焦点时的回调\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '获得焦点时的回调',
          template:
            "onFocus(extParams) {\n  // 获得焦点时的回调\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onSearch',
          description: '搜索补全项的时候调用',
          template:
            "onSearch(extParams) {\n  // 搜索补全项的时候调用\n  console.log('onSearch', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '被选中时调用，参数为选中项的 value 值',
          template:
            "onSelect(extParams) {\n  // 被选中时调用，参数为选中项的 value 值\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onDropdownVisibleChange',
          description: '展开下拉菜单的回调',
          template:
            "onDropdownVisibleChange(extParams) {\n  // 展开下拉菜单的回调\n  console.log('onDropdownVisibleChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '自动完成',
      screenshot: './screenshots/auto-complete.webp',
      schema: {
        componentName: 'AAutoComplete',
        props: {
          style: {
            width: '200px',
          },
          options: [
            {
              value: 'a',
              label: '选项一',
            },
            {
              value: 'b',
              label: '选项二',
            },
          ],
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

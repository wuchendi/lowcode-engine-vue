import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (auto-complete); see https://antdv.com/components/auto-complete-cn
const meta = {
  componentName: 'AAutoComplete',
  title: '自动完成',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/auto-complete-cn',
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
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autofocus',
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
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框',
            'en-US': 'bordered',
          },
          tip: '是否有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '使用插槽自定义清除按钮',
            'en-US': 'clearIcon',
          },
          tip: '使用插槽自定义清除按钮',
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
      {
        name: 'option',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '通过 option 插槽',
            'en-US': 'option',
          },
          tip: '通过 option 插槽，自定义节点',
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
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动完成的数据源',
            'en-US': 'options',
          },
          tip: '自动完成的数据源',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onBlur',
          description: '失去焦点时的回调',
          template:
            "onBlur(extParams) {\n  // 失去焦点时的回调\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '选中 option，或 input 的 value 变化时，调用此函数',
          template:
            "onChange(extParams) {\n  // 选中 option，或 input 的 value 变化时，调用此函数\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onDropdownVisibleChange',
          description: '展开下拉菜单的回调',
          template:
            "onDropdownVisibleChange(extParams) {\n  // 展开下拉菜单的回调\n  console.log('onDropdownVisibleChange', extParams)\n}",
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
          name: 'onClear',
          description: '清除内容时回调',
          template:
            "onClear(extParams) {\n  // 清除内容时回调\n  console.log('onClear', extParams)\n}",
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

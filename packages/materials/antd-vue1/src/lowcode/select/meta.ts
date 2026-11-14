import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (select); see https://1x.antdv.com/components/select-cn/
const meta = {
  componentName: 'ASelect',
  title: '选择器',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/select-cn/',
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
          tip: '支持清除',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'autoClearSearchValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在选中项后清空搜索框',
            'en-US': 'autoClearSearchValue',
          },
          tip: '是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认获取焦点',
            'en-US': 'autoFocus',
          },
          tip: '默认获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
            componentName: 'NumberSetter',
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
        name: 'dropdownClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dropdownClassName',
            'en-US': 'dropdownClassName',
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
          tip: '下拉菜单和选择器同宽',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'dropdownRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义下拉框内容',
            'en-US': 'dropdownRender',
          },
          tip: '自定义下拉框内容',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'dropdownStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉菜单的 style 属性',
            'en-US': 'dropdownStyle',
          },
          tip: '下拉菜单的 style 属性',
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
        name: 'firstActiveValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认高亮的选项',
            'en-US': 'firstActiveValue',
          },
          tip: '默认高亮的选项',
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
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单渲染父节点',
            'en-US': 'getPopupContainer',
          },
          tip: '菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'labelInValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'labelInValue',
            'en-US': 'labelInValue',
          },
          tip: '是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 string 变为 {key: string, label: vNodes} 的格式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'maxTagCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最多显示多少个 tag',
            'en-US': 'maxTagCount',
          },
          tip: '最多显示多少个 tag',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'maxTagPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏 tag 时显示的内容',
            'en-US': 'maxTagPlaceholder',
          },
          tip: '隐藏 tag 时显示的内容',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'maxTagTextLength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大显示的 tag 文本长度',
            'en-US': 'maxTagTextLength',
          },
          tip: '最大显示的 tag 文本长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'mode',
            'en-US': 'mode',
          },
          tip: '设置 Select 的模式为多选或标签',
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
                title: 'multiple',
                value: 'multiple',
              },
              {
                title: 'tags',
                value: 'tags',
              },
              {
                title: 'combobox',
                value: 'combobox',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'notFoundContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当下拉列表为空时显示的内容',
            'en-US': 'notFoundContent',
          },
          tip: '当下拉列表为空时显示的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Not Found',
      },
      {
        name: 'optionFilterProp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'optionFilterProp',
            'en-US': 'optionFilterProp',
          },
          tip: '搜索时过滤对应的 option 属性，如设置为 children 表示对内嵌内容进行搜索',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'value',
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
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择框默认文字',
            'en-US': 'placeholder',
          },
          tip: '选择框默认文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showSearch',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '使单选模式可搜索',
            'en-US': 'showSearch',
          },
          tip: '使单选模式可搜索',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示下拉小箭头',
            'en-US': 'showArrow',
          },
          tip: '是否显示下拉小箭头',
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
            'zh-CN': '选择框大小',
            'en-US': 'size',
          },
          tip: '选择框大小，可选 large small',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的选择框后缀图标',
            'en-US': 'suffixIcon',
          },
          tip: '自定义的选择框后缀图标',
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
        name: 'removeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的多选框清除图标',
            'en-US': 'removeIcon',
          },
          tip: '自定义的多选框清除图标',
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
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的多选框清空图标',
            'en-US': 'clearIcon',
          },
          tip: '自定义的多选框清空图标',
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
        name: 'menuItemSelectedIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义当前选中的条目图标',
            'en-US': 'menuItemSelectedIcon',
          },
          tip: '自定义当前选中的条目图标',
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
        name: 'tokenSeparators',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tokenSeparators',
            'en-US': 'tokenSeparators',
          },
          tip: '在 tags 和 multiple 模式下自动分词的分隔符',
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
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'options 数据',
            'en-US': 'options',
          },
          tip: 'options 数据，如果设置则不需要手动构造 selectOption 节点',
        },
        setter: 'JsonSetter',
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
          name: 'onBlur',
          description: '失去焦点的时回调',
          template:
            "onBlur(extParams) {\n  // 失去焦点的时回调\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onChange',
          description:
            '选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数',
          template:
            "onChange(extParams) {\n  // 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onDeselect',
          description:
            '取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效',
          template:
            "onDeselect(extParams) {\n  // 取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效\n  console.log('onDeselect', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '获得焦点时回调',
          template:
            "onFocus(extParams) {\n  // 获得焦点时回调\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onInputKeydown',
          description: '键盘按下时回调',
          template:
            "onInputKeydown(extParams) {\n  // 键盘按下时回调\n  console.log('onInputKeydown', extParams)\n}",
        },
        {
          name: 'onMouseenter',
          description: '鼠标移入时回调',
          template:
            "onMouseenter(extParams) {\n  // 鼠标移入时回调\n  console.log('onMouseenter', extParams)\n}",
        },
        {
          name: 'onMouseleave',
          description: '鼠标移出时回调',
          template:
            "onMouseleave(extParams) {\n  // 鼠标移出时回调\n  console.log('onMouseleave', extParams)\n}",
        },
        {
          name: 'onPopupScroll',
          description: '下拉列表滚动时的回调',
          template:
            "onPopupScroll(extParams) {\n  // 下拉列表滚动时的回调\n  console.log('onPopupScroll', extParams)\n}",
        },
        {
          name: 'onSearch',
          description: '文本框值变化时回调',
          template:
            "onSearch(extParams) {\n  // 文本框值变化时回调\n  console.log('onSearch', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '被选中时调用，参数为选中项的 value (或 key) 值',
          template:
            "onSelect(extParams) {\n  // 被选中时调用，参数为选中项的 value (或 key) 值\n  console.log('onSelect', extParams)\n}",
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
      title: '选择器',
      screenshot: './screenshots/select.webp',
      schema: {
        componentName: 'ASelect',
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

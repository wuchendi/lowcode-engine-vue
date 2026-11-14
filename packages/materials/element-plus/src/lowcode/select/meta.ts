import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (select); see https://element-plus.org/zh-CN/component/select.html
const meta = {
  componentName: 'ElSelect',
  title: '选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/select.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中项绑定值',
            'en-US': 'v-model',
          },
          tip: '选中项绑定值',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
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
        name: 'multiple',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否多选',
            'en-US': 'multiple',
          },
          tip: '是否多选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'options',
            'en-US': 'options',
          },
          tip: 'data of the options, the key of value and label and disabled can be customize by props',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'props',
            'en-US': 'props',
          },
          tip: 'configuration options',
        },
        setter: 'JsonSetter',
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
        name: 'valueKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'valueKey',
            'en-US': 'valueKey',
          },
          tip: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'value',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尺寸',
            'en-US': 'size',
          },
          tip: '输入框尺寸',
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
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以清空选项',
            'en-US': 'clearable',
          },
          tip: '是否可以清空选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'collapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseTags',
            'en-US': 'collapseTags',
          },
          tip: '多选时是否将选中值按文字的形式展示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'collapseTagsTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'collapseTagsTooltip',
            'en-US': 'collapseTagsTooltip',
          },
          tip: 'whether show all selected tags when mouse hover text of collapse-tags. To use this, collapse-tags must be true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tagTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tagTooltip',
            'en-US': 'tagTooltip',
          },
          tip: 'configuration object for the collapse-tags tooltip. To use this, collapse-tags and collapse-tags-tooltip must be true',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'multipleLimit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'multipleLimit',
            'en-US': 'multipleLimit',
          },
          tip: 'multiple 属性设置为 true 时，代表多选场景下用户最多可以选择的项目数，为 0 则不限制',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 input 的 id',
            'en-US': 'id',
          },
          tip: '原生 input 的 id',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'Select 输入框的原生 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltip 主题',
            'en-US': 'effect',
          },
          tip: 'tooltip 主题，内置了 dark / light 两种',
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
        defaultValue: 'light',
      },
      {
        name: 'autocomplete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autocomplete',
            'en-US': 'autocomplete',
          },
          tip: 'Select 输入框的原生 autocomplete 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'off',
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '占位符',
            'en-US': 'placeholder',
          },
          tip: '占位符，默认为“Select”',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Select 组件是否可筛选',
            'en-US': 'filterable',
          },
          tip: 'Select 组件是否可筛选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'allowCreate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许用户创建新条目',
            'en-US': 'allowCreate',
          },
          tip: '是否允许用户创建新条目，当filterable设置为 true 时才会生效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'filterMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'filterMethod',
            'en-US': 'filterMethod',
          },
          tip: '自定义筛选方法的第一个参数是当前输入的值。只有当 filterable 设置为 true 时才会生效。',
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
        name: 'remote',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'remote',
            'en-US': 'remote',
          },
          tip: '其中的选项是否从服务器远程加载',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'debounce',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'debounce',
            'en-US': 'debounce',
          },
          tip: 'debounce delay during remote search, in milliseconds',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'remoteMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当输入值发生变化时触发的函数',
            'en-US': 'remoteMethod',
          },
          tip: '当输入值发生变化时触发的函数。它的参数就是当前的输入值。当filterable设置为 true 时才会生效',
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
        name: 'remoteShowSuffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '远程搜索方法显示后缀图标',
            'en-US': 'remoteShowSuffix',
          },
          tip: '远程搜索方法显示后缀图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否正在从远程获取数据',
            'en-US': 'loading',
          },
          tip: '是否正在从远程获取数据',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loadingText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '从服务器加载数据时显示的文本',
            'en-US': 'loadingText',
          },
          tip: '从服务器加载数据时显示的文本，默认为“Loading”',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'noMatchText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '搜索条件无匹配时显示的文字',
            'en-US': 'noMatchText',
          },
          tip: '搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置，默认是 “No matching data&#39;”',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'noDataText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '无选项时显示的文字',
            'en-US': 'noDataText',
          },
          tip: '无选项时显示的文字，也可以使用 empty 插槽设置自定义内容，默认是 “No data”',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: '为 Select 下拉菜单和标签提示设置自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperStyle',
            'en-US': 'popperStyle',
          },
          tip: "custom style for Select's dropdown and tags' tooltip",
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
        name: 'reserveKeyword',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'reserveKeyword',
            'en-US': 'reserveKeyword',
          },
          tip: '当 multiple 和 filterable被设置为 true 时，是否在选中一个选项后保留当前的搜索关键词',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'defaultFirstOption',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在输入框按下回车时',
            'en-US': 'defaultFirstOption',
          },
          tip: '是否在输入框按下回车时，选择第一个匹配项。需配合 filterable 或 remote 使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用 teleport',
            'en-US': 'teleported',
          },
          tip: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'appendTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendTo',
            'en-US': 'appendTo',
          },
          tip: 'which element the select dropdown appends to',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: '当下拉选择器未被激活并且persistent设置为false，选择器会被删除。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'automaticDropdown',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对于不可搜索的 Select',
            'en-US': 'automaticDropdown',
          },
          tip: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义清除图标',
            'en-US': 'clearIcon',
          },
          tip: '自定义清除图标',
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
        defaultValue: 'CircleClose',
      },
      {
        name: 'fitInputWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉框的宽度是否与输入框相同',
            'en-US': 'fitInputWidth',
          },
          tip: '下拉框的宽度是否与输入框相同',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义后缀图标组件',
            'en-US': 'suffixIcon',
          },
          tip: '自定义后缀图标组件',
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
        defaultValue: 'ArrowDown',
      },
      {
        name: 'tagType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签类型',
            'en-US': 'tagType',
          },
          tip: '标签类型',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'info',
                value: 'info',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'info',
      },
      {
        name: 'tagEffect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tagEffect',
            'en-US': 'tagEffect',
          },
          tip: 'tag effect',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'light',
                value: 'light',
              },
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'plain',
                value: 'plain',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否触发表单验证',
            'en-US': 'validateEvent',
          },
          tip: '是否触发表单验证',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: 'offset of the dropdown',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 12,
      },
      {
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showArrow',
            'en-US': 'showArrow',
          },
          tip: 'whether the dropdown has an arrow',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'placement',
            'en-US': 'placement',
          },
          tip: 'position of dropdown',
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
        defaultValue: 'bottom-start',
      },
      {
        name: 'fallbackPlacements',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fallbackPlacements',
            'en-US': 'fallbackPlacements',
          },
          tip: 'list of possible positions for dropdown popper.js',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'maxCollapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxCollapseTags',
            'en-US': 'maxCollapseTags',
          },
          tip: 'the max tags number to be shown. To use this, collapse-tags must be true',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'popperOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popper.js 参数',
            'en-US': 'popperOptions',
          },
          tip: 'popper.js 参数',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'same as aria-label in native input',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'emptyValues',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'emptyValues',
            'en-US': 'emptyValues',
          },
          tip: 'empty values of component, see config-provider',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'valueOnClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'valueOnClear',
            'en-US': 'valueOnClear',
          },
          tip: 'clear return value, see config-provider',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
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
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'tabindex for input',
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
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'header',
            'en-US': 'header',
          },
          tip: 'content at the top of the dropdown',
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
          tip: 'content at the bottom of the dropdown',
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
        name: 'prefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Select 组件头部内容',
            'en-US': 'prefix',
          },
          tip: 'Select 组件头部内容',
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
            'zh-CN': '无选项时的列表',
            'en-US': 'empty',
          },
          tip: '无选项时的列表',
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
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tag',
            'en-US': 'tag',
          },
          tip: 'content as Select tag, subTags data, selectDisabled and deleteTag introduced in ^(2.10.3)',
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
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'label',
            'en-US': 'label',
          },
          tip: 'content as Select label. index introduced in ^(2.11.2)',
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
          name: 'onChange',
          description: 'triggers when the selected value changes',
          template:
            "onChange(...args, extParams) {\n  // triggers when the selected value changes\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onVisibleChange',
          description: 'triggers when the dropdown appears/disappears',
          template:
            "onVisibleChange(...args, extParams) {\n  // triggers when the dropdown appears/disappears\n  console.log('onVisibleChange', ...args)\n}",
        },
        {
          name: 'onRemoveTag',
          description: 'triggers when a tag is removed in multiple mode',
          template:
            "onRemoveTag(...args, extParams) {\n  // triggers when a tag is removed in multiple mode\n  console.log('onRemoveTag', ...args)\n}",
        },
        {
          name: 'onClear',
          description:
            'triggers when the clear icon is clicked in a clearable Select',
          template:
            "onClear(...args, extParams) {\n  // triggers when the clear icon is clicked in a clearable Select\n  console.log('onClear', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: 'triggers when Input blurs',
          template:
            "onBlur(...args, extParams) {\n  // triggers when Input blurs\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: 'triggers when Input focuses',
          template:
            "onFocus(...args, extParams) {\n  // triggers when Input focuses\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onPopupScroll',
          description: 'triggers when dropdown scrolls',
          template:
            "onPopupScroll(...args, extParams) {\n  // triggers when dropdown scrolls\n  console.log('onPopupScroll', ...args)\n}",
        },
        {
          name: 'onEndReached',
          description: 'triggers when dropdown scroll reaches an end',
          template:
            "onEndReached(...args, extParams) {\n  // triggers when dropdown scroll reaches an end\n  console.log('onEndReached', ...args)\n}",
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
      title: '选择器',
      screenshot: './screenshots/select.webp',
      schema: {
        componentName: 'ElSelect',
        props: {
          style: {
            width: '200px',
          },
        },
        children: [
          {
            componentName: 'ElOption',
            props: {
              label: '选项一',
              value: 'a',
            },
          },
          {
            componentName: 'ElOption',
            props: {
              label: '选项二',
              value: 'b',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

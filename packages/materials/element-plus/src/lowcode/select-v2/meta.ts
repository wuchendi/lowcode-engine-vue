import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (select-v2); see https://element-plus.org/zh-CN/component/select-v2.html
const meta = {
  componentName: 'ElSelectV2',
  title: '虚拟化选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/select-v2.html',
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
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项的数据源',
            'en-US': 'options',
          },
          tip: '选项的数据源， value 的 key 和 label 可以通过 props自定义.',
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
          tip: 'configuration options, see the following table',
        },
        setter: 'JsonSetter',
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
            'zh-CN': '组件大小',
            'en-US': 'size',
          },
          tip: '组件大小',
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
        name: 'multipleLimit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多选时可被选择的最大数目',
            'en-US': 'multipleLimit',
          },
          tip: '多选时可被选择的最大数目。当被设置为0时，可被选择的数目不设限。',
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
            'zh-CN': '选择器的原生name属性',
            'en-US': 'name',
          },
          tip: '选择器的原生name属性',
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
            'zh-CN': '自动完成选择输入',
            'en-US': 'autocomplete',
          },
          tip: '自动完成选择输入',
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
            'zh-CN': '占位文字',
            'en-US': 'placeholder',
          },
          tip: '占位文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'Please select',
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
            'zh-CN': '是否允许创建新条目',
            'en-US': 'allowCreate',
          },
          tip: '是否允许创建新条目，当使用该属性时，filterable必须设置为true',
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
          tip: '自定义筛选方法的第一个参数是当前输入的值。当filterable设置为 true 时才会生效',
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
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否从远程加载数据',
            'en-US': 'loading',
          },
          tip: '是否从远程加载数据',
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
        name: 'reserveKeyword',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '筛选时',
            'en-US': 'reserveKeyword',
          },
          tip: '筛选时，是否在选择选项后保留关键字',
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
            'zh-CN': '当在没有数据时显示的文字',
            'en-US': 'noDataText',
          },
          tip: '当在没有数据时显示的文字，你同时可以使用empty插槽进行设置。',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'No Data',
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: 'Select 下拉菜单和标签提示的自定义类名',
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
        name: 'popperOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperOptions',
            'en-US': 'popperOptions',
          },
          tip: 'popper.js parameters',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        name: 'fitInputWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fitInputWidth',
            'en-US': 'fitInputWidth',
          },
          tip: 'whether the width of the dropdown is the same as the input, if the value is number, then the width is fixed',
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
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'suffixIcon',
            'en-US': 'suffixIcon',
          },
          tip: 'custom suffix icon component',
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
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉菜单的高度',
            'en-US': 'height',
          },
          tip: '下拉菜单的高度，每一个选项为34px',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 274,
      },
      {
        name: 'itemHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉项的高度',
            'en-US': 'itemHeight',
          },
          tip: '下拉项的高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 34,
      },
      {
        name: 'estimatedOptionHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制虚拟列表大小模式',
            'en-US': 'estimatedOptionHeight',
          },
          tip: '控制虚拟列表大小模式：如果未定义，则列表使用来自 item-height 的固定项目高度；如果提供，则列表使用动态项目大小，并将此值作为估计的项目高度。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'scrollbarAlwaysOn',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否总是展示滚动条',
            'en-US': 'scrollbarAlwaysOn',
          },
          tip: '是否总是展示滚动条',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'remote',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否从服务器获取数据',
            'en-US': 'remote',
          },
          tip: '是否从服务器获取数据',
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
            'zh-CN': 'remoteShowSuffix',
            'en-US': 'remoteShowSuffix',
          },
          tip: 'in remote search method show suffix icon',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
            'zh-CN': '下拉框出现的位置',
            'en-US': 'placement',
          },
          tip: '下拉框出现的位置',
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
        name: 'maxCollapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxCollapseTags',
            'en-US': 'maxCollapseTags',
          },
          tip: 'The max tags number to be shown. To use this, collapse-tags must be true',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'tagType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tagType',
            'en-US': 'tagType',
          },
          tip: 'tag type',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '虚拟化选择器',
      screenshot: './screenshots/select-v2.webp',
      schema: {
        componentName: 'ElSelectV2',
        props: {
          options: [],
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

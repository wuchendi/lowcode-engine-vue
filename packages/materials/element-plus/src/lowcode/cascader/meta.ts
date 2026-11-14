import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (cascader); see https://element-plus.org/zh-CN/component/cascader.html
const meta = {
  componentName: 'ElCascader',
  title: '级联选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/cascader.html',
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
          tip: '选项的数据源， value 和 label 可以通过 CascaderProps 自定义.',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配置选项',
            'en-US': 'props',
          },
          tip: '配置选项, 请参阅下面 CascaderProps 表。',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '尺寸',
            'en-US': 'size',
          },
          tip: '尺寸',
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
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框占位文本',
            'en-US': 'placeholder',
          },
          tip: '输入框占位文本',
        },
        setter: 'StringSetter',
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
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持清空选项',
            'en-US': 'clearable',
          },
          tip: '是否支持清空选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'clearIcon',
            'en-US': 'clearIcon',
          },
          tip: 'custom clear icon component',
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
        name: 'showAllLevels',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showAllLevels',
            'en-US': 'showAllLevels',
          },
          tip: '输入框中是否显示选中值的完整路径',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'collapseTags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多选模式下是否折叠Tag',
            'en-US': 'collapseTags',
          },
          tip: '多选模式下是否折叠Tag',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'collapseTagsTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当鼠标悬停于折叠标签的文本时',
            'en-US': 'collapseTagsTooltip',
          },
          tip: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签。要使用此属性，collapse-tags属性必须设定为 true',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'maxCollapseTagsTooltipHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'maxCollapseTagsTooltipHeight',
            'en-US': 'maxCollapseTagsTooltipHeight',
          },
          tip: 'max height of collapse-tags tooltip.',
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
        name: 'separator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于分隔选项的字符',
            'en-US': 'separator',
          },
          tip: '用于分隔选项的字符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'filterable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '该选项是否可以被搜索',
            'en-US': 'filterable',
          },
          tip: '该选项是否可以被搜索',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'filterMethod',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义搜索逻辑',
            'en-US': 'filterMethod',
          },
          tip: '自定义搜索逻辑，第一个参数是node，第二个参数是keyword，返回的布尔值表示是否保留该选项',
        },
        setter: [
          {
            componentName: 'StringSetter',
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
        name: 'debounce',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'debounce',
            'en-US': 'debounce',
          },
          tip: '搜索关键词正在输入时的去抖延迟，单位为毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'beforeFilter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '过滤函数调用前',
            'en-US': 'beforeFilter',
          },
          tip: '过滤函数调用前，所要调用的钩子函数，该函数接收要过滤的值作为参数。如果该函数的返回值是 false 或者是一个被拒绝的 Promise，那么接下来的过滤逻辑便不会执行。',
        },
        setter: [
          {
            componentName: 'StringSetter',
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
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperClass',
            'en-US': 'popperClass',
          },
          tip: 'Cascader 下拉菜单和标签提示的自定义类名',
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
          tip: 'Cascader 下拉菜单和标签提示的自定义样式',
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
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: '弹层是否使用 teleport',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'effect',
            'en-US': 'effect',
          },
          tip: 'tooltip theme, built-in theme: dark / light',
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
            'zh-CN': '输入时是否触发表单的校验',
            'en-US': 'validateEvent',
          },
          tip: '输入时是否触发表单的校验',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: 'when dropdown is inactive and persistent is false, dropdown will be destroyed',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'fallbackPlacements',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fallbackPlacements',
            'en-US': 'fallbackPlacements',
          },
          tip: 'list of possible positions for Tooltip popper.js',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        name: 'showCheckedStrategy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showCheckedStrategy',
            'en-US': 'showCheckedStrategy',
          },
          tip: 'strategy for displaying checked nodes in multiple selection mode. Use parent when you want things tidy. Use child when every single item matters',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'parent',
                value: 'parent',
              },
              {
                title: 'child',
                value: 'child',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'child',
      },
      {
        name: 'virtualScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtualScroll',
            'en-US': 'virtualScroll',
          },
          tip: 'whether to enable virtual scrolling for large data',
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
          tip: 'whether the width of the suggestion panel is the same as the input, if the value is number, then the width is fixed',
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
        name: 'itemSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'itemSize',
            'en-US': 'itemSize',
          },
          tip: 'node height for virtual scrolling (px)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 34,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'height',
            'en-US': 'height',
          },
          tip: 'menu height for virtual scrolling (px)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 204,
      },
      {
        name: 'empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '无匹配选项时的内容',
            'en-US': 'empty',
          },
          tip: '无匹配选项时的内容',
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
            'zh-CN': 'prefix',
            'en-US': 'prefix',
          },
          tip: 'content as Input prefix',
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
        name: 'suggestion-item',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'suggestion-item',
            'en-US': 'suggestion-item',
          },
          tip: 'custom content for suggestion item when searching',
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
          tip: 'custom tags style',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '当绑定值变化时触发的事件',
          template:
            "onChange(...args, extParams) {\n  // 当绑定值变化时触发的事件\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onExpandChange',
          description: '当展开节点发生变化时触发',
          template:
            "onExpandChange(...args, extParams) {\n  // 当展开节点发生变化时触发\n  console.log('onExpandChange', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: '当失去焦点时触发',
          template:
            "onBlur(...args, extParams) {\n  // 当失去焦点时触发\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: '当获得焦点时触发',
          template:
            "onFocus(...args, extParams) {\n  // 当获得焦点时触发\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onClear',
          description:
            'triggers when the clear icon is clicked in a clearable Select',
          template:
            "onClear(...args, extParams) {\n  // triggers when the clear icon is clicked in a clearable Select\n  console.log('onClear', ...args)\n}",
        },
        {
          name: 'onVisibleChange',
          description: '下拉框出现/隐藏时触发',
          template:
            "onVisibleChange(...args, extParams) {\n  // 下拉框出现/隐藏时触发\n  console.log('onVisibleChange', ...args)\n}",
        },
        {
          name: 'onRemoveTag',
          description: '在多选模式下，移除Tag时触发',
          template:
            "onRemoveTag(...args, extParams) {\n  // 在多选模式下，移除Tag时触发\n  console.log('onRemoveTag', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '级联选择器',
      screenshot: './screenshots/cascader.webp',
      schema: {
        componentName: 'ElCascader',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

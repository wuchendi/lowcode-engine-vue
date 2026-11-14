import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (autocomplete); see https://element-plus.org/zh-CN/component/autocomplete.html
const meta = {
  componentName: 'ElAutocomplete',
  title: '自动补全输入框',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/autocomplete.html',
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
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '占位文本',
            'en-US': 'placeholder',
          },
          tip: '占位文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可清空',
            'en-US': 'clearable',
          },
          tip: '是否可清空',
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
            'zh-CN': '自动补全组件是否被禁用',
            'en-US': 'disabled',
          },
          tip: '自动补全组件是否被禁用',
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
            'zh-CN': '输入建议对象中用于显示的键名',
            'en-US': 'valueKey',
          },
          tip: '输入建议对象中用于显示的键名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'value',
      },
      {
        name: 'debounce',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '获取输入建议的防抖延时',
            'en-US': 'debounce',
          },
          tip: '获取输入建议的防抖延时，单位为毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单弹出位置',
            'en-US': 'placement',
          },
          tip: '菜单弹出位置',
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
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'bottom-start',
      },
      {
        name: 'fetchSuggestions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '获取输入建议的方法',
            'en-US': 'fetchSuggestions',
          },
          tip: '获取输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[])  来返回它',
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
        name: 'triggerOnFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'triggerOnFocus',
            'en-US': 'triggerOnFocus',
          },
          tip: 'whether show suggestions when input focus',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'selectWhenUnmatched',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'selectWhenUnmatched',
            'en-US': 'selectWhenUnmatched',
          },
          tip: '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: '等价于原生 input name 属性',
        },
        setter: 'StringSetter',
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
          tip: 'native aria-label attribute',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hideLoading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否隐藏远程加载时的加载图标',
            'en-US': 'hideLoading',
          },
          tip: '是否隐藏远程加载时的加载图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉列表的类名',
            'en-US': 'popperClass',
          },
          tip: '下拉列表的类名',
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
          tip: "custom style for autocomplete's dropdown",
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
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: '是否将下拉列表元素插入 append-to 指向的元素下',
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
          tip: 'which select dropdown appends to',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'highlightFirstItem',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'highlightFirstItem',
            'en-US': 'highlightFirstItem',
          },
          tip: '是否默认高亮远程搜索结果的第一项',
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
        name: 'loopNavigation',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loopNavigation',
            'en-US': 'loopNavigation',
          },
          tip: 'whether keyboard navigation loops from end to start',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
            'zh-CN': '输入框头部内容',
            'en-US': 'prefix',
          },
          tip: '输入框头部内容',
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
        name: 'suffix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框尾部内容',
            'en-US': 'suffix',
          },
          tip: '输入框尾部内容',
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
        name: 'prepend',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框前置内容',
            'en-US': 'prepend',
          },
          tip: '输入框前置内容，在 prefix 之前',
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
        name: 'append',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框后置内容',
            'en-US': 'append',
          },
          tip: '输入框后置内容，在 suffix 之后',
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
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loading',
            'en-US': 'loading',
          },
          tip: 'override loading content',
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
          name: 'onBlur',
          description: '当选择器的输入框失去焦点时触发',
          template:
            "onBlur(...args, extParams) {\n  // 当选择器的输入框失去焦点时触发\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: '当选择器的输入框获得焦点时触发',
          template:
            "onFocus(...args, extParams) {\n  // 当选择器的输入框获得焦点时触发\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onInput',
          description: '在 Input 值改变时触发',
          template:
            "onInput(...args, extParams) {\n  // 在 Input 值改变时触发\n  console.log('onInput', ...args)\n}",
        },
        {
          name: 'onClear',
          description: '在点击由 clearable 属性生成的清空按钮时触发',
          template:
            "onClear(...args, extParams) {\n  // 在点击由 clearable 属性生成的清空按钮时触发\n  console.log('onClear', ...args)\n}",
        },
        {
          name: 'onSelect',
          description: '点击选中建议项时触发',
          template:
            "onSelect(...args, extParams) {\n  // 点击选中建议项时触发\n  console.log('onSelect', ...args)\n}",
        },
        {
          name: 'onChange',
          description: '在 Input 值改变时触发',
          template:
            "onChange(...args, extParams) {\n  // 在 Input 值改变时触发\n  console.log('onChange', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '自动补全输入框',
      screenshot: './screenshots/autocomplete.webp',
      schema: {
        componentName: 'ElAutocomplete',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (color-picker); see https://element-plus.org/zh-CN/component/color-picker.html
const meta = {
  componentName: 'ElColorPicker',
  title: '颜色选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/color-picker.html',
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
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'clearable',
            'en-US': 'clearable',
          },
          tip: 'whether to show clear button',
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
        name: 'showAlpha',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持透明度选择',
            'en-US': 'showAlpha',
          },
          tip: '是否支持透明度选择',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'colorFormat',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'colorFormat',
            'en-US': 'colorFormat',
          },
          tip: '写入 v-model 的颜色的格式',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'rgb',
                value: 'rgb',
              },
              {
                title: 'prgb',
                value: 'prgb',
              },
              {
                title: 'hex',
                value: 'hex',
              },
              {
                title: 'hex3',
                value: 'hex3',
              },
              {
                title: 'hex4',
                value: 'hex4',
              },
              {
                title: 'hex6',
                value: 'hex6',
              },
              {
                title: 'hex8',
                value: 'hex8',
              },
              {
                title: 'name',
                value: 'name',
              },
              {
                title: 'hsl',
                value: 'hsl',
              },
              {
                title: 'hsv',
                value: 'hsv',
              },
            ],
          },
        },
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
          tip: 'ColorPicker 下拉框的类名',
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
          tip: "custom style for ColorPicker's dropdown",
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
        name: 'predefine',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预定义颜色',
            'en-US': 'predefine',
          },
          tip: '预定义颜色',
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
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'ColorPicker 的 tabindex',
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
        defaultValue: '0',
      },
      {
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'ColorPicker aria-label',
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
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'id',
            'en-US': 'id',
          },
          tip: 'ColorPicker 的 id',
        },
        setter: 'StringSetter',
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
          tip: 'whether color-picker popper is teleported to the body',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: 'when color-picker inactive and persistent is false, the color panel will be destroyed',
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
          tip: 'which element the color-picker panel appends to',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '当绑定值变化时触发',
          template:
            "onChange(...args, extParams) {\n  // 当绑定值变化时触发\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onActiveChange',
          description: '面板中当前显示的颜色发生改变时触发',
          template:
            "onActiveChange(...args, extParams) {\n  // 面板中当前显示的颜色发生改变时触发\n  console.log('onActiveChange', ...args)\n}",
        },
        {
          name: 'onFocus',
          description: 'triggers when Component focuses',
          template:
            "onFocus(...args, extParams) {\n  // triggers when Component focuses\n  console.log('onFocus', ...args)\n}",
        },
        {
          name: 'onBlur',
          description: 'triggers when Component blurs',
          template:
            "onBlur(...args, extParams) {\n  // triggers when Component blurs\n  console.log('onBlur', ...args)\n}",
        },
        {
          name: 'onClear',
          description: 'triggers when the clear button is clicked',
          template:
            "onClear(...args, extParams) {\n  // triggers when the clear button is clicked\n  console.log('onClear', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '颜色选择器',
      screenshot: './screenshots/color-picker.webp',
      schema: {
        componentName: 'ElColorPicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (field); see https://vant-ui.github.io/vant/v2/#/zh-CN/field
const meta = {
  componentName: 'VanField',
  title: '输入框',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/field',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前输入的值',
            'en-US': 'v-model',
          },
          tip: '当前输入的值',
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
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框左侧文本',
            'en-US': 'label',
          },
          tip: '输入框左侧文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '名称',
            'en-US': 'name',
          },
          tip: '名称，提交表单的标识符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框类型',
            'en-US': 'type',
          },
          tip: '输入框类型, 可选值为 tel digitnumber textarea password 等',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'tel',
                value: 'tel',
              },
              {
                title: 'digit',
                value: 'digit',
              },
              {
                title: 'number',
                value: 'number',
              },
              {
                title: 'textarea',
                value: 'textarea',
              },
              {
                title: 'password',
                value: 'password',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'text',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '大小',
            'en-US': 'size',
          },
          tip: '大小，可选值为 large',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'maxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入的最大字符数',
            'en-US': 'maxlength',
          },
          tip: '输入的最大字符数',
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
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框占位提示文字',
            'en-US': 'placeholder',
          },
          tip: '输入框占位提示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示内边框',
            'en-US': 'border',
          },
          tip: '是否显示内边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用输入框',
            'en-US': 'disabled',
          },
          tip: '是否禁用输入框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否只读',
            'en-US': 'readonly',
          },
          tip: '是否只读',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'colon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'colon',
            'en-US': 'colon',
          },
          tip: '是否在 label 后面添加冒号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'required',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示表单必填星号',
            'en-US': 'required',
          },
          tip: '是否显示表单必填星号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使内容垂直居中',
            'en-US': 'center',
          },
          tip: '是否使内容垂直居中',
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
            'zh-CN': '是否启用清除图标',
            'en-US': 'clearable',
          },
          tip: '是否启用清除图标，点击清除图标后会清空输入框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'clearTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示清除图标的时机',
            'en-US': 'clearTrigger',
          },
          tip: '显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'focus',
      },
      {
        name: 'clickable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启点击反馈',
            'en-US': 'clickable',
          },
          tip: '是否开启点击反馈',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'isLink',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'isLink',
            'en-US': 'isLink',
          },
          tip: '是否展示右侧箭头并开启点击反馈',
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
            'zh-CN': '是否自动聚焦',
            'en-US': 'autofocus',
          },
          tip: '是否自动聚焦，iOS 系统不支持该属性',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showWordLimit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示字数统计',
            'en-US': 'showWordLimit',
          },
          tip: '是否显示字数统计，需要设置maxlength属性',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否将输入内容标红',
            'en-US': 'error',
          },
          tip: '是否将输入内容标红',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'errorMessage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '底部错误提示文案',
            'en-US': 'errorMessage',
          },
          tip: '底部错误提示文案，为空时不展示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入内容格式化函数',
            'en-US': 'formatter',
          },
          tip: '输入内容格式化函数',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'formatTrigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '格式化函数触发的时机',
            'en-US': 'formatTrigger',
          },
          tip: '格式化函数触发的时机，可选值为 onBlur',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'onChange',
      },
      {
        name: 'arrowDirection',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '箭头方向',
            'en-US': 'arrowDirection',
          },
          tip: '箭头方向，可选值为 left up down',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'up',
                value: 'up',
              },
              {
                title: 'down',
                value: 'down',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'labelClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧文本额外类名',
            'en-US': 'labelClass',
          },
          tip: '左侧文本额外类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧文本宽度',
            'en-US': 'labelWidth',
          },
          tip: '左侧文本宽度，默认单位为px',
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
        defaultValue: '6.2em',
      },
      {
        name: 'labelAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧文本对齐方式',
            'en-US': 'labelAlign',
          },
          tip: '左侧文本对齐方式，可选值为 center right',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'inputAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框对齐方式',
            'en-US': 'inputAlign',
          },
          tip: '输入框对齐方式，可选值为 center right',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'errorMessageAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '错误提示文案对齐方式',
            'en-US': 'errorMessageAlign',
          },
          tip: '错误提示文案对齐方式，可选值为 center right',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'right',
                value: 'right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'autosize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自适应内容高度',
            'en-US': 'autosize',
          },
          tip: '是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px',
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
        name: 'leftIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧图标名称或图片链接',
            'en-US': 'leftIcon',
          },
          tip: '左侧图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rightIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧图标名称或图片链接',
            'en-US': 'rightIcon',
          },
          tip: '右侧图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
      },
      {
        name: 'rules',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表单校验规则',
            'en-US': 'rules',
          },
          tip: '表单校验规则，详见 Form 组件',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'autocomplete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autocomplete',
            'en-US': 'autocomplete',
          },
          tip: 'input 标签原生的自动完成属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'input',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义输入框',
            'en-US': 'input',
          },
          tip: '自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效。在 Form 组件进行表单校验时，会使用 input 插槽中子组件的 value，而不是 Field 组件的 value。',
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
        name: 'left-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义输入框头部图标',
            'en-US': 'left-icon',
          },
          tip: '自定义输入框头部图标',
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
        name: 'right-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义输入框尾部图标',
            'en-US': 'right-icon',
          },
          tip: '自定义输入框尾部图标',
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
        name: 'button',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义输入框尾部按钮',
            'en-US': 'button',
          },
          tip: '自定义输入框尾部按钮',
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
        name: 'extrav',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义输入框最右侧的额外内容',
            'en-US': 'extrav',
          },
          tip: '自定义输入框最右侧的额外内容',
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
          name: 'onInput',
          description: '输入框内容变化时触发',
          template:
            "onInput(extParams) {\n  // 输入框内容变化时触发\n  console.log('onInput', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '输入框获得焦点时触发',
          template:
            "onFocus(extParams) {\n  // 输入框获得焦点时触发\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '输入框失去焦点时触发',
          template:
            "onBlur(extParams) {\n  // 输入框失去焦点时触发\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onClear',
          description: '点击清除按钮时触发',
          template:
            "onClear(extParams) {\n  // 点击清除按钮时触发\n  console.log('onClear', extParams)\n}",
        },
        {
          name: 'onClick',
          description: '点击 Field 时触发',
          template:
            "onClick(extParams) {\n  // 点击 Field 时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onClick-input',
          description: '点击输入区域时触发',
          template:
            "onClickInput(extParams) {\n  // 点击输入区域时触发\n  console.log('onClickInput', extParams)\n}",
        },
        {
          name: 'onClick-left-icon',
          description: '点击左侧图标时触发',
          template:
            "onClickLeftIcon(extParams) {\n  // 点击左侧图标时触发\n  console.log('onClickLeftIcon', extParams)\n}",
        },
        {
          name: 'onClick-right-icon',
          description: '点击右侧图标时触发',
          template:
            "onClickRightIcon(extParams) {\n  // 点击右侧图标时触发\n  console.log('onClickRightIcon', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '输入框',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanField',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

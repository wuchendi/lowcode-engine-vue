import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (field); see https://vant-ui.github.io/vant/#/zh-CN/field
const meta = {
  componentName: 'VanField',
  title: '输入框',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/field',
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
          tip: '名称，作为提交表单时的标识符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'id',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框 id',
            'en-US': 'id',
          },
          tip: '输入框 id，同时会设置 label 的 for 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-field-n-input',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框类型',
            'en-US': 'type',
          },
          tip: '输入框类型, 支持原生 input 标签的所有 type 属性，额外支持了 digit 类型',
        },
        setter: 'StringSetter',
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
          tip: '大小，可选值为 large normal',
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
                title: 'normal',
                value: 'normal',
              },
            ],
          },
        },
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
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'min',
            'en-US': 'min',
          },
          tip: '输入框类型为 number 或 digit 类型时设置可允许的最小值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'max',
            'en-US': 'max',
          },
          tip: '输入框类型为 number 或 digit 类型时设置可允许的最大值',
        },
        setter: 'NumberSetter',
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
            'zh-CN': '是否为只读状态',
            'en-US': 'readonly',
          },
          tip: '是否为只读状态，只读状态下无法输入内容',
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
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '清除图标名称或图片链接',
            'en-US': 'clearIcon',
          },
          tip: '清除图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'clear',
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
          tip: '是否显示字数统计，需要设置 maxlength 属性',
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
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入内容格式化函数',
            'en-US': 'formatter',
          },
          tip: '输入内容格式化函数',
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
        name: 'labelWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧文本宽度',
            'en-US': 'labelWidth',
          },
          tip: '左侧文本宽度，默认单位为 px',
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
          tip: '左侧文本对齐方式，可选值为 center right top',
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
              {
                title: 'top',
                value: 'top',
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
        name: 'autosize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自适应内容高度',
            'en-US': 'autosize',
          },
          tip: '是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px',
        },
        setter: 'BoolSetter',
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
          tip: '左侧图标名称或图片链接，等同于 Icon 组件的 name 属性',
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
          tip: '右侧图标名称或图片链接，等同于 Icon 组件的 name 属性',
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
          tip: '图标类名前缀，等同于 Icon 组件的 class-prefix 属性',
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
            'zh-CN': 'HTML 原生属性',
            'en-US': 'autocomplete',
          },
          tip: 'HTML 原生属性，用于控制自动完成功能，详见 MDN - autocomplete',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'autocapitalize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'HTML 原生属性',
            'en-US': 'autocapitalize',
          },
          tip: 'HTML 原生属性，用于控制文本输入时是否自动大写，此 API 仅在部分浏览器支持，详见 MDN - autocapitalize',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'enterkeyhint',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'HTML 原生属性',
            'en-US': 'enterkeyhint',
          },
          tip: 'HTML 原生属性，用于控制回车键样式，此 API 仅在部分浏览器支持，详见 MDN - enterkeyhint',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'spellcheck',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'HTML 原生属性',
            'en-US': 'spellcheck',
          },
          tip: 'HTML 原生属性，用于检查元素的拼写错误，此 API 仅在部分浏览器支持，详见 MDN - spellcheck',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'autocorrect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'HTML 原生属性',
            'en-US': 'autocorrect',
          },
          tip: 'HTML 原生属性，仅 Safari 适用，用于自动更正输入的文本，详见 MDN - autocorrect',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inputmode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'HTML 原生属性',
            'en-US': 'inputmode',
          },
          tip: 'HTML 原生属性，用于指定输入框的输入模式，详见 MDN - inputmode',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rows',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'HTML 原生属性',
            'en-US': 'rows',
          },
          tip: 'HTML 原生属性，用于指定输入框的可见文本行数，只对 textarea 有效',
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
        name: 'input',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义输入框',
            'en-US': 'input',
          },
          tip: '自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效',
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
        name: 'error-message',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义底部错误提示文案',
            'en-US': 'error-message',
          },
          tip: '自定义底部错误提示文案',
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
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义输入框最右侧的额外内容',
            'en-US': 'extra',
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
          description: '点击组件时触发',
          template:
            "onClick(extParams) {\n  // 点击组件时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onClickInput',
          description: '点击输入区域时触发',
          template:
            "onClickInput(extParams) {\n  // 点击输入区域时触发\n  console.log('onClickInput', extParams)\n}",
        },
        {
          name: 'onClickLeftIcon',
          description: '点击左侧图标时触发',
          template:
            "onClickLeftIcon(extParams) {\n  // 点击左侧图标时触发\n  console.log('onClickLeftIcon', extParams)\n}",
        },
        {
          name: 'onClickRightIcon',
          description: '点击右侧图标时触发',
          template:
            "onClickRightIcon(extParams) {\n  // 点击右侧图标时触发\n  console.log('onClickRightIcon', extParams)\n}",
        },
        {
          name: 'onStartValidate',
          description: '开始表单校验时触发',
          template:
            "onStartValidate(extParams) {\n  // 开始表单校验时触发\n  console.log('onStartValidate', extParams)\n}",
        },
        {
          name: 'onEndValidate',
          description: '结束表单校验时触发',
          template:
            "onEndValidate(extParams) {\n  // 结束表单校验时触发\n  console.log('onEndValidate', extParams)\n}",
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

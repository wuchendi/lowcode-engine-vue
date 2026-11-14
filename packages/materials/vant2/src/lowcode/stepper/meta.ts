import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (stepper); see https://vant-ui.github.io/vant/v2/#/zh-CN/stepper
const meta = {
  componentName: 'VanStepper',
  title: '步进器',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/stepper',
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
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最小值',
            'en-US': 'min',
          },
          tip: '最小值',
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
        defaultValue: '1',
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大值',
            'en-US': 'max',
          },
          tip: '最大值',
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
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始值',
            'en-US': 'defaultValue',
          },
          tip: '初始值，当 v-model 为空时生效',
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
        defaultValue: '1',
      },
      {
        name: 'step',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '步长',
            'en-US': 'step',
          },
          tip: '步长，每次点击时改变的值',
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
        defaultValue: '1',
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标识符',
            'en-US': 'name',
          },
          tip: '标识符，可以在change事件回调参数中获取',
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
        name: 'inputWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框宽度',
            'en-US': 'inputWidth',
          },
          tip: '输入框宽度，默认单位为px',
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
        defaultValue: '32px',
      },
      {
        name: 'buttonSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮大小以及输入框高度',
            'en-US': 'buttonSize',
          },
          tip: '按钮大小以及输入框高度，默认单位为px',
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
        defaultValue: '28px',
      },
      {
        name: 'decimalLength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '固定显示的小数位数',
            'en-US': 'decimalLength',
          },
          tip: '固定显示的小数位数',
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
        name: 'theme',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '样式风格',
            'en-US': 'theme',
          },
          tip: '样式风格，可选值为 round',
        },
        setter: 'StringSetter',
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
        name: 'integer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否只允许输入整数',
            'en-US': 'integer',
          },
          tip: '是否只允许输入整数',
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
            'zh-CN': '是否禁用步进器',
            'en-US': 'disabled',
          },
          tip: '是否禁用步进器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disablePlus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用增加按钮',
            'en-US': 'disablePlus',
          },
          tip: '是否禁用增加按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disableMinus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用减少按钮',
            'en-US': 'disableMinus',
          },
          tip: '是否禁用减少按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disableInput',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用输入框',
            'en-US': 'disableInput',
          },
          tip: '是否禁用输入框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'asyncChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启异步变更',
            'en-US': 'asyncChange',
          },
          tip: '是否开启异步变更，开启后需要手动控制输入值',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showPlus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示增加按钮',
            'en-US': 'showPlus',
          },
          tip: '是否显示增加按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showMinus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示减少按钮',
            'en-US': 'showMinus',
          },
          tip: '是否显示减少按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showInput',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示输入框',
            'en-US': 'showInput',
          },
          tip: '是否显示输入框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'longPress',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启长按手势',
            'en-US': 'longPress',
          },
          tip: '是否开启长按手势',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'allowEmpty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许输入的值为空',
            'en-US': 'allowEmpty',
          },
          tip: '是否允许输入的值为空',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
            "onChange(extParams) {\n  // 当绑定值变化时触发的事件\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onOverlimit',
          description: '点击不可用的按钮时触发',
          template:
            "onOverlimit(extParams) {\n  // 点击不可用的按钮时触发\n  console.log('onOverlimit', extParams)\n}",
        },
        {
          name: 'onPlus',
          description: '点击增加按钮时触发',
          template:
            "onPlus(extParams) {\n  // 点击增加按钮时触发\n  console.log('onPlus', extParams)\n}",
        },
        {
          name: 'onMinus',
          description: '点击减少按钮时触发',
          template:
            "onMinus(extParams) {\n  // 点击减少按钮时触发\n  console.log('onMinus', extParams)\n}",
        },
        {
          name: 'onFocus',
          description: '输入框聚焦时触发',
          template:
            "onFocus(extParams) {\n  // 输入框聚焦时触发\n  console.log('onFocus', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '输入框失焦时触发',
          template:
            "onBlur(extParams) {\n  // 输入框失焦时触发\n  console.log('onBlur', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '步进器',
      screenshot: './screenshots/stepper.webp',
      schema: {
        componentName: 'VanStepper',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

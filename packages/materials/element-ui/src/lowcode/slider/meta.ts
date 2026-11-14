import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (slider); see https://element.eleme.cn/#/zh-CN/component/slider
const meta = {
  componentName: 'ElSlider',
  title: '滑块',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/slider',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
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
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
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
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 100,
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
        name: 'step',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '步长',
            'en-US': 'step',
          },
          tip: '步长',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'showInput',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示输入框',
            'en-US': 'showInput',
          },
          tip: '是否显示输入框，仅在非范围选择时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showInputControls',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在显示输入框的情况下',
            'en-US': 'showInputControls',
          },
          tip: '在显示输入框的情况下，是否显示输入框的控制按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'inputSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框的尺寸',
            'en-US': 'inputSize',
          },
          tip: '输入框的尺寸',
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
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'small',
      },
      {
        name: 'showStops',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示间断点',
            'en-US': 'showStops',
          },
          tip: '是否显示间断点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示 tooltip',
            'en-US': 'showTooltip',
          },
          tip: '是否显示 tooltip',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'formatTooltip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'formatTooltip',
            'en-US': 'formatTooltip',
          },
          tip: '格式化 tooltip message',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'range',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为范围选择',
            'en-US': 'range',
          },
          tip: '是否为范围选择',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否竖向模式',
            'en-US': 'vertical',
          },
          tip: '是否竖向模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Slider 高度',
            'en-US': 'height',
          },
          tip: 'Slider 高度，竖向模式时必填',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '屏幕阅读器标签',
            'en-US': 'label',
          },
          tip: '屏幕阅读器标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'debounce',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入时的去抖延迟',
            'en-US': 'debounce',
          },
          tip: '输入时的去抖延迟，毫秒，仅在show-input等于true时有效',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 300,
      },
      {
        name: 'tooltipClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tooltip 的自定义类名',
            'en-US': 'tooltipClass',
          },
          tip: 'tooltip 的自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'marks',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标记',
            'en-US': 'marks',
          },
          tip: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
          template:
            "onChange(extParams) {\n  // 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onInput',
          description: '数据改变时触发（使用鼠标拖曳时，活动过程实时触发）',
          template:
            "onInput(extParams) {\n  // 数据改变时触发（使用鼠标拖曳时，活动过程实时触发）\n  console.log('onInput', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '滑块',
      screenshot: './screenshots/slider.webp',
      schema: {
        componentName: 'ElSlider',
        props: {
          style: {
            width: '200px',
          },
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

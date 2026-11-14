import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (slider); see https://vant-ui.github.io/vant/#/zh-CN/slider
const meta = {
  componentName: 'VanSlider',
  title: '滑块',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/slider',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前进度百分比',
            'en-US': 'v-model',
          },
          tip: '当前进度百分比，在双滑块模式下为数组格式',
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
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '100',
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
        defaultValue: '0',
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
        name: 'barHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条高度',
            'en-US': 'barHeight',
          },
          tip: '进度条高度，默认单位为 px',
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
        defaultValue: '2px',
      },
      {
        name: 'buttonSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滑块按钮大小',
            'en-US': 'buttonSize',
          },
          tip: '滑块按钮大小，默认单位为 px',
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
        defaultValue: '24px',
      },
      {
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条激活态颜色',
            'en-US': 'activeColor',
          },
          tip: '进度条激活态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'inactiveColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '进度条非激活态颜色',
            'en-US': 'inactiveColor',
          },
          tip: '进度条非激活态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#e5e5e5',
      },
      {
        name: 'range',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启双滑块模式',
            'en-US': 'range',
          },
          tip: '是否开启双滑块模式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'reverse',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否将进度条反转',
            'en-US': 'reverse',
          },
          tip: '是否将进度条反转',
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
            'zh-CN': '是否禁用滑块',
            'en-US': 'disabled',
          },
          tip: '是否禁用滑块',
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
          tip: '是否为只读状态，只读状态下无法修改滑块的值',
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
            'zh-CN': '是否垂直展示',
            'en-US': 'vertical',
          },
          tip: '是否垂直展示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'button',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义滑块按钮',
            'en-US': 'button',
          },
          tip: '自定义滑块按钮',
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
        name: 'left-button',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义左侧滑块按钮',
            'en-US': 'left-button',
          },
          tip: '自定义左侧滑块按钮（双滑块模式下）',
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
        name: 'right-button',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧滑块按钮',
            'en-US': 'right-button',
          },
          tip: '自定义右侧滑块按钮（双滑块模式下）',
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
          description: '进度变化且结束拖动后触发',
          template:
            "onChange(extParams) {\n  // 进度变化且结束拖动后触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onDragStart',
          description: '开始拖动时触发',
          template:
            "onDragStart(extParams) {\n  // 开始拖动时触发\n  console.log('onDragStart', extParams)\n}",
        },
        {
          name: 'onDragEnd',
          description: '结束拖动时触发',
          template:
            "onDragEnd(extParams) {\n  // 结束拖动时触发\n  console.log('onDragEnd', extParams)\n}",
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
        componentName: 'VanSlider',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (switch); see https://vant-ui.github.io/vant/#/zh-CN/switch
const meta = {
  componentName: 'VanSwitch',
  title: '开关',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/switch',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开关选中状态',
            'en-US': 'v-model',
          },
          tip: '开关选中状态',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为加载状态',
            'en-US': 'loading',
          },
          tip: '是否为加载状态',
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
            'zh-CN': '是否为禁用状态',
            'en-US': 'disabled',
          },
          tip: '是否为禁用状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '开关按钮的尺寸',
            'en-US': 'size',
          },
          tip: '开关按钮的尺寸，默认单位为 px',
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
        defaultValue: '26px',
      },
      {
        name: 'activeColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '打开时的背景色',
            'en-US': 'activeColor',
          },
          tip: '打开时的背景色',
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
            'zh-CN': '关闭时的背景色',
            'en-US': 'inactiveColor',
          },
          tip: '关闭时的背景色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'activeValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '打开时对应的值',
            'en-US': 'activeValue',
          },
          tip: '打开时对应的值',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'true',
      },
      {
        name: 'inactiveValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭时对应的值',
            'en-US': 'inactiveValue',
          },
          tip: '关闭时对应的值',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'node',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义按钮的内容',
            'en-US': 'node',
          },
          tip: '自定义按钮的内容',
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
        name: 'background',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义开关的背景内容',
            'en-US': 'background',
          },
          tip: '自定义开关的背景内容',
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
          description: '开关状态切换时触发',
          template:
            "onChange(extParams) {\n  // 开关状态切换时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(extParams) {\n  // 点击时触发\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '开关',
      screenshot: './screenshots/switch.webp',
      schema: {
        componentName: 'VanSwitch',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

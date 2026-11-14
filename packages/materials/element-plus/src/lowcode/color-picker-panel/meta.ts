import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (color-picker-panel); see https://element-plus.org/zh-CN/component/color-picker-panel.html
const meta = {
  componentName: 'ElColorPickerPanel',
  title: '颜色选择器面板 beta',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/color-picker-panel.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: 'binding value',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'border',
            'en-US': 'border',
          },
          tip: 'whether the color picker panel is bordered',
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
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: 'whether to disable the color picker',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showAlpha',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showAlpha',
            'en-US': 'showAlpha',
          },
          tip: 'whether to display the alpha slider',
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
          tip: 'color format of v-model',
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
        name: 'predefine',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'predefine',
            'en-US': 'predefine',
          },
          tip: 'predefined color options',
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
            'zh-CN': 'validateEvent',
            'en-US': 'validateEvent',
          },
          tip: 'whether to trigger form validation',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'hueSliderClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hueSliderClass',
            'en-US': 'hueSliderClass',
          },
          tip: 'class names will be passed to hue-slider',
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
        name: 'hueSliderStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'hueSliderStyle',
            'en-US': 'hueSliderStyle',
          },
          tip: 'styles will be passed to hue-slider',
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
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'footer',
            'en-US': 'footer',
          },
          tip: 'content to append after the Input',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '颜色选择器面板 beta',
      screenshot: './screenshots/color-picker-panel.webp',
      schema: {
        componentName: 'ElColorPickerPanel',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

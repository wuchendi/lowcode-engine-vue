import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (color-picker); see https://element.eleme.cn/#/zh-CN/component/color-picker
const meta = {
  componentName: 'ElColorPicker',
  title: '颜色选择器',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/color-picker',
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
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'hsl',
                value: 'hsl',
              },
              {
                title: 'hsv',
                value: 'hsv',
              },
              {
                title: 'hex',
                value: 'hex',
              },
              {
                title: 'rgb',
                value: 'rgb',
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
        setter: 'StringSetter',
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
          description: '当绑定值变化时触发',
          template:
            "onChange(extParams) {\n  // 当绑定值变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onActive-change',
          description: '面板中当前显示的颜色发生改变时触发',
          template:
            "onActiveChange(extParams) {\n  // 面板中当前显示的颜色发生改变时触发\n  console.log('onActiveChange', extParams)\n}",
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

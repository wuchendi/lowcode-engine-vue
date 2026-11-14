import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (radio); see https://element.eleme.cn/#/zh-CN/component/radio
const meta = {
  componentName: 'ElRadioGroup',
  title: '单选框 RadioGroup',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/radio',
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
        ],
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '单选框组尺寸',
            'en-US': 'size',
          },
          tip: '单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效',
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
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'textColor',
            'en-US': 'textColor',
          },
          tip: '按钮形式的 Radio 激活时的文本颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ffffff',
      },
      {
        name: 'fill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fill',
            'en-US': 'fill',
          },
          tip: '按钮形式的 Radio 激活时的填充色和边框色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '#409EFF',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onInput',
          description: '绑定值变化时触发的事件',
          template:
            "onInput(extParams) {\n  // 绑定值变化时触发的事件\n  console.log('onInput', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '单选框 RadioGroup',
      screenshot: './screenshots/radio-group.webp',
      schema: {
        componentName: 'ElRadioGroup',
        props: {
          value: 'a',
        },
        children: [
          {
            componentName: 'ElRadio',
            props: {
              label: 'a',
            },
            children: '选项一',
          },
          {
            componentName: 'ElRadio',
            props: {
              label: 'b',
            },
            children: '选项二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

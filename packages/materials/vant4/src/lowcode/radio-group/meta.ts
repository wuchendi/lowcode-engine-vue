import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (radio); see https://vant-ui.github.io/vant/#/zh-CN/radio
const meta = {
  componentName: 'VanRadioGroup',
  title: '单选框 RadioGroup',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/radio',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中项的标识符',
            'en-US': 'v-model',
          },
          tip: '当前选中项的标识符',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用所有单选框',
            'en-US': 'disabled',
          },
          tip: '是否禁用所有单选框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '排列方向',
            'en-US': 'direction',
          },
          tip: '排列方向，可选值为 horizontal',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'vertical',
      },
      {
        name: 'iconSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '所有单选框的图标大小',
            'en-US': 'iconSize',
          },
          tip: '所有单选框的图标大小，默认单位为 px',
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
        defaultValue: '20px',
      },
      {
        name: 'checkedColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '所有单选框的选中状态颜色',
            'en-US': 'checkedColor',
          },
          tip: '所有单选框的选中状态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '形状',
            'en-US': 'shape',
          },
          tip: '形状，可选值为 square dot',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'square',
                value: 'square',
              },
              {
                title: 'dot',
                value: 'dot',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'round',
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
        componentName: 'VanRadioGroup',
        props: {
          modelValue: 'a',
        },
        children: [
          {
            componentName: 'VanRadio',
            props: {
              value: 'a',
            },
            children: '选项一',
          },
          {
            componentName: 'VanRadio',
            props: {
              value: 'b',
            },
            children: '选项二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

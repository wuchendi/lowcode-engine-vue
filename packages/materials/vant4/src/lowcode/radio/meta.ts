import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (radio); see https://vant-ui.github.io/vant/#/zh-CN/radio
const meta = {
  componentName: 'VanRadio',
  title: '单选框',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/radio',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标识符',
            'en-US': 'name',
          },
          tip: '标识符，通常为一个唯一的字符串或数字',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'labelDisabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用文本内容点击',
            'en-US': 'labelDisabled',
          },
          tip: '是否禁用文本内容点击',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'labelPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本位置',
            'en-US': 'labelPosition',
          },
          tip: '文本位置，可选值为 left',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'iconSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标大小',
            'en-US': 'iconSize',
          },
          tip: '图标大小，默认单位为 px',
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
            'zh-CN': '选中状态颜色',
            'en-US': 'checkedColor',
          },
          tip: '选中状态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标',
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
          name: 'onClick',
          description: '点击单选框时触发',
          template:
            "onClick(extParams) {\n  // 点击单选框时触发\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '单选框',
      screenshot: './screenshots/radio.webp',
      schema: {
        componentName: 'VanRadio',
        props: {},
        children: '单选框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

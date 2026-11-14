import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (radio); see https://element.eleme.cn/#/zh-CN/component/radio
const meta = {
  componentName: 'ElRadioButton',
  title: '单选框 RadioButton',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/radio',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Radio 的 value',
            'en-US': 'label',
          },
          tip: 'Radio 的 value',
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
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 name 属性',
            'en-US': 'name',
          },
          tip: '原生 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['ElRadio', 'ElRadioGroup'],
      },
    },
  },
  snippets: [
    {
      title: '单选框 RadioButton',
      screenshot: './screenshots/radio-button.webp',
      schema: {
        componentName: 'ElRadioButton',
        props: {},
        children: '单选框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

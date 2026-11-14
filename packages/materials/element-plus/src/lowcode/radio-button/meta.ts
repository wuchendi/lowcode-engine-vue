import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (radio); see https://element-plus.org/zh-CN/component/radio.html
const meta = {
  componentName: 'ElRadioButton',
  title: '单选框 RadioButton',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/radio.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'value',
            'en-US': 'value',
          },
          tip: 'the value of Radio',
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
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'label',
            'en-US': 'label',
          },
          tip: '单选框的 label 如果没有 value， label则作为value使用',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用单选框',
            'en-US': 'disabled',
          },
          tip: '是否禁用单选框',
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

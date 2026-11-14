import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (checkbox); see https://element-plus.org/zh-CN/component/checkbox.html
const meta = {
  componentName: 'ElCheckboxButton',
  title: '多选框 CheckboxButton',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/checkbox.html',
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
          tip: 'value of the checkbox when used inside a checkbox-group',
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
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中状态的值',
            'en-US': 'label',
          },
          tip: '选中状态的值，只有在绑定对象类型为 array 时有效。如果没有 value， label则作为value使用',
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
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'trueValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'trueValue',
            'en-US': 'trueValue',
          },
          tip: "value of the checkbox if it's checked",
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
        name: 'falseValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'falseValue',
            'en-US': 'falseValue',
          },
          tip: "value of the checkbox if it's not checked",
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
      {
        name: 'checked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前是否勾选',
            'en-US': 'checked',
          },
          tip: '当前是否勾选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        parentWhitelist: ['ElCheckbox', 'ElCheckboxGroup'],
      },
    },
  },
  snippets: [
    {
      title: '多选框 CheckboxButton',
      screenshot: './screenshots/checkbox-button.webp',
      schema: {
        componentName: 'ElCheckboxButton',
        props: {},
        children: '多选框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (checkbox); see https://element.eleme.cn/#/zh-CN/component/checkbox
const meta = {
  componentName: 'ElCheckboxButton',
  title: '多选框 CheckboxButton',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/checkbox',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中状态的值',
            'en-US': 'label',
          },
          tip: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
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
        name: 'trueLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中时的值',
            'en-US': 'trueLabel',
          },
          tip: '选中时的值',
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
        name: 'falseLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '没有选中时的值',
            'en-US': 'falseLabel',
          },
          tip: '没有选中时的值',
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

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (checkbox); see https://antdv.com/components/checkbox-cn
const meta = {
  componentName: 'ACheckboxGroup',
  title: '多选框 CheckboxGroup',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/checkbox-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '整组失效',
            'en-US': 'disabled',
          },
          tip: '整组失效',
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
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'CheckboxGroup 下所有 input[type="checkbox"] 的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定可选项',
            'en-US': 'options',
          },
          tip: '指定可选项，可以通过 slot="label" slot-scope="option" 定制label',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定选中的选项',
            'en-US': 'v-model:value',
          },
          tip: '指定选中的选项',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '变化时回调函数',
          template:
            "onChange(extParams) {\n  // 变化时回调函数\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '多选框 CheckboxGroup',
      screenshot: './screenshots/checkbox-group.webp',
      schema: {
        componentName: 'ACheckboxGroup',
        props: {
          value: [],
        },
        children: [
          {
            componentName: 'ACheckbox',
            props: {
              value: 'a',
            },
            children: '选项一',
          },
          {
            componentName: 'ACheckbox',
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

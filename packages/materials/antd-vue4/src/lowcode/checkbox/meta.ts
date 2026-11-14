import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (checkbox); see https://antdv.com/components/checkbox-cn
const meta = {
  componentName: 'ACheckbox',
  title: '多选框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/checkbox-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autofocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:checked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前是否选中',
            'en-US': 'v-model:checked',
          },
          tip: '指定当前是否选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '失效状态',
            'en-US': 'disabled',
          },
          tip: '失效状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'indeterminate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'indeterminate',
            'en-US': 'indeterminate',
          },
          tip: '设置 indeterminate 状态，只负责样式控制',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'value',
            'en-US': 'value',
          },
          tip: '与 CheckboxGroup 组合使用时的值',
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
      title: '多选框',
      screenshot: './screenshots/checkbox.webp',
      schema: {
        componentName: 'ACheckbox',
        props: {},
        children: '多选框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

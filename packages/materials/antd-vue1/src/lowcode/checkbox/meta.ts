import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (checkbox); see https://1x.antdv.com/components/checkbox-cn/
const meta = {
  componentName: 'ACheckbox',
  title: '多选框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/checkbox-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autoFocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'checked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定当前是否选中',
            'en-US': 'checked',
          },
          tip: '指定当前是否选中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'defaultChecked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始是否选中',
            'en-US': 'defaultChecked',
          },
          tip: '初始是否选中',
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

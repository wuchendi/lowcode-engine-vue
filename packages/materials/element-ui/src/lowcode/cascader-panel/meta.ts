import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (cascader); see https://element.eleme.cn/#/zh-CN/component/cascader
const meta = {
  componentName: 'ElCascaderPanel',
  title: '级联选择器 CascaderPanel',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/cascader',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中项绑定值',
            'en-US': 'v-model',
          },
          tip: '选中项绑定值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选项数据源',
            'en-US': 'options',
          },
          tip: '可选项数据源，键名可通过 Props 属性配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '配置选项',
            'en-US': 'props',
          },
          tip: '配置选项，具体见下表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '当选中节点变化时触发',
          template:
            "onChange(extParams) {\n  // 当选中节点变化时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onExpand-change',
          description: '当展开节点发生变化时触发',
          template:
            "onExpandChange(extParams) {\n  // 当展开节点发生变化时触发\n  console.log('onExpandChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['ElCascader'],
      },
    },
  },
  snippets: [
    {
      title: '级联选择器 CascaderPanel',
      screenshot: './screenshots/cascader-panel.webp',
      schema: {
        componentName: 'ElCascaderPanel',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

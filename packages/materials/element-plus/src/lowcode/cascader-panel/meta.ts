import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (cascader); see https://element-plus.org/zh-CN/component/cascader.html
const meta = {
  componentName: 'ElCascaderPanel',
  title: '级联选择器 CascaderPanel',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/cascader.html',
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
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项的数据源',
            'en-US': 'options',
          },
          tip: '选项的数据源， value 和 label 可以通过 CascaderProps 自定义.',
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
          tip: '配置选项, 请参阅下面 CascaderProps 表。',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'virtualScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtualScroll',
            'en-US': 'virtualScroll',
          },
          tip: 'whether to enable virtual scrolling for large data',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'itemSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'itemSize',
            'en-US': 'itemSize',
          },
          tip: 'node height for virtual scrolling (px)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 34,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'height',
            'en-US': 'height',
          },
          tip: 'menu height for virtual scrolling (px)',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 204,
      },
      {
        name: 'empty',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'empty',
            'en-US': 'empty',
          },
          tip: 'the content of the panel when there is no data.',
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
          name: 'onChange',
          description: '当选中节点变化时触发',
          template:
            "onChange(...args, extParams) {\n  // 当选中节点变化时触发\n  console.log('onChange', ...args)\n}",
        },
        {
          name: 'onExpandChange',
          description: '当展开节点发生变化时触发',
          template:
            "onExpandChange(...args, extParams) {\n  // 当展开节点发生变化时触发\n  console.log('onExpandChange', ...args)\n}",
        },
        {
          name: 'onClose',
          description: '面板的关闭事件，提供给 Cascader 以便做更好的判断。',
          template:
            "onClose(...args, extParams) {\n  // 面板的关闭事件，提供给 Cascader 以便做更好的判断。\n  console.log('onClose', ...args)\n}",
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

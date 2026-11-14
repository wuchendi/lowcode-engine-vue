import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (segmented); see https://antdv.com/components/segmented-cn
const meta = {
  componentName: 'ASegmented',
  title: '分段控制器',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/segmented-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'block',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '将宽度调整为父元素宽度的选项',
            'en-US': 'block',
          },
          tip: '将宽度调整为父元素宽度的选项',
        },
        setter: 'BoolSetter',
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
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '数据化配置选项内容',
            'en-US': 'options',
          },
          tip: '数据化配置选项内容',
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
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控件尺寸',
            'en-US': 'size',
          },
          tip: '控件尺寸',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中的值',
            'en-US': 'value',
          },
          tip: '当前选中的值',
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
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '使用插槽自定义 label',
            'en-US': 'label',
          },
          tip: '使用插槽自定义 label',
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
          description: '选项变化时的回调函数',
          template:
            "onChange(extParams) {\n  // 选项变化时的回调函数\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '分段控制器',
      screenshot: './screenshots/segmented.webp',
      schema: {
        componentName: 'ASegmented',
        props: {
          value: '',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tag); see https://antdv.com/components/tag-cn
const meta = {
  componentName: 'ATag',
  title: '标签',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/tag-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签是否可以关闭',
            'en-US': 'closable',
          },
          tip: '标签是否可以关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义关闭按钮',
            'en-US': 'closeIcon',
          },
          tip: '自定义关闭按钮',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签色',
            'en-US': 'color',
          },
          tip: '标签色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置图标',
            'en-US': 'icon',
          },
          tip: '设置图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框',
            'en-US': 'bordered',
          },
          tip: '是否有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        {
          name: 'onClose',
          description: '关闭时的回调',
          template:
            "onClose(extParams) {\n  // 关闭时的回调\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '点击标签时触发的回调',
          template:
            "onChange(extParams) {\n  // 点击标签时触发的回调\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '标签',
      screenshot: './screenshots/tag.webp',
      schema: {
        componentName: 'ATag',
        props: {},
        children: '标签',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tag); see https://1x.antdv.com/components/tag-cn/
const meta = {
  componentName: 'ATag',
  title: '标签 Tag',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/tag-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'afterClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭动画完成后的回调',
            'en-US': 'afterClose',
          },
          tip: '关闭动画完成后的回调，请使用 close 事件, 我们将在下个版本删除此项',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
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
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示标签',
            'en-US': 'v-model',
          },
          tip: '是否显示标签',
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
      title: '标签 Tag',
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

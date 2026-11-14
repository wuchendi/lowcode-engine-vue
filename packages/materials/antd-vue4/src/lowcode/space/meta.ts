import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (space); see https://antdv.com/components/space-cn
const meta = {
  componentName: 'ASpace',
  title: '间距',
  group: 'Ant Design 组件',
  category: '布局',
  docUrl: 'https://antdv.com/components/space-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对齐方式',
            'en-US': 'align',
          },
          tip: '对齐方式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '间距方向',
            'en-US': 'direction',
          },
          tip: '间距方向',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '间距大小',
            'en-US': 'size',
          },
          tip: '间距大小',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'split',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置拆分',
            'en-US': 'split',
          },
          tip: '设置拆分',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'wrap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动换行',
            'en-US': 'wrap',
          },
          tip: '是否自动换行，仅在 horizontal 时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '间距',
      screenshot: './screenshots/space.webp',
      schema: {
        componentName: 'ASpace',
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '按钮一',
          },
          {
            componentName: 'AButton',
            props: {},
            children: '按钮二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

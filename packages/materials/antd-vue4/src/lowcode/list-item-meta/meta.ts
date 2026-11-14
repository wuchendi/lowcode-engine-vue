import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (list); see https://antdv.com/components/list-cn
const meta = {
  componentName: 'AListItemMeta',
  title: '列表 ListItemMeta',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/list-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'avatar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表元素的图标',
            'en-US': 'avatar',
          },
          tip: '列表元素的图标',
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
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表元素的描述内容',
            'en-US': 'description',
          },
          tip: '列表元素的描述内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表元素的标题',
            'en-US': 'title',
          },
          tip: '列表元素的标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['AList'],
      },
    },
  },
  snippets: [
    {
      title: '列表 ListItemMeta',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AListItemMeta',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

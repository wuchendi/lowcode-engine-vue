import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (list); see https://1x.antdv.com/components/list-cn/
const meta = {
  componentName: 'AListItemMeta',
  title: '列表 Meta',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/list-cn/',
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
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
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
      title: '列表 Meta',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AListItemMeta',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

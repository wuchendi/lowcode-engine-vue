import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (select); see https://antdv.com/components/select-cn
const meta = {
  componentName: 'ASelectOptGroup',
  title: '选择器 SelectOptGroup',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/select-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '组名',
            'en-US': 'label',
          },
          tip: '组名',
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
        parentWhitelist: ['ASelect'],
      },
    },
  },
  snippets: [
    {
      title: '选择器 SelectOptGroup',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ASelectOptGroup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

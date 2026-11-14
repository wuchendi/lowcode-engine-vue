import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (popover); see https://1x.antdv.com/components/popover-cn/
const meta = {
  componentName: 'APopover',
  title: '气泡卡片',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/popover-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片内容',
            'en-US': 'content',
          },
          tip: '卡片内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片标题',
            'en-US': 'title',
          },
          tip: '卡片标题',
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
    component: {},
  },
  snippets: [
    {
      title: '气泡卡片',
      screenshot: './screenshots/popover.webp',
      schema: {
        componentName: 'APopover',
        props: {
          title: '标题',
          content: '内容',
        },
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '气泡卡片',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

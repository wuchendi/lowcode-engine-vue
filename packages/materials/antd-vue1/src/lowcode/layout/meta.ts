import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (layout); see https://1x.antdv.com/components/layout-cn/
const meta = {
  componentName: 'ALayout',
  title: '布局',
  group: 'Ant Design 组件',
  category: '布局',
  docUrl: 'https://1x.antdv.com/components/layout-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'hasSider',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '表示子元素里有 Sider',
            'en-US': 'hasSider',
          },
          tip: '表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动',
        },
        setter: 'BoolSetter',
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
      title: '布局',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ALayout',
        children: [],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

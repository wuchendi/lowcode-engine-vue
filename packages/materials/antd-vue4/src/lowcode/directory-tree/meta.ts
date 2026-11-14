import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tree); see https://antdv.com/components/tree-cn
const meta = {
  componentName: 'ADirectoryTree',
  title: '树形控件 DirectoryTree',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/tree-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'expandAction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '目录展开逻辑',
            'en-US': 'expandAction',
          },
          tip: "目录展开逻辑，可选 false 'click' 'dblclick'",
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'click',
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
      title: '树形控件 DirectoryTree',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ADirectoryTree',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

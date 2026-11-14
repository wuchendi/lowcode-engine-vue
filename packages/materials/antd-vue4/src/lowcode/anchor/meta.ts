import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (anchor); see https://antdv.com/components/anchor-cn
const meta = {
  componentName: 'AAnchor',
  title: '锚点',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/anchor-cn',
  devMode: 'proCode',
  configure: {
    props: [],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '监听锚点链接改变',
          template:
            "onChange(extParams) {\n  // 监听锚点链接改变\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onClick',
          description: 'click 事件的 handler',
          template:
            "onClick(extParams) {\n  // click 事件的 handler\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '锚点',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AAnchor',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

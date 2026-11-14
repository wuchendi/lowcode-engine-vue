import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (timeline); see https://element-plus.org/zh-CN/component/timeline.html
const meta = {
  componentName: 'ElTimeline',
  title: '时间线',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/timeline.html',
  devMode: 'proCode',
  configure: {
    props: [],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '时间线',
      screenshot: './screenshots/timeline.webp',
      schema: {
        componentName: 'ElTimeline',
        children: [
          {
            componentName: 'ElTimelineItem',
            props: {},
            children: '事件一',
          },
          {
            componentName: 'ElTimelineItem',
            props: {},
            children: '事件二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

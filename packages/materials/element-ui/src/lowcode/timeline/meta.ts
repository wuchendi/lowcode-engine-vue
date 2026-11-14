import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (timeline); see https://element.eleme.cn/#/zh-CN/component/timeline
const meta = {
  componentName: 'ElTimeline',
  title: '时间线',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/timeline',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'reverse',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定节点排序方向',
            'en-US': 'reverse',
          },
          tip: '指定节点排序方向，默认为正序',
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

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (timeline); see https://1x.antdv.com/components/timeline-cn/
const meta = {
  componentName: 'ATimeline',
  title: '时间轴',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/timeline-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'pending',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'pending',
            'en-US': 'pending',
          },
          tip: '指定最后一个幽灵节点是否存在或内容',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'false',
      },
      {
        name: 'pendingDot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当最后一个幽灵节点存在時',
            'en-US': 'pendingDot',
          },
          tip: '当最后一个幽灵节点存在時，指定其时间图点',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'reverse',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '节点排序',
            'en-US': 'reverse',
          },
          tip: '节点排序',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'mode',
            'en-US': 'mode',
          },
          tip: '通过设置 mode 可以改变时间轴和内容的相对位置',
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
      title: '时间轴',
      screenshot: './screenshots/timeline.webp',
      schema: {
        componentName: 'ATimeline',
        children: [
          {
            componentName: 'ATimelineItem',
            props: {},
            children: '事件一',
          },
          {
            componentName: 'ATimelineItem',
            props: {},
            children: '事件二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

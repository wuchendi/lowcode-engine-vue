import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (timeline); see https://1x.antdv.com/components/timeline-cn/
const meta = {
  componentName: 'ATimelineItem',
  title: '时间轴 Item',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/timeline-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定圆圈颜色 blue',
            'en-US': 'color',
          },
          tip: '指定圆圈颜色 blue, red, green，或自定义的色值',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'blue',
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义时间轴点',
            'en-US': 'dot',
          },
          tip: '自定义时间轴点',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'position',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义节点位置',
            'en-US': 'position',
          },
          tip: '自定义节点位置',
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
        parentWhitelist: ['ATimeline'],
      },
    },
  },
  snippets: [
    {
      title: '时间轴 Item',
      screenshot: './screenshots/timeline-item.webp',
      schema: {
        componentName: 'ATimelineItem',
        props: {},
        children: '时间轴',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (timeline); see https://element-plus.org/zh-CN/component/timeline.html
const meta = {
  componentName: 'ElTimelineItem',
  title: '时间线 TimelineItem',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/timeline.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'timestamp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '时间戳',
            'en-US': 'timestamp',
          },
          tip: '时间戳',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hideTimestamp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否隐藏时间戳',
            'en-US': 'hideTimestamp',
          },
          tip: '是否隐藏时间戳',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否垂直居中',
            'en-US': 'center',
          },
          tip: '是否垂直居中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '时间戳位置',
            'en-US': 'placement',
          },
          tip: '时间戳位置',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '节点类型',
            'en-US': 'type',
          },
          tip: '节点类型',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'info',
                value: 'info',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '节点颜色',
            'en-US': 'color',
          },
          tip: '节点颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '节点尺寸',
            'en-US': 'size',
          },
          tip: '节点尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'normal',
                value: 'normal',
              },
              {
                title: 'large',
                value: 'large',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'normal',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hollow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否空心点',
            'en-US': 'hollow',
          },
          tip: '是否空心点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dot',
            'en-US': 'dot',
          },
          tip: '为时间线项目自定义已定义的节点',
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
        parentWhitelist: ['ElTimeline'],
      },
    },
  },
  snippets: [
    {
      title: '时间线 TimelineItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElTimelineItem',
        props: {},
        children: '时间线',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

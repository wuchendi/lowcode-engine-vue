import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (calendar); see https://element.eleme.cn/#/zh-CN/component/calendar
const meta = {
  componentName: 'ElCalendar',
  title: '日历',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/calendar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'range',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '时间范围',
            'en-US': 'range',
          },
          tip: '时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'firstDayOfWeek',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '周起始日',
            'en-US': 'firstDayOfWeek',
          },
          tip: '周起始日',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
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
      title: '日历',
      screenshot: './screenshots/calendar.webp',
      schema: {
        componentName: 'ElCalendar',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

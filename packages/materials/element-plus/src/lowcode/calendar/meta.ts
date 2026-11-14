import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (calendar); see https://element-plus.org/zh-CN/component/calendar.html
const meta = {
  componentName: 'ElCalendar',
  title: '日历',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/calendar.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中项绑定值',
            'en-US': 'v-model',
          },
          tip: '选中项绑定值',
        },
        setter: 'StringSetter',
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
          tip: '时间范围，包括开始时间与结束时间。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'controllerType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'controllerType',
            'en-US': 'controllerType',
          },
          tip: 'type of the controller for Calendar header',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'button',
                value: 'button',
              },
              {
                title: 'select',
                value: 'select',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'button',
      },
      {
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'formatter',
            'en-US': 'formatter',
          },
          tip: "format label when controller-type is 'select'",
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'year',
                  value: 'year',
                },
                {
                  title: 'month',
                  value: 'month',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'date-cell',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'date-cell',
            'en-US': 'date-cell',
          },
          tip: 'type 表示该日期的所属月份，可选值有 prev-month、current-month 和 next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd；date 是单元格的日期',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片标题内容',
            'en-US': 'header',
          },
          tip: '卡片标题内容',
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

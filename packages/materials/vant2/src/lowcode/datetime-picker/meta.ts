import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (datetime-picker); see https://vant-ui.github.io/vant/v2/#/zh-CN/datetime-picker
const meta = {
  componentName: 'VanDatetimePicker',
  title: '时间选择',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/datetime-picker',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '时间类型',
            'en-US': 'type',
          },
          tip: '时间类型，可选值为 date time  year-month month-day datehour',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'date',
                value: 'date',
              },
              {
                title: 'time',
                value: 'time',
              },
              {
                title: 'year-month',
                value: 'year-month',
              },
              {
                title: 'month-day',
                value: 'month-day',
              },
              {
                title: 'datehour',
                value: 'datehour',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'datetime',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶部栏标题',
            'en-US': 'title',
          },
          tip: '顶部栏标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'confirmButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮文字',
            'en-US': 'confirmButtonText',
          },
          tip: '确认按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'cancelButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮文字',
            'en-US': 'cancelButtonText',
          },
          tip: '取消按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showToolbar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示顶部栏',
            'en-US': 'showToolbar',
          },
          tip: '是否显示顶部栏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示加载状态',
            'en-US': 'loading',
          },
          tip: '是否显示加载状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为只读状态',
            'en-US': 'readonly',
          },
          tip: '是否为只读状态，只读状态下无法切换选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'filter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项过滤函数',
            'en-US': 'filter',
          },
          tip: '选项过滤函数',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项格式化函数',
            'en-US': 'formatter',
          },
          tip: '选项格式化函数',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'columnsOrder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义列排序数组',
            'en-US': 'columnsOrder',
          },
          tip: '自定义列排序数组, 子项可选值为 year、month、day、hour、minute',
        },
        setter: [
          {
            componentName: 'SelectSetter',
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
                {
                  title: 'day',
                  value: 'day',
                },
                {
                  title: 'hour',
                  value: 'hour',
                },
                {
                  title: 'minute',
                  value: 'minute',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'itemHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项高度',
            'en-US': 'itemHeight',
          },
          tip: '选项高度，支持 px vw vh rem 单位，默认 px',
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
        defaultValue: '44',
      },
      {
        name: 'visibleItemCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可见的选项个数',
            'en-US': 'visibleItemCount',
          },
          tip: '可见的选项个数',
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
        defaultValue: '6',
      },
      {
        name: 'swipeDuration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '快速滑动时惯性滚动的时长',
            'en-US': 'swipeDuration',
          },
          tip: '快速滑动时惯性滚动的时长，单位ms',
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
        defaultValue: '1000',
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
      title: '时间选择',
      screenshot: './screenshots/datetime-picker.webp',
      schema: {
        componentName: 'VanDatetimePicker',
        props: {
          title: '时间选择',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

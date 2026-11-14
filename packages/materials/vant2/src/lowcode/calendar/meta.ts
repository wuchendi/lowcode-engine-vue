import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (calendar); see https://vant-ui.github.io/vant/v2/#/zh-CN/calendar
const meta = {
  componentName: 'VanCalendar',
  title: '日历',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/calendar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择类型',
            'en-US': 'type',
          },
          tip: '选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'single',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '日历标题',
            'en-US': 'title',
          },
          tip: '日历标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '主题色',
            'en-US': 'color',
          },
          tip: '主题色，对底部按钮和选中日期生效',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ee0a24',
      },
      {
        name: 'minDate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选择的最小日期',
            'en-US': 'minDate',
          },
          tip: '可选择的最小日期',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'maxDate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选择的最大日期',
            'en-US': 'maxDate',
          },
          tip: '可选择的最大日期',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultDate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认选中的日期',
            'en-US': 'defaultDate',
          },
          tip: '默认选中的日期，type 为 multiple 或 range 时为数组，传入 null 表示默认不选择',
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
        name: 'rowHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '日期行高',
            'en-US': 'rowHeight',
          },
          tip: '日期行高',
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
        defaultValue: '64',
      },
      {
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '日期格式化函数',
            'en-US': 'formatter',
          },
          tip: '日期格式化函数',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'poppable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否以弹层的形式展示日历',
            'en-US': 'poppable',
          },
          tip: '是否以弹层的形式展示日历',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'lazyRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否只渲染可视区域的内容',
            'en-US': 'lazyRender',
          },
          tip: '是否只渲染可视区域的内容',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showMark',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示月份背景水印',
            'en-US': 'showMark',
          },
          tip: '是否显示月份背景水印',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示日历标题',
            'en-US': 'showTitle',
          },
          tip: '是否展示日历标题',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showSubtitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示日历副标题',
            'en-US': 'showSubtitle',
          },
          tip: '是否展示日历副标题（年月）',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showConfirm',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示确认按钮',
            'en-US': 'showConfirm',
          },
          tip: '是否展示确认按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为只读状态',
            'en-US': 'readonly',
          },
          tip: '是否为只读状态，只读状态下不能选择日期',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'confirmText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮的文字',
            'en-US': 'confirmText',
          },
          tip: '确认按钮的文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'confirmDisabledText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮处于禁用状态时的文字',
            'en-US': 'confirmDisabledText',
          },
          tip: '确认按钮处于禁用状态时的文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'firstDayOfWeek',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置周起始日',
            'en-US': 'firstDayOfWeek',
          },
          tip: '设置周起始日',
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
        defaultValue: '0',
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
        componentName: 'VanCalendar',
        props: {
          poppable: false,
          showConfirm: false,
          style: {
            height: '400px',
          },
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

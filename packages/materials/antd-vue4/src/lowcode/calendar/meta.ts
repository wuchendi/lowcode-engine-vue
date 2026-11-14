import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (calendar); see https://antdv.com/components/calendar-cn
const meta = {
  componentName: 'ACalendar',
  title: '日历',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/calendar-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'dateCellRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '作用域插槽',
            'en-US': 'dateCellRender',
          },
          tip: '作用域插槽，用来自定义渲染日期单元格，返回内容会被追加到单元格,',
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
        name: 'dateFullCellRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '作用域插槽',
            'en-US': 'dateFullCellRender',
          },
          tip: '作用域插槽，自定义渲染日期单元格，返回内容覆盖单元格',
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
        name: 'disabledDate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可选择的日期',
            'en-US': 'disabledDate',
          },
          tip: '不可选择的日期',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'fullscreen',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否全屏显示',
            'en-US': 'fullscreen',
          },
          tip: '是否全屏显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'headerRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义头部内容',
            'en-US': 'headerRender',
          },
          tip: '自定义头部内容',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'locale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '国际化配置',
            'en-US': 'locale',
          },
          tip: '国际化配置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'mode',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始模式',
            'en-US': 'mode',
          },
          tip: '初始模式，month/year',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'month',
      },
      {
        name: 'monthCellRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '作用域插槽',
            'en-US': 'monthCellRender',
          },
          tip: '作用域插槽，自定义渲染月单元格，返回内容会被追加到单元格',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'monthFullCellRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '作用域插槽',
            'en-US': 'monthFullCellRender',
          },
          tip: '作用域插槽，自定义渲染月单元格，返回内容覆盖单元格',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'validRange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置可以显示的日期',
            'en-US': 'validRange',
          },
          tip: '设置可以显示的日期',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示日期',
            'en-US': 'v-model:value',
          },
          tip: '展示日期',
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
        name: 'valueFormat',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选',
            'en-US': 'valueFormat',
          },
          tip: '可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 dayjs 对象',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '日期变化时的回调, 面板变化有可能导致日期变化',
          template:
            "onChange(extParams) {\n  // 日期变化时的回调, 面板变化有可能导致日期变化\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onPanelChange',
          description: '日期面板变化回调',
          template:
            "onPanelChange(extParams) {\n  // 日期面板变化回调\n  console.log('onPanelChange', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '选择日期回调，包含来源信息',
          template:
            "onSelect(extParams) {\n  // 选择日期回调，包含来源信息\n  console.log('onSelect', extParams)\n}",
        },
      ],
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
        componentName: 'ACalendar',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

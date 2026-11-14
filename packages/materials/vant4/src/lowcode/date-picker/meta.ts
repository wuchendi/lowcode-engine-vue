import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (date-picker); see https://vant-ui.github.io/vant/#/zh-CN/date-picker
const meta = {
  componentName: 'VanDatePicker',
  title: '日期选择',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/date-picker',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中的日期',
            'en-US': 'v-model',
          },
          tip: '当前选中的日期',
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
        name: 'columnsType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项类型',
            'en-US': 'columnsType',
          },
          tip: '选项类型，由 year、month 和 day 组成的数组',
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
        name: 'minDate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选的最小时间',
            'en-US': 'minDate',
          },
          tip: '可选的最小时间，精确到日',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'maxDate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选的最大时间',
            'en-US': 'maxDate',
          },
          tip: '可选的最大时间，精确到日',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'formatter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项格式化函数',
            'en-US': 'formatter',
          },
          tip: '选项格式化函数',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'optionHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项高度',
            'en-US': 'optionHeight',
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
        name: 'visibleOptionNum',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可见的选项个数',
            'en-US': 'visibleOptionNum',
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
          tip: '快速滑动时惯性滚动的时长，单位 ms',
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
      {
        name: 'toolbar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义整个顶部栏的内容',
            'en-US': 'toolbar',
          },
          tip: '自定义整个顶部栏的内容',
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
        name: 'confirm',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义确认按钮内容',
            'en-US': 'confirm',
          },
          tip: '自定义确认按钮内容',
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
        name: 'cancel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义取消按钮内容',
            'en-US': 'cancel',
          },
          tip: '自定义取消按钮内容',
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
        name: 'option',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义选项内容',
            'en-US': 'option',
          },
          tip: '自定义选项内容',
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
        name: 'columns-top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义选项上方内容',
            'en-US': 'columns-top',
          },
          tip: '自定义选项上方内容',
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
        name: 'columns-bottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义选项下方内容',
            'en-US': 'columns-bottom',
          },
          tip: '自定义选项下方内容',
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
      events: [
        {
          name: 'onConfirm',
          description: '点击完成按钮时触发',
          template:
            "onConfirm(extParams) {\n  // 点击完成按钮时触发\n  console.log('onConfirm', extParams)\n}",
        },
        {
          name: 'onCancel',
          description: '点击取消按钮时触发',
          template:
            "onCancel(extParams) {\n  // 点击取消按钮时触发\n  console.log('onCancel', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '选项改变时触发',
          template:
            "onChange(extParams) {\n  // 选项改变时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '日期选择',
      screenshot: './screenshots/date-picker.webp',
      schema: {
        componentName: 'VanDatePicker',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

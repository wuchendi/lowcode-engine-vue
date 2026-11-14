import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (area); see https://vant-ui.github.io/vant/#/zh-CN/area
const meta = {
  componentName: 'VanArea',
  title: '省市区选择',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/area',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中项对应的地区码',
            'en-US': 'v-model',
          },
          tip: '当前选中项对应的地区码',
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
        name: 'areaList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '省市区数据',
            'en-US': 'areaList',
          },
          tip: '省市区数据，格式见下方',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'columnsPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列占位提示文字',
            'en-US': 'columnsPlaceholder',
          },
          tip: '列占位提示文字',
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
        name: 'columnsNum',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示列数',
            'en-US': 'columnsNum',
          },
          tip: '显示列数，3-省市区，2-省市，1-省',
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
        defaultValue: '3',
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
      title: '省市区选择',
      screenshot: './screenshots/area.webp',
      schema: {
        componentName: 'VanArea',
        props: {
          title: '省市区选择',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

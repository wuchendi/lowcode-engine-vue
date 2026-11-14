import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (picker); see https://vant-ui.github.io/vant/v2/#/zh-CN/picker
const meta = {
  componentName: 'VanPicker',
  title: '选择器',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/picker',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'columns',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对象数组',
            'en-US': 'columns',
          },
          tip: '对象数组，配置每一列显示的数据',
        },
        setter: 'JsonSetter',
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
        name: 'valueKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项对象中',
            'en-US': 'valueKey',
          },
          tip: '选项对象中，选项文字对应的键名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'text',
      },
      {
        name: 'toolbarPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶部栏位置',
            'en-US': 'toolbarPosition',
          },
          tip: '顶部栏位置，可选值为bottom',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'top',
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
        defaultValue: false,
      },
      {
        name: 'allowHtml',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'allowHtml',
            'en-US': 'allowHtml',
          },
          tip: '是否允许选项内容中渲染 HTML',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'defaultIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '单列选择时',
            'en-US': 'defaultIndex',
          },
          tip: '单列选择时，默认选中项的索引',
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
        name: 'confirmv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义确认按钮内容',
            'en-US': 'confirmv',
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
        name: 'cancelv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义取消按钮内容',
            'en-US': 'cancelv',
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
        name: 'optionv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义选项内容',
            'en-US': 'optionv',
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
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '选择器',
      screenshot: './screenshots/picker.webp',
      schema: {
        componentName: 'VanPicker',
        props: {},
        children: '选择器',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

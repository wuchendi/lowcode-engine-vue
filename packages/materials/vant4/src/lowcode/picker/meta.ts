import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (picker); see https://vant-ui.github.io/vant/#/zh-CN/picker
const meta = {
  componentName: 'VanPicker',
  title: '选择器',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/picker',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中项对应的值',
            'en-US': 'v-model',
          },
          tip: '当前选中项对应的值',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
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
        name: 'columnsFieldNames',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'columnsFieldNames',
            'en-US': 'columnsFieldNames',
          },
          tip: '自定义 columns 结构中的字段',
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
          tip: '确认按钮文字，设置为空字符串可以隐藏按钮',
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
          tip: '取消按钮文字，设置为空字符串可以隐藏按钮',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'toolbarPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶部栏位置',
            'en-US': 'toolbarPosition',
          },
          tip: '顶部栏位置，可选值为 bottom',
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
        defaultValue: true,
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
      {
        name: 'emptyv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义空状态内容',
            'en-US': 'emptyv',
          },
          tip: '自定义空状态内容',
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
          description: '选中的选项改变时触发',
          template:
            "onChange(extParams) {\n  // 选中的选项改变时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onClickOption',
          description: '点击选项时触发',
          template:
            "onClickOption(extParams) {\n  // 点击选项时触发\n  console.log('onClickOption', extParams)\n}",
        },
        {
          name: 'onScrollInto',
          description:
            '当用户通过点击或拖拽让一个选项滚动到中间的选择区域时触发',
          template:
            "onScrollInto(extParams) {\n  // 当用户通过点击或拖拽让一个选项滚动到中间的选择区域时触发\n  console.log('onScrollInto', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '选择器',
      screenshot: './screenshots/picker.webp',
      schema: {
        componentName: 'VanPicker',
        props: {
          title: '选择器',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (date-picker); see https://antdv.com/components/date-picker-cn
const meta = {
  componentName: 'ADatePicker',
  title: '日期选择框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/date-picker-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示清除按钮',
            'en-US': 'allowClear',
          },
          tip: '是否显示清除按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autofocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'bordered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框',
            'en-US': 'bordered',
          },
          tip: '是否有边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'dateRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义日期单元格的内容',
            'en-US': 'dateRender',
          },
          tip: '自定义日期单元格的内容',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用',
            'en-US': 'disabled',
          },
          tip: '禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置日期格式',
            'en-US': 'format',
          },
          tip: '设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 dayjs，支持自定义格式',
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
        defaultValue: 'YYYY-MM-DD',
      },
      {
        name: 'popupClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popupClassName',
            'en-US': 'popupClassName',
          },
          tip: '额外的弹出日历 className',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'getPopupContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '定义浮层的容器',
            'en-US': 'getPopupContainer',
          },
          tip: '定义浮层的容器，默认为 body 上新建 div',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'inputReadOnly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置输入框为只读',
            'en-US': 'inputReadOnly',
          },
          tip: '设置输入框为只读（避免在移动设备上打开虚拟键盘）',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
            'zh-CN': '日期面板的状态',
            'en-US': 'mode',
          },
          tip: '日期面板的状态',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'nextIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义下一个图标',
            'en-US': 'nextIcon',
          },
          tip: '自定义下一个图标',
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
        name: 'open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制弹层是否展开',
            'en-US': 'open',
          },
          tip: '控制弹层是否展开',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'picker',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置选择器类型',
            'en-US': 'picker',
          },
          tip: '设置选择器类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'date',
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框提示文字',
            'en-US': 'placeholder',
          },
          tip: '输入框提示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择框弹出的位置',
            'en-US': 'placement',
          },
          tip: '选择框弹出的位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottomLeft',
      },
      {
        name: 'popupStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '额外的弹出日历样式',
            'en-US': 'popupStyle',
          },
          tip: '额外的弹出日历样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'prevIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义上一个图标',
            'en-US': 'prevIcon',
          },
          tip: '自定义上一个图标',
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
        name: 'presets',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预设时间范围快捷选择',
            'en-US': 'presets',
          },
          tip: '预设时间范围快捷选择',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框大小',
            'en-US': 'size',
          },
          tip: '输入框大小，large 高度为 40px，small 为 24px，默认是 32px',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置校验状态',
            'en-US': 'status',
          },
          tip: '设置校验状态',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'warning',
                value: 'warning',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'suffixIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的选择框后缀图标',
            'en-US': 'suffixIcon',
          },
          tip: '自定义的选择框后缀图标',
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
        name: 'superNextIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 << 切换图标',
            'en-US': 'superNextIcon',
          },
          tip: '自定义 << 切换图标',
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
        name: 'superPrevIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 >> 切换图标',
            'en-US': 'superPrevIcon',
          },
          tip: '自定义 >> 切换图标',
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
        name: 'valueFormat',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可选',
            'en-US': 'valueFormat',
          },
          tip: '可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 dayjs 对象',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultPickerValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认面板日期',
            'en-US': 'defaultPickerValue',
          },
          tip: '默认面板日期',
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
        name: 'disabledTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可选择的时间',
            'en-US': 'disabledTime',
          },
          tip: '不可选择的时间',
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
        name: 'renderExtraFooter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在面板中添加额外的页脚',
            'en-US': 'renderExtraFooter',
          },
          tip: '在面板中添加额外的页脚',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'showNow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showNow',
            'en-US': 'showNow',
          },
          tip: '当设定了 showTime 的时候，面板是否显示“此刻”按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'showTime',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '增加时间选择功能',
            'en-US': 'showTime',
          },
          tip: '增加时间选择功能',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'showToday',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示“今天”按钮',
            'en-US': 'showToday',
          },
          tip: '是否展示“今天”按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '日期',
            'en-US': 'v-model:value',
          },
          tip: '日期',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onOpenChange',
          description: '弹出日历和关闭日历的回调',
          template:
            "onOpenChange(extParams) {\n  // 弹出日历和关闭日历的回调\n  console.log('onOpenChange', extParams)\n}",
        },
        {
          name: 'onPanelChange',
          description: '日期面板变化时的回调',
          template:
            "onPanelChange(extParams) {\n  // 日期面板变化时的回调\n  console.log('onPanelChange', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '时间发生变化的回调',
          template:
            "onChange(extParams) {\n  // 时间发生变化的回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onOk',
          description: '点击确定按钮的回调',
          template:
            "onOk(extParams) {\n  // 点击确定按钮的回调\n  console.log('onOk', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '日期选择框',
      screenshot: './screenshots/date-picker.webp',
      schema: {
        componentName: 'ADatePicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

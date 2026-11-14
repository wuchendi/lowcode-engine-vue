import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (date-picker); see https://1x.antdv.com/components/date-picker-cn/
const meta = {
  componentName: 'ADatePicker',
  title: '日期选择框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/date-picker-cn/',
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
        name: 'autoFocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动获取焦点',
            'en-US': 'autoFocus',
          },
          tip: '自动获取焦点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dateRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '作用域插槽',
            'en-US': 'dateRender',
          },
          tip: '作用域插槽，自定义日期单元格的内容',
        },
        setter: 'StringSetter',
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
        name: 'getCalendarContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '定义浮层的容器',
            'en-US': 'getCalendarContainer',
          },
          tip: '定义浮层的容器，默认为 body 上新建 div',
        },
        setter: 'FunctionSetter',
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
            'zh-CN': '日期面板的状态',
            'en-US': 'mode',
          },
          tip: '日期面板的状态（设置后无法选择年份/月份？）',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'date',
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
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框提示文字',
            'en-US': 'placeholder',
          },
          tip: '输入框提示文字',
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
        name: 'popupStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '额外的弹出日历样式',
            'en-US': 'popupStyle',
          },
          tip: '额外的弹出日历样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'dropdownClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dropdownClassName',
            'en-US': 'dropdownClassName',
          },
          tip: '额外的弹出日历 className',
        },
        setter: 'StringSetter',
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
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'align',
            'en-US': 'align',
          },
          tip: '该值将合并到 placement 的配置中，设置参考 dom-align',
        },
        setter: 'JsonSetter',
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
          tip: '可选，绑定值的格式，对 value、defaultValue、defaultPickerValue 起作用。不指定则绑定值为 moment 对象',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认日期',
            'en-US': 'defaultValue',
          },
          tip: '默认日期',
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
        setter: 'StringSetter',
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
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置日期格式',
            'en-US': 'format',
          },
          tip: '设置日期格式，为数组时支持多格式匹配，展示以第一个为准。配置参考 moment.js',
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
        defaultValue: 'YYYY-MM-DD',
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
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '日期',
            'en-US': 'v-model',
          },
          tip: '日期',
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

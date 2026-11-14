import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (time-picker); see https://1x.antdv.com/components/time-picker-cn/
const meta = {
  componentName: 'ATimePicker',
  title: '时间选择框',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://1x.antdv.com/components/time-picker-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'addon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选择框底部显示自定义的内容',
            'en-US': 'addon',
          },
          tip: '选择框底部显示自定义的内容',
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
        name: 'allowClear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示清除按钮',
            'en-US': 'allowClear',
          },
          tip: '是否展示清除按钮',
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
        name: 'clearText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '清除按钮的提示文案',
            'en-US': 'clearText',
          },
          tip: '清除按钮的提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'clear',
      },
      {
        name: 'defaultOpenValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultOpenValue',
            'en-US': 'defaultOpenValue',
          },
          tip: '当 defaultValue/value 不存在时，可以设置面板打开时默认选中的值',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认时间',
            'en-US': 'defaultValue',
          },
          tip: '默认时间',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用全部操作',
            'en-US': 'disabled',
          },
          tip: '禁用全部操作',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabledHours',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁止选择部分小时选项',
            'en-US': 'disabledHours',
          },
          tip: '禁止选择部分小时选项',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'disabledMinutes',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁止选择部分分钟选项',
            'en-US': 'disabledMinutes',
          },
          tip: '禁止选择部分分钟选项',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'disabledSeconds',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁止选择部分秒选项',
            'en-US': 'disabledSeconds',
          },
          tip: '禁止选择部分秒选项',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'format',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示的时间格式',
            'en-US': 'format',
          },
          tip: '展示的时间格式',
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
        name: 'hideDisabledOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏禁止选择的选项',
            'en-US': 'hideDisabledOptions',
          },
          tip: '隐藏禁止选择的选项',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hourStep',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '小时选项间隔',
            'en-US': 'hourStep',
          },
          tip: '小时选项间隔',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
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
        name: 'minuteStep',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分钟选项间隔',
            'en-US': 'minuteStep',
          },
          tip: '分钟选项间隔',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板是否打开',
            'en-US': 'open',
          },
          tip: '面板是否打开',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '没有值的时候显示的内容',
            'en-US': 'placeholder',
          },
          tip: '没有值的时候显示的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popupClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出层类名',
            'en-US': 'popupClassName',
          },
          tip: '弹出层类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'popupStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出层样式对象',
            'en-US': 'popupStyle',
          },
          tip: '弹出层样式对象',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'secondStep',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '秒选项间隔',
            'en-US': 'secondStep',
          },
          tip: '秒选项间隔',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
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
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'clearIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义的清除图标',
            'en-US': 'clearIcon',
          },
          tip: '自定义的清除图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'use12Hours',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '使用 12 小时制',
            'en-US': 'use12Hours',
          },
          tip: '使用 12 小时制，为 true 时 format 默认为 h:mm:ss a',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前时间',
            'en-US': 'v-model',
          },
          tip: '当前时间',
        },
        setter: 'StringSetter',
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
          tip: '可选，绑定值的格式，对 value、defaultValue 起作用。不指定则绑定值为 moment 对象',
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
          description: '时间发生变化的回调',
          template:
            "onChange(extParams) {\n  // 时间发生变化的回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onOpenChange',
          description: '面板打开/关闭时的回调',
          template:
            "onOpenChange(extParams) {\n  // 面板打开/关闭时的回调\n  console.log('onOpenChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '时间选择框',
      screenshot: './screenshots/time-picker.webp',
      schema: {
        componentName: 'ATimePicker',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

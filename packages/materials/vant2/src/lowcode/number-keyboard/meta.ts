import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (number-keyboard); see https://vant-ui.github.io/vant/v2/#/zh-CN/number-keyboard
const meta = {
  componentName: 'VanNumberKeyboard',
  title: '数字键盘',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/number-keyboard',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前输入值',
            'en-US': 'v-model',
          },
          tip: '当前输入值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示键盘',
            'en-US': 'show',
          },
          tip: '是否显示键盘',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '键盘标题',
            'en-US': 'title',
          },
          tip: '键盘标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'theme',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '样式风格',
            'en-US': 'theme',
          },
          tip: '样式风格，可选值为 custom',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'maxlength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入值最大长度',
            'en-US': 'maxlength',
          },
          tip: '输入值最大长度',
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
      },
      {
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启过场动画',
            'en-US': 'transition',
          },
          tip: '是否开启过场动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '键盘 z-index 层级',
            'en-US': 'zIndex',
          },
          tip: '键盘 z-index 层级',
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
        defaultValue: '100',
      },
      {
        name: 'extraKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '底部额外按键的内容',
            'en-US': 'extraKey',
          },
          tip: '底部额外按键的内容',
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
        name: 'closeButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭按钮文字',
            'en-US': 'closeButtonText',
          },
          tip: '关闭按钮文字，空则不展示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'deleteButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '删除按钮文字',
            'en-US': 'deleteButtonText',
          },
          tip: '删除按钮文字，空则展示删除图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'closeButtonLoading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeButtonLoading',
            'en-US': 'closeButtonLoading',
          },
          tip: '是否将关闭按钮设置为加载中状态，仅在 theme="custom" 时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'showDeleteKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示删除图标',
            'en-US': 'showDeleteKey',
          },
          tip: '是否展示删除图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'hideOnClickOutside',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击外部时是否收起键盘',
            'en-US': 'hideOnClickOutside',
          },
          tip: '点击外部时是否收起键盘',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'getContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'getContainer',
          },
          tip: '指定挂载的节点，用法示例',
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
        name: 'safeAreaInsetBottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启底部安全区适配',
            'en-US': 'safeAreaInsetBottom',
          },
          tip: '是否开启底部安全区适配',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'randomKeyOrder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否将通过随机顺序展示按键',
            'en-US': 'randomKeyOrder',
          },
          tip: '是否将通过随机顺序展示按键',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'delete',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义删除按键内容',
            'en-US': 'delete',
          },
          tip: '自定义删除按键内容',
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
        name: 'extra-key',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义左下角按键内容',
            'en-US': 'extra-key',
          },
          tip: '自定义左下角按键内容',
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
        name: 'title-left',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标题栏左侧内容',
            'en-US': 'title-left',
          },
          tip: '自定义标题栏左侧内容',
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
          name: 'onInput',
          description: '点击按键时触发',
          template:
            "onInput(extParams) {\n  // 点击按键时触发\n  console.log('onInput', extParams)\n}",
        },
        {
          name: 'onDelete',
          description: '点击删除键时触发',
          template:
            "onDelete(extParams) {\n  // 点击删除键时触发\n  console.log('onDelete', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '点击关闭按钮时触发',
          template:
            "onClose(extParams) {\n  // 点击关闭按钮时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onBlur',
          description: '点击关闭按钮或非键盘区域时触发',
          template:
            "onBlur(extParams) {\n  // 点击关闭按钮或非键盘区域时触发\n  console.log('onBlur', extParams)\n}",
        },
        {
          name: 'onShow',
          description: '键盘完全弹出时触发',
          template:
            "onShow(extParams) {\n  // 键盘完全弹出时触发\n  console.log('onShow', extParams)\n}",
        },
        {
          name: 'onHide',
          description: '键盘完全收起时触发',
          template:
            "onHide(extParams) {\n  // 键盘完全收起时触发\n  console.log('onHide', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '数字键盘',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanNumberKeyboard',
        props: {
          title: '数字键盘',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

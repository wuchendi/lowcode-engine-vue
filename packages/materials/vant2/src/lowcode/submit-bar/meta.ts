import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (submit-bar); see https://vant-ui.github.io/vant/v2/#/zh-CN/submit-bar
const meta = {
  componentName: 'VanSubmitBar',
  title: '提交订单栏',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/submit-bar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'price',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '价格',
            'en-US': 'price',
          },
          tip: '价格（单位分）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'decimalLength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '价格小数点位数',
            'en-US': 'decimalLength',
          },
          tip: '价格小数点位数',
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
        defaultValue: '2',
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '价格左侧文案',
            'en-US': 'label',
          },
          tip: '价格左侧文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'suffixLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '价格右侧文案',
            'en-US': 'suffixLabel',
          },
          tip: '价格右侧文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'textAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '价格文案对齐方向',
            'en-US': 'textAlign',
          },
          tip: '价格文案对齐方向，可选值为 left',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'buttonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮文字',
            'en-US': 'buttonText',
          },
          tip: '按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'buttonType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮类型',
            'en-US': 'buttonType',
          },
          tip: '按钮类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'danger',
      },
      {
        name: 'buttonColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义按钮颜色',
            'en-US': 'buttonColor',
          },
          tip: '自定义按钮颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'tip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在订单栏上方的提示文案',
            'en-US': 'tip',
          },
          tip: '在订单栏上方的提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tipIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tipIcon',
            'en-US': 'tipIcon',
          },
          tip: '提示文案左侧的图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'currency',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '货币符号',
            'en-US': 'currency',
          },
          tip: '货币符号',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用按钮',
            'en-US': 'disabled',
          },
          tip: '是否禁用按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loading',
            'en-US': 'loading',
          },
          tip: '是否显示将按钮显示为加载中状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        name: 'buttonv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义按钮',
            'en-US': 'buttonv',
          },
          tip: '自定义按钮',
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
        name: 'top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义订单栏上方内容',
            'en-US': 'top',
          },
          tip: '自定义订单栏上方内容',
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
          name: 'onSubmit',
          description: '按钮点击事件回调',
          template:
            "onSubmit(extParams) {\n  // 按钮点击事件回调\n  console.log('onSubmit', extParams)\n}",
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
      title: '提交订单栏',
      screenshot: './screenshots/submit-bar.webp',
      schema: {
        componentName: 'VanSubmitBar',
        props: {},
        children: '提交订单栏',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (coupon-list); see https://vant-ui.github.io/vant/#/zh-CN/coupon-list
const meta = {
  componentName: 'VanCouponList',
  title: '优惠券',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/coupon-list',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:code',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前输入的兑换码',
            'en-US': 'v-model:code',
          },
          tip: '当前输入的兑换码',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'chosenCoupon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中优惠券的索引',
            'en-US': 'chosenCoupon',
          },
          tip: '当前选中优惠券的索引,支持多选（类型为 []）',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: -1,
      },
      {
        name: 'coupons',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可用优惠券列表',
            'en-US': 'coupons',
          },
          tip: '可用优惠券列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'disabledCoupons',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可用优惠券列表',
            'en-US': 'disabledCoupons',
          },
          tip: '不可用优惠券列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'enabledTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '可用优惠券列表标题',
            'en-US': 'enabledTitle',
          },
          tip: '可用优惠券列表标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'disabledTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可用优惠券列表标题',
            'en-US': 'disabledTitle',
          },
          tip: '不可用优惠券列表标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'exchangeButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '兑换按钮文字',
            'en-US': 'exchangeButtonText',
          },
          tip: '兑换按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'exchangeButtonLoading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示兑换按钮加载动画',
            'en-US': 'exchangeButtonLoading',
          },
          tip: '是否显示兑换按钮加载动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'exchangeButtonDisabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用兑换按钮',
            'en-US': 'exchangeButtonDisabled',
          },
          tip: '是否禁用兑换按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'exchangeMinLength',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '兑换码最小长度',
            'en-US': 'exchangeMinLength',
          },
          tip: '兑换码最小长度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'displayedCouponIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动至特定优惠券位置',
            'en-US': 'displayedCouponIndex',
          },
          tip: '滚动至特定优惠券位置',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'showCloseButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示列表底部按钮',
            'en-US': 'showCloseButton',
          },
          tip: '是否显示列表底部按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表底部按钮文字',
            'en-US': 'closeButtonText',
          },
          tip: '列表底部按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inputPlaceholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '输入框文字提示',
            'en-US': 'inputPlaceholder',
          },
          tip: '输入框文字提示',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showExchangeBar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示兑换栏',
            'en-US': 'showExchangeBar',
          },
          tip: '是否展示兑换栏',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        name: 'emptyImage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列表为空时的占位图',
            'en-US': 'emptyImage',
          },
          tip: '列表为空时的占位图',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'showCount',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示可用 / 不可用数量',
            'en-US': 'showCount',
          },
          tip: '是否展示可用 / 不可用数量',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'list-footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '优惠券列表底部',
            'en-US': 'list-footer',
          },
          tip: '优惠券列表底部',
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
        name: 'disabled-list-footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可用优惠券列表底部',
            'en-US': 'disabled-list-footer',
          },
          tip: '不可用优惠券列表底部',
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
        name: 'list-button',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义底部按钮',
            'en-US': 'list-button',
          },
          tip: '自定义底部按钮',
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
          name: 'onChange',
          description: '优惠券切换回调',
          template:
            "onChange(extParams) {\n  // 优惠券切换回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onExchange',
          description: '兑换优惠券回调',
          template:
            "onExchange(extParams) {\n  // 兑换优惠券回调\n  console.log('onExchange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '优惠券',
      screenshot: './screenshots/coupon-list.webp',
      schema: {
        componentName: 'VanCouponList',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

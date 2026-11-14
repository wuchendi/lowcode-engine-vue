import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (coupon-list); see https://vant-ui.github.io/vant/v2/#/zh-CN/coupon-list
const meta = {
  componentName: 'VanCouponCell',
  title: '优惠券 CouponCell',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/coupon-list',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '单元格标题',
            'en-US': 'title',
          },
          tip: '单元格标题',
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
          tip: '当前选中优惠券的索引',
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
        defaultValue: '-1',
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
        name: 'editable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '能否切换优惠券',
            'en-US': 'editable',
          },
          tip: '能否切换优惠券',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示内边框',
            'en-US': 'border',
          },
          tip: '是否显示内边框',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '优惠券 CouponCell',
      screenshot: './screenshots/coupon-cell.webp',
      schema: {
        componentName: 'VanCouponCell',
        props: {
          title: '优惠券',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (goods-action); see https://vant-ui.github.io/vant/v2/#/zh-CN/goods-action
const meta = {
  componentName: 'VanGoodsActionButton',
  title: '商品导航 GoodsActionButton',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/goods-action',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮文字',
            'en-US': 'text',
          },
          tip: '按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮类型',
            'en-US': 'type',
          },
          tip: '按钮类型，可选值为 primary info warning danger',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'info',
                value: 'info',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮颜色',
            'en-US': 'color',
          },
          tip: '按钮颜色，支持传入linear-gradient渐变色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧图标名称或图片链接',
            'en-US': 'icon',
          },
          tip: '左侧图标名称或图片链接',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'vant',
          },
        },
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
            'zh-CN': '是否显示为加载状态',
            'en-US': 'loading',
          },
          tip: '是否显示为加载状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'url',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的链接地址',
            'en-US': 'url',
          },
          tip: '点击后跳转的链接地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'to',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的目标路由对象',
            'en-US': 'to',
          },
          tip: '点击后跳转的目标路由对象，同 vue-router 的 to 属性',
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
        name: 'replace',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在跳转时替换当前页面历史',
            'en-US': 'replace',
          },
          tip: '是否在跳转时替换当前页面历史',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['VanGoodsAction'],
      },
    },
  },
  snippets: [
    {
      title: '商品导航 GoodsActionButton',
      screenshot: './screenshots/goods-action-button.webp',
      schema: {
        componentName: 'VanGoodsActionButton',
        props: {
          text: '商品导航',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (card); see https://vant-ui.github.io/vant/#/zh-CN/card
const meta = {
  componentName: 'VanCard',
  title: '商品卡片',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/card',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'thumb',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧图片 URL',
            'en-US': 'thumb',
          },
          tip: '左侧图片 URL',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'desc',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述',
            'en-US': 'desc',
          },
          tip: '描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片角标',
            'en-US': 'tag',
          },
          tip: '图片角标',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'num',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品数量',
            'en-US': 'num',
          },
          tip: '商品数量',
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
        name: 'price',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品价格',
            'en-US': 'price',
          },
          tip: '商品价格',
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
        name: 'originPrice',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '商品划线原价',
            'en-US': 'originPrice',
          },
          tip: '商品划线原价',
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
        name: 'centered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容是否垂直居中',
            'en-US': 'centered',
          },
          tip: '内容是否垂直居中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        name: 'thumbLink',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击左侧图片后跳转的链接地址',
            'en-US': 'thumbLink',
          },
          tip: '点击左侧图片后跳转的链接地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'lazyLoad',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启图片懒加载',
            'en-US': 'lazyLoad',
          },
          tip: '是否开启图片懒加载，须配合 Lazyload 组件使用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'origin-price',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义商品原价',
            'en-US': 'origin-price',
          },
          tip: '自定义商品原价',
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
        name: 'price-top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义价格上方区域',
            'en-US': 'price-top',
          },
          tip: '自定义价格上方区域',
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
        name: 'bottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义价格下方区域',
            'en-US': 'bottom',
          },
          tip: '自定义价格下方区域',
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
        name: 'tags',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义描述下方标签区域',
            'en-US': 'tags',
          },
          tip: '自定义描述下方标签区域',
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
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右下角内容',
            'en-US': 'footer',
          },
          tip: '自定义右下角内容',
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
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(extParams) {\n  // 点击时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onClickThumb',
          description: '点击自定义图片时触发',
          template:
            "onClickThumb(extParams) {\n  // 点击自定义图片时触发\n  console.log('onClickThumb', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '商品卡片',
      screenshot: './screenshots/card.webp',
      schema: {
        componentName: 'VanCard',
        props: {},
        children: [
          {
            componentName: 'div',
            props: {},
            children: '卡片内容',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

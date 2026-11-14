import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (image); see https://vant-ui.github.io/vant/v2/#/zh-CN/image
const meta = {
  componentName: 'VanImage',
  title: '图片',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/image',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片链接',
            'en-US': 'src',
          },
          tip: '图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'fit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片填充模式',
            'en-US': 'fit',
          },
          tip: '图片填充模式',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'fill',
      },
      {
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '替代文本',
            'en-US': 'alt',
          },
          tip: '替代文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '宽度',
            'en-US': 'width',
          },
          tip: '宽度，默认单位为px',
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
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '高度',
            'en-US': 'height',
          },
          tip: '高度，默认单位为px',
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
        name: 'radius',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '圆角大小',
            'en-US': 'radius',
          },
          tip: '圆角大小，默认单位为px',
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
        defaultValue: '0',
      },
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示为圆形',
            'en-US': 'round',
          },
          tip: '是否显示为圆形',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        name: 'showError',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示图片加载失败提示',
            'en-US': 'showError',
          },
          tip: '是否展示图片加载失败提示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showLoading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示图片加载中提示',
            'en-US': 'showLoading',
          },
          tip: '是否展示图片加载中提示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'errorIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'errorIcon',
            'en-US': 'errorIcon',
          },
          tip: '失败时提示的图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'photo-fail',
      },
      {
        name: 'loadingIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'loadingIcon',
            'en-US': 'loadingIcon',
          },
          tip: '加载时提示的图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'photo',
      },
      {
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
      },
      {
        name: 'contain',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'contain',
            'en-US': 'contain',
          },
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
        name: 'cover',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cover',
            'en-US': 'cover',
          },
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
        name: 'fill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fill',
            'en-US': 'fill',
          },
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
        name: 'none',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'none',
            'en-US': 'none',
          },
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
        name: 'scale-down',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'scale-down',
            'en-US': 'scale-down',
          },
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
        name: 'defaultv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图片下方的内容',
            'en-US': 'defaultv',
          },
          tip: '自定义图片下方的内容',
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
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义加载中的提示内容',
            'en-US': 'loading',
          },
          tip: '自定义加载中的提示内容',
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
        name: 'error',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义加载失败时的提示内容',
            'en-US': 'error',
          },
          tip: '自定义加载失败时的提示内容',
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
          description: '点击图片时触发',
          template:
            "onClick(extParams) {\n  // 点击图片时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onLoad',
          description: '图片加载完毕时触发',
          template:
            "onLoad(extParams) {\n  // 图片加载完毕时触发\n  console.log('onLoad', extParams)\n}",
        },
        {
          name: 'onError',
          description: '图片加载失败时触发',
          template:
            "onError(extParams) {\n  // 图片加载失败时触发\n  console.log('onError', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '图片',
      screenshot: './screenshots/image.webp',
      schema: {
        componentName: 'VanImage',
        props: {
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          width: '100px',
          height: '100px',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

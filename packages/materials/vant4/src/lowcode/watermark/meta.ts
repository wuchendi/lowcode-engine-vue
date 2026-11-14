import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (watermark); see https://vant-ui.github.io/vant/#/zh-CN/watermark
const meta = {
  componentName: 'VanWatermark',
  title: '水印',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/watermark',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印宽度',
            'en-US': 'width',
          },
          tip: '水印宽度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 100,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印高度',
            'en-US': 'height',
          },
          tip: '水印高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 100,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印的 z-index',
            'en-US': 'zIndex',
          },
          tip: '水印的 z-index',
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
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文字水印的内容',
            'en-US': 'content',
          },
          tip: '文字水印的内容',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'image',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片水印的内容',
            'en-US': 'image',
          },
          tip: '图片水印的内容，如果与 content 同时传入，优先使用图片水印',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rotate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印的旋转角度',
            'en-US': 'rotate',
          },
          tip: '水印的旋转角度',
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
        defaultValue: '-22',
      },
      {
        name: 'fullPage',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印是否全屏显示',
            'en-US': 'fullPage',
          },
          tip: '水印是否全屏显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'gapX',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印之间的水平间隔',
            'en-US': 'gapX',
          },
          tip: '水印之间的水平间隔',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'gapY',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印之间的垂直间隔',
            'en-US': 'gapY',
          },
          tip: '水印之间的垂直间隔',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文字水印的颜色',
            'en-US': 'textColor',
          },
          tip: '文字水印的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#dcdee0',
      },
      {
        name: 'opacity',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印的透明度',
            'en-US': 'opacity',
          },
          tip: '水印的透明度',
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
      title: '水印',
      screenshot: './screenshots/watermark.webp',
      schema: {
        componentName: 'VanWatermark',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

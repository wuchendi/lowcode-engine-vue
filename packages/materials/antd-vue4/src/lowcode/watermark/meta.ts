import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (watermark); see https://antdv.com/components/watermark-cn
const meta = {
  componentName: 'AWatermark',
  title: '水印',
  group: 'Ant Design 组件',
  category: '其他',
  docUrl: 'https://antdv.com/components/watermark-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印的宽度',
            'en-US': 'width',
          },
          tip: '水印的宽度，content 的默认值为自身的宽度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 120,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印的高度',
            'en-US': 'height',
          },
          tip: '水印的高度，content 的默认值为自身的高度',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 64,
      },
      {
        name: 'rotate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印绘制时',
            'en-US': 'rotate',
          },
          tip: '水印绘制时，旋转的角度，单位 °',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: -22,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '追加的水印元素的 z-index',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 9,
      },
      {
        name: 'image',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片源',
            'en-US': 'image',
          },
          tip: '图片源，建议导出 2 倍或 3 倍图，优先级高',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印文字内容',
            'en-US': 'content',
          },
          tip: '水印文字内容',
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
        name: 'font',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文字样式',
            'en-US': 'font',
          },
          tip: '文字样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
        defaultValue: 'Font',
      },
      {
        name: 'gap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印之间的间距',
            'en-US': 'gap',
          },
          tip: '水印之间的间距',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '水印距离容器左上角的偏移量',
            'en-US': 'offset',
          },
          tip: '水印距离容器左上角的偏移量，默认为 gap/2',
        },
        setter: 'NumberSetter',
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
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AWatermark',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

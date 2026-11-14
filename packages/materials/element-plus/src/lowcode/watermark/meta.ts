import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (watermark); see https://element-plus.org/zh-CN/component/watermark.html
const meta = {
  componentName: 'ElWatermark',
  title: '水印',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element-plus.org/zh-CN/component/watermark.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'width',
            'en-US': 'width',
          },
          tip: 'The width of the watermark, the default value of content is its own width',
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
            'zh-CN': 'height',
            'en-US': 'height',
          },
          tip: 'The height of the watermark, the default value of content is its own height',
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
            'zh-CN': 'rotate',
            'en-US': 'rotate',
          },
          tip: 'When the watermark is drawn, the rotation Angle, unit °',
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
          tip: 'The z-index of the appended watermark element',
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
            'zh-CN': 'image',
            'en-US': 'image',
          },
          tip: 'Image source, it is recommended to export 2x or 3x image, high priority',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'content',
            'en-US': 'content',
          },
          tip: 'Watermark text content',
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
        defaultValue: 'Element Plus',
      },
      {
        name: 'font',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'font',
            'en-US': 'font',
          },
          tip: 'Text style',
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
            'zh-CN': 'gap',
            'en-US': 'gap',
          },
          tip: 'The spacing between watermarks',
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
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: 'The offset of the watermark from the upper left corner of the container. The default is gap/2',
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
        componentName: 'ElWatermark',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

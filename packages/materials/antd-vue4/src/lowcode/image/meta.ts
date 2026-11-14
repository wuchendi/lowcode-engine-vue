import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (image); see https://antdv.com/components/image-cn
const meta = {
  componentName: 'AImage',
  title: '图片',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/image-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图像描述',
            'en-US': 'alt',
          },
          tip: '图像描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'fallback',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载失败容错地址',
            'en-US': 'fallback',
          },
          tip: '加载失败容错地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图像高度',
            'en-US': 'height',
          },
          tip: '图像高度',
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
        name: 'placeholder',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载占位',
            'en-US': 'placeholder',
          },
          tip: '加载占位, 为 true 时使用默认占位',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'preview',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预览参数',
            'en-US': 'preview',
          },
          tip: '预览参数，为 false 时禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片地址',
            'en-US': 'src',
          },
          tip: '图片地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'previewMask',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 mask',
            'en-US': 'previewMask',
          },
          tip: '自定义 mask',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图像宽度',
            'en-US': 'width',
          },
          tip: '图像宽度',
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
      events: [
        {
          name: 'onError',
          description: '加载错误回调',
          template:
            "onError(extParams) {\n  // 加载错误回调\n  console.log('onError', extParams)\n}",
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
        componentName: 'AImage',
        props: {
          src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          style: {
            width: '100px',
            height: '100px',
          },
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

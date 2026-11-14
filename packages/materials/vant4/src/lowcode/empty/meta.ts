import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (empty); see https://vant-ui.github.io/vant/#/zh-CN/empty
const meta = {
  componentName: 'VanEmpty',
  title: '空状态',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/empty',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'image',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片类型',
            'en-US': 'image',
          },
          tip: '图片类型，可选值为 error network search，支持传入图片 URL',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'error',
                value: 'error',
              },
              {
                title: 'network',
                value: 'network',
              },
              {
                title: 'search',
                value: 'search',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'imageSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片大小',
            'en-US': 'imageSize',
          },
          tip: '图片大小，默认单位为 px',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
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
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片下方的描述文字',
            'en-US': 'description',
          },
          tip: '图片下方的描述文字',
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
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '空状态',
      screenshot: './screenshots/empty.webp',
      schema: {
        componentName: 'VanEmpty',
        props: {},
        children: '空状态',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

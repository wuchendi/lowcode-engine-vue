import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (result); see https://1x.antdv.com/components/result-cn/
const meta = {
  componentName: 'AResult',
  title: '结果',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://1x.antdv.com/components/result-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'title 文字',
            'en-US': 'title',
          },
          tip: 'title 文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'subTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'subTitle 文字',
            'en-US': 'subTitle',
          },
          tip: 'subTitle 文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'status',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '结果的状态',
            'en-US': 'status',
          },
          tip: '结果的状态,决定图标和颜色',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'error',
                value: 'error',
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
                title: '404',
                value: '404',
              },
              {
                title: '403',
                value: '403',
              },
              {
                title: '500',
                value: '500',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'info',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 icon',
            'en-US': 'icon',
          },
          tip: '自定义 icon',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '操作区',
            'en-US': 'extra',
          },
          tip: '操作区',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
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
      title: '结果',
      screenshot: './screenshots/result.webp',
      schema: {
        componentName: 'AResult',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

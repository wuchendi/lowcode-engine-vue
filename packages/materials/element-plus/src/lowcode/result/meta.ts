import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (result); see https://element-plus.org/zh-CN/component/result.html
const meta = {
  componentName: 'ElResult',
  title: '结果',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/result.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'result 组件的标题',
            'en-US': 'title',
          },
          tip: 'result 组件的标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'subTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'result 组件的副标题',
            'en-US': 'subTitle',
          },
          tip: 'result 组件的副标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'result 组件的图标类型',
            'en-US': 'icon',
          },
          tip: 'result 组件的图标类型',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'info',
                value: 'info',
              },
              {
                title: 'error',
                value: 'error',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'info',
      },
      {
        name: 'sub-title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'sub-title',
            'en-US': 'sub-title',
          },
          tip: 'content as result sub title',
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
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'extra',
            'en-US': 'extra',
          },
          tip: 'content as result extra area',
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
        componentName: 'ElResult',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

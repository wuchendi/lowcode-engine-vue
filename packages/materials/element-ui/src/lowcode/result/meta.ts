import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (result); see https://element.eleme.cn/#/zh-CN/component/result
const meta = {
  componentName: 'ElResult',
  title: '结果',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/result',
  devMode: 'proCode',
  configure: {
    props: [
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
        name: 'subTitle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '二级标题',
            'en-US': 'subTitle',
          },
          tip: '二级标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类型',
            'en-US': 'icon',
          },
          tip: '图标类型',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
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
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义底部额外区域',
            'en-US': 'extra',
          },
          tip: '自定义底部额外区域',
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

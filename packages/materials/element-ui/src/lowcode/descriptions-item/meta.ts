import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (descriptions); see https://element.eleme.cn/#/zh-CN/component/descriptions
const meta = {
  componentName: 'ElDescriptionsItem',
  title: '描述列表 DescriptionsItem',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/descriptions',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签文本',
            'en-US': 'label',
          },
          tip: '标签文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'span',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列的数量',
            'en-US': 'span',
          },
          tip: '列的数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1,
      },
      {
        name: 'labelClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标签类名',
            'en-US': 'labelClassName',
          },
          tip: '自定义标签类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'contentClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义内容类名',
            'en-US': 'contentClassName',
          },
          tip: '自定义内容类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'labelStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义标签样式',
            'en-US': 'labelStyle',
          },
          tip: '自定义标签样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'contentStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义内容样式',
            'en-US': 'contentStyle',
          },
          tip: '自定义内容样式',
        },
        setter: 'JsonSetter',
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
      nestingRule: {
        parentWhitelist: ['ElDescriptions'],
      },
    },
  },
  snippets: [
    {
      title: '描述列表 DescriptionsItem',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDescriptionsItem',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

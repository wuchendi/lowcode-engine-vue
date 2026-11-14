import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (text); see https://element-plus.org/zh-CN/component/text.html
const meta = {
  componentName: 'ElText',
  title: 'Text',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/text.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型',
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
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'info',
                value: 'info',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '大小',
            'en-US': 'size',
          },
          tip: '大小',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'truncated',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示省略号',
            'en-US': 'truncated',
          },
          tip: '显示省略号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'lineClamp',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'lineClamp',
            'en-US': 'lineClamp',
          },
          tip: 'maximum lines',
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
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义元素标签',
            'en-US': 'tag',
          },
          tip: '自定义元素标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'span',
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
      title: 'Text',
      screenshot: './screenshots/text.webp',
      schema: {
        componentName: 'ElText',
        props: {},
        children: 'Text',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

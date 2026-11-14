import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (divider); see https://element-plus.org/zh-CN/component/divider.html
const meta = {
  componentName: 'ElDivider',
  title: '分割线',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element-plus.org/zh-CN/component/divider.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置分割线方向',
            'en-US': 'direction',
          },
          tip: '设置分割线方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'borderStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置分隔符样式',
            'en-US': 'borderStyle',
          },
          tip: '设置分隔符样式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'solid',
                value: 'solid',
              },
              {
                title: 'hidden',
                value: 'hidden',
              },
              {
                title: 'dashed',
                value: 'dashed',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'solid',
      },
      {
        name: 'contentPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义分隔线内容的位置',
            'en-US': 'contentPosition',
          },
          tip: '自定义分隔线内容的位置',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'center',
                value: 'center',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'center',
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
      title: '分割线',
      screenshot: './screenshots/divider.webp',
      schema: {
        componentName: 'ElDivider',
        props: {},
        children: '分割线',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

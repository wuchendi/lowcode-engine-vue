import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (card); see https://element-plus.org/zh-CN/component/card.html
const meta = {
  componentName: 'ElCard',
  title: '卡片',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/card.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'header',
            'en-US': 'header',
          },
          tip: '卡片的标题你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'footer',
            'en-US': 'footer',
          },
          tip: 'footer of the card. Also accepts a DOM passed by slot#footer',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'bodyStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'body 的 CSS 样式',
            'en-US': 'bodyStyle',
          },
          tip: 'body 的 CSS 样式',
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
        name: 'headerClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerClass',
            'en-US': 'headerClass',
          },
          tip: 'custom class name of card header',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'bodyClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'bodyClass',
            'en-US': 'bodyClass',
          },
          tip: 'custom class name of card body',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'footerClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'footerClass',
            'en-US': 'footerClass',
          },
          tip: 'custom class name of card footer',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'shadow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '卡片阴影显示时机',
            'en-US': 'shadow',
          },
          tip: '卡片阴影显示时机',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'always',
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
      title: '卡片',
      screenshot: './screenshots/card.webp',
      schema: {
        componentName: 'ElCard',
        props: {
          title: '卡片标题',
        },
        children: [
          {
            componentName: 'div',
            props: {},
            children: '卡片内容',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

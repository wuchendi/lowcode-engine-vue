import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (card); see https://element.eleme.cn/#/zh-CN/component/card
const meta = {
  componentName: 'ElCard',
  title: '卡片',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/card',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置 header',
            'en-US': 'header',
          },
          tip: '设置 header，也可以通过 slot#header 传入 DOM',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'bodyStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置 body 的样式',
            'en-US': 'bodyStyle',
          },
          tip: '设置 body 的样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'shadow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置阴影显示时机',
            'en-US': 'shadow',
          },
          tip: '设置阴影显示时机',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'always',
                value: 'always',
              },
              {
                title: 'hover',
                value: 'hover',
              },
              {
                title: 'never',
                value: 'never',
              },
            ],
          },
        },
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
    component: {},
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

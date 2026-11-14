import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (col); see https://vant-ui.github.io/vant/#/zh-CN/col
const meta = {
  componentName: 'VanCol',
  title: '布局',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/col',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'span',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列元素宽度',
            'en-US': 'span',
          },
          tip: '列元素宽度',
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
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列元素偏移距离',
            'en-US': 'offset',
          },
          tip: '列元素偏移距离',
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
        defaultValue: 'div',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(extParams) {\n  // 点击时触发\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '布局',
      screenshot: './screenshots/col.webp',
      schema: {
        componentName: 'VanCol',
        props: {
          span: 12,
        },
        children: [
          {
            componentName: 'div',
            props: {},
            children: 'col',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

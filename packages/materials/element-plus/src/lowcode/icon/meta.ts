import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (icon); see https://element-plus.org/zh-CN/component/icon.html
const meta = {
  componentName: 'ElIcon',
  title: '图标',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/icon.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'color',
            'en-US': 'color',
          },
          tip: "SVG tag's fill attribute",
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'inherit from color',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'SVG icon size, size x size',
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
        defaultValue: 'inherit from font size',
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
      title: '图标',
      screenshot: './screenshots/icon.webp',
      schema: {
        componentName: 'ElIcon',
        props: {
          size: 24,
        },
        children: '★',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

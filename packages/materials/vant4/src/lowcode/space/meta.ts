import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (space); see https://vant-ui.github.io/vant/#/zh-CN/space
const meta = {
  componentName: 'VanSpace',
  title: '间距',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/space',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '间距方向',
            'en-US': 'direction',
          },
          tip: '间距方向',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '间距大小',
            'en-US': 'size',
          },
          tip: '间距大小，如 20px 2em，默认单位为 px，支持数组形式来分别设置横向和纵向间距',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '8px',
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置子元素的对齐方式',
            'en-US': 'align',
          },
          tip: '设置子元素的对齐方式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'wrap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动换行',
            'en-US': 'wrap',
          },
          tip: '是否自动换行，仅适用于水平方向排列',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'fill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fill',
            'en-US': 'fill',
          },
          tip: '是否让 Space 变为一个块级元素，填充整个父元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      title: '间距',
      screenshot: './screenshots/space.webp',
      schema: {
        componentName: 'VanSpace',
        children: [
          {
            componentName: 'VanButton',
            props: {},
            children: '按钮一',
          },
          {
            componentName: 'VanButton',
            props: {},
            children: '按钮二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

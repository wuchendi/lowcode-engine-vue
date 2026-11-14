import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (grid); see https://vant-ui.github.io/vant/v2/#/zh-CN/grid
const meta = {
  componentName: 'VanGrid',
  title: '宫格',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/grid',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'columnNum',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列数',
            'en-US': 'columnNum',
          },
          tip: '列数',
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
        defaultValue: '4',
      },
      {
        name: 'iconSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标大小',
            'en-US': 'iconSize',
          },
          tip: '图标大小，默认单位为px',
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
        defaultValue: '28px',
      },
      {
        name: 'gutter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '格子之间的间距',
            'en-US': 'gutter',
          },
          tip: '格子之间的间距，默认单位为px',
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
        defaultValue: '0',
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示边框',
            'en-US': 'border',
          },
          tip: '是否显示边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否将格子内容居中显示',
            'en-US': 'center',
          },
          tip: '是否将格子内容居中显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'square',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否将格子固定为正方形',
            'en-US': 'square',
          },
          tip: '是否将格子固定为正方形',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'clickable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启格子点击反馈',
            'en-US': 'clickable',
          },
          tip: '是否开启格子点击反馈',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '格子内容排列的方向',
            'en-US': 'direction',
          },
          tip: '格子内容排列的方向，可选值为 horizontal',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'vertical',
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
      title: '宫格',
      screenshot: './screenshots/grid.webp',
      schema: {
        componentName: 'VanGrid',
        children: [
          {
            componentName: 'VanGridItem',
            props: {
              icon: 'photo-o',
              text: '文字',
            },
          },
          {
            componentName: 'VanGridItem',
            props: {
              icon: 'photo-o',
              text: '文字',
            },
          },
          {
            componentName: 'VanGridItem',
            props: {
              icon: 'photo-o',
              text: '文字',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

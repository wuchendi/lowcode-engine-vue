import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (cell); see https://vant-ui.github.io/vant/#/zh-CN/cell
const meta = {
  componentName: 'VanCellGroup',
  title: '单元格 CellGroup',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/cell',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分组标题',
            'en-US': 'title',
          },
          tip: '分组标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'inset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示为圆角卡片风格',
            'en-US': 'inset',
          },
          tip: '是否展示为圆角卡片风格',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示外边框',
            'en-US': 'border',
          },
          tip: '是否显示外边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
      title: '单元格 CellGroup',
      screenshot: './screenshots/cell-group.webp',
      schema: {
        componentName: 'VanCellGroup',
        children: [
          {
            componentName: 'VanCell',
            props: {
              title: '单元格',
              value: '内容',
            },
          },
          {
            componentName: 'VanCell',
            props: {
              title: '单元格',
              value: '内容',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

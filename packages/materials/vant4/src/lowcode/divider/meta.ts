import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (divider); see https://vant-ui.github.io/vant/#/zh-CN/divider
const meta = {
  componentName: 'VanDivider',
  title: '分割线',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/divider',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'dashed',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用虚线',
            'en-US': 'dashed',
          },
          tip: '是否使用虚线',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hairline',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用 0.5px 线',
            'en-US': 'hairline',
          },
          tip: '是否使用 0.5px 线',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'contentPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容位置',
            'en-US': 'contentPosition',
          },
          tip: '内容位置，可选值为 left right',
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
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'center',
      },
      {
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用垂直',
            'en-US': 'vertical',
          },
          tip: '是否使用垂直',
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
    component: {},
  },
  snippets: [
    {
      title: '分割线',
      screenshot: './screenshots/divider.webp',
      schema: {
        componentName: 'VanDivider',
        props: {},
        children: '分割线',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

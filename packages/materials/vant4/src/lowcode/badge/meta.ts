import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (badge); see https://vant-ui.github.io/vant/#/zh-CN/badge
const meta = {
  componentName: 'VanBadge',
  title: '徽标',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/badge',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '徽标内容',
            'en-US': 'content',
          },
          tip: '徽标内容（dot 为 fasle 时生效）',
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
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '徽标背景颜色',
            'en-US': 'color',
          },
          tip: '徽标背景颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ee0a24',
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示为小红点',
            'en-US': 'dot',
          },
          tip: '是否展示为小红点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大值',
            'en-US': 'max',
          },
          tip: '最大值，超过最大值会显示 {max}+，仅当 content 为数字时有效',
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
            'zh-CN': '设置徽标的偏移量',
            'en-US': 'offset',
          },
          tip: '设置徽标的偏移量，数组的两项分别对应水平向右和垂直向下方向的偏移量，默认单位为 px',
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
        name: 'showZero',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showZero',
            'en-US': 'showZero',
          },
          tip: "当 content 为数字 0 或字符串 '0' 时，是否展示徽标",
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'position',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '徽标位置',
            'en-US': 'position',
          },
          tip: '徽标位置，可选值为 top-left bottom-left bottom-right',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'top-left',
                value: 'top-left',
              },
              {
                title: 'bottom-left',
                value: 'bottom-left',
              },
              {
                title: 'bottom-right',
                value: 'bottom-right',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'top-right',
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
      title: '徽标',
      screenshot: './screenshots/badge.webp',
      schema: {
        componentName: 'VanBadge',
        props: {
          content: '5',
        },
        children: [
          {
            componentName: 'VanButton',
            props: {
              text: '消息',
            },
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (badge); see https://element.eleme.cn/#/zh-CN/component/badge
const meta = {
  componentName: 'ElBadge',
  title: '标记',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/badge',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '显示值',
            'en-US': 'value',
          },
          tip: '显示值',
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
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大值',
            'en-US': 'max',
          },
          tip: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'isDot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '小圆点',
            'en-US': 'isDot',
          },
          tip: '小圆点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hidden',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '隐藏 badge',
            'en-US': 'hidden',
          },
          tip: '隐藏 badge',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'info',
                value: 'info',
              },
            ],
          },
        },
        supportVariable: true,
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
      title: '标记',
      screenshot: './screenshots/badge.webp',
      schema: {
        componentName: 'ElBadge',
        props: {
          value: 5,
        },
        children: [
          {
            componentName: 'ElButton',
            props: {},
            children: '消息',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (badge); see https://element-plus.org/zh-CN/component/badge.html
const meta = {
  componentName: 'ElBadge',
  title: '徽章',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/badge.html',
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
          tip: '最大值，超过最大值会显示 {max}+。只有当 value 是数字类型时起作用。',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 99,
      },
      {
        name: 'isDot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示小圆点',
            'en-US': 'isDot',
          },
          tip: '是否显示小圆点。',
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
            'zh-CN': '是否隐藏 Badge',
            'en-US': 'hidden',
          },
          tip: '是否隐藏 Badge。',
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
            'zh-CN': 'badge 类型',
            'en-US': 'type',
          },
          tip: 'badge 类型。',
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
        defaultValue: 'danger',
      },
      {
        name: 'showZero',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showZero',
            'en-US': 'showZero',
          },
          tip: 'Whether to show badge when value is zero.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'color',
            'en-US': 'color',
          },
          tip: 'background color of the dot',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: 'offset of badge',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'badgeStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'badgeStyle',
            'en-US': 'badgeStyle',
          },
          tip: 'custom style of badge',
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
        name: 'badgeClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'badgeClass',
            'en-US': 'badgeClass',
          },
          tip: 'custom class of badge',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'content',
            'en-US': 'content',
          },
          tip: 'customize badge content',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
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
      title: '徽章',
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

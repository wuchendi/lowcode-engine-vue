import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (icon); see https://vant-ui.github.io/vant/v2/#/zh-CN/icon
const meta = {
  componentName: 'VanIcon',
  title: '图标',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/icon',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标名称或图片链接',
            'en-US': 'name',
          },
          tip: '图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'dot',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示图标右上角小红点',
            'en-US': 'dot',
          },
          tip: '是否显示图标右上角小红点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'badge',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标右上角徽标的内容',
            'en-US': 'badge',
          },
          tip: '图标右上角徽标的内容',
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
            'zh-CN': '图标颜色',
            'en-US': 'color',
          },
          tip: '图标颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'inherit',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标大小',
            'en-US': 'size',
          },
          tip: '图标大小，如 20px 2em，默认单位为px',
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
        defaultValue: 'inherit',
      },
      {
        name: 'classPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类名前缀',
            'en-US': 'classPrefix',
          },
          tip: '类名前缀，用于使用自定义图标',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'HTML 标签',
            'en-US': 'tag',
          },
          tip: 'HTML 标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'i',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击图标时触发',
          template:
            "onClick(extParams) {\n  // 点击图标时触发\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '图标',
      screenshot: './screenshots/icon.webp',
      schema: {
        componentName: 'VanIcon',
        props: {
          name: 'chat-o',
          size: '24px',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

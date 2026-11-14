import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (tag); see https://vant-ui.github.io/vant/#/zh-CN/tag
const meta = {
  componentName: 'VanTag',
  title: '标签',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/tag',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型，可选值为 primary success danger warning',
        },
        setter: {
          componentName: 'RadioGroupSetter',
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
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'warning',
                value: 'warning',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '大小',
            'en-US': 'size',
          },
          tip: '大小, 可选值为 large medium',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'medium',
                value: 'medium',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签颜色',
            'en-US': 'color',
          },
          tip: '标签颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示标签',
            'en-US': 'show',
          },
          tip: '是否展示标签',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'plain',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为空心样式',
            'en-US': 'plain',
          },
          tip: '是否为空心样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为圆角样式',
            'en-US': 'round',
          },
          tip: '是否为圆角样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'mark',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为标记样式',
            'en-US': 'mark',
          },
          tip: '是否为标记样式',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本颜色',
            'en-US': 'textColor',
          },
          tip: '文本颜色，优先级高于 color 属性',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'white',
      },
      {
        name: 'closeable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为可关闭标签',
            'en-US': 'closeable',
          },
          tip: '是否为可关闭标签',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        {
          name: 'onClose',
          description: '关闭标签时触发',
          template:
            "onClose(extParams) {\n  // 关闭标签时触发\n  console.log('onClose', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '标签',
      screenshot: './screenshots/tag.webp',
      schema: {
        componentName: 'VanTag',
        props: {},
        children: '标签',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

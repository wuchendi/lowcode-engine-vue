import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tag); see https://element-plus.org/zh-CN/component/tag.html
const meta = {
  componentName: 'ElTag',
  title: '标签',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/tag.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tag 的类型',
            'en-US': 'type',
          },
          tip: 'Tag 的类型',
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
                title: 'info',
                value: 'info',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'primary',
      },
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可关闭',
            'en-US': 'closable',
          },
          tip: '是否可关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disableTransitions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用渐变动画',
            'en-US': 'disableTransitions',
          },
          tip: '是否禁用渐变动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'hit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否有边框描边',
            'en-US': 'hit',
          },
          tip: '是否有边框描边',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '背景色',
            'en-US': 'color',
          },
          tip: '背景色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tag 的尺寸',
            'en-US': 'size',
          },
          tip: 'Tag 的尺寸',
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
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tag 的主题',
            'en-US': 'effect',
          },
          tip: 'Tag 的主题',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
              {
                title: 'plain',
                value: 'plain',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tag 是否为圆角',
            'en-US': 'round',
          },
          tip: 'Tag 是否为圆角',
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
          description: '点击 Tag 时触发的事件',
          template:
            "onClick(...args, extParams) {\n  // 点击 Tag 时触发的事件\n  console.log('onClick', ...args)\n}",
        },
        {
          name: 'onClose',
          description: '关闭 Tag 时触发的事件',
          template:
            "onClose(...args, extParams) {\n  // 关闭 Tag 时触发的事件\n  console.log('onClose', ...args)\n}",
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
        componentName: 'ElTag',
        props: {},
        children: '标签',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

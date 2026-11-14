import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (button); see https://vant-ui.github.io/vant/#/zh-CN/button
const meta = {
  componentName: 'VanButton',
  title: '按钮',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/button',
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
          tip: '类型，可选值为 primary success warning danger',
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
        defaultValue: 'default',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '尺寸',
            'en-US': 'size',
          },
          tip: '尺寸，可选值为 large small mini',
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
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'normal',
      },
      {
        name: 'text',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮文字',
            'en-US': 'text',
          },
          tip: '按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮颜色',
            'en-US': 'color',
          },
          tip: '按钮颜色，支持传入 linear-gradient 渐变色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧图标名称或图片链接',
            'en-US': 'icon',
          },
          tip: '左侧图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: 'CIconSetter',
        supportVariable: true,
      },
      {
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '图标类名前缀，等同于 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
      },
      {
        name: 'iconPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标展示位置',
            'en-US': 'iconPosition',
          },
          tip: '图标展示位置，可选值为 right',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'left',
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮根节点的 HTML 标签',
            'en-US': 'tag',
          },
          tip: '按钮根节点的 HTML 标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'button',
      },
      {
        name: 'nativeType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'nativeType',
            'en-US': 'nativeType',
          },
          tip: '原生 button 标签的 type 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'button',
      },
      {
        name: 'block',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为块级元素',
            'en-US': 'block',
          },
          tip: '是否为块级元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'plain',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为朴素按钮',
            'en-US': 'plain',
          },
          tip: '是否为朴素按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'square',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为方形按钮',
            'en-US': 'square',
          },
          tip: '是否为方形按钮',
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
            'zh-CN': '是否为圆形按钮',
            'en-US': 'round',
          },
          tip: '是否为圆形按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用按钮',
            'en-US': 'disabled',
          },
          tip: '是否禁用按钮',
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
            'zh-CN': '是否使用 0.5px 边框',
            'en-US': 'hairline',
          },
          tip: '是否使用 0.5px 边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示为加载状态',
            'en-US': 'loading',
          },
          tip: '是否显示为加载状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loadingText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载状态提示文字',
            'en-US': 'loadingText',
          },
          tip: '加载状态提示文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'loadingType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载图标类型',
            'en-US': 'loadingType',
          },
          tip: '加载图标类型，可选值为 spinner',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'circular',
      },
      {
        name: 'loadingSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载图标大小',
            'en-US': 'loadingSize',
          },
          tip: '加载图标大小，默认单位为 px',
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
        defaultValue: '20px',
      },
      {
        name: 'url',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的链接地址',
            'en-US': 'url',
          },
          tip: '点击后跳转的链接地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'to',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的目标路由对象',
            'en-US': 'to',
          },
          tip: '点击后跳转的目标路由对象，等同于 Vue Router 的 to 属性',
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
        name: 'replace',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在跳转时替换当前页面历史',
            'en-US': 'replace',
          },
          tip: '是否在跳转时替换当前页面历史',
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
          description: '点击按钮，且按钮状态不为加载或禁用时触发',
          template:
            "onClick(extParams) {\n  // 点击按钮，且按钮状态不为加载或禁用时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onTouchstart',
          description: '开始触摸按钮时触发',
          template:
            "onTouchstart(extParams) {\n  // 开始触摸按钮时触发\n  console.log('onTouchstart', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '按钮',
      screenshot: './screenshots/button.webp',
      schema: {
        componentName: 'VanButton',
        props: {
          text: '按钮',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (toast); see https://vant-ui.github.io/vant/#/zh-CN/toast
const meta = {
  componentName: 'VanToast',
  title: '轻提示',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/toast',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '提示类型',
            'en-US': 'type',
          },
          tip: '提示类型，可选值为 loading success fail html',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'loading',
                value: 'loading',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'fail',
                value: 'fail',
              },
              {
                title: 'html',
                value: 'html',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'text',
      },
      {
        name: 'position',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '位置',
            'en-US': 'position',
          },
          tip: '位置，可选值为 top bottom',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'middle',
      },
      {
        name: 'message',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本内容',
            'en-US': 'message',
          },
          tip: '文本内容，支持通过\\n换行',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'wordBreak',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本内容的换行方式',
            'en-US': 'wordBreak',
          },
          tip: '文本内容的换行方式，可选值为 normal break-all break-word',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'normal',
                value: 'normal',
              },
              {
                title: 'break-all',
                value: 'break-all',
              },
              {
                title: 'break-word',
                value: 'break-word',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'break-all',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义图标',
            'en-US': 'icon',
          },
          tip: '自定义图标，支持传入图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'vant',
          },
        },
        supportVariable: true,
      },
      {
        name: 'iconSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标大小',
            'en-US': 'iconSize',
          },
          tip: '图标大小，如 20px 2em，默认单位为 px',
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
        defaultValue: '36px',
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
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示背景遮罩层',
            'en-US': 'overlay',
          },
          tip: '是否显示背景遮罩层',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'forbidClick',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁止背景点击',
            'en-US': 'forbidClick',
          },
          tip: '是否禁止背景点击',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closeOnClick',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击后关闭',
            'en-US': 'closeOnClick',
          },
          tip: '是否在点击后关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closeOnClickOverlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击遮罩层后关闭',
            'en-US': 'closeOnClickOverlay',
          },
          tip: '是否在点击遮罩层后关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loadingType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载图标类型',
            'en-US': 'loadingType',
          },
          tip: '加载图标类型, 可选值为 spinner',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'circular',
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示时长',
            'en-US': 'duration',
          },
          tip: '展示时长(ms)，值为 0 时，toast 不会消失',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 2000,
      },
      {
        name: 'className',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义类名',
            'en-US': 'className',
          },
          tip: '自定义类名',
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
        name: 'overlayClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义遮罩层类名',
            'en-US': 'overlayClass',
          },
          tip: '自定义遮罩层类名',
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
        name: 'overlayStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义遮罩层样式',
            'en-US': 'overlayStyle',
          },
          tip: '自定义遮罩层样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画类名',
            'en-US': 'transition',
          },
          tip: '动画类名，等价于 transition 的name属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-fade',
      },
      {
        name: 'teleport',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'teleport',
          },
          tip: '指定挂载的节点，等同于 Teleport 组件的 to 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'body',
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '将组件的 z-index 层级设置为一个固定值',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClose',
          description: '关闭时的回调函数',
          template:
            "onClose(extParams) {\n  // 关闭时的回调函数\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: '完全展示后的回调函数',
          template:
            "onOpened(extParams) {\n  // 完全展示后的回调函数\n  console.log('onOpened', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '轻提示',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanToast',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

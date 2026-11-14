import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (popup); see https://vant-ui.github.io/vant/v2/#/zh-CN/popup
const meta = {
  componentName: 'VanPopup',
  title: '弹出层',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/popup',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示弹出层',
            'en-US': 'v-model',
          },
          tip: '是否显示弹出层',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示遮罩层',
            'en-US': 'overlay',
          },
          tip: '是否显示遮罩层',
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
            'zh-CN': '弹出位置',
            'en-US': 'position',
          },
          tip: '弹出位置，可选值为 top bottom right left',
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
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'left',
                value: 'left',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'center',
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
        setter: 'StringSetter',
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
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'duration',
          },
          tip: '动画时长，单位秒',
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
        defaultValue: '0.3',
      },
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示圆角',
            'en-US': 'round',
          },
          tip: '是否显示圆角',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'lockScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否锁定背景滚动',
            'en-US': 'lockScroll',
          },
          tip: '是否锁定背景滚动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'lazyRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在显示弹层时才渲染节点',
            'en-US': 'lazyRender',
          },
          tip: '是否在显示弹层时才渲染节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeOnPopstate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在页面回退时自动关闭',
            'en-US': 'closeOnPopstate',
          },
          tip: '是否在页面回退时自动关闭',
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
        defaultValue: true,
      },
      {
        name: 'closeable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示关闭图标',
            'en-US': 'closeable',
          },
          tip: '是否显示关闭图标',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'closeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭图标名称或图片链接',
            'en-US': 'closeIcon',
          },
          tip: '关闭图标名称或图片链接',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'cross',
      },
      {
        name: 'closeIconPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭图标位置',
            'en-US': 'closeIconPosition',
          },
          tip: '关闭图标位置，可选值为top-leftbottom-left bottom-right',
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
      },
      {
        name: 'transitionAppear',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在初始渲染时启用过渡动画',
            'en-US': 'transitionAppear',
          },
          tip: '是否在初始渲染时启用过渡动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'getContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'getContainer',
          },
          tip: '指定挂载的节点',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'safeAreaInsetBottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启底部安全区适配',
            'en-US': 'safeAreaInsetBottom',
          },
          tip: '是否开启底部安全区适配',
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
          description: '点击弹出层时触发',
          template:
            "onClick(extParams) {\n  // 点击弹出层时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onClick-overlay',
          description: '点击遮罩层时触发',
          template:
            "onClickOverlay(extParams) {\n  // 点击遮罩层时触发\n  console.log('onClickOverlay', extParams)\n}",
        },
        {
          name: 'onClick-close-icon',
          description: '点击关闭图标时触发',
          template:
            "onClickCloseIcon(extParams) {\n  // 点击关闭图标时触发\n  console.log('onClickCloseIcon', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: '打开弹出层时触发',
          template:
            "onOpen(extParams) {\n  // 打开弹出层时触发\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭弹出层时触发',
          template:
            "onClose(extParams) {\n  // 关闭弹出层时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: '打开弹出层且动画结束后触发',
          template:
            "onOpened(extParams) {\n  // 打开弹出层且动画结束后触发\n  console.log('onOpened', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: '关闭弹出层且动画结束后触发',
          template:
            "onClosed(extParams) {\n  // 关闭弹出层且动画结束后触发\n  console.log('onClosed', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isModal: true,
    },
  },
  snippets: [
    {
      title: '弹出层',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanPopup',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

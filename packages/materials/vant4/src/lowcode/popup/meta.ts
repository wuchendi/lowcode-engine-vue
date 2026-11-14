import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (popup); see https://vant-ui.github.io/vant/#/zh-CN/popup
const meta = {
  componentName: 'VanPopup',
  title: '弹出层',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/popup',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示弹出层',
            'en-US': 'v-model:show',
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
        name: 'overlayProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '遮罩层属性',
            'en-US': 'overlayProps',
          },
          tip: '遮罩层属性，参考 Overlay 组件',
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
          tip: '动画时长，单位秒，设置为 0 可以禁用动画',
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
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '将弹窗的 z-index 层级设置为一个固定值',
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
        name: 'destroyOnClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在关闭时销毁内容',
            'en-US': 'destroyOnClose',
          },
          tip: '是否在关闭时销毁内容',
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
          tip: '关闭图标名称或图片链接，等同于 Icon 组件的 name 属性',
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
          tip: '关闭图标位置，可选值为 top-leftbottom-left bottom-right',
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
        name: 'beforeClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭前的回调函数',
            'en-US': 'beforeClose',
          },
          tip: '关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
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
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画类名',
            'en-US': 'transition',
          },
          tip: '动画类名，等价于 transition 的 name 属性',
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
      },
      {
        name: 'safeAreaInsetTop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启顶部安全区适配',
            'en-US': 'safeAreaInsetTop',
          },
          tip: '是否开启顶部安全区适配',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      {
        name: 'overlay-content',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '遮罩层的内容',
            'en-US': 'overlay-content',
          },
          tip: '遮罩层的内容',
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
      events: [
        {
          name: 'onClick',
          description: '点击弹出层时触发',
          template:
            "onClick(extParams) {\n  // 点击弹出层时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onClickOverlay',
          description: '点击遮罩层时触发',
          template:
            "onClickOverlay(extParams) {\n  // 点击遮罩层时触发\n  console.log('onClickOverlay', extParams)\n}",
        },
        {
          name: 'onClickCloseIcon',
          description: '点击关闭图标时触发',
          template:
            "onClickCloseIcon(extParams) {\n  // 点击关闭图标时触发\n  console.log('onClickCloseIcon', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: '打开弹出层时立即触发',
          template:
            "onOpen(extParams) {\n  // 打开弹出层时立即触发\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭弹出层时立即触发',
          template:
            "onClose(extParams) {\n  // 关闭弹出层时立即触发\n  console.log('onClose', extParams)\n}",
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
      isContainer: true,
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
        children: '弹出层',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

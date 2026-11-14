import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (share-sheet); see https://vant-ui.github.io/vant/#/zh-CN/share-sheet
const meta = {
  componentName: 'VanShareSheet',
  title: '分享面板',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/share-sheet',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示分享面板',
            'en-US': 'v-model:show',
          },
          tip: '是否显示分享面板',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '分享选项',
            'en-US': 'options',
          },
          tip: '分享选项',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶部标题',
            'en-US': 'title',
          },
          tip: '顶部标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'cancelText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮文字',
            'en-US': 'cancelText',
          },
          tip: '取消按钮文字，传入空字符串可以隐藏按钮',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题下方的辅助描述文字',
            'en-US': 'description',
          },
          tip: '标题下方的辅助描述文字',
        },
        setter: 'StringSetter',
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
          tip: '将面板的 z-index 层级设置为一个固定值',
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
        defaultValue: true,
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
            'zh-CN': '是否在显示弹层时才渲染内容',
            'en-US': 'lazyRender',
          },
          tip: '是否在显示弹层时才渲染内容',
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
        defaultValue: true,
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
        defaultValue: true,
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
        name: 'cancel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义取消按钮内容',
            'en-US': 'cancel',
          },
          tip: '自定义取消按钮内容',
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
          name: 'onSelect',
          description: '点击分享选项时触发',
          template:
            "onSelect(extParams) {\n  // 点击分享选项时触发\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onCancel',
          description: '点击取消按钮时触发',
          template:
            "onCancel(extParams) {\n  // 点击取消按钮时触发\n  console.log('onCancel', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: '打开面板时触发',
          template:
            "onOpen(extParams) {\n  // 打开面板时触发\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭面板时触发',
          template:
            "onClose(extParams) {\n  // 关闭面板时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: '打开面板且动画结束后触发',
          template:
            "onOpened(extParams) {\n  // 打开面板且动画结束后触发\n  console.log('onOpened', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: '关闭面板且动画结束后触发',
          template:
            "onClosed(extParams) {\n  // 关闭面板且动画结束后触发\n  console.log('onClosed', extParams)\n}",
        },
        {
          name: 'onClickOverlay',
          description: '点击遮罩层时触发',
          template:
            "onClickOverlay(extParams) {\n  // 点击遮罩层时触发\n  console.log('onClickOverlay', extParams)\n}",
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
      title: '分享面板',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanShareSheet',
        props: {
          title: '分享面板',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

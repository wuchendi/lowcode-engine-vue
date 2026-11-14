import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (action-sheet); see https://vant-ui.github.io/vant/v2/#/zh-CN/action-sheet
const meta = {
  componentName: 'VanActionSheet',
  title: '动作面板',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/action-sheet',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示动作面板',
            'en-US': 'v-model',
          },
          tip: '是否显示动作面板',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'actions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '面板选项列表',
            'en-US': 'actions',
          },
          tip: '面板选项列表',
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
          tip: '取消按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项上方的描述信息',
            'en-US': 'description',
          },
          tip: '选项上方的描述信息',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        defaultValue: true,
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
        name: 'closeOnClickAction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击选项后关闭',
            'en-US': 'closeOnClickAction',
          },
          tip: '是否在点击选项后关闭',
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
        name: 'getContainer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'getContainer',
          },
          tip: '指定挂载的节点，用法示例',
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
        name: 'descriptionv',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义描述文案',
            'en-US': 'descriptionv',
          },
          tip: '自定义描述文案',
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
          description: '点击选项时触发，禁用或加载状态下不会触发',
          template:
            "onSelect(extParams) {\n  // 点击选项时触发，禁用或加载状态下不会触发\n  console.log('onSelect', extParams)\n}",
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
          name: 'onClick-overlay',
          description: '点击遮罩层时触发',
          template:
            "onClickOverlay(extParams) {\n  // 点击遮罩层时触发\n  console.log('onClickOverlay', extParams)\n}",
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
      title: '动作面板',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanActionSheet',
        props: {},
        children: '动作面板',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

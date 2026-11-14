import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (dialog); see https://vant-ui.github.io/vant/#/zh-CN/dialog
const meta = {
  componentName: 'VanDialog',
  title: '弹出框',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/dialog',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示弹窗',
            'en-US': 'v-model:show',
          },
          tip: '是否显示弹窗',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题',
            'en-US': 'title',
          },
          tip: '标题',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹窗宽度',
            'en-US': 'width',
          },
          tip: '弹窗宽度，默认单位为 px',
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
        defaultValue: '320px',
      },
      {
        name: 'message',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '文本内容',
            'en-US': 'message',
          },
          tip: '文本内容，支持通过 \\n 换行',
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
        name: 'messageAlign',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '内容水平对齐方式',
            'en-US': 'messageAlign',
          },
          tip: '内容水平对齐方式，可选值为 left right justify',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'justify',
                value: 'justify',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'center',
      },
      {
        name: 'theme',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '样式风格',
            'en-US': 'theme',
          },
          tip: '样式风格，可选值为 round-button',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'showConfirmButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示确认按钮',
            'en-US': 'showConfirmButton',
          },
          tip: '是否展示确认按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showCancelButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示取消按钮',
            'en-US': 'showCancelButton',
          },
          tip: '是否展示取消按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'confirmButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮文案',
            'en-US': 'confirmButtonText',
          },
          tip: '确认按钮文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'confirmButtonColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮颜色',
            'en-US': 'confirmButtonColor',
          },
          tip: '确认按钮颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ee0a24',
      },
      {
        name: 'confirmButtonDisabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用确认按钮',
            'en-US': 'confirmButtonDisabled',
          },
          tip: '是否禁用确认按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'cancelButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮文案',
            'en-US': 'cancelButtonText',
          },
          tip: '取消按钮文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'cancelButtonColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '取消按钮颜色',
            'en-US': 'cancelButtonColor',
          },
          tip: '取消按钮颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: 'black',
      },
      {
        name: 'cancelButtonDisabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用取消按钮',
            'en-US': 'cancelButtonDisabled',
          },
          tip: '是否禁用取消按钮',
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
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示遮罩层',
            'en-US': 'overlay',
          },
          tip: '是否展示遮罩层',
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
            'zh-CN': '是否在点击遮罩层后关闭弹窗',
            'en-US': 'closeOnClickOverlay',
          },
          tip: '是否在点击遮罩层后关闭弹窗',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        name: 'allowHtml',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'allowHtml',
            'en-US': 'allowHtml',
          },
          tip: '是否允许 message 内容中渲染 HTML',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        name: 'keyboardEnabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用键盘能力',
            'en-US': 'keyboardEnabled',
          },
          tip: '是否启用键盘能力，在展示确认和取消按钮的时候，默认情况下键盘的 Enter 和 Esc 会执行 confirm 和 cancel 函数',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义底部按钮区域',
            'en-US': 'footer',
          },
          tip: '自定义底部按钮区域',
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
          name: 'onConfirm',
          description: '点击确认按钮时触发',
          template:
            "onConfirm(extParams) {\n  // 点击确认按钮时触发\n  console.log('onConfirm', extParams)\n}",
        },
        {
          name: 'onCancel',
          description: '点击取消按钮时触发',
          template:
            "onCancel(extParams) {\n  // 点击取消按钮时触发\n  console.log('onCancel', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: '打开弹窗时触发',
          template:
            "onOpen(extParams) {\n  // 打开弹窗时触发\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭弹窗时触发',
          template:
            "onClose(extParams) {\n  // 关闭弹窗时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: '打开弹窗且动画结束后触发',
          template:
            "onOpened(extParams) {\n  // 打开弹窗且动画结束后触发\n  console.log('onOpened', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: '关闭弹窗且动画结束后触发',
          template:
            "onClosed(extParams) {\n  // 关闭弹窗且动画结束后触发\n  console.log('onClosed', extParams)\n}",
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
      title: '弹出框',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanDialog',
        props: {},
        children: '弹出框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (dialog); see https://element.eleme.cn/#/zh-CN/component/dialog
const meta = {
  componentName: 'ElDialog',
  title: '对话框',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/dialog',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'visible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示 Dialog',
            'en-US': 'visible',
          },
          tip: '是否显示 Dialog，支持 .sync 修饰符',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Dialog 的标题',
            'en-US': 'title',
          },
          tip: 'Dialog 的标题，也可通过具名 slot （见下表）传入',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Dialog 的宽度',
            'en-US': 'width',
          },
          tip: 'Dialog 的宽度',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '50%',
      },
      {
        name: 'fullscreen',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为全屏 Dialog',
            'en-US': 'fullscreen',
          },
          tip: '是否为全屏 Dialog',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'top',
            'en-US': 'top',
          },
          tip: 'Dialog CSS 中的 margin-top 值',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '15vh',
      },
      {
        name: 'modal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否需要遮罩层',
            'en-US': 'modal',
          },
          tip: '是否需要遮罩层',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'modalAppendToBody',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'modalAppendToBody',
            'en-US': 'modalAppendToBody',
          },
          tip: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'appendToBody',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendToBody',
            'en-US': 'appendToBody',
          },
          tip: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
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
            'zh-CN': 'lockScroll',
            'en-US': 'lockScroll',
          },
          tip: '是否在 Dialog 出现时将 body 滚动锁定',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'customClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Dialog 的自定义类名',
            'en-US': 'customClass',
          },
          tip: 'Dialog 的自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'closeOnClickModal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnClickModal',
            'en-US': 'closeOnClickModal',
          },
          tip: '是否可以通过点击 modal 关闭 Dialog',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeOnPressEscape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnPressEscape',
            'en-US': 'closeOnPressEscape',
          },
          tip: '是否可以通过按下 ESC 关闭 Dialog',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示关闭按钮',
            'en-US': 'showClose',
          },
          tip: '是否显示关闭按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'beforeClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '关闭前的回调',
            'en-US': 'beforeClose',
          },
          tip: '关闭前的回调，会暂停 Dialog 的关闭',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否对头部和底部采用居中布局',
            'en-US': 'center',
          },
          tip: '是否对头部和底部采用居中布局',
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
            'zh-CN': 'destroyOnClose',
            'en-US': 'destroyOnClose',
          },
          tip: '关闭时销毁 Dialog 中的元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'footer',
            'en-US': 'footer',
          },
          tip: 'Dialog 按钮操作区的内容',
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
          name: 'onOpen',
          description: 'Dialog 打开的回调',
          template:
            "onOpen(extParams) {\n  // Dialog 打开的回调\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: 'Dialog 打开动画结束时的回调',
          template:
            "onOpened(extParams) {\n  // Dialog 打开动画结束时的回调\n  console.log('onOpened', extParams)\n}",
        },
        {
          name: 'onClose',
          description: 'Dialog 关闭的回调',
          template:
            "onClose(extParams) {\n  // Dialog 关闭的回调\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: 'Dialog 关闭动画结束时的回调',
          template:
            "onClosed(extParams) {\n  // Dialog 关闭动画结束时的回调\n  console.log('onClosed', extParams)\n}",
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
      title: '对话框',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDialog',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

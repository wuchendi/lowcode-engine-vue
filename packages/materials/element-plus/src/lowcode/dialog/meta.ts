import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (dialog); see https://element-plus.org/zh-CN/component/dialog.html
const meta = {
  componentName: 'ElDialog',
  title: '对话框',
  group: 'Element 组件',
  category: '反馈组件',
  docUrl: 'https://element-plus.org/zh-CN/component/dialog.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示 Dialog',
            'en-US': 'v-model',
          },
          tip: '是否显示 Dialog',
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
            'zh-CN': 'title',
            'en-US': 'title',
          },
          tip: 'Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对话框的宽度',
            'en-US': 'width',
          },
          tip: '对话框的宽度，默认值为 50%',
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
          tip: 'dialog CSS 中的 margin-top 值，默认为 15vh',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'modalPenetrable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'modalPenetrable',
            'en-US': 'modalPenetrable',
          },
          tip: 'whether the mask is penetrable. The modal attribute must be false.',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'modalClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '遮罩的自定义类名',
            'en-US': 'modalClass',
          },
          tip: '遮罩的自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'headerClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerClass',
            'en-US': 'headerClass',
          },
          tip: 'custom class names for header wrapper',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'bodyClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'bodyClass',
            'en-US': 'bodyClass',
          },
          tip: 'custom class names for body wrapper',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'footerClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'footerClass',
            'en-US': 'footerClass',
          },
          tip: 'custom class names for footer wrapper',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'appendTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendTo',
            'en-US': 'appendTo',
          },
          tip: 'which element the Dialog appends to. Will override append-to-body',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'body',
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
        name: 'openDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dialog 打开的延时时间',
            'en-US': 'openDelay',
          },
          tip: 'dialog 打开的延时时间，单位毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'closeDelay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'dialog 关闭的延时时间',
            'en-US': 'closeDelay',
          },
          tip: 'dialog 关闭的延时时间，单位毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
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
          tip: '关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'draggable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'draggable',
            'en-US': 'draggable',
          },
          tip: '为 Dialog 启用可拖拽功能',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'overflow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'overflow',
            'en-US': 'overflow',
          },
          tip: 'draggable Dialog can overflow the viewport',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'center',
            'en-US': 'center',
          },
          tip: '是否让 Dialog 的 header 和 footer 部分居中排列',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'alignCenter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'alignCenter',
            'en-US': 'alignCenter',
          },
          tip: 'whether to align the dialog both horizontally and vertically',
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
            'zh-CN': '当关闭 Dialog 时',
            'en-US': 'destroyOnClose',
          },
          tip: '当关闭 Dialog 时，销毁其中的元素',
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
            'zh-CN': '自定义关闭图标',
            'en-US': 'closeIcon',
          },
          tip: '自定义关闭图标，默认 Close',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '和原生的 CSS 的 z-index 相同，改变 z 轴的顺序',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'headerAriaLevel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerAriaLevel',
            'en-US': 'headerAriaLevel',
          },
          tip: "header's aria-level attribute",
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '2',
      },
      {
        name: 'transition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'transition',
            'en-US': 'transition',
          },
          tip: 'custom transition configuration for dialog animation. Can be a string (transition name) or an object with Vue transition props',
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
        defaultValue: 'dialog-fade',
      },
      {
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对话框标题的内容',
            'en-US': 'header',
          },
          tip: '对话框标题的内容；会替换标题部分，但不会移除关闭按钮。',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
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
          description: 'triggers when the Dialog opens',
          template:
            "onOpen(...args, extParams) {\n  // triggers when the Dialog opens\n  console.log('onOpen', ...args)\n}",
        },
        {
          name: 'onOpened',
          description: 'triggers when the Dialog opening animation ends',
          template:
            "onOpened(...args, extParams) {\n  // triggers when the Dialog opening animation ends\n  console.log('onOpened', ...args)\n}",
        },
        {
          name: 'onClose',
          description: 'triggers when the Dialog closes',
          template:
            "onClose(...args, extParams) {\n  // triggers when the Dialog closes\n  console.log('onClose', ...args)\n}",
        },
        {
          name: 'onClosed',
          description: 'triggers when the Dialog closing animation ends',
          template:
            "onClosed(...args, extParams) {\n  // triggers when the Dialog closing animation ends\n  console.log('onClosed', ...args)\n}",
        },
        {
          name: 'onOpenAutoFocus',
          description: 'triggers after Dialog opens and content focused',
          template:
            "onOpenAutoFocus(...args, extParams) {\n  // triggers after Dialog opens and content focused\n  console.log('onOpenAutoFocus', ...args)\n}",
        },
        {
          name: 'onCloseAutoFocus',
          description: 'triggers after Dialog closed and content focused',
          template:
            "onCloseAutoFocus(...args, extParams) {\n  // triggers after Dialog closed and content focused\n  console.log('onCloseAutoFocus', ...args)\n}",
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
      title: '对话框',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDialog',
        props: {},
        children: '对话框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

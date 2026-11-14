import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (drawer); see https://element.eleme.cn/#/zh-CN/component/drawer
const meta = {
  componentName: 'ElDrawer',
  title: '抽屉',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/drawer',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'appendToBody',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendToBody',
            'en-US': 'appendToBody',
          },
          tip: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
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
            'zh-CN': '关闭前的回调',
            'en-US': 'beforeClose',
          },
          tip: '关闭前的回调，会暂停 Drawer 的关闭',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'closeOnPressEscape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnPressEscape',
            'en-US': 'closeOnPressEscape',
          },
          tip: '是否可以通过按下 ESC 关闭 Drawer',
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
            'zh-CN': 'Drawer 的自定义类名',
            'en-US': 'customClass',
          },
          tip: 'Drawer 的自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'destroyOnClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'destroyOnClose',
            'en-US': 'destroyOnClose',
          },
          tip: '控制是否在关闭 Drawer 之后将子元素全部销毁',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
          tip: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Drawer 打开的方向',
            'en-US': 'direction',
          },
          tip: 'Drawer 打开的方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'rtl',
                value: 'rtl',
              },
              {
                title: 'ltr',
                value: 'ltr',
              },
              {
                title: 'ttb',
                value: 'ttb',
              },
              {
                title: 'btt',
                value: 'btt',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'rtl',
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
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Drawer 窗体的大小',
            'en-US': 'size',
          },
          tip: "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
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
        defaultValue: '30%',
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Drawer 的标题',
            'en-US': 'title',
          },
          tip: 'Drawer 的标题，也可通过具名 slot （见下表）传入',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'visible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示 Drawer',
            'en-US': 'visible',
          },
          tip: '是否显示 Drawer，支持 .sync 修饰符',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'wrapperClosable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'wrapperClosable',
            'en-US': 'wrapperClosable',
          },
          tip: '点击遮罩层是否可以关闭 Drawer',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'withHeader',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'withHeader',
            'en-US': 'withHeader',
          },
          tip: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onOpen',
          description: 'Drawer 打开的回调',
          template:
            "onOpen(extParams) {\n  // Drawer 打开的回调\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: 'Drawer 打开动画结束时的回调',
          template:
            "onOpened(extParams) {\n  // Drawer 打开动画结束时的回调\n  console.log('onOpened', extParams)\n}",
        },
        {
          name: 'onClose',
          description: 'Drawer 关闭的回调',
          template:
            "onClose(extParams) {\n  // Drawer 关闭的回调\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: 'Drawer 关闭动画结束时的回调',
          template:
            "onClosed(extParams) {\n  // Drawer 关闭动画结束时的回调\n  console.log('onClosed', extParams)\n}",
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
      title: '抽屉',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElDrawer',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

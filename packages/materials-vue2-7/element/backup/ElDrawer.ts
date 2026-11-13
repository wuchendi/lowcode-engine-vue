import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElDrawer: ComponentMetadata = {
  title: '抽屉',
  group: '基础组件',
  priority: 1004,
  category: 'Element 组件',
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/drawer',
  componentName: 'ElDrawer',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Drawer',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'v-model:visible',
        title: {
          label: '显示抽屉',
          tip: '是否显示 Drawer，支持 .sync 修饰符',
        },
        setter: 'BoolSetter',
      },
      {
        name: 'withHeader',
        title: {
          label: '显示头部',
          tip: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'title',
        title: {
          label: '标题',
          tip: 'Drawer 的标题，也可通过具名 slot 传入',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              title: 'Drawer 标题插槽',
              params: ['slotProps'],
              value: [],
            },
          },
        ],
        defaultValue: '',
      },
      {
        name: 'modal',
        title: {
          label: '遮罩层',
          tip: '是否需要遮罩层',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'modalAppendToBody',
        title: {
          label: '遮罩层插入至 body 元素上',
          tip: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'appendToBody',
        title: {
          label: 'Drawer 插入至 body 元素上',
          tip: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'showClose',
        title: '显示关闭按钮',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'closeOnPressEscape',
        title: '点击 ESC 关闭 Drawer',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'wrapperClosable',
        title: '点击遮罩层关闭 Drawer',
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'destroyOnClose',
        title: {
          label: '关闭后销毁子元素',
          tip: '控制是否在关闭 Drawer 之后将子元素全部销毁',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'direction',
        title: '打开方向',
        setter: {
          componentName: 'SelectSetter',
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
        defaultValue: 'rtl',
      },
      {
        name: 'size',
        title: {
          label: '窗体大小',
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
        defaultValue: '30%',
      },
      {
        name: 'customClass',
        title: {
          label: '自定义类名',
          tip: 'Drawer 的自定义类名',
        },
        setter: 'StringSetter',
        defaultValue: '',
      },
      {
        name: 'beforeClose',
        title: {
          label: '关闭前钩子',
          tip: '关闭前的钩子，会暂停 Drawer 的关闭',
        },
        setter: {
          componentName: 'FunctionSetter',
          props: {
            template:
              'function beforeClose(done, ${extParams}) {\n//done 用于关闭 Drawer \n console.log("关闭抽屉")\n done()\n}\n',
          },
        },
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
      events: [
        {
          name: 'onOpen',
          template:
            'onOpen(${extParams}){\n// Drawer 打开的回调\nconsole.log("onOpen");\n}\n',
        },
        {
          name: 'onOpened',
          template:
            'onOpened(${extParams}){\n// Drawer 打开动画结束时的回调\nconsole.log("onOpened");\n}\n',
        },
        {
          name: 'onClose',
          template:
            'onClose(${extParams}){\n// Drawer 关闭的回调\nconsole.log("onClose");\n}\n',
        },
        {
          name: 'onClosed',
          template:
            'onClosed(${extParams}){\n// Drawer 关闭动画结束时的回调\nconsole.log("onClosed");\n}\n',
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1o0t4u9f2gK0jSZFPXXXsopXa-112-64.png',
      title: '抽屉',
      schema: {
        componentName: 'ElDrawer',
        children: [],
        props: {
          title: '抽屉',
          visible: true,
          direction: 'rtl',
          size: '30%',
          customClass: '',
          appendToBody: true,
          'close-on-click-modal': true,
          closeOnPressEscape: true,
          destroyOnClose: false,
          modal: true,
          modalAppendToBody: true,
          'lock-scroll': true,
          showClose: true,
          wrapperClosable: true,
          withHeader: true,
        },
      },
    },
  ],
}

export default ElDrawer

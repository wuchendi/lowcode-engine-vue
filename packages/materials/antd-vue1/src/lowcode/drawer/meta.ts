import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (drawer); see https://1x.antdv.com/components/drawer-cn/
const meta = {
  componentName: 'ADrawer',
  title: '抽屉',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://1x.antdv.com/components/drawer-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示右上角的关闭按钮',
            'en-US': 'closable',
          },
          tip: '是否显示右上角的关闭按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'destroyOnClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'destroyOnClose',
            'en-US': 'destroyOnClose',
          },
          tip: '关闭时销毁 Drawer 里的子元素',
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
            'zh-CN': 'getContainer',
            'en-US': 'getContainer',
          },
          tip: '指定 Drawer 挂载的 HTML 节点',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
        defaultValue: 'body',
      },
      {
        name: 'maskClosable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击蒙层是否允许关闭',
            'en-US': 'maskClosable',
          },
          tip: '点击蒙层是否允许关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'mask',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示遮罩',
            'en-US': 'mask',
          },
          tip: '是否展示遮罩',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'maskStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '遮罩样式',
            'en-US': 'maskStyle',
          },
          tip: '遮罩样式',
        },
        setter: 'JsonSetter',
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
        name: 'visible',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Drawer 是否可见',
            'en-US': 'visible',
          },
          tip: 'Drawer 是否可见',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'wrapClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对话框外层容器的类名',
            'en-US': 'wrapClassName',
          },
          tip: '对话框外层容器的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'wrapStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'wrapStyle',
            'en-US': 'wrapStyle',
          },
          tip: '可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'drawerStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'drawerStyle',
            'en-US': 'drawerStyle',
          },
          tip: '用于设置 Drawer 弹出层的样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'headerStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerStyle',
            'en-US': 'headerStyle',
          },
          tip: '用于设置 Drawer 头部的样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'bodyStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'bodyStyle',
            'en-US': 'bodyStyle',
          },
          tip: '可用于设置 Drawer 内容部分的样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '宽度',
            'en-US': 'width',
          },
          tip: '宽度',
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
        defaultValue: '256',
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '高度',
            'en-US': 'height',
          },
          tip: '高度, 在 placement 为 top 或 bottom 时使用',
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
        defaultValue: '256',
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '设置 Drawer 的 z-index',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1000,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '抽屉的方向',
            'en-US': 'placement',
          },
          tip: '抽屉的方向',
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
                title: 'right',
                value: 'right',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
              {
                title: 'left',
                value: 'left',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'handle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'handle',
            'en-US': 'handle',
          },
          tip: '设置后抽屉直接挂载到 DOM 上，你可以通过该 handle 控制抽屉打开关闭',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'afterVisibleChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '切换抽屉时动画结束后的回调',
            'en-US': 'afterVisibleChange',
          },
          tip: '切换抽屉时动画结束后的回调',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'keyboard',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持键盘 esc 关闭',
            'en-US': 'keyboard',
          },
          tip: '是否支持键盘 esc 关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
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
        componentName: 'ADrawer',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

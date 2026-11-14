import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (modal); see https://antdv.com/components/modal-cn
const meta = {
  componentName: 'AModal',
  title: '对话框',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://antdv.com/components/modal-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'afterClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Modal 完全关闭后的回调',
            'en-US': 'afterClose',
          },
          tip: 'Modal 完全关闭后的回调',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'bodyStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Modal body 样式',
            'en-US': 'bodyStyle',
          },
          tip: 'Modal body 样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'cancelButtonProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cancelButtonProps',
            'en-US': 'cancelButtonProps',
          },
          tip: 'cancel 按钮 props',
        },
        setter: 'JsonSetter',
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
        name: 'centered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '垂直居中展示 Modal',
            'en-US': 'centered',
          },
          tip: '垂直居中展示 Modal',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
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
        name: 'closeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义关闭图标',
            'en-US': 'closeIcon',
          },
          tip: '自定义关闭图标',
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
        name: 'confirmLoading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确定按钮 loading',
            'en-US': 'confirmLoading',
          },
          tip: '确定按钮 loading',
        },
        setter: 'BoolSetter',
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
          tip: '关闭时销毁 Modal 里的子元素',
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
            'zh-CN': '底部内容',
            'en-US': 'footer',
          },
          tip: '底部内容，当不需要默认底部按钮时，可以设为 :footer="null"',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'forceRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '强制渲染 Modal',
            'en-US': 'forceRender',
          },
          tip: '强制渲染 Modal',
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
          tip: '指定 Modal 挂载的 HTML 节点',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
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
        name: 'okButtonProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ok 按钮 props',
            'en-US': 'okButtonProps',
          },
          tip: 'ok 按钮 props',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'okText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮文字',
            'en-US': 'okText',
          },
          tip: '确认按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'okType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认按钮类型',
            'en-US': 'okType',
          },
          tip: '确认按钮类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'primary',
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
        name: 'v-model:open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对话框是否可见',
            'en-US': 'v-model:open',
          },
          tip: '对话框是否可见',
        },
        setter: 'BoolSetter',
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
        defaultValue: '520',
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
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '设置 Modal 的 z-index',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1000,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onCancel',
          description: '点击遮罩层或右上角叉或取消按钮的回调',
          template:
            "onCancel(extParams) {\n  // 点击遮罩层或右上角叉或取消按钮的回调\n  console.log('onCancel', extParams)\n}",
        },
        {
          name: 'onOk',
          description: '点击确定回调',
          template:
            "onOk(extParams) {\n  // 点击确定回调\n  console.log('onOk', extParams)\n}",
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
        componentName: 'AModal',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

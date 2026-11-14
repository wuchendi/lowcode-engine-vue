import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (drawer); see https://antdv.com/components/drawer-cn
const meta = {
  componentName: 'ADrawer',
  title: '抽屉',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://antdv.com/components/drawer-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'autofocus',
            'en-US': 'autofocus',
          },
          tip: '抽屉展开后是否将焦点切换至其 Dom 节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示左上角的关闭按钮',
            'en-US': 'closable',
          },
          tip: '是否显示左上角的关闭按钮',
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
        name: 'contentWrapperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'contentWrapperStyle',
            'en-US': 'contentWrapperStyle',
          },
          tip: '可用于设置 Drawer 包裹内容部分的样式',
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
          tip: '关闭时销毁 Drawer 里的子元素',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '抽屉右上角的操作区域',
            'en-US': 'extra',
          },
          tip: '抽屉右上角的操作区域',
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
        name: 'footer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '抽屉的页脚',
            'en-US': 'footer',
          },
          tip: '抽屉的页脚',
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
        name: 'footerStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '抽屉页脚部件的样式',
            'en-US': 'footerStyle',
          },
          tip: '抽屉页脚部件的样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'forceRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预渲染 Drawer 内元素',
            'en-US': 'forceRender',
          },
          tip: '预渲染 Drawer 内元素',
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
          tip: '指定 Drawer 挂载的节点，**并在容器内展现** | () => HTMLElement | Selectors',
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
        name: 'headerStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'headerStyle',
            'en-US': 'headerStyle',
          },
          tip: '用于设置 Drawer 头部的样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        defaultValue: '378',
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
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'push',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'push',
            'en-US': 'push',
          },
          tip: '用于设置多层 Drawer 的推动行为',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'rootClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对话框外层容器的类名',
            'en-US': 'rootClassName',
          },
          tip: '对话框外层容器的类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rootStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rootStyle',
            'en-US': 'rootStyle',
          },
          tip: '可用于设置 Drawer 最外层容器的样式，和 style 的区别是作用节点包括 mask',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '预设抽屉宽度',
            'en-US': 'size',
          },
          tip: '预设抽屉宽度（或高度），default 378px 和 large 736px',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
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
            'zh-CN': 'Drawer 是否可见',
            'en-US': 'v-model:open',
          },
          tip: 'Drawer 是否可见',
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
        defaultValue: '378',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onAfterOpenChange',
          description: '切换抽屉时动画结束后的回调',
          template:
            "onAfterOpenChange(...args, extParams) {\n  // 切换抽屉时动画结束后的回调\n  console.log('onAfterOpenChange', ...args)\n}",
        },
        {
          name: 'onClose',
          description: '点击遮罩层或左上角叉或取消按钮的回调',
          template:
            "onClose(...args, extParams) {\n  // 点击遮罩层或左上角叉或取消按钮的回调\n  console.log('onClose', ...args)\n}",
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
        componentName: 'ADrawer',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

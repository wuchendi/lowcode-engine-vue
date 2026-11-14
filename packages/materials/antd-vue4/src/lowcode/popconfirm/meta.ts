import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (popconfirm); see https://antdv.com/components/popconfirm-cn
const meta = {
  componentName: 'APopconfirm',
  title: '气泡确认框',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://antdv.com/components/popconfirm-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'cancelButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '完全自定义取消按钮',
            'en-US': 'cancelButton',
          },
          tip: '完全自定义取消按钮',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'disabled',
            'en-US': 'disabled',
          },
          tip: '点击 Popconfirm 子元素是否弹出气泡确认框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: '自定义弹出气泡 Icon 图标',
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
        name: 'okButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '完全自定义确认按钮',
            'en-US': 'okButton',
          },
          tip: '完全自定义确认按钮',
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
        name: 'showCancel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示取消按钮',
            'en-US': 'showCancel',
          },
          tip: '是否显示取消按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认框的描述',
            'en-US': 'title',
          },
          tip: '确认框的描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '确认内容的详细描述',
            'en-US': 'description',
          },
          tip: '确认内容的详细描述',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'v-model:open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示',
            'en-US': 'v-model:open',
          },
          tip: '是否显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onCancel',
          description: '点击取消的回调',
          template:
            "onCancel(extParams) {\n  // 点击取消的回调\n  console.log('onCancel', extParams)\n}",
        },
        {
          name: 'onConfirm',
          description: '点击确认的回调',
          template:
            "onConfirm(extParams) {\n  // 点击确认的回调\n  console.log('onConfirm', extParams)\n}",
        },
        {
          name: 'onOpenChange',
          description: '显示隐藏的回调',
          template:
            "onOpenChange(extParams) {\n  // 显示隐藏的回调\n  console.log('onOpenChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '气泡确认框',
      screenshot: './screenshots/popconfirm.webp',
      schema: {
        componentName: 'APopconfirm',
        props: {
          title: '标题',
          content: '内容',
        },
        children: [
          {
            componentName: 'AButton',
            props: {},
            children: '气泡确认框',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

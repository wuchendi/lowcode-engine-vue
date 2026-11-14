import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (popover); see https://vant-ui.github.io/vant/v2/#/zh-CN/popover
const meta = {
  componentName: 'VanPopover',
  title: '气泡弹出框',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/popover',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示气泡弹出层',
            'en-US': 'v-model',
          },
          tip: '是否展示气泡弹出层',
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
            'zh-CN': '选项列表',
            'en-US': 'actions',
          },
          tip: '选项列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '弹出位置',
            'en-US': 'placement',
          },
          tip: '弹出位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'theme',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '主题风格',
            'en-US': 'theme',
          },
          tip: '主题风格，可选值为 dark',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'light',
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发方式',
            'en-US': 'trigger',
          },
          tip: '触发方式，可选值为 click',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '出现位置的偏移量',
            'en-US': 'offset',
          },
          tip: '出现位置的偏移量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
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
        defaultValue: true,
      },
      {
        name: 'closeOnClickOutside',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击外部元素后关闭菜单',
            'en-US': 'closeOnClickOutside',
          },
          tip: '是否在点击外部元素后关闭菜单',
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
        defaultValue: 'body',
      },
      {
        name: 'reference',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'reference',
            'en-US': 'reference',
          },
          tip: '触发 Popover 显示的元素内容',
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
          description: '点击选项时触发',
          template:
            "onSelect(extParams) {\n  // 点击选项时触发\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onOpen',
          description: '打开菜单时触发',
          template:
            "onOpen(extParams) {\n  // 打开菜单时触发\n  console.log('onOpen', extParams)\n}",
        },
        {
          name: 'onClose',
          description: '关闭菜单时触发',
          template:
            "onClose(extParams) {\n  // 关闭菜单时触发\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onOpened',
          description: '打开菜单且动画结束后触发',
          template:
            "onOpened(extParams) {\n  // 打开菜单且动画结束后触发\n  console.log('onOpened', extParams)\n}",
        },
        {
          name: 'onClosed',
          description: '关闭菜单且动画结束后触发',
          template:
            "onClosed(extParams) {\n  // 关闭菜单且动画结束后触发\n  console.log('onClosed', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '气泡弹出框',
      screenshot: './screenshots/popover.webp',
      schema: {
        componentName: 'VanPopover',
        props: {
          reference: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'VanButton',
                props: {},
                children: '气泡弹出框',
              },
            ],
          },
          actions: [
            {
              text: '选项一',
            },
            {
              text: '选项二',
            },
          ],
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

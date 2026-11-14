import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (popover); see https://vant-ui.github.io/vant/#/zh-CN/popover
const meta = {
  componentName: 'VanPopover',
  title: '气泡弹出框',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/popover',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示气泡弹出层',
            'en-US': 'v-model:show',
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
        name: 'actionsDirection',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项列表的排列方向',
            'en-US': 'actionsDirection',
          },
          tip: '选项列表的排列方向，可选值为 horizontal',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'vertical',
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
          tip: '触发方式，可选值为 manual',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'click',
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'duration',
          },
          tip: '动画时长，单位秒，设置为 0 可以禁用动画',
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
        defaultValue: '0.3',
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
        name: 'overlayClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义遮罩层类名',
            'en-US': 'overlayClass',
          },
          tip: '自定义遮罩层类名',
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
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示小箭头',
            'en-US': 'showArrow',
          },
          tip: '是否展示小箭头',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        name: 'closeOnClickOverlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击遮罩层后关闭菜单',
            'en-US': 'closeOnClickOverlay',
          },
          tip: '是否在点击遮罩层后关闭菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
        defaultValue: 'body',
      },
      {
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '图标类名前缀，等同于 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
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
      {
        name: 'action',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义选项内容',
            'en-US': 'action',
          },
          tip: '自定义选项内容',
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
        {
          name: 'onClickOverlay',
          description: '点击遮罩层时触发',
          template:
            "onClickOverlay(extParams) {\n  // 点击遮罩层时触发\n  console.log('onClickOverlay', extParams)\n}",
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

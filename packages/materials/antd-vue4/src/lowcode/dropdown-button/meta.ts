import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (dropdown); see https://antdv.com/components/dropdown-cn
const meta = {
  componentName: 'ADropdownButton',
  title: '下拉菜单 DropdownButton',
  group: 'Ant Design 组件',
  category: '导航',
  docUrl: 'https://antdv.com/components/dropdown-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单是否禁用',
            'en-US': 'disabled',
          },
          tip: '菜单是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧的 icon',
            'en-US': 'icon',
          },
          tip: '右侧的 icon',
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
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置按钮载入状态',
            'en-US': 'loading',
          },
          tip: '设置按钮载入状态',
        },
        setter: [
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
        name: 'overlay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单',
            'en-US': 'overlay',
          },
          tip: '菜单',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单弹出位置',
            'en-US': 'placement',
          },
          tip: '菜单弹出位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottomLeft',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮大小',
            'en-US': 'size',
          },
          tip: '按钮大小，和 Button 一致',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发下拉的行为',
            'en-US': 'trigger',
          },
          tip: '触发下拉的行为',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮类型',
            'en-US': 'type',
          },
          tip: '按钮类型，和 Button 一致',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'v-model:open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单是否显示',
            'en-US': 'v-model:open',
          },
          tip: '菜单是否显示',
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
          name: 'onClick',
          description: '点击左侧按钮的回调，和 Button 一致',
          template:
            "onClick(extParams) {\n  // 点击左侧按钮的回调，和 Button 一致\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onOpenChange',
          description:
            '菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发',
          template:
            "onOpenChange(extParams) {\n  // 菜单显示状态改变时调用，参数为 visible。点击菜单按钮导致的消失不会触发\n  console.log('onOpenChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      nestingRule: {
        parentWhitelist: ['ADropdown'],
      },
    },
  },
  snippets: [
    {
      title: '下拉菜单 DropdownButton',
      screenshot: './screenshots/dropdown-button.webp',
      schema: {
        componentName: 'ADropdownButton',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

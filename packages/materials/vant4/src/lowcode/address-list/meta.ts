import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (address-list); see https://vant-ui.github.io/vant/#/zh-CN/address-list
const meta = {
  componentName: 'VanAddressList',
  title: '地址列表',
  group: 'Vant 组件',
  category: '业务组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/address-list',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前选中地址的 id',
            'en-US': 'v-model',
          },
          tip: '当前选中地址的 id，支持多选（类型为 []）',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'list',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '地址列表',
            'en-US': 'list',
          },
          tip: '地址列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'disabledList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可配送地址列表',
            'en-US': 'disabledList',
          },
          tip: '不可配送地址列表',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'disabledText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '不可配送提示文案',
            'en-US': 'disabledText',
          },
          tip: '不可配送提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'switchable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许切换地址',
            'en-US': 'switchable',
          },
          tip: '是否允许切换地址',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showAddButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示底部按钮',
            'en-US': 'showAddButton',
          },
          tip: '是否显示底部按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'addButtonText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '底部按钮文字',
            'en-US': 'addButtonText',
          },
          tip: '底部按钮文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'defaultTagText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '默认地址标签文字',
            'en-US': 'defaultTagText',
          },
          tip: '默认地址标签文字',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'rightIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧图标名称或图片链接',
            'en-US': 'rightIcon',
          },
          tip: '右侧图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'edit',
      },
      {
        name: 'top',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在顶部插入内容',
            'en-US': 'top',
          },
          tip: '在顶部插入内容',
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
        name: 'item-bottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '在列表项底部插入内容',
            'en-US': 'item-bottom',
          },
          tip: '在列表项底部插入内容',
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
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义列表项标签内容',
            'en-US': 'tag',
          },
          tip: '自定义列表项标签内容',
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
          name: 'onAdd',
          description: '点击新增按钮时触发',
          template:
            "onAdd(extParams) {\n  // 点击新增按钮时触发\n  console.log('onAdd', extParams)\n}",
        },
        {
          name: 'onEdit',
          description: '点击编辑按钮时触发',
          template:
            "onEdit(extParams) {\n  // 点击编辑按钮时触发\n  console.log('onEdit', extParams)\n}",
        },
        {
          name: 'onSelect',
          description: '切换选中的地址时触发',
          template:
            "onSelect(extParams) {\n  // 切换选中的地址时触发\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onEditDisabled',
          description: '编辑不可配送的地址时触发',
          template:
            "onEditDisabled(extParams) {\n  // 编辑不可配送的地址时触发\n  console.log('onEditDisabled', extParams)\n}",
        },
        {
          name: 'onSelectDisabled',
          description: '选中不可配送的地址时触发',
          template:
            "onSelectDisabled(extParams) {\n  // 选中不可配送的地址时触发\n  console.log('onSelectDisabled', extParams)\n}",
        },
        {
          name: 'onClickItem',
          description: '点击任意地址时触发',
          template:
            "onClickItem(extParams) {\n  // 点击任意地址时触发\n  console.log('onClickItem', extParams)\n}",
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
      title: '地址列表',
      screenshot: './screenshots/address-list.webp',
      schema: {
        componentName: 'VanAddressList',
        props: {},
        children: '地址列表',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

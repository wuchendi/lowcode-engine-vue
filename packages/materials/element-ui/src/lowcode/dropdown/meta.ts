import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (dropdown); see https://element.eleme.cn/#/zh-CN/component/dropdown
const meta = {
  componentName: 'ElDropdown',
  title: '下拉菜单',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/dropdown',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单按钮类型',
            'en-US': 'type',
          },
          tip: '菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单尺寸',
            'en-US': 'size',
          },
          tip: '菜单尺寸，在split-button为 true 的情况下也对触发按钮生效',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'splitButton',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉触发元素呈现为按钮组',
            'en-US': 'splitButton',
          },
          tip: '下拉触发元素呈现为按钮组',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'top-start',
                value: 'top-start',
              },
              {
                title: 'top-end',
                value: 'top-end',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
              {
                title: 'bottom-start',
                value: 'bottom-start',
              },
              {
                title: 'bottom-end',
                value: 'bottom-end',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'bottom-end',
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
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'hover',
                value: 'hover',
              },
              {
                title: 'click',
                value: 'click',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'hideOnClick',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在点击菜单项后隐藏菜单',
            'en-US': 'hideOnClick',
          },
          tip: '是否在点击菜单项后隐藏菜单',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showTimeout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展开下拉菜单的延时',
            'en-US': 'showTimeout',
          },
          tip: '展开下拉菜单的延时（仅在 trigger 为 hover 时有效）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 250,
      },
      {
        name: 'hideTimeout',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '收起下拉菜单的延时',
            'en-US': 'hideTimeout',
          },
          tip: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 150,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'Dropdown 组件的 tabindex',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'dropdown',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉列表',
            'en-US': 'dropdown',
          },
          tip: '下拉列表，通常是  组件',
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
          name: 'onClick',
          description: 'split-button 为 true 时，点击左侧按钮的回调',
          template:
            "onClick(extParams) {\n  // split-button 为 true 时，点击左侧按钮的回调\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onCommand',
          description: '点击菜单项触发的事件回调',
          template:
            "onCommand(extParams) {\n  // 点击菜单项触发的事件回调\n  console.log('onCommand', extParams)\n}",
        },
        {
          name: 'onVisible-change',
          description: '下拉框出现/隐藏时触发',
          template:
            "onVisibleChange(extParams) {\n  // 下拉框出现/隐藏时触发\n  console.log('onVisibleChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '下拉菜单',
      screenshot: './screenshots/dropdown.webp',
      schema: {
        componentName: 'ElDropdown',
        props: {
          dropdown: {
            type: 'JSSlot',
            value: [],
          },
        },
        children: [
          {
            componentName: 'ElButton',
            props: {},
            children: '下拉菜单',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

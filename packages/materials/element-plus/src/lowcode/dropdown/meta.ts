import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (dropdown); see https://element-plus.org/zh-CN/component/dropdown.html
const meta = {
  componentName: 'ElDropdown',
  title: '下拉菜单',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/dropdown.html',
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
          tip: '菜单按钮类型，同 Button 组件一样，仅在 split-button 为 true 的情况下有效。',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'info',
                value: 'info',
              },
              {
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'text',
                value: 'text',
              },
            ],
          },
        },
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
          tip: '菜单尺寸，在 split-button 为 true 的情况下也对触发按钮生效。',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'buttonProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '按钮组件的 props',
            'en-US': 'buttonProps',
          },
          tip: '按钮组件的 props，参考 按钮属性',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'maxHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '菜单最大高度',
            'en-US': 'maxHeight',
          },
          tip: '菜单最大高度',
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
        defaultValue: 'bottom',
      },
      {
        name: 'effect',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tooltip 主题',
            'en-US': 'effect',
          },
          tip: 'Tooltip 主题，内置了 dark / light 两种主题',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'light',
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
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'click',
                  value: 'click',
                },
                {
                  title: 'hover',
                  value: 'hover',
                },
                {
                  title: 'contextmenu',
                  value: 'contextmenu',
                },
              ],
            },
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'triggerKeys',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'triggerKeys',
            'en-US': 'triggerKeys',
          },
          tip: 'specify which keys on the keyboard can trigger when pressed',
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
        name: 'virtualTriggering',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtualTriggering',
            'en-US': 'virtualTriggering',
          },
          tip: 'indicates whether virtual triggering is enabled',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'virtualRef',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'virtualRef',
            'en-US': 'virtualRef',
          },
          tip: 'indicates the reference element to which the dropdown is attached',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'showArrow',
            'en-US': 'showArrow',
          },
          tip: 'whether the tooltip content has an arrow',
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
          tip: '展开下拉菜单的延时，仅在 trigger 为 hover 时有效',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 150,
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
        name: 'role',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉菜单的 ARIA 属性',
            'en-US': 'role',
          },
          tip: '下拉菜单的 ARIA 属性。根据具体场景，您可能想要将此更改为“navigation”',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'dialog',
                value: 'dialog',
              },
              {
                title: 'grid',
                value: 'grid',
              },
              {
                title: 'group',
                value: 'group',
              },
              {
                title: 'listbox',
                value: 'listbox',
              },
              {
                title: 'menu',
                value: 'menu',
              },
              {
                title: 'navigation',
                value: 'navigation',
              },
              {
                title: 'tooltip',
                value: 'tooltip',
              },
              {
                title: 'tree',
                value: 'tree',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'menu',
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
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: '0',
      },
      {
        name: 'popperClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义浮层类名',
            'en-US': 'popperClass',
          },
          tip: '自定义浮层类名',
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
        name: 'popperStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popperStyle',
            'en-US': 'popperStyle',
          },
          tip: "custom style for Dropdown's dropdown",
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
        name: 'popperOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'popper.js 参数',
            'en-US': 'popperOptions',
          },
          tip: 'popper.js 参数',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'teleported',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'teleported',
            'en-US': 'teleported',
          },
          tip: 'whether the dropdown popup is teleported to the body',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'appendTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'appendTo',
            'en-US': 'appendTo',
          },
          tip: 'which element the dropdown CONTENT appends to',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'persistent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'persistent',
            'en-US': 'persistent',
          },
          tip: 'when dropdown inactive and persistent is false , dropdown menu will be destroyed',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'dropdown',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉列表',
            'en-US': 'dropdown',
          },
          tip: '下拉列表，通常是 &lt;el-dropdown-menu&gt; 组件',
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
            "onClick(...args, extParams) {\n  // split-button 为 true 时，点击左侧按钮的回调\n  console.log('onClick', ...args)\n}",
        },
        {
          name: 'onCommand',
          description: '当下拉项被点击时触发，参数是从下拉菜单中发送的命令',
          template:
            "onCommand(...args, extParams) {\n  // 当下拉项被点击时触发，参数是从下拉菜单中发送的命令\n  console.log('onCommand', ...args)\n}",
        },
        {
          name: 'onVisibleChange',
          description:
            '当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 true, 否则将是 false',
          template:
            "onVisibleChange(...args, extParams) {\n  // 当下拉菜单出现/消失时触发器, 当它出现时, 参数将是 true, 否则将是 false\n  console.log('onVisibleChange', ...args)\n}",
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
      title: '下拉菜单',
      screenshot: './screenshots/dropdown.webp',
      schema: {
        componentName: 'ElDropdown',
        props: {
          dropdown: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'ElDropdownMenu',
                props: {},
                children: [
                  {
                    componentName: 'ElDropdownItem',
                    props: {},
                    children: '菜单一',
                  },
                  {
                    componentName: 'ElDropdownItem',
                    props: {},
                    children: '菜单二',
                  },
                ],
              },
            ],
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

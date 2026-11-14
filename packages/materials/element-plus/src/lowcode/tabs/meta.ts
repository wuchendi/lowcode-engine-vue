import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tabs); see https://element-plus.org/zh-CN/component/tabs.html
const meta = {
  componentName: 'ElTabs',
  title: '标签页',
  group: 'Element 组件',
  category: '导航组件',
  docUrl: 'https://element-plus.org/zh-CN/component/tabs.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name',
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
        name: 'defaultValue',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'defaultValue',
            'en-US': 'defaultValue',
          },
          tip: 'The value of the tab that should be active when initially rendered. (avoid initial transition)',
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
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '风格类型',
            'en-US': 'type',
          },
          tip: '风格类型',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'card',
                value: 'card',
              },
              {
                title: 'border-card',
                value: 'border-card',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'closable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签是否可关闭',
            'en-US': 'closable',
          },
          tip: '标签是否可关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'addable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签是否可增加',
            'en-US': 'addable',
          },
          tip: '标签是否可增加',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'editable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签是否同时可增加和关闭',
            'en-US': 'editable',
          },
          tip: '标签是否同时可增加和关闭',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'tabPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选项卡所在位置',
            'en-US': 'tabPosition',
          },
          tip: '选项卡所在位置',
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
        defaultValue: 'top',
      },
      {
        name: 'stretch',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签的宽度是否自撑开',
            'en-US': 'stretch',
          },
          tip: '标签的宽度是否自撑开',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'beforeLeave',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '切换标签之前的钩子函数',
            'en-US': 'beforeLeave',
          },
          tip: '切换标签之前的钩子函数，若返回 false  或者返回被 reject 的 Promise，则阻止切换。',
        },
        setter: 'FunctionSetter',
        supportVariable: true,
      },
      {
        name: 'tabindex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabindex',
            'en-US': 'tabindex',
          },
          tip: 'tabs tabindex',
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
        name: 'add-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'add-icon',
            'en-US': 'add-icon',
          },
          tip: 'customize add button icon',
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
          name: 'onTabClick',
          description: 'tab 被选中时触发',
          template:
            "onTabClick(extParams) {\n  // tab 被选中时触发\n  console.log('onTabClick', extParams)\n}",
        },
        {
          name: 'onTabChange',
          description: 'activeName 改变时触发',
          template:
            "onTabChange(extParams) {\n  // activeName 改变时触发\n  console.log('onTabChange', extParams)\n}",
        },
        {
          name: 'onTabRemove',
          description: '点击 tab 移除按钮时触发',
          template:
            "onTabRemove(extParams) {\n  // 点击 tab 移除按钮时触发\n  console.log('onTabRemove', extParams)\n}",
        },
        {
          name: 'onTabAdd',
          description: '点击 tab 新增按钮时触发',
          template:
            "onTabAdd(extParams) {\n  // 点击 tab 新增按钮时触发\n  console.log('onTabAdd', extParams)\n}",
        },
        {
          name: 'onEdit',
          description: '点击 tab 的新增或移除按钮后触发',
          template:
            "onEdit(extParams) {\n  // 点击 tab 的新增或移除按钮后触发\n  console.log('onEdit', extParams)\n}",
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
      title: '标签页',
      screenshot: './screenshots/tabs.webp',
      schema: {
        componentName: 'ElTabs',
        children: [
          {
            componentName: 'ElTabPane',
            props: {
              label: '标签一',
              name: 'first',
            },
            children: '内容一',
          },
          {
            componentName: 'ElTabPane',
            props: {
              label: '标签二',
              name: 'second',
            },
            children: '内容二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

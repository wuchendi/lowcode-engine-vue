import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tabs); see https://1x.antdv.com/components/tabs-cn/
const meta = {
  componentName: 'ATabs',
  title: '标签页',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/tabs-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model',
            'en-US': 'v-model',
          },
          tip: '当前激活 tab 面板的 key',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'animated',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用动画切换 Tabs',
            'en-US': 'animated',
          },
          tip: '是否使用动画切换 Tabs，在 tabPosition=top|bottom 时有效',
        },
        setter: [
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
        name: 'defaultActiveKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始化选中面板的 key',
            'en-US': 'defaultActiveKey',
          },
          tip: '初始化选中面板的 key，如果没有设置 activeKey',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'hideAdd',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否隐藏加号图标',
            'en-US': 'hideAdd',
          },
          tip: '是否隐藏加号图标，在 type="editable-card" 时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '大小',
            'en-US': 'size',
          },
          tip: '大小，提供 large default 和 small 三种大小',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'tabBarExtraContent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tab bar 上额外的元素',
            'en-US': 'tabBarExtraContent',
          },
          tip: 'tab bar 上额外的元素',
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
        name: 'tabBarStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tab bar 的样式对象',
            'en-US': 'tabBarStyle',
          },
          tip: 'tab bar 的样式对象',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'tabPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '页签位置',
            'en-US': 'tabPosition',
          },
          tip: '页签位置，可选值有 top right bottom left',
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
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '页签的基本样式',
            'en-US': 'type',
          },
          tip: '页签的基本样式，可选 line、card editable-card 类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'line',
      },
      {
        name: 'tabBarGutter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tabs 之间的间隙',
            'en-US': 'tabBarGutter',
          },
          tip: 'tabs 之间的间隙',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '切换面板的回调',
          template:
            "onChange(extParams) {\n  // 切换面板的回调\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onEdit',
          description: '新增和删除页签的回调，在 type="editable-card" 时有效',
          template:
            'onEdit(extParams) {\n  // 新增和删除页签的回调，在 type="editable-card" 时有效\n  console.log(\'onEdit\', extParams)\n}',
        },
        {
          name: 'onNextClick',
          description: 'next 按钮被点击的回调',
          template:
            "onNextClick(extParams) {\n  // next 按钮被点击的回调\n  console.log('onNextClick', extParams)\n}",
        },
        {
          name: 'onPrevClick',
          description: 'prev 按钮被点击的回调',
          template:
            "onPrevClick(extParams) {\n  // prev 按钮被点击的回调\n  console.log('onPrevClick', extParams)\n}",
        },
        {
          name: 'onTabClick',
          description: 'tab 被点击的回调',
          template:
            "onTabClick(extParams) {\n  // tab 被点击的回调\n  console.log('onTabClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '标签页',
      screenshot: './screenshots/tabs.webp',
      schema: {
        componentName: 'ATabs',
        children: [
          {
            componentName: 'ATabsTabPane',
            props: {
              tab: '标签一',
              key: '1',
            },
            children: '内容一',
          },
          {
            componentName: 'ATabsTabPane',
            props: {
              tab: '标签二',
              key: '2',
            },
            children: '内容二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

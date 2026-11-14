import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tabs); see https://antdv.com/components/tabs-cn
const meta = {
  componentName: 'ATabs',
  title: '标签页',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/tabs-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:activeKey',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'v-model:activeKey',
            'en-US': 'v-model:activeKey',
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
          tip: '是否使用动画切换 Tabs，在 tabPosition="top" | "bottom" 时有效',
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
        name: 'centered',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签居中展示',
            'en-US': 'centered',
          },
          tip: '标签居中展示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'destroyInactiveTabPane',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'destroyInactiveTabPane',
            'en-US': 'destroyInactiveTabPane',
          },
          tip: '被隐藏时是否销毁 DOM 结构',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
          tip: '大小，提供 large middle 和 small 三种大小',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'middle',
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
        setter: 'StringSetter',
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
        name: 'addIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义添加按钮',
            'en-US': 'addIcon',
          },
          tip: '自定义添加按钮',
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
        name: 'leftExtra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'leftExtra',
            'en-US': 'leftExtra',
          },
          tip: 'tab bar 上左侧额外的元素',
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
        name: 'moreIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义折叠 icon',
            'en-US': 'moreIcon',
          },
          tip: '自定义折叠 icon',
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
        name: 'renderTabBar',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '替换 TabBar',
            'en-US': 'renderTabBar',
          },
          tip: '替换 TabBar，用于二次封装标签头',
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
        name: 'rightExtra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'rightExtra',
            'en-US': 'rightExtra',
          },
          tip: 'tab bar 上右侧额外的元素',
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
          name: 'onTabClick',
          description: 'tab 被点击的回调',
          template:
            "onTabClick(extParams) {\n  // tab 被点击的回调\n  console.log('onTabClick', extParams)\n}",
        },
        {
          name: 'onTabScroll',
          description: '滚动 TabBar 时触发',
          template:
            "onTabScroll(extParams) {\n  // 滚动 TabBar 时触发\n  console.log('onTabScroll', extParams)\n}",
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
            componentName: 'ATabPane',
            props: {
              tab: '标签一',
              key: '1',
            },
            children: '内容一',
          },
          {
            componentName: 'ATabPane',
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

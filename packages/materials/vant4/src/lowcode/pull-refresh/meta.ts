import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (pull-refresh); see https://vant-ui.github.io/vant/#/zh-CN/pull-refresh
const meta = {
  componentName: 'VanPullRefresh',
  title: '下拉刷新',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/pull-refresh',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否处于加载中状态',
            'en-US': 'v-model',
          },
          tip: '是否处于加载中状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'pullingText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉过程提示文案',
            'en-US': 'pullingText',
          },
          tip: '下拉过程提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'loosingText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '释放过程提示文案',
            'en-US': 'loosingText',
          },
          tip: '释放过程提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'loadingText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载过程提示文案',
            'en-US': 'loadingText',
          },
          tip: '加载过程提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'successText',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '刷新成功提示文案',
            'en-US': 'successText',
          },
          tip: '刷新成功提示文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'successDuration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '刷新成功提示展示时长',
            'en-US': 'successDuration',
          },
          tip: '刷新成功提示展示时长(ms)',
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
        defaultValue: '500',
      },
      {
        name: 'animationDuration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'animationDuration',
          },
          tip: '动画时长',
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
        defaultValue: '300',
      },
      {
        name: 'headHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '顶部内容高度',
            'en-US': 'headHeight',
          },
          tip: '顶部内容高度',
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
        defaultValue: '50',
      },
      {
        name: 'pullDistance',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发下拉刷新的距离',
            'en-US': 'pullDistance',
          },
          tip: '触发下拉刷新的距离',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用下拉刷新',
            'en-US': 'disabled',
          },
          tip: '是否禁用下拉刷新',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'normal',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '非下拉状态时顶部内容',
            'en-US': 'normal',
          },
          tip: '非下拉状态时顶部内容',
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
        name: 'pulling',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '下拉过程中顶部内容',
            'en-US': 'pulling',
          },
          tip: '下拉过程中顶部内容',
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
        name: 'loosing',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '释放过程中顶部内容',
            'en-US': 'loosing',
          },
          tip: '释放过程中顶部内容',
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
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载过程中顶部内容',
            'en-US': 'loading',
          },
          tip: '加载过程中顶部内容',
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
        name: 'success',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '刷新成功提示内容',
            'en-US': 'success',
          },
          tip: '刷新成功提示内容',
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
          name: 'onRefresh',
          description: '下拉刷新时触发',
          template:
            "onRefresh(extParams) {\n  // 下拉刷新时触发\n  console.log('onRefresh', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '拖动时或状态改变时触发',
          template:
            "onChange(extParams) {\n  // 拖动时或状态改变时触发\n  console.log('onChange', extParams)\n}",
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
      title: '下拉刷新',
      screenshot: './screenshots/pull-refresh.webp',
      schema: {
        componentName: 'VanPullRefresh',
        props: {},
        children: '下拉刷新',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

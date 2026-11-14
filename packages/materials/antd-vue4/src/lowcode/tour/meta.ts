import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (tour); see https://antdv.com/components/tour-cn
const meta = {
  componentName: 'ATour',
  title: '漫游式引导',
  group: 'Ant Design 组件',
  category: '数据展示',
  docUrl: 'https://antdv.com/components/tour-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'arrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示箭头',
            'en-US': 'arrow',
          },
          tip: '是否显示箭头，包含是否指向元素中心的配置',
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
        defaultValue: true,
      },
      {
        name: 'placement',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '引导卡片相对于目标元素的位置',
            'en-US': 'placement',
          },
          tip: '引导卡片相对于目标元素的位置',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'mask',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用蒙层',
            'en-US': 'mask',
          },
          tip: '是否启用蒙层，也可传入配置改变蒙层样式和填充色',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'true',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型，影响底色与文字颜色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'open',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '打开引导',
            'en-US': 'open',
          },
          tip: '打开引导',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'v-model:current',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前处于哪一步',
            'en-US': 'v-model:current',
          },
          tip: '当前处于哪一步',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'scrollIntoViewOptions',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否支持当前元素滚动到视窗内',
            'en-US': 'scrollIntoViewOptions',
          },
          tip: '是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'indicatorsRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义指示器',
            'en-US': 'indicatorsRender',
          },
          tip: '自定义指示器',
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
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Tour 的层级',
            'en-US': 'zIndex',
          },
          tip: 'Tour 的层级',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 1001,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClose',
          description: '关闭引导时的回调函数',
          template:
            "onClose(extParams) {\n  // 关闭引导时的回调函数\n  console.log('onClose', extParams)\n}",
        },
        {
          name: 'onFinish',
          description: '引导完成时的回调',
          template:
            "onFinish(extParams) {\n  // 引导完成时的回调\n  console.log('onFinish', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '步骤改变时的回调，current 为当前前的步骤',
          template:
            "onChange(extParams) {\n  // 步骤改变时的回调，current 为当前前的步骤\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isModal: true,
    },
  },
  snippets: [
    {
      title: '漫游式引导',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ATour',
        props: {
          steps: [],
          open: false,
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tour); see https://element-plus.org/zh-CN/component/tour.html
const meta = {
  componentName: 'ElTour',
  title: '漫游式引导',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/tour.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'appendTo',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '挂载到哪个 DOM 元素',
            'en-US': 'appendTo',
          },
          tip: '挂载到哪个 DOM 元素',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'body',
      },
      {
        name: 'showArrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示箭头',
            'en-US': 'showArrow',
          },
          tip: '是否显示箭头',
        },
        setter: 'BoolSetter',
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
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'left-start',
                value: 'left-start',
              },
              {
                title: 'left-end',
                value: 'left-end',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'right-start',
                value: 'right-start',
              },
              {
                title: 'right-end',
                value: 'right-end',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'bottom',
      },
      {
        name: 'contentStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '为content自定义样式',
            'en-US': 'contentStyle',
          },
          tip: '为content自定义样式',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'mask',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否启用遮罩',
            'en-US': 'mask',
          },
          tip: '是否启用遮罩，通过自定义属性改变遮罩样式以及填充的颜色',
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
        name: 'gap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '遮罩和目标之间的透明的间距',
            'en-US': 'gap',
          },
          tip: '遮罩和目标之间的透明的间距',
        },
        setter: 'JsonSetter',
        supportVariable: true,
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
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '打开引导',
            'en-US': 'v-model',
          },
          tip: '打开引导',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'v-model:current',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前值',
            'en-US': 'v-model:current',
          },
          tip: '当前值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
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
        defaultValue: 2001,
      },
      {
        name: 'showClose',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示关闭按钮',
            'en-US': 'showClose',
          },
          tip: '是否显示关闭按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'closeIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义关闭图标',
            'en-US': 'closeIcon',
          },
          tip: '自定义关闭图标，默认Close',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'closeOnPressEscape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'closeOnPressEscape',
            'en-US': 'closeOnPressEscape',
          },
          tip: '是否可以通过按下 ESC 关闭引导',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'targetAreaClickable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '启用蒙层时',
            'en-US': 'targetAreaClickable',
          },
          tip: '启用蒙层时，target 元素区域是否可以点击。',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'indicators',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义指示器',
            'en-US': 'indicators',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClose',
          description: '关闭引导时的回调函数',
          template:
            "onClose(...args, extParams) {\n  // 关闭引导时的回调函数\n  console.log('onClose', ...args)\n}",
        },
        {
          name: 'onFinish',
          description: '引导完成时的回调',
          template:
            "onFinish(...args, extParams) {\n  // 引导完成时的回调\n  console.log('onFinish', ...args)\n}",
        },
        {
          name: 'onChange',
          description: '步骤改变时的回调',
          template:
            "onChange(...args, extParams) {\n  // 步骤改变时的回调\n  console.log('onChange', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
      isModal: true,
    },
  },
  snippets: [
    {
      title: '漫游式引导',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElTour',
        props: {
          steps: [],
          open: false,
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

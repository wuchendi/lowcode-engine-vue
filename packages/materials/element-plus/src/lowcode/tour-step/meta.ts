import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (tour); see https://element-plus.org/zh-CN/component/tour.html
const meta = {
  componentName: 'ElTourStep',
  title: '漫游式引导 TourStep',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/tour.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '获取引导卡片指向的元素',
            'en-US': 'target',
          },
          tip: '获取引导卡片指向的元素，为空时居中于屏幕。自2.5.2以来支持字符串和函数类型。字符串类型是文档.querySelector的选择器。',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
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
      },
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'title',
            'en-US': 'title',
          },
          tip: 'title',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'description',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'description',
            'en-US': 'description',
          },
          tip: 'description',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
        name: 'nextButtonProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '“下一步”按钮的属性',
            'en-US': 'nextButtonProps',
          },
          tip: '“下一步”按钮的属性',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'prevButtonProps',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '“上一步”按钮的属性',
            'en-US': 'prevButtonProps',
          },
          tip: '“上一步”按钮的属性',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
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
          tip: '是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 scrollIntoViewOptions 属性',
        },
        setter: 'BoolSetter',
        supportVariable: true,
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
        name: 'header',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义 header 内容',
            'en-US': 'header',
          },
          tip: '自定义 header 内容',
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
            "onClose(extParams) {\n  // 关闭引导时的回调函数\n  console.log('onClose', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['ElTour'],
      },
    },
  },
  snippets: [
    {
      title: '漫游式引导 TourStep',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'ElTourStep',
        props: {},
        children: '漫游式引导',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

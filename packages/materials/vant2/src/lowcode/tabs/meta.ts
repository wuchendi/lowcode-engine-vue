import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (tab); see https://vant-ui.github.io/vant/v2/#/zh-CN/tab
const meta = {
  componentName: 'VanTabs',
  title: '标签页',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/tab',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定当前选中标签的标识符',
            'en-US': 'v-model',
          },
          tip: '绑定当前选中标签的标识符',
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
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '样式风格类型',
            'en-US': 'type',
          },
          tip: '样式风格类型，可选值为 card',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'line',
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签主题色',
            'en-US': 'color',
          },
          tip: '标签主题色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ee0a24',
      },
      {
        name: 'background',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标签栏背景色',
            'en-US': 'background',
          },
          tip: '标签栏背景色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'white',
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时间',
            'en-US': 'duration',
          },
          tip: '动画时间，单位秒',
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
        defaultValue: '0.3',
      },
      {
        name: 'lineWidth',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '底部条宽度',
            'en-US': 'lineWidth',
          },
          tip: '底部条宽度，默认单位 px',
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
        defaultValue: '40px',
      },
      {
        name: 'lineHeight',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '底部条高度',
            'en-US': 'lineHeight',
          },
          tip: '底部条高度，默认单位 px',
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
        defaultValue: '3px',
      },
      {
        name: 'animated',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'animated',
            'en-US': 'animated',
          },
          tip: '是否开启切换标签内容时的转场动画',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示标签栏外边框',
            'en-US': 'border',
          },
          tip: '是否显示标签栏外边框，仅在 type="line" 时有效',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'ellipsis',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否省略过长的标题文字',
            'en-US': 'ellipsis',
          },
          tip: '是否省略过长的标题文字',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'sticky',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使用粘性定位布局',
            'en-US': 'sticky',
          },
          tip: '是否使用粘性定位布局',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'swipeable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启手势滑动切换',
            'en-US': 'swipeable',
          },
          tip: '是否开启手势滑动切换',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'lazyRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启延迟渲染',
            'en-US': 'lazyRender',
          },
          tip: '是否开启延迟渲染（首次切换到标签时才触发内容渲染）',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'scrollspy',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启滚动导航',
            'en-US': 'scrollspy',
          },
          tip: '是否开启滚动导航',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'offsetTop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offsetTop',
            'en-US': 'offsetTop',
          },
          tip: '粘性定位布局下与顶部的最小距离，支持 px vw vh rem 单位，默认 px',
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
        name: 'swipeThreshold',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滚动阈值',
            'en-US': 'swipeThreshold',
          },
          tip: '滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动',
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
        defaultValue: '5',
      },
      {
        name: 'titleActiveColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题选中态颜色',
            'en-US': 'titleActiveColor',
          },
          tip: '标题选中态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'titleInactiveColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题默认态颜色',
            'en-US': 'titleInactiveColor',
          },
          tip: '标题默认态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
      },
      {
        name: 'beforeChange',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '切换标签前的回调函数',
            'en-US': 'beforeChange',
          },
          tip: '切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise',
        },
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'FunctionSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'nav-left',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题左侧内容',
            'en-US': 'nav-left',
          },
          tip: '标题左侧内容',
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
        name: 'nav-right',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题右侧内容',
            'en-US': 'nav-right',
          },
          tip: '标题右侧内容',
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
          description: '点击标签时触发',
          template:
            "onClick(extParams) {\n  // 点击标签时触发\n  console.log('onClick', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '当前激活的标签改变时触发',
          template:
            "onChange(extParams) {\n  // 当前激活的标签改变时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onDisabled',
          description: '点击被禁用的标签时触发',
          template:
            "onDisabled(extParams) {\n  // 点击被禁用的标签时触发\n  console.log('onDisabled', extParams)\n}",
        },
        {
          name: 'onRendered',
          description: '标签内容首次渲染时触发（仅在开启延迟渲染后触发）',
          template:
            "onRendered(extParams) {\n  // 标签内容首次渲染时触发（仅在开启延迟渲染后触发）\n  console.log('onRendered', extParams)\n}",
        },
        {
          name: 'onScroll',
          description: '滚动时触发，仅在 sticky 模式下生效',
          template:
            "onScroll(extParams) {\n  // 滚动时触发，仅在 sticky 模式下生效\n  console.log('onScroll', extParams)\n}",
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
        componentName: 'VanTabs',
        children: [
          {
            componentName: 'VanTab',
            props: {
              title: '标签一',
            },
            children: [
              {
                componentName: 'div',
                props: {},
                children: '内容一',
              },
            ],
          },
          {
            componentName: 'VanTab',
            props: {
              title: '标签二',
            },
            children: [
              {
                componentName: 'div',
                props: {},
                children: '内容二',
              },
            ],
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

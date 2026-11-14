import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (back-top); see https://vant-ui.github.io/vant/#/zh-CN/back-top
const meta = {
  componentName: 'VanBackTop',
  title: '回到顶部',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/back-top',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '触发滚动的目标对象',
            'en-US': 'target',
          },
          tip: '触发滚动的目标对象，支持传入选择器或 DOM 元素，默认最近的父级滚动容器',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'right',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '距离页面右侧的距离',
            'en-US': 'right',
          },
          tip: '距离页面右侧的距离，默认单位为 px',
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
        defaultValue: '30',
      },
      {
        name: 'bottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '距离页面底部的距离',
            'en-US': 'bottom',
          },
          tip: '距离页面底部的距离，默认单位为 px',
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
        defaultValue: '40',
      },
      {
        name: 'offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'offset',
            'en-US': 'offset',
          },
          tip: '滚动高度达到此参数值时才显示组件',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 200,
      },
      {
        name: 'teleport',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定挂载的节点',
            'en-US': 'teleport',
          },
          tip: '指定挂载的节点，等同于 Teleport 组件的 to 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'body',
      },
      {
        name: 'immediate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否瞬间滚动到顶部',
            'en-US': 'immediate',
          },
          tip: '是否瞬间滚动到顶部',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'zIndex',
            'en-US': 'zIndex',
          },
          tip: '设置组件的 z-index 层级',
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
        defaultValue: '100',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击组件时触发',
          template:
            "onClick(extParams) {\n  // 点击组件时触发\n  console.log('onClick', extParams)\n}",
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
      title: '回到顶部',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanBackTop',
        props: {},
        children: '回到顶部',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

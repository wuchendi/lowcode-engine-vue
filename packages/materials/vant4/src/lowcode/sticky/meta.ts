import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (sticky); see https://vant-ui.github.io/vant/#/zh-CN/sticky
const meta = {
  componentName: 'VanSticky',
  title: '粘性布局',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/sticky',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'position',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '吸附位置',
            'en-US': 'position',
          },
          tip: '吸附位置，可选值为 bottom',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'offsetTop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '吸顶时与顶部的距离',
            'en-US': 'offsetTop',
          },
          tip: '吸顶时与顶部的距离，支持 px vw vh rem 单位，默认 px',
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
        name: 'offsetBottom',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '吸底时与底部的距离',
            'en-US': 'offsetBottom',
          },
          tip: '吸底时与底部的距离，支持 px vw vh rem 单位，默认 px',
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
        name: 'zIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '吸顶时的 z-index',
            'en-US': 'zIndex',
          },
          tip: '吸顶时的 z-index',
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
        defaultValue: '99',
      },
      {
        name: 'container',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '容器对应的 HTML 节点',
            'en-US': 'container',
          },
          tip: '容器对应的 HTML 节点',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '当吸顶状态改变时触发',
          template:
            "onChange(extParams) {\n  // 当吸顶状态改变时触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onScroll',
          description: '滚动时触发',
          template:
            "onScroll(extParams) {\n  // 滚动时触发\n  console.log('onScroll', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '粘性布局',
      screenshot: './screenshots/sticky.webp',
      schema: {
        componentName: 'VanSticky',
        children: [
          {
            componentName: 'VanButton',
            props: {},
            children: '粘性布局',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

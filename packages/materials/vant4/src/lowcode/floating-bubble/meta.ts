import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (floating-bubble); see https://vant-ui.github.io/vant/#/zh-CN/floating-bubble
const meta = {
  componentName: 'VanFloatingBubble',
  title: '浮动气泡',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/floating-bubble',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model:offset',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '控制气泡位置',
            'en-US': 'v-model:offset',
          },
          tip: '控制气泡位置',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'axis',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '拖拽的方向',
            'en-US': 'axis',
          },
          tip: '拖拽的方向，xy 代表自由拖拽，lock 代表禁止拖拽',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'x',
                value: 'x',
              },
              {
                title: 'y',
                value: 'y',
              },
              {
                title: 'xy',
                value: 'xy',
              },
              {
                title: 'lock',
                value: 'lock',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'y',
      },
      {
        name: 'magnetic',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动磁吸的方向',
            'en-US': 'magnetic',
          },
          tip: '自动磁吸的方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'x',
                value: 'x',
              },
              {
                title: 'y',
                value: 'y',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '气泡图标名称或图片链接',
            'en-US': 'icon',
          },
          tip: '气泡图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: 'CIconSetter',
        supportVariable: true,
      },
      {
        name: 'gap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '气泡与窗口的最小间距',
            'en-US': 'gap',
          },
          tip: '气泡与窗口的最小间距，单位为 px',
        },
        setter: [
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 24,
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
        {
          name: 'onOffsetChange',
          description: '由用户拖拽导致位置改变后触发',
          template:
            "onOffsetChange(extParams) {\n  // 由用户拖拽导致位置改变后触发\n  console.log('onOffsetChange', extParams)\n}",
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
      title: '浮动气泡',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanFloatingBubble',
        props: {},
        children: '浮动气泡',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

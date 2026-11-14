import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (overlay); see https://vant-ui.github.io/vant/#/zh-CN/overlay
const meta = {
  componentName: 'VanOverlay',
  title: '遮罩层',
  group: 'Vant 组件',
  category: '反馈组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/overlay',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'show',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否展示遮罩层',
            'en-US': 'show',
          },
          tip: '是否展示遮罩层',
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
            'zh-CN': 'z-index 层级',
            'en-US': 'zIndex',
          },
          tip: 'z-index 层级',
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
        defaultValue: '1',
      },
      {
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'duration',
          },
          tip: '动画时长，单位秒，设置为 0 可以禁用动画',
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
        name: 'className',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义类名',
            'en-US': 'className',
          },
          tip: '自定义类名',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'customStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义样式',
            'en-US': 'customStyle',
          },
          tip: '自定义样式',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'lockScroll',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否锁定背景滚动',
            'en-US': 'lockScroll',
          },
          tip: '是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'lazyRender',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在显示时才渲染节点',
            'en-US': 'lazyRender',
          },
          tip: '是否在显示时才渲染节点',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击时触发',
          template:
            "onClick(extParams) {\n  // 点击时触发\n  console.log('onClick', extParams)\n}",
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
      title: '遮罩层',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanOverlay',
        props: {},
        children: '遮罩层',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

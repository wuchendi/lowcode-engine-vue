import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (swipe); see https://vant-ui.github.io/vant/#/zh-CN/swipe
const meta = {
  componentName: 'VanSwipe',
  title: '轮播',
  group: 'Vant 组件',
  category: '展示组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/swipe',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'autoplay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动轮播间隔',
            'en-US': 'autoplay',
          },
          tip: '自动轮播间隔，单位为 ms',
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
        name: 'duration',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '动画时长',
            'en-US': 'duration',
          },
          tip: '动画时长，单位为 ms',
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
        name: 'initialSwipe',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始位置索引值',
            'en-US': 'initialSwipe',
          },
          tip: '初始位置索引值',
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
        name: 'width',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滑块宽度',
            'en-US': 'width',
          },
          tip: '滑块宽度，单位为 px',
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
        defaultValue: 'auto',
      },
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '滑块高度',
            'en-US': 'height',
          },
          tip: '滑块高度，单位为 px',
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
        defaultValue: 'auto',
      },
      {
        name: 'loop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启循环播放',
            'en-US': 'loop',
          },
          tip: '是否开启循环播放',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'showIndicators',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示指示器',
            'en-US': 'showIndicators',
          },
          tip: '是否显示指示器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为纵向滚动',
            'en-US': 'vertical',
          },
          tip: '是否为纵向滚动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'touchable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以通过手势滑动',
            'en-US': 'touchable',
          },
          tip: '是否可以通过手势滑动',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'stopPropagation',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否阻止滑动事件冒泡',
            'en-US': 'stopPropagation',
          },
          tip: '是否阻止滑动事件冒泡',
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
            'zh-CN': '是否延迟渲染未展示的轮播',
            'en-US': 'lazyRender',
          },
          tip: '是否延迟渲染未展示的轮播',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'indicatorColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指示器颜色',
            'en-US': 'indicatorColor',
          },
          tip: '指示器颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'indicator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义指示器',
            'en-US': 'indicator',
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
          name: 'onChange',
          description: '每一页轮播结束后触发',
          template:
            "onChange(extParams) {\n  // 每一页轮播结束后触发\n  console.log('onChange', extParams)\n}",
        },
        {
          name: 'onDragStart',
          description: '当用户开始拖动轮播组件时触发',
          template:
            "onDragStart(extParams) {\n  // 当用户开始拖动轮播组件时触发\n  console.log('onDragStart', extParams)\n}",
        },
        {
          name: 'onDragEnd',
          description: '当用户结束拖动轮播组件时触发',
          template:
            "onDragEnd(extParams) {\n  // 当用户结束拖动轮播组件时触发\n  console.log('onDragEnd', extParams)\n}",
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
      title: '轮播',
      screenshot: './screenshots/swipe.webp',
      schema: {
        componentName: 'VanSwipe',
        props: {},
        children: [
          {
            componentName: 'VanSwipeItem',
            props: {},
            children: [
              {
                componentName: 'div',
                props: {
                  style: {
                    height: '150px',
                    background: '#99a9bf',
                  },
                },
                children: '1',
              },
            ],
          },
          {
            componentName: 'VanSwipeItem',
            props: {},
            children: [
              {
                componentName: 'div',
                props: {
                  style: {
                    height: '150px',
                    background: '#d3dce6',
                  },
                },
                children: '2',
              },
            ],
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

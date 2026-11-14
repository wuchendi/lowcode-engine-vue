import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (carousel); see https://element-plus.org/zh-CN/component/carousel.html
const meta = {
  componentName: 'ElCarousel',
  title: '走马灯',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/carousel.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'carousel 的高度',
            'en-US': 'height',
          },
          tip: 'carousel 的高度',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'initialIndex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '初始状态激活的幻灯片的索引',
            'en-US': 'initialIndex',
          },
          tip: '初始状态激活的幻灯片的索引，从 0 开始',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'trigger',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指示器的触发方式',
            'en-US': 'trigger',
          },
          tip: '指示器的触发方式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'hover',
                value: 'hover',
              },
              {
                title: 'click',
                value: 'click',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'autoplay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动切换',
            'en-US': 'autoplay',
          },
          tip: '是否自动切换',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'interval',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自动切换的时间间隔',
            'en-US': 'interval',
          },
          tip: '自动切换的时间间隔，单位为毫秒',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 3000,
      },
      {
        name: 'indicatorPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指示器的位置',
            'en-US': 'indicatorPosition',
          },
          tip: '指示器的位置',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'outside',
                value: 'outside',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'arrow',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '切换箭头的显示时机',
            'en-US': 'arrow',
          },
          tip: '切换箭头的显示时机',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'always',
                value: 'always',
              },
              {
                title: 'hover',
                value: 'hover',
              },
              {
                title: 'never',
                value: 'never',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'hover',
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'carousel 的类型',
            'en-US': 'type',
          },
          tip: 'carousel 的类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'cardScale',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'cardScale',
            'en-US': 'cardScale',
          },
          tip: 'when type is card, scaled size of secondary cards',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0.83,
      },
      {
        name: 'loop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否循环显示',
            'en-US': 'loop',
          },
          tip: '是否循环显示',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '展示的方向',
            'en-US': 'direction',
          },
          tip: '展示的方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'horizontal',
                value: 'horizontal',
              },
              {
                title: 'vertical',
                value: 'vertical',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'pauseOnHover',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '鼠标悬浮时暂停自动切换',
            'en-US': 'pauseOnHover',
          },
          tip: '鼠标悬浮时暂停自动切换',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'motionBlur',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'motionBlur',
            'en-US': 'motionBlur',
          },
          tip: 'infuse dynamism and smoothness into the carousel',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description:
            '当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引',
          template:
            "onChange(...args, extParams) {\n  // 当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引\n  console.log('onChange', ...args)\n}",
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
      title: '走马灯',
      screenshot: './screenshots/carousel.webp',
      schema: {
        componentName: 'ElCarousel',
        props: {
          height: '150px',
        },
        children: [
          {
            componentName: 'ElCarouselItem',
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
            componentName: 'ElCarouselItem',
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

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (carousel); see https://element.eleme.cn/#/zh-CN/component/carousel
const meta = {
  componentName: 'ElCarousel',
  title: '走马灯',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/carousel',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'height',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '走马灯的高度',
            'en-US': 'height',
          },
          tip: '走马灯的高度',
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
        setter: 'StringSetter',
        supportVariable: true,
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
                title: 'outside',
                value: 'outside',
              },
              {
                title: 'none',
                value: 'none',
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
            'zh-CN': '走马灯的类型',
            'en-US': 'type',
          },
          tip: '走马灯的类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
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
            'zh-CN': '走马灯展示的方向',
            'en-US': 'direction',
          },
          tip: '走马灯展示的方向',
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
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '幻灯片切换时触发',
          template:
            "onChange(extParams) {\n  // 幻灯片切换时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
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

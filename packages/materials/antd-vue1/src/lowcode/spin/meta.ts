import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (spin); see https://1x.antdv.com/components/spin-cn/
const meta = {
  componentName: 'ASpin',
  title: '加载中',
  group: 'Ant Design 组件',
  category: '反馈',
  docUrl: 'https://1x.antdv.com/components/spin-cn/',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'delay',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '延迟显示加载效果的时间',
            'en-US': 'delay',
          },
          tip: '延迟显示加载效果的时间（防止闪烁）',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'indicator',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '加载指示符',
            'en-US': 'indicator',
          },
          tip: '加载指示符',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '组件大小',
            'en-US': 'size',
          },
          tip: '组件大小，可选值为 small default large',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'large',
                value: 'large',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'spinning',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为加载中状态',
            'en-US': 'spinning',
          },
          tip: '是否为加载中状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'tip',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当作为包裹元素时',
            'en-US': 'tip',
          },
          tip: '当作为包裹元素时，可以自定义描述文案',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'wrapperClassName',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '包装器的类属性',
            'en-US': 'wrapperClassName',
          },
          tip: '包装器的类属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '加载中',
      screenshot: './screenshots/spin.webp',
      schema: {
        componentName: 'ASpin',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

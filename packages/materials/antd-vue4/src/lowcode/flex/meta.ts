import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (flex); see https://antdv.com/components/flex-cn
const meta = {
  componentName: 'AFlex',
  title: '弹性布局',
  group: 'Ant Design 组件',
  category: '布局',
  docUrl: 'https://antdv.com/components/flex-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'vertical',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'flex 主轴的方向是否垂直',
            'en-US': 'vertical',
          },
          tip: 'flex 主轴的方向是否垂直，使用 flex-direction: column',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'wrap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置元素单行显示还是多行显示',
            'en-US': 'wrap',
          },
          tip: '设置元素单行显示还是多行显示',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'nowrap',
      },
      {
        name: 'justify',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'justify',
            'en-US': 'justify',
          },
          tip: '设置元素在主轴方向上的对齐方式',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'normal',
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'align',
            'en-US': 'align',
          },
          tip: '设置元素在交叉轴方向上的对齐方式',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'normal',
      },
      {
        name: 'flex',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'flex CSS 简写属性',
            'en-US': 'flex',
          },
          tip: 'flex CSS 简写属性',
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
        defaultValue: 'normal',
      },
      {
        name: 'gap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置网格之间的间隙',
            'en-US': 'gap',
          },
          tip: '设置网格之间的间隙',
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
        name: 'component',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义元素类型',
            'en-US': 'component',
          },
          tip: '自定义元素类型',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
        supportVariable: true,
        defaultValue: 'div',
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
      title: '弹性布局',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'AFlex',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

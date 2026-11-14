import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (index-bar); see https://vant-ui.github.io/vant/#/zh-CN/index-bar
const meta = {
  componentName: 'VanIndexBar',
  title: '索引栏',
  group: 'Vant 组件',
  category: '导航组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/index-bar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'indexList',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '索引字符列表',
            'en-US': 'indexList',
          },
          tip: '索引字符列表',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'A-Z',
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
        name: 'sticky',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启锚点自动吸顶',
            'en-US': 'sticky',
          },
          tip: '是否开启锚点自动吸顶',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'stickyOffsetTop',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '锚点自动吸顶时与顶部的距离',
            'en-US': 'stickyOffsetTop',
          },
          tip: '锚点自动吸顶时与顶部的距离',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'highlightColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '索引字符高亮颜色',
            'en-US': 'highlightColor',
          },
          tip: '索引字符高亮颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
      {
        name: 'teleport',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '指定索引栏挂载的节点',
            'en-US': 'teleport',
          },
          tip: '指定索引栏挂载的节点',
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
          name: 'onSelect',
          description: '点击索引栏的字符时触发',
          template:
            "onSelect(extParams) {\n  // 点击索引栏的字符时触发\n  console.log('onSelect', extParams)\n}",
        },
        {
          name: 'onChange',
          description: '当前高亮的索引字符变化时触发',
          template:
            "onChange(extParams) {\n  // 当前高亮的索引字符变化时触发\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '索引栏',
      screenshot: './screenshots/fallback.svg',
      schema: {
        componentName: 'VanIndexBar',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

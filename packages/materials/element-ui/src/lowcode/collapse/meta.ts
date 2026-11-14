import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (collapse); see https://element.eleme.cn/#/zh-CN/component/collapse
const meta = {
  componentName: 'ElCollapse',
  title: '折叠面板',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/collapse',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前激活的面板',
            'en-US': 'v-model',
          },
          tip: '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'accordion',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否手风琴模式',
            'en-US': 'accordion',
          },
          tip: '是否手风琴模式',
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
            '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)',
          template:
            "onChange(extParams) {\n  // 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '折叠面板',
      screenshot: './screenshots/collapse.webp',
      schema: {
        componentName: 'ElCollapse',
        props: {},
        children: [
          {
            componentName: 'ElCollapseItem',
            props: {
              title: '面板一',
              name: '1',
            },
            children: '内容一',
          },
          {
            componentName: 'ElCollapseItem',
            props: {
              title: '面板二',
              name: '2',
            },
            children: '内容二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

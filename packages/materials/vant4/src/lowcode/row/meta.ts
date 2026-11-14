import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (col); see https://vant-ui.github.io/vant/#/zh-CN/col
const meta = {
  componentName: 'VanRow',
  title: '布局 Row',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/col',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'gutter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '列元素之间的间距',
            'en-US': 'gutter',
          },
          tip: '列元素之间的间距（单位为 px）',
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
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义元素标签',
            'en-US': 'tag',
          },
          tip: '自定义元素标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'div',
      },
      {
        name: 'justify',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '主轴对齐方式',
            'en-US': 'justify',
          },
          tip: '主轴对齐方式，可选值为 end center  space-around space-between',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'end',
                value: 'end',
              },
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'space-around',
                value: 'space-around',
              },
              {
                title: 'space-between',
                value: 'space-between',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'start',
      },
      {
        name: 'align',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '交叉轴对齐方式',
            'en-US': 'align',
          },
          tip: '交叉轴对齐方式，可选值为 center bottom',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'center',
                value: 'center',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'top',
      },
      {
        name: 'wrap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否自动换行',
            'en-US': 'wrap',
          },
          tip: '是否自动换行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
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
    component: {},
  },
  snippets: [
    {
      title: '布局 Row',
      screenshot: './screenshots/row.webp',
      schema: {
        componentName: 'VanRow',
        children: [
          {
            componentName: 'VanCol',
            props: {
              span: 12,
            },
            children: [
              {
                componentName: 'div',
                props: {},
                children: 'col-12',
              },
            ],
          },
          {
            componentName: 'VanCol',
            props: {
              span: 12,
            },
            children: [
              {
                componentName: 'div',
                props: {},
                children: 'col-12',
              },
            ],
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

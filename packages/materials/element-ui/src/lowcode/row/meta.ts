import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (layout); see https://element.eleme.cn/#/zh-CN/component/layout
const meta = {
  componentName: 'ElRow',
  title: '布局 Row',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/layout',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'gutter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '栅格间隔',
            'en-US': 'gutter',
          },
          tip: '栅格间隔',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 0,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '布局模式',
            'en-US': 'type',
          },
          tip: '布局模式，可选 flex，现代浏览器下有效',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'justify',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'justify',
            'en-US': 'justify',
          },
          tip: 'flex 布局下的水平排列方式',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'start',
                value: 'start',
              },
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
            'zh-CN': 'align',
            'en-US': 'align',
          },
          tip: 'flex 布局下的垂直排列方式',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'top',
                value: 'top',
              },
              {
                title: 'middle',
                value: 'middle',
              },
              {
                title: 'bottom',
                value: 'bottom',
              },
            ],
          },
        },
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
      title: '布局 Row',
      screenshot: './screenshots/row.webp',
      schema: {
        componentName: 'ElRow',
        children: [
          {
            componentName: 'ElCol',
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
            componentName: 'ElCol',
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

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (divider); see https://element.eleme.cn/#/zh-CN/component/divider
const meta = {
  componentName: 'ElDivider',
  title: '分割线',
  group: 'Element 组件',
  category: '其他',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/divider',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置分割线方向',
            'en-US': 'direction',
          },
          tip: '设置分割线方向',
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
        name: 'contentPosition',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置分割线文案的位置',
            'en-US': 'contentPosition',
          },
          tip: '设置分割线文案的位置',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'left',
                value: 'left',
              },
              {
                title: 'right',
                value: 'right',
              },
              {
                title: 'center',
                value: 'center',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'center',
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
      title: '分割线',
      screenshot: './screenshots/divider.webp',
      schema: {
        componentName: 'ElDivider',
        props: {},
        children: '分割线',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

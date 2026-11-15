import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (link); see https://element.eleme.cn/#/zh-CN/component/link
const meta = {
  componentName: 'ElLink',
  title: '文字链接',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/link',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '类型',
            'en-US': 'type',
          },
          tip: '类型',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'primary',
                value: 'primary',
              },
              {
                title: 'success',
                value: 'success',
              },
              {
                title: 'warning',
                value: 'warning',
              },
              {
                title: 'danger',
                value: 'danger',
              },
              {
                title: 'info',
                value: 'info',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'underline',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否下划线',
            'en-US': 'underline',
          },
          tip: '是否下划线',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用状态',
            'en-US': 'disabled',
          },
          tip: '是否禁用状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'href',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 href 属性',
            'en-US': 'href',
          },
          tip: '原生 href 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名',
            'en-US': 'icon',
          },
          tip: '图标类名',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'element',
          },
        },
        supportVariable: true,
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
            "onClick(event, extParams) {\n  console.log('onClick', event)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '文字链接',
      screenshot: './screenshots/link.webp',
      schema: {
        componentName: 'ElLink',
        props: {},
        children: '文字链接',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

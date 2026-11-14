import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (link); see https://element-plus.org/zh-CN/component/link.html
const meta = {
  componentName: 'ElLink',
  title: '链接',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/link.html',
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
              {
                title: 'default',
                value: 'default',
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
            'zh-CN': '控制下划线是否出现',
            'en-US': 'underline',
          },
          tip: '控制下划线是否出现',
        },
        setter: [
          {
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
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'hover',
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
        name: 'target',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '同原生 target 属性',
            'en-US': 'target',
          },
          tip: '同原生 target 属性',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '_blank',
                value: '_blank',
              },
              {
                title: '_parent',
                value: '_parent',
              },
              {
                title: '_self',
                value: '_self',
              },
              {
                title: '_top',
                value: '_top',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标组件',
            'en-US': 'icon',
          },
          tip: '图标组件',
        },
        setter: 'CIconSetter',
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
      title: '链接',
      screenshot: './screenshots/link.webp',
      schema: {
        componentName: 'ElLink',
        props: {},
        children: '链接',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

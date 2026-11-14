import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (button); see https://element-plus.org/zh-CN/component/button.html
const meta = {
  componentName: 'ElButtonGroup',
  title: '按钮 ButtonGroup',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/button.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于控制该按钮组内按钮的大小',
            'en-US': 'size',
          },
          tip: '用于控制该按钮组内按钮的大小',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'large',
                value: 'large',
              },
              {
                title: 'default',
                value: 'default',
              },
              {
                title: 'small',
                value: 'small',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于控制该按钮组内按钮的类型',
            'en-US': 'type',
          },
          tip: '用于控制该按钮组内按钮的类型',
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
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'direction',
            'en-US': 'direction',
          },
          tip: 'display direction',
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
      events: [],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '按钮 ButtonGroup',
      screenshot: './screenshots/button-group.webp',
      schema: {
        componentName: 'ElButtonGroup',
        props: {},
        children: '按钮',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

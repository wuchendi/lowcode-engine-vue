import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (button); see https://element.eleme.cn/#/zh-CN/component/button
const meta = {
  componentName: 'ElButton',
  title: '按钮',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/button',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '尺寸',
            'en-US': 'size',
          },
          tip: '尺寸',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
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
                title: 'text',
                value: 'text',
              },
            ],
          },
        },
        supportVariable: true,
      },
      {
        name: 'plain',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否朴素按钮',
            'en-US': 'plain',
          },
          tip: '是否朴素按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'round',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否圆角按钮',
            'en-US': 'round',
          },
          tip: '是否圆角按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'circle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否圆形按钮',
            'en-US': 'circle',
          },
          tip: '是否圆形按钮',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否加载中状态',
            'en-US': 'loading',
          },
          tip: '是否加载中状态',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      {
        name: 'autofocus',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否默认聚焦',
            'en-US': 'autofocus',
          },
          tip: '是否默认聚焦',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'nativeType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 type 属性',
            'en-US': 'nativeType',
          },
          tip: '原生 type 属性',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'button',
                value: 'button',
              },
              {
                title: 'submit',
                value: 'submit',
              },
              {
                title: 'reset',
                value: 'reset',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'button',
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
      title: '按钮',
      screenshot: './screenshots/button.webp',
      schema: {
        componentName: 'ElButton',
        props: {},
        children: '按钮',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

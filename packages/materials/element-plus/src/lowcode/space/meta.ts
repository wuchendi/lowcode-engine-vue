import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (space); see https://element-plus.org/zh-CN/component/space.html
const meta = {
  componentName: 'ElSpace',
  title: '间距',
  group: 'Element 组件',
  category: '基础组件',
  docUrl: 'https://element-plus.org/zh-CN/component/space.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'alignment',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '对齐的方式',
            'en-US': 'alignment',
          },
          tip: '对齐的方式',
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
                title: 'normal',
                value: 'normal',
              },
              {
                title: 'stretch',
                value: 'stretch',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'center',
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '排列的方向',
            'en-US': 'direction',
          },
          tip: '排列的方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'vertical',
                value: 'vertical',
              },
              {
                title: 'horizontal',
                value: 'horizontal',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'horizontal',
      },
      {
        name: 'prefixCls',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'prefixCls',
            'en-US': 'prefixCls',
          },
          tip: '给 space-items 的类名前缀',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'spacer',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '间隔符',
            'en-US': 'spacer',
          },
          tip: '间隔符',
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
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '间隔大小',
            'en-US': 'size',
          },
          tip: '间隔大小',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'default',
                  value: 'default',
                },
                {
                  title: 'small',
                  value: 'small',
                },
                {
                  title: 'large',
                  value: 'large',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'small',
      },
      {
        name: 'wrap',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置是否自动折行',
            'en-US': 'wrap',
          },
          tip: '设置是否自动折行',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'fill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '子元素是否填充父容器',
            'en-US': 'fill',
          },
          tip: '子元素是否填充父容器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'fillRatio',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '填充父容器的比例',
            'en-US': 'fillRatio',
          },
          tip: '填充父容器的比例',
        },
        setter: 'NumberSetter',
        supportVariable: true,
        defaultValue: 100,
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
      title: '间距',
      screenshot: './screenshots/space.webp',
      schema: {
        componentName: 'ElSpace',
        children: [
          {
            componentName: 'ElButton',
            props: {},
            children: '按钮一',
          },
          {
            componentName: 'ElButton',
            props: {},
            children: '按钮二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

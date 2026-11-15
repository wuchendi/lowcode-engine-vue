import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (rate); see https://vant-ui.github.io/vant/#/zh-CN/rate
const meta = {
  componentName: 'VanRate',
  title: '评分',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/rate',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前分值',
            'en-US': 'v-model',
          },
          tip: '当前分值',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'count',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标总数',
            'en-US': 'count',
          },
          tip: '图标总数',
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
        defaultValue: '5',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标大小',
            'en-US': 'size',
          },
          tip: '图标大小，默认单位为px',
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
        defaultValue: '20px',
      },
      {
        name: 'gutter',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标间距',
            'en-US': 'gutter',
          },
          tip: '图标间距，默认单位为px',
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
        defaultValue: '4px',
      },
      {
        name: 'color',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中时的颜色',
            'en-US': 'color',
          },
          tip: '选中时的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ee0a24',
      },
      {
        name: 'voidColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未选中时的颜色',
            'en-US': 'voidColor',
          },
          tip: '未选中时的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#c8c9cc',
      },
      {
        name: 'disabledColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁用时的颜色',
            'en-US': 'disabledColor',
          },
          tip: '禁用时的颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#c8c9cc',
      },
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中时的图标名称或图片链接',
            'en-US': 'icon',
          },
          tip: '选中时的图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'vant',
          },
        },
        supportVariable: true,
        defaultValue: 'star',
      },
      {
        name: 'voidIcon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '未选中时的图标名称或图片链接',
            'en-US': 'voidIcon',
          },
          tip: '未选中时的图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'star-o',
      },
      {
        name: 'iconPrefix',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图标类名前缀',
            'en-US': 'iconPrefix',
          },
          tip: '图标类名前缀，等同于 Icon 组件的 class-prefix 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'van-icon',
      },
      {
        name: 'allowHalf',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许半选',
            'en-US': 'allowHalf',
          },
          tip: '是否允许半选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'clearable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否允许再次点击后清除',
            'en-US': 'clearable',
          },
          tip: '是否允许再次点击后清除',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'readonly',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否为只读状态',
            'en-US': 'readonly',
          },
          tip: '是否为只读状态，只读状态下无法修改评分',
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
            'zh-CN': '是否禁用评分',
            'en-US': 'disabled',
          },
          tip: '是否禁用评分',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'touchable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否可以通过滑动手势选择评分',
            'en-US': 'touchable',
          },
          tip: '是否可以通过滑动手势选择评分',
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
          name: 'onChange',
          description: '当前分值变化时触发的事件',
          template:
            "onChange(extParams) {\n  // 当前分值变化时触发的事件\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '评分',
      screenshot: './screenshots/rate.webp',
      schema: {
        componentName: 'VanRate',
        props: {},
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

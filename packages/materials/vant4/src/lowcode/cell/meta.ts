import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (cell); see https://vant-ui.github.io/vant/#/zh-CN/cell
const meta = {
  componentName: 'VanCell',
  title: '单元格',
  group: 'Vant 组件',
  category: '基础组件',
  docUrl: 'https://vant-ui.github.io/vant/#/zh-CN/cell',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'title',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧标题',
            'en-US': 'title',
          },
          tip: '左侧标题',
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
        name: 'value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧内容',
            'en-US': 'value',
          },
          tip: '右侧内容',
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
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '标题下方的描述信息',
            'en-US': 'label',
          },
          tip: '标题下方的描述信息',
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
            'zh-CN': '单元格大小',
            'en-US': 'size',
          },
          tip: '单元格大小，可选值为 large normal',
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
                title: 'normal',
                value: 'normal',
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
            'zh-CN': '左侧图标名称或图片链接',
            'en-US': 'icon',
          },
          tip: '左侧图标名称或图片链接，等同于 Icon 组件的 name 属性',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'vant',
          },
        },
        supportVariable: true,
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
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'tag',
            'en-US': 'tag',
          },
          tip: '根节点对应的 HTML 标签名',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'div',
      },
      {
        name: 'url',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的链接地址',
            'en-US': 'url',
          },
          tip: '点击后跳转的链接地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'to',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '点击后跳转的目标路由对象',
            'en-US': 'to',
          },
          tip: '点击后跳转的目标路由对象，等同于 Vue Router 的 to 属性',
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
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示内边框',
            'en-US': 'border',
          },
          tip: '是否显示内边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'replace',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否在跳转时替换当前页面历史',
            'en-US': 'replace',
          },
          tip: '是否在跳转时替换当前页面历史',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'clickable',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否开启点击反馈',
            'en-US': 'clickable',
          },
          tip: '是否开启点击反馈',
        },
        setter: 'BoolSetter',
        supportVariable: true,
      },
      {
        name: 'isLink',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'isLink',
            'en-US': 'isLink',
          },
          tip: '是否展示右侧箭头并开启点击反馈',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'required',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示表单必填星号',
            'en-US': 'required',
          },
          tip: '是否显示表单必填星号',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'center',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否使内容垂直居中',
            'en-US': 'center',
          },
          tip: '是否使内容垂直居中',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'arrowDirection',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '箭头方向',
            'en-US': 'arrowDirection',
          },
          tip: '箭头方向，可选值为 left up down',
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
                title: 'up',
                value: 'up',
              },
              {
                title: 'down',
                value: 'down',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'right',
      },
      {
        name: 'titleStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧标题额外样式',
            'en-US': 'titleStyle',
          },
          tip: '左侧标题额外样式',
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
        name: 'titleClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '左侧标题额外类名',
            'en-US': 'titleClass',
          },
          tip: '左侧标题额外类名',
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
        name: 'valueClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '右侧内容额外类名',
            'en-US': 'valueClass',
          },
          tip: '右侧内容额外类名',
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
        name: 'labelClass',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述信息额外类名',
            'en-US': 'labelClass',
          },
          tip: '描述信息额外类名',
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
        name: 'right-icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义右侧图标',
            'en-US': 'right-icon',
          },
          tip: '自定义右侧图标',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'extra',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '自定义单元格最右侧的额外内容',
            'en-US': 'extra',
          },
          tip: '自定义单元格最右侧的额外内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onClick',
          description: '点击单元格时触发',
          template:
            "onClick(extParams) {\n  // 点击单元格时触发\n  console.log('onClick', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '单元格',
      screenshot: './screenshots/cell.webp',
      schema: {
        componentName: 'VanCell',
        props: {
          title: '单元格',
        },
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

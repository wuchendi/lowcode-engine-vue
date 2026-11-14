import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the vant docs (checkbox); see https://vant-ui.github.io/vant/v2/#/zh-CN/checkbox
const meta = {
  componentName: 'VanCheckboxGroup',
  title: '复选框 CheckboxGroup',
  group: 'Vant 组件',
  category: '表单组件',
  docUrl: 'https://vant-ui.github.io/vant/v2/#/zh-CN/checkbox',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '所有选中项的标识符',
            'en-US': 'v-model',
          },
          tip: '所有选中项的标识符',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用所有复选框',
            'en-US': 'disabled',
          },
          tip: '是否禁用所有复选框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '最大可选数',
            'en-US': 'max',
          },
          tip: '最大可选数，0为无限制',
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
        defaultValue: '0',
      },
      {
        name: 'direction',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '排列方向',
            'en-US': 'direction',
          },
          tip: '排列方向，可选值为 horizontal',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'vertical',
      },
      {
        name: 'iconSize',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '所有复选框的图标大小',
            'en-US': 'iconSize',
          },
          tip: '所有复选框的图标大小，默认单位为 px',
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
        name: 'checkedColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '所有复选框的选中状态颜色',
            'en-US': 'checkedColor',
          },
          tip: '所有复选框的选中状态颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#1989fa',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '当绑定值变化时触发的事件',
          template:
            "onChange(extParams) {\n  // 当绑定值变化时触发的事件\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '复选框 CheckboxGroup',
      screenshot: './screenshots/checkbox-group.webp',
      schema: {
        componentName: 'VanCheckboxGroup',
        props: {
          value: [],
        },
        children: [
          {
            componentName: 'VanCheckbox',
            props: {
              name: 'a',
            },
            children: '选项一',
          },
          {
            componentName: 'VanCheckbox',
            props: {
              name: 'b',
            },
            children: '选项二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

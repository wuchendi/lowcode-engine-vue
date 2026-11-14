import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (checkbox); see https://element.eleme.cn/#/zh-CN/component/checkbox
const meta = {
  componentName: 'ElCheckboxGroup',
  title: '多选框 CheckboxGroup',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/checkbox',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'v-model',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '绑定值',
            'en-US': 'v-model',
          },
          tip: '绑定值',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '多选框组尺寸',
            'en-US': 'size',
          },
          tip: '多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效',
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
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否禁用',
            'en-US': 'disabled',
          },
          tip: '是否禁用',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'min',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'min',
            'en-US': 'min',
          },
          tip: '可被勾选的 checkbox 的最小数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'max',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'max',
            'en-US': 'max',
          },
          tip: '可被勾选的 checkbox 的最大数量',
        },
        setter: 'NumberSetter',
        supportVariable: true,
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'textColor',
            'en-US': 'textColor',
          },
          tip: '按钮形式的 Checkbox 激活时的文本颜色',
        },
        setter: 'ColorSetter',
        supportVariable: true,
        defaultValue: '#ffffff',
      },
      {
        name: 'fill',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fill',
            'en-US': 'fill',
          },
          tip: '按钮形式的 Checkbox 激活时的填充色和边框色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '#409EFF',
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
      title: '多选框 CheckboxGroup',
      screenshot: './screenshots/checkbox-group.webp',
      schema: {
        componentName: 'ElCheckboxGroup',
        props: {
          value: [],
        },
        children: [
          {
            componentName: 'ElCheckbox',
            props: {
              label: 'a',
            },
            children: '选项一',
          },
          {
            componentName: 'ElCheckbox',
            props: {
              label: 'b',
            },
            children: '选项二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

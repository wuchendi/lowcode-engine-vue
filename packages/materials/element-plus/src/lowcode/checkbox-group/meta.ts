import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (checkbox); see https://element-plus.org/zh-CN/component/checkbox.html
const meta = {
  componentName: 'ElCheckboxGroup',
  title: '多选框 CheckboxGroup',
  group: 'Element 组件',
  category: '表单组件',
  docUrl: 'https://element-plus.org/zh-CN/component/checkbox.html',
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
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'JsonSetter',
          },
        ],
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
          tip: '多选框组尺寸',
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
        name: 'ariaLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'ariaLabel',
            'en-US': 'ariaLabel',
          },
          tip: 'native aria-label attribute',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'textColor',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当按钮为活跃状态时的字体颜色',
            'en-US': 'textColor',
          },
          tip: '当按钮为活跃状态时的字体颜色',
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
          tip: '当按钮为活跃状态时的边框和背景颜色',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: '#409eff',
      },
      {
        name: 'tag',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '复选框组元素标签',
            'en-US': 'tag',
          },
          tip: '复选框组元素标签',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'div',
      },
      {
        name: 'validateEvent',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否触发表单验证',
            'en-US': 'validateEvent',
          },
          tip: '是否触发表单验证',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'options',
            'en-US': 'options',
          },
          tip: 'data of the options, the key of value and label and disabled can be customize by props',
        },
        setter: 'JsonSetter',
        supportVariable: true,
      },
      {
        name: 'props',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'props',
            'en-US': 'props',
          },
          tip: 'configuration options',
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
        name: 'type',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'type',
            'en-US': 'type',
          },
          tip: "component type to render options (e.g. 'button')",
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'checkbox',
                value: 'checkbox',
              },
              {
                title: 'button',
                value: 'button',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'checkbox',
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
            "onChange(...args, extParams) {\n  // 当绑定值变化时触发的事件\n  console.log('onChange', ...args)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      title: '多选框 CheckboxGroup',
      screenshot: './screenshots/checkbox-group.webp',
      schema: {
        componentName: 'ElCheckboxGroup',
        props: {
          modelValue: [],
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

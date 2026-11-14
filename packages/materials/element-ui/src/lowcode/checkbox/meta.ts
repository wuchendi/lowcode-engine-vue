import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (checkbox); see https://element.eleme.cn/#/zh-CN/component/checkbox
const meta = {
  componentName: 'ElCheckbox',
  title: '多选框',
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
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'label',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中状态的值',
            'en-US': 'label',
          },
          tip: '选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）',
        },
        setter: [
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
          {
            componentName: 'BoolSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'trueLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '选中时的值',
            'en-US': 'trueLabel',
          },
          tip: '选中时的值',
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
        name: 'falseLabel',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '没有选中时的值',
            'en-US': 'falseLabel',
          },
          tip: '没有选中时的值',
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
        name: 'border',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '是否显示边框',
            'en-US': 'border',
          },
          tip: '是否显示边框',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'Checkbox 的尺寸',
            'en-US': 'size',
          },
          tip: 'Checkbox 的尺寸，仅在 border 为真时有效',
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
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '原生 name 属性',
            'en-US': 'name',
          },
          tip: '原生 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'checked',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当前是否勾选',
            'en-US': 'checked',
          },
          tip: '当前是否勾选',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'indeterminate',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'indeterminate',
            'en-US': 'indeterminate',
          },
          tip: '设置 indeterminate 状态，只负责样式控制',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
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
      title: '多选框',
      screenshot: './screenshots/checkbox.webp',
      schema: {
        componentName: 'ElCheckbox',
        props: {},
        children: '多选框',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

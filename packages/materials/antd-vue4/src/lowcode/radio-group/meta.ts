import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the ant-design-vue docs (radio); see https://antdv.com/components/radio-cn
const meta = {
  componentName: 'ARadioGroup',
  title: '单选框 RadioGroup',
  group: 'Ant Design 组件',
  category: '数据录入',
  docUrl: 'https://antdv.com/components/radio-cn',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'buttonStyle',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'buttonStyle',
            'en-US': 'buttonStyle',
          },
          tip: 'RadioButton 的风格样式，目前有描边和填色两种风格',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'outline',
      },
      {
        name: 'disabled',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '禁选所有子单选器',
            'en-US': 'disabled',
          },
          tip: '禁选所有子单选器',
        },
        setter: 'BoolSetter',
        supportVariable: true,
        defaultValue: false,
      },
      {
        name: 'name',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'name',
            'en-US': 'name',
          },
          tip: 'RadioGroup 下所有 input[type="radio"] 的 name 属性',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'options',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '以配置形式设置子元素',
            'en-US': 'options',
          },
          tip: '以配置形式设置子元素',
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
          {
            componentName: 'JsonSetter',
          },
        ],
        supportVariable: true,
      },
      {
        name: 'optionType',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'optionType',
            'en-US': 'optionType',
          },
          tip: '用于设置 Radio options 类型',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '大小',
            'en-US': 'size',
          },
          tip: '大小，只对按钮样式生效',
        },
        setter: 'StringSetter',
        supportVariable: true,
        defaultValue: 'default',
      },
      {
        name: 'v-model:value',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '用于设置当前选中的值',
            'en-US': 'v-model:value',
          },
          tip: '用于设置当前选中的值',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onChange',
          description: '选项变化时的回调函数',
          template:
            "onChange(extParams) {\n  // 选项变化时的回调函数\n  console.log('onChange', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '单选框 RadioGroup',
      screenshot: './screenshots/radio-group.webp',
      schema: {
        componentName: 'ARadioGroup',
        props: {
          value: 'a',
        },
        children: [
          {
            componentName: 'ARadio',
            props: {
              value: 'a',
            },
            children: '选项一',
          },
          {
            componentName: 'ARadio',
            props: {
              value: 'b',
            },
            children: '选项二',
          },
        ],
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElSwitch: ComponentMetadata = {
  title: 'Switch 开关',
  group: '基础组件',
  category: '数据录入',
  priority: 996,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/switch',
  componentName: 'ElSwitch',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Switch',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'v-model',
        title: '绑定值',
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'width',
        title: '宽度',
        setter: {
          componentName: 'NumberSetter',
          initialValue: 40,
        },
      },
      {
        name: 'activeIconClass',
        title: {
          label: '打开时显示的图标',
          tip: 'switch 打开时所显示图标的类名，设置此项会忽略 active-text',
        },
        setter: {
          componentName: 'CIconSetter',
        },
      },
      {
        name: 'inactiveIconClass',
        title: {
          label: '关闭时显示的图标',
          tip: 'switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text',
        },
        setter: {
          componentName: 'CIconSetter',
        },
      },
      {
        name: 'activeText',
        title: {
          label: '打开时文字描述',
          tip: 'switch 打开时的文字描述',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'inactiveText',
        title: {
          label: '关闭时文字描述',
          tip: 'switch 关闭时的文字描述',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'activeValue',
        title: '打开时的值',
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
      },
      {
        name: 'inactiveValue',
        title: '关闭时的值',
        setter: [
          {
            componentName: 'BoolSetter',
          },
          {
            componentName: 'StringSetter',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
      },
      {
        name: 'activeColor',
        title: '打开时的背景色',
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#409EFF',
        },
      },
      {
        name: 'inactiveColor',
        title: '关闭时的背景色',
        setter: {
          componentName: 'ColorSetter',
          initialValue: '#C0CCDA',
        },
      },
      {
        name: 'validateEvent',
        title: '状态改变触发表单的校验',
        setter: {
          componentName: 'BoolSetter',
          initialValue: true,
        },
      },
      {
        name: '原生属性',
        title: {
          label: '原生属性',
          tip: '原生 HTML 属性',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'name',
            title: 'name',
            setter: 'StringSetter',
          },
        ],
      },
    ],
    supports: {
      events: [
        {
          name: 'onChange',
          template:
            'onChange(value, ${extParams}){\n// switch 状态发生变化时的回调函数\nconsole.log("新状态值", value);\n}\n',
        },
      ],
      loop: true,
      style: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_switch.png',
      title: 'Switch 开关',
      schema: {
        componentName: 'ElSwitch',
        props: {
          'v-model': false,
          disabled: false,
          width: 40,
          activeValue: true,
          inactiveValue: false,
          activeColor: '#409EFF',
          inactiveColor: '#C0CCDA',
          validateEvent: true,
        },
      },
    },
  ],
}

export default ElSwitch

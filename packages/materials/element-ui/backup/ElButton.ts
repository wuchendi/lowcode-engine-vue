import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElButton: ComponentMetadata = {
  title: '按钮',
  group: '基础组件',
  category: 'Element 组件',
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/button',
  componentName: 'ElButton',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Button',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'class',
        setter: {
          componentName: 'ClassNameSetter',
        },
      },
      {
        name: 'children',
        title: '文本内容',
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'size',
        title: '尺寸',
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
      },
      {
        name: 'type',
        title: '类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '默认按钮',
                value: 'default',
              },
              {
                title: '主要按钮',
                value: 'primary',
              },
              {
                title: '成功按钮',
                value: 'success',
              },
              {
                title: '警告按钮',
                value: 'warning',
              },
              {
                title: '危险按钮',
                value: 'danger',
              },
              {
                title: '信息按钮',
                value: 'info',
              },
              {
                title: '文字按钮',
                value: 'text',
              },
            ],
          },
          initialValue: 'default',
        },
      },
      {
        name: 'icon',
        title: '图标类名',
        setter: {
          componentName: 'CIconSetter',
        },
      },
      {
        name: 'plain',
        title: '朴素按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'round',
        title: '圆角按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'circle',
        title: '圆形按钮',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'loading',
        title: '加载中',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: {
          componentName: 'BoolSetter',
        },
      },
    ],
    supports: {
      style: true,
      loop: true,
      className: true,
      events: [
        {
          name: 'onClick',
          template:
            'onClick(event, ${extParams}){\n// 点击事件\nconsole.log("onClick", event);\n}\n',
        },
      ],
    },
  },
  snippets: [
    {
      title: '按钮',
      screenshot:
        'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/button.png',
      schema: {
        componentName: 'ElButton',
        props: {
          children: '按钮',
        },
      },
    },
  ],
}

export default ElButton

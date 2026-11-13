import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  group: 'Antd 组件',
  componentName: 'AButton',
  title: '按钮',
  category: '通用',
  // npm: {
  //   destructuring: true,
  //   componentName: 'AButton',
  // },
  configure: {
    props: [
      {
        name: '自定义插槽',
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'children',
            title: {
              label: '内容',
              tip: 'children | 内容',
            },
            setter: {
              componentName: 'StringSetter',
            },
          },
          {
            name: 'htmlType',
            title: {
              label: '原生类型',
              tip: 'htmlType | 设置 `button` 原生的 `type` 值',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'Submit',
                    value: 'submit',
                  },
                  {
                    title: 'Reset',
                    value: 'reset',
                  },
                  {
                    title: 'Button',
                    value: 'button',
                  },
                ],
              },
              initialValue: 'button',
            },
          },
          {
            name: 'href',
            title: {
              label: '跳转地址',
              tip: 'href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
            },
            setter: {
              componentName: 'StringSetter',
            },
          },
          {
            name: 'target',
            title: {
              label: 'Target',
              tip: 'target | 相当于 a 链接的 target 属性，href 存在时生效',
            },
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: '本窗口跳转',
                    value: '_self',
                  },
                  {
                    title: '打开新标签页',
                    value: '_blank',
                  },
                  {
                    title: '父窗口跳转',
                    value: '_parent',
                  },
                  {
                    title: '顶层窗口跳转',
                    value: '_top',
                  },
                ],
              },
              initialValue: 'default',
            },
            condition: (target) => {
              return !!target.getProps().getPropValue('href')?.trim()
            },
          },
        ],
      },
      {
        name: '外观',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'type',
            title: { label: '类型', tip: 'type | 设置按钮类型' },
            setter: [
              {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    {
                      title: '主按钮',
                      value: 'primary',
                    },
                    {
                      title: '虚线框按钮',
                      value: 'dashed',
                    },
                    {
                      title: '危险按钮',
                      value: 'danger',
                    },
                    {
                      title: '链接按钮',
                      value: 'link',
                    },
                    {
                      title: '类文本按钮',
                      value: 'text',
                    },
                  ],
                },
              },
            ],
          },
          {
            name: 'size',
            title: { label: '尺寸', tip: 'size | 设置按钮大小' },
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: '大',
                      value: 'large',
                    },
                    {
                      title: '中',
                      value: 'middle',
                    },
                    {
                      title: '小',
                      value: 'small',
                    },
                  ],
                },
              },
            ],
            defaultValue: 'middle',
          },
          {
            name: 'shape',
            title: {
              label: '形状',
              tip: 'shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设',
            },
            defaultValue: 'default',
            setter: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    {
                      title: '默认',
                      value: 'default',
                    },
                    {
                      title: '圆形',
                      value: 'circle',
                    },
                    {
                      title: '圆角',
                      value: 'round',
                    },
                  ],
                },
              },
            ],
          },
          {
            name: 'icon',
            title: { label: '图标', tip: 'icon | 设置按钮的图标组件' },
            setter: {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [
                  // {
                  //   componentName: 'AIcon',
                  //   props: {
                  //     type: 'SmileOutlined',
                  //     size: 20,
                  //     rotate: 0,
                  //     spin: false,
                  //   }
                  // }
                ],
              },
            },
          },
          {
            name: 'block',
            title: {
              label: '自适应',
              tip: 'block | 将按钮宽度调整为其父宽度的选项',
            },
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'danger',
            title: { label: '危险按钮', tip: 'danger | 设置危险按钮' },
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'ghost',
            title: {
              label: '幽灵属性',
              tip: 'ghost | 幽灵属性，使按钮背景透明',
            },
            setter: 'BoolSetter',
            defaultValue: false,
          },
        ],
      },
    ],
    supports: {
      events: [
        {
          name: 'onClick',
          description: '点击按钮时的回调',
          // template:
          //   "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
        },
      ],
      style: true,
    },
  },
  snippets: [
    {
      title: '主按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/button-1.png',
      schema: {
        componentName: 'AButton',
        props: {
          type: 'primary',
          children: '主按钮',
          size: 'large',
          shape: 'round',
        },
      },
    },
    {
      title: '次按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/button-2.png',
      schema: {
        componentName: 'AButton',
        props: {
          type: 'default',
          children: '次按钮',
        },
      },
    },
    {
      title: '危险按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/button-3.png',
      schema: {
        componentName: 'AButton',
        props: {
          type: 'danger',
          children: '危险按钮',
        },
      },
    },
    {
      title: '文字按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/button-4.png',
      schema: {
        componentName: 'AButton',
        props: {
          type: 'text',
          children: '文字按钮',
        },
      },
    },
    {
      title: '虚框按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/button-5.png',
      schema: {
        componentName: 'AButton',
        props: {
          type: 'dashed',
          children: '虚框按钮',
        },
      },
    },
    {
      title: '链接按钮',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/button-6.png',
      schema: {
        componentName: 'AButton',
        props: {
          type: 'link',
          children: '链接按钮',
        },
      },
    },
  ],
}

export default meta

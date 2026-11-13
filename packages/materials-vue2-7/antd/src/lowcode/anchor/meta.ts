import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '锚点',
  group: 'Antd 组件',
  category: '基础组件',
  docUrl: 'https://1x.antdv.com/components/anchor-cn/',
  componentName: 'AAnchor',
  // npm: {
  //   destructuring: true,
  //   componentName: 'AAnchor',
  // },
  configure: {
    props: [
      {
        name: 'affix',
        title: '固定模式',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      {
        name: 'bounds',
        title: '锚点区域边界',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      // {
      //   name: 'getContainer',
      //   title: '指定滚动的容器',
      //   setter: {
      //     componentName: 'FunctionSetter',
      //   },
      // },
      {
        name: 'offsetBottom',
        title: '距离窗口底部达到指定偏移量后触发',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        name: 'offsetTop',
        title: '距离窗口顶部达到指定偏移量后触发',
        setter: {
          componentName: 'NumberSetter',
        },
      },
      {
        name: 'showInkInFixed',
        title: '固定模式是否显示小圆点',
        setter: {
          componentName: 'BoolSetter',
        },
      },
      // {
      //   name: 'wrapperClass',
      //   title: '容器的类名',
      //   setter: {
      //     componentName: 'StringSetter',
      //   },
      // },
      // {
      //   name: 'wrapperStyle',
      //   title: '容器的样式',
      //   setter: {
      //     componentName: 'StyleSetter',
      //   },
      // },
      // {
      //   name: 'getCurrentAnchor',
      //   title: '自定义高亮的锚点',
      //   setter: {
      //     componentName: 'FunctionSetter',
      //   },
      // },
      {
        name: 'targetOffset',
        title: '锚点滚动偏移量',
        setter: {
          componentName: 'NumberSetter',
        },
      },
    ],
    supports: {
      events: [
        {
          name: 'onClick',
          description: 'click 事件的 handler',
          template:
            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log('onClick', event);}",
        },
        {
          name: 'onChange',
          description: '监听锚点链接改变',
          template:
            "onChange(currentActiveLink,${extParams}){\nconsole.log('onChange', currentActiveLink);}",
        },
      ],
      style: true,
    },
  },
  snippets: [
    {
      title: '锚点',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/anchor-1.png',
      schema: {
        componentName: 'AAnchor',
        props: {},
        children: [
          {
            componentName: 'AAnchorLink',
            props: {
              href: '#components-anchor-demo-basic',
              title: 'Basic demo',
            },
          },
          {
            componentName: 'AAnchorLink',
            props: {
              href: '#components-anchor-demo-static',
              title: 'Static demo',
            },
          },
          {
            componentName: 'AAnchorLink',
            props: {
              href: '#API',
              title: 'API',
            },
            children: [
              {
                componentName: 'AAnchorLink',
                props: {
                  href: '#Anchor-Props',
                  title: 'Anchor Props',
                },
              },
              {
                componentName: 'AAnchorLink',
                props: {
                  href: '#Link-Props',
                  title: 'Link-Props',
                },
              },
            ],
          },
        ],
      },
    },
  ],
}

export default meta

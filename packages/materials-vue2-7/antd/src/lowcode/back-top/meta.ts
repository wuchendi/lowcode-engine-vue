import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import snippets from './snippets'

const meta: IPublicTypeComponentMetadata = {
  title: '回到顶部',
  group: 'Antd 组件',
  category: '其他',
  docUrl: 'https://1x.antdv.com/components/back-top-cn/',
  componentName: 'ABackTop',
  // npm: {
  //   destructuring: true,
  //   componentName: 'ABackTop',
  // },
  configure: {
    props: [
      // {
      //   name: 'target',
      //   title: {
      //     label: '监听元素',
      //     tip: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      //   },
      //   setter: {
      //     componentName: 'FunctionSetter',
      //   },
      // },
      {
        name: 'visibilityHeight',
        title: {
          label: '可见高度',
          tip: '滚动高度达到此参数值才出现 BackTop',
        },
        setter: {
          componentName: 'NumberSetter',
        },
        defaultValue: 400,
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          template:
            "click(${extParams}){\n// 点击按钮的回调函数\nconsole.log('click');}",
        },
      ],
    },
  },
  snippets,
}

export default meta

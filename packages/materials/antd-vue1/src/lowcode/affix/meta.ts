import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '固钉',
  group: 'Antd 组件',
  category: '导航',
  docUrl: 'https://1x.antdv.com/components/affix-cn/',
  componentName: 'AAffix',
  // npm: {
  //   destructuring: true,
  //   componentName: 'AAffix',
  // },
  props: [
    {
      name: 'offsetBottom',
      // @ts-expect-error
      title: { label: '底部触发距离', tip: '距离窗口底部达到指定偏移量后触发' },
      propType: 'number',
    },
    {
      name: 'offsetTop',
      // @ts-expect-error
      title: { label: '顶部触发距离', tip: '距离窗口顶部达到指定偏移量后触发' },
      propType: 'number',
    },
    {
      name: 'target',
      // @ts-expect-error
      title: {
        label: '获取触发元素',
        tip: '设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange ',
          template:
            "onChange (affixed,${extParams}){\n// 固定状态变更回调函数\nconsole.log('onChange ', affixed);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '固钉',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/affix-1.jpg',
      schema: {
        componentName: 'AAffix',
        props: {
          offsetTop: 100,
        },
        children: [
          {
            componentName: 'AButton',
            props: {
              children: 'Affix Top',
            },
          },
        ],
      },
    },
  ],
}

export default meta

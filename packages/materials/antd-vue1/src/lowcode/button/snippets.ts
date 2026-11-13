import type { IPublicTypeSnippet } from '@alilc/lowcode-types'

const snippets: IPublicTypeSnippet[] = [
  {
    title: '主按钮',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/button-1.png',
    schema: {
      componentName: 'AButton',
      props: {
        type: 'primary',
        children: '主按钮',
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
]

export default snippets

import type { IPublicTypeSnippet } from '@alilc/lowcode-types'

const snippets: IPublicTypeSnippet[] = [
  {
    title: '自动补全输入框',
    screenshot:
      'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/auto-complete-1.png',
    schema: {
      componentName: 'AAutoComplete',
      props: {
        placeholder: '请输入',
        dataSource: [
          {
            text: '测试1',
            value: 'aaa',
          },
          {
            text: '测试2',
            value: 'bbb',
          },
        ],
        filterOption: true,
        style: {
          width: '200px',
        },
      },
    },
  },
]

export default snippets

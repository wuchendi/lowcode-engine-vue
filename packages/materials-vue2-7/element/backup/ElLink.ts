import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElLink: ComponentMetadata = {
  title: '文字链接',
  group: '基础组件',
  priority: 999,
  category: 'Element 组件',
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/link',
  componentName: 'ElLink',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Link',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'children',
        title: '链接文案',
        setter: 'StringSetter',
      },
      {
        name: 'href',
        title: '跳转链接',
        setter: 'StringSetter',
      },
      {
        name: 'target',
        title: {
          label: '页面目标',
          tip: 'target | 跳转页面目标',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '当前页面',
                value: '_self',
              },
              {
                title: '新开页面',
                value: '_blank',
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
                title: '默认链接',
                value: 'default',
              },
              {
                title: '主要链接',
                value: 'primary',
              },
              {
                title: '成功链接',
                value: 'success',
              },
              {
                title: '警告链接',
                value: 'warning',
              },
              {
                title: '危险链接',
                value: 'danger',
              },
              {
                title: '信息链接',
                value: 'info',
              },
            ],
          },
        },
      },
      {
        name: 'underline',
        title: {
          label: '下划线',
          tip: 'hover 状态显示下划线',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'disabled',
        title: '禁用',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'icon',
        title: {
          label: '图标类名',
          tip: 'icon | 图标类名',
        },
        setter: {
          componentName: 'CIconSetter',
        },
      },
    ],
    supports: {
      style: true,
      loop: true,
    },
  },
  snippets: [
    {
      title: '文字链接',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-link-1.png',
      schema: {
        componentName: 'ElLink',
        props: {
          children: '文字链接',
          type: 'default',
          href: '#',
          target: '_self',
          icon: 'el-icon-link',
          underline: true,
        },
      },
    },
  ],
}

export default ElLink

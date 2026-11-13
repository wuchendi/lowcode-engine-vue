import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElDivider: ComponentMetadata = {
  title: '分隔线',
  group: '基础组件',
  category: '布局',
  priority: 1005,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/divider',
  // hidden: true,
  componentName: 'ElDivider',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Divider',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'children',
        title: '文案内容',
        setter: {
          componentName: 'StringSetter',
          initialValue: '',
        },
      },
      {
        name: 'contentPosition',
        title: '文案位置',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '左边',
                value: 'left',
              },
              {
                title: '居中',
                value: 'center',
              },
              {
                title: '右边',
                value: 'right',
              },
            ],
          },
          initialValue: 'center',
        },
      },
      // {
      //   name: 'staticClass',
      //   title: '自定义类名',
      //   setter: 'StringSetter',
      // },
      {
        name: 'direction',
        title: '分隔线方向',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '水平',
                value: 'horizontal',
              },
              {
                title: '垂直',
                value: 'vertical',
              },
            ],
          },
          initialValue: 'horizontal',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {
      isContainer: false,
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_divider.png',
      title: '分隔线',
      schema: {
        componentName: 'ElDivider',
        props: {
          children: '',
        },
      },
    },
  ],
}

export default ElDivider

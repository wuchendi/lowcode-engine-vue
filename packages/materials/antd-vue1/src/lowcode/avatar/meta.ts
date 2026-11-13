import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'
import snippets from './snippets'

const meta: IPublicTypeComponentMetadata = {
  title: '头像',
  group: 'Antd 组件',
  category: '数据展示',
  docUrl: 'https://1x.antdv.com/components/avatar-cn/',
  componentName: 'AAvatar',

  configure: {
    props: [
      {
        name: 'icon',
        title: { label: '图标头像', tip: '设置头像的图标类型' },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        name: 'shape',
        title: { label: '形状', tip: '指定头像的形状' },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: 'circle', value: 'circle' },
              { title: 'square', value: 'square' },
            ],
          },
          initialValue: 'circle',
        },
      },
      {
        name: 'size',
        title: { label: '尺寸', tip: '设置头像的大小' },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                { label: 'default', value: 'default' },
                { label: 'large', value: 'large' },
                { label: 'small', value: 'small' },
              ],
            },
            initialValue: 'default',
          },
          {
            componentName: 'NumberSetter',
          },
        ],
      },
      {
        name: 'src',
        title: { label: '图片地址', tip: '图片类头像的资源地址' },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'srcSet',
        title: {
          label: '图片类头像响应式资源地址',
          tip: '设置图片类头像响应式资源地址',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
      {
        name: 'alt',
        title: {
          label: '替代文本',
          tip: '图像无法显示时的替代文本',
        },
        setter: {
          componentName: 'StringSetter',
        },
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'loadError',
          description: '图片加载失败的事件',
          template:
            "loadError(${extParams}){\n// 图片加载失败的事件\nconsole.log('loadError');}",
        },
      ],
    },
  },
  snippets,
}

export default meta

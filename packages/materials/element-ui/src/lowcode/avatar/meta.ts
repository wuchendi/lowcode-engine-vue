import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-ui docs (avatar); see https://element.eleme.cn/#/zh-CN/component/avatar
const meta = {
  componentName: 'ElAvatar',
  title: '头像',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/avatar',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头像的图标类型',
            'en-US': 'icon',
          },
          tip: '设置头像的图标类型，参考 Icon 组件',
        },
        setter: {
          componentName: 'CIconSetter',
          props: {
            library: 'element',
          },
        },
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头像的大小',
            'en-US': 'size',
          },
          tip: '设置头像的大小',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'number',
                  value: 'number',
                },
                {
                  title: 'large',
                  value: 'large',
                },
                {
                  title: 'medium',
                  value: 'medium',
                },
                {
                  title: 'small',
                  value: 'small',
                },
              ],
            },
          },
          {
            componentName: 'NumberSetter',
          },
        ],
        supportVariable: true,
        defaultValue: 'large',
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '设置头像的形状',
            'en-US': 'shape',
          },
          tip: '设置头像的形状',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'circle',
                value: 'circle',
              },
              {
                title: 'square',
                value: 'square',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'circle',
      },
      {
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '图片头像的资源地址',
            'en-US': 'src',
          },
          tip: '图片头像的资源地址',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'srcSet',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'srcSet',
            'en-US': 'srcSet',
          },
          tip: '以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '描述图像的替换文本',
            'en-US': 'alt',
          },
          tip: '描述图像的替换文本',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'fit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': '当展示类型为图片的时候',
            'en-US': 'fit',
          },
          tip: '当展示类型为图片的时候，设置图片如何适应容器框',
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'fill',
                value: 'fill',
              },
              {
                title: 'contain',
                value: 'contain',
              },
              {
                title: 'cover',
                value: 'cover',
              },
              {
                title: 'none',
                value: 'none',
              },
              {
                title: 'scale-down',
                value: 'scale-down',
              },
            ],
          },
        },
        supportVariable: true,
        defaultValue: 'cover',
      },
    ],
    supports: {
      style: true,
      className: true,
      events: [
        {
          name: 'onError',
          description:
            '图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为',
          template:
            "onError(extParams) {\n  // 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为\n  console.log('onError', extParams)\n}",
        },
      ],
      loop: true,
      condition: true,
    },
    component: {},
  },
  snippets: [
    {
      title: '头像',
      screenshot: './screenshots/avatar.webp',
      schema: {
        componentName: 'ElAvatar',
        children: 'U',
      },
    },
  ],
} as IPublicTypeComponentMetadata

export default meta

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

// Generated from the element-plus docs (avatar); see https://element-plus.org/zh-CN/component/avatar.html
const meta = {
  componentName: 'ElAvatar',
  title: '头像',
  group: 'Element 组件',
  category: '数据展示',
  docUrl: 'https://element-plus.org/zh-CN/component/avatar.html',
  devMode: 'proCode',
  configure: {
    props: [
      {
        name: 'icon',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'icon',
            'en-US': 'icon',
          },
          tip: 'representation type to icon, more info on icon component.',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'size',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'size',
            'en-US': 'size',
          },
          tip: 'avatar size.',
        },
        setter: [
          {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: 'large',
                  value: 'large',
                },
                {
                  title: 'default',
                  value: 'default',
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
      },
      {
        name: 'shape',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'shape',
            'en-US': 'shape',
          },
          tip: 'avatar shape.',
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
      },
      {
        name: 'src',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'src',
            'en-US': 'src',
          },
          tip: 'the source of the image for an image avatar.',
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
          tip: 'native attribute srcset of image avatar.',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'alt',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'alt',
            'en-US': 'alt',
          },
          tip: 'native attribute alt of image avatar.',
        },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'fit',
        title: {
          label: {
            type: 'i18n',
            'zh-CN': 'fit',
            'en-US': 'fit',
          },
          tip: 'set how the image fit its container for an image avatar.',
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
          description: 'trigger when image load error.',
          template:
            "onError(...args, extParams) {\n  // trigger when image load error.\n  console.log('onError', ...args)\n}",
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

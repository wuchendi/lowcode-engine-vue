import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types'

const meta: IPublicTypeComponentMetadata = {
  title: '标签',
  group: 'Element 组件',
  category: 'Data',
  priority: 1003,
  docUrl: 'https://element.eleme.cn/#/zh-CN/component/tag',
  componentName: 'ElTag',

  configure: {
    props: [
      {
        name: 'children',
        title: '文本',
        setter: 'StringSetter',
      },
      {
        name: 'type',
        title: '类型',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '默认标签',
                value: 'default',
              },
              {
                title: '成功标签',
                value: 'success',
              },
              {
                title: '警告标签',
                value: 'warning',
              },
              {
                title: '危险标签',
                value: 'danger',
              },
              {
                title: '信息标签',
                value: 'info',
              },
            ],
          },
          initialValue: 'default',
        },
      },
      {
        name: 'closable',
        title: '可关闭',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'disable-transitions',
        title: '禁用渐变动画',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'hit',
        title: '边框描边',
        setter: {
          componentName: 'BoolSetter',
          initialValue: false,
        },
      },
      {
        name: 'color',
        title: '背景色',
        setter: 'ColorSetter',
      },
      {
        name: 'size',
        title: '尺寸',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'medium',
                value: 'medium',
              },
              {
                title: 'small',
                value: 'small',
              },
              {
                title: 'mini',
                value: 'mini',
              },
            ],
          },
          initialValue: '',
        },
      },
      {
        name: 'effect',
        title: '主题',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: 'dark',
                value: 'dark',
              },
              {
                title: 'light',
                value: 'light',
              },
              {
                title: 'plain',
                value: 'plain',
              },
            ],
          },
          initialValue: 'light',
        },
      },
      // {
      //   name: 'click',
      //   title: '点击 Tag 时触发的事件',
      //   propType: 'func',
      // },
      // {
      //   name: 'close',
      //   title: '关闭 Tag 时触发的事件',
      //   propType: 'func',
      // },
    ],
    supports: {
      events: [
        {
          name: 'onClick',
          description: '点击 Tag 时触发的事件',
          template:
            'onClick(${extParams}){\n//点击 Tag 时触发的事件\nconsole.log("onClick");\n}\n',
        },
        {
          name: 'onClose',
          description: '关闭 Tag 时触发的事件',
          template:
            'onClose(${extParams}){\n//关闭 Tag 时触发的事件 \nconsole.log("onClose");\n}\n',
        },
      ],
      style: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_tag.png',
      title: '标签',
      schema: {
        componentName: 'ElTag',
        props: {
          children: '标签',
          type: 'default',
          closable: false,
          'disable-transitions': false,
          hit: false,
          color: '',
          size: '',
          close: false,
        },
      },
    },
  ],
}

export default meta

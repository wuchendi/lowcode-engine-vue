import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElImage: ComponentMetadata = {
  title: '图片',
  group: '基础组件',
  category: 'Element 组件',
  priority: 1004,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/image',
  componentName: 'ElImage',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Image',
    destructuring: true,
  },
  configure: {
    props: [
      {
        name: 'src',
        title: '图片链接',
        setter: 'StringSetter',
        defaultValue:
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      },
      {
        name: 'fit',
        title: {
          label: '图片自适应',
          tip: `object-fit 主要用途就是控制图片如何在 img 元素里面显示`,
        },
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'cover',
                value: 'cover',
              },
              {
                title: 'contain',
                value: 'contain',
              },
              {
                title: 'fill',
                value: 'fill',
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
        defaultValue: 'cover',
      },
      {
        name: 'lazy',
        title: '开启懒加载',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'scrollContainer',
        title: {
          label: '懒加载容器',
          tip: '开启懒加载后，监听 scroll 事件的容器, 默认为最近一个 overflow 值为 auto 或 scroll 的父元素',
        },
        setter: 'StringSetter',
        condition(target) {
          return !!target.getProps().getPropValue('lazy')
        },
      },
      {
        name: 'placeholder',
        title: {
          label: '占位内容',
          tip: '图片未加载的占位内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            title: '图片未加载插槽',
            params: ['slotProps'],
            value: [],
          },
        },
      },
      {
        name: 'error',
        title: {
          label: '加载失败',
          tip: '图片加载失败的内容',
        },
        setter: {
          componentName: 'SlotSetter',
          initialValue: {
            type: 'JSSlot',
            title: '图片加载失败插槽',
            params: ['slotProps'],
            value: [],
          },
        },
      },
      {
        name: '图片预览功能',
        title: {
          label: '图片预览功能',
          tip: '配置 preview-src-list 预览图片地址之后，将自动开启预览功能',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'previewSrcList',
            title: '图片地址',
            setter: {
              componentName: 'JsonSetter',
            },
          },
          {
            name: 'zIndex',
            title: '图片 z-index',
            setter: 'NumberSetter',
            defaultValue: 2000,
          },
        ],
      },
      {
        name: '原生属性',
        title: {
          label: '原生属性',
          tip: '原生 HTML 属性',
        },
        display: 'accordion',
        type: 'group',
        items: [
          {
            name: 'alt',
            title: 'alt',
            setter: 'StringSetter',
            defaultValue: '',
          },
          {
            name: 'referrerPolicy',
            title: 'referrerpolicy',
            setter: 'StringSetter',
            defaultValue: '',
          },
        ],
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
      events: [
        {
          name: 'onLoad',
          template:
            'onLoad(ev, ${extParams}){\n//图片加载成功触发\nconsole.log("图片加载成功");\n}\n',
        },
        {
          name: 'onError',
          template:
            'onError(ev, ${extParams}){\n//图片加载失败触发\nconsole.log("图片加载失败");\n}\n',
        },
      ],
    },
    component: {
      isContainer: true,
    },
  },
  snippets: [
    {
      screenshot:
        'https://img.alicdn.com/imgextra/i3/O1CN01tnhXhk1GUIFhsXwzA_!!6000000000625-55-tps-56-56.svg',
      title: '图片',
      schema: {
        componentName: 'ElImage',
        children: [],
        props: {
          src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          style: {
            width: '300px',
            height: '300px',
          },
          // 'previewSrcList': [
          //   'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          //   'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          //   'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          // ],
        },
      },
    },
  ],
}

export default ElImage

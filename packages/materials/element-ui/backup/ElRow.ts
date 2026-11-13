import type { ComponentMetadata } from '@alilc/lowcode-types'

const ElRow: ComponentMetadata = {
  title: '栅格-行',
  group: '基础组件',
  category: '布局',
  priority: 100007,
  docUrl: 'https://fe.wshoto.com/components/#/zh-CN/component/layout',
  componentName: 'ElRow',
  npm: {
    package: 'element-ui',
    version: '2.30.6',
    exportName: 'Row',
    destructuring: true,
  },
  configure: {
    props: [
      {
        type: 'group',
        name: '布局样式',
        display: 'block',
        items: [
          {
            name: 'type',
            title: '布局类型',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认布局',
                    value: '',
                  },
                  {
                    title: 'flex 布局',
                    value: 'flex',
                  },
                ],
              },
            },
            defaultValue: '',
          },
          {
            name: 'gutter',
            title: '栅格间隔',
            setter: 'NumberSetter',
            defaultValue: 6,
          },
          {
            name: 'justify',
            title: {
              label: '水平排列方式',
              tip: 'flex 布局下的水平排列方式',
            },
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: 'start',
                    value: 'start',
                  },
                  {
                    title: 'end',
                    value: 'end',
                  },
                  {
                    title: 'center',
                    value: 'center',
                  },
                  {
                    title: 'space-around',
                    value: 'space-around',
                  },
                  {
                    title: 'space-between',
                    value: 'space-between',
                  },
                ],
              },
            },
            defaultValue: 'start',
            condition(target) {
              return target.getProps().getPropValue('type') === 'flex'
            },
          },
          {
            name: 'align',
            title: {
              label: '垂直排列方式',
              tip: 'flex 布局下的垂直排列方式',
            },
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: 'top',
                    value: 'top',
                  },
                  {
                    title: 'middle',
                    value: 'middle',
                  },
                  {
                    title: 'bottom',
                    value: 'bottom',
                  },
                ],
              },
            },
            defaultValue: 'top',
            condition(target) {
              return target.getProps().getPropValue('type') === 'flex'
            },
          },
        ],
      },
    ],
    supports: {
      loop: true,
      condition: true,
      style: true,
    },
    component: {
      isContainer: true,
      nestingRule: {
        childWhitelist: ['ElCol'],
      },
    },
  },
  snippets: [
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1BgObx5_1gK0jSZFqXXcpaXXa-112-64.png',
      title: '1 + 2',
      schema: {
        componentName: 'ElRow',
        props: {
          style: {
            flexWrap: 'wrap',
          },
        },
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 24,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 16,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
        ],
      },
    },
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1glaexYj1gK0jSZFuXXcrHpXa-112-64.png',
      title: '1 + 3',
      schema: {
        componentName: 'ElRow',
        props: {
          style: {
            flexWrap: 'wrap',
          },
        },
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 24,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
        ],
      },
    },
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1cb9ex1H2gK0jSZJnXXaT1FXa-112-64.png',
      title: '混合',
      schema: {
        componentName: 'ElRow',
        props: {
          style: {
            flexWrap: 'wrap',
          },
        },
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 16,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
        ],
      },
    },
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1y5RLyO_1gK0jSZFqXXcpaXXa-112-40.png',
      title: '单栏',
      schema: {
        componentName: 'ElRow',
        props: {
          style: {
            flexWrap: 'wrap',
          },
        },
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 24,
            },
          },
        ],
      },
    },
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1Sw4MyKL2gK0jSZFmXXc7iXXa-112-40.png',
      title: '两栏',
      schema: {
        componentName: 'ElRow',
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 12,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 12,
            },
          },
        ],
      },
    },
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1uq4LyQY2gK0jSZFgXXc5OFXa-112-40.png',
      title: '三栏',
      schema: {
        componentName: 'ElRow',
        props: {
          style: {
            flexWrap: 'wrap',
          },
        },
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 8,
            },
          },
        ],
      },
    },
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1mpEjyQL0gK0jSZFtXXXQCXXa-112-40.png',
      title: '四栏',
      schema: {
        componentName: 'ElRow',
        props: {
          style: {
            flexWrap: 'wrap',
          },
        },
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 6,
            },
          },
        ],
      },
    },
    {
      screenshot:
        'https://img.alicdn.com/tfs/TB1x_RMyQT2gK0jSZPcXXcKkpXa-112-40.png',
      title: '1:3分栏',
      schema: {
        componentName: 'ElRow',
        props: {
          style: {
            flexWrap: 'wrap',
          },
        },
        children: [
          {
            componentName: 'ElCol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ElCol',
            props: {
              span: 18,
            },
          },
        ],
      },
    },
  ],
}

export default ElRow

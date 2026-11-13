import type {
  ComponentMetadata,
  IPublicModelNodeChildren,
  NodeSchema,
  SettingTarget,
} from '@alilc/lowcode-types'
import { isEqual, throttle } from 'lodash'

type VanTabItemProps = {
  primaryKey: string
  title: string
  children?: any
}

/**
 * 存储子节点 schema
 */
let currentChildrenSchema: NodeSchema[] = []

const meta: ComponentMetadata = {
  category: 'Vant 组件',
  componentName: 'van-tabs',
  docUrl: 'https://vant-contrib.gitee.io/vant/v2/#/zh-CN/tab',
  npm: {
    package: 'vant',
    version: '2.12.53',
    exportName: 'Tabs',
    destructuring: true,
  },
  props: [
    {
      name: 'v-model',
      description: '绑定的值',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
    },
    {
      name: 'type',
      description: '样式风格',
      propType: {
        type: 'oneOf',
        value: ['line', 'card'],
      },
      defaultValue: 'line',
    },
    {
      name: 'color',
      description: '主题色',
      propType: 'string',
      defaultValue: '#ee0a24',
    },
    {
      name: 'background',
      description: '背景色',
      propType: 'string',
      defaultValue: 'white',
    },
    {
      name: 'default',
      description: '默认插槽',
      propType: 'node',
    },
  ],
  configure: {
    props: [
      {
        name: 'v-model',
        title: '绑定的值',
        setter: 'StringSetter',
      },
      {
        name: 'items',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: '名称',
                      initialValue: '标签项',
                      setter: {
                        componentName: 'StringSetter',
                      },
                      isRequired: true,
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  title: '标签项' + String(Math.floor(Math.random() * 10000)),
                  // closeable: false,
                  // disabled: false,
                }
              },
            },
          },
        },
        extraProps: {
          getValue: (target: SettingTarget) => {
            console.log('🚀 ~ file: van-tabs.ts: 触发 ~ getValue')
            const node = target.getNode()
            /**
             * 从 wshoto-lowcode-cli 打开 currentChildrenSchema 不存在处理
             *
             * 判断 node.schema.children 是否存在
             * 且 node.schema.children 数组当中 children 属性是否存在
             */
            if (
              node?.schema.children &&
              node?.schema.children.filter((child: any) => child.children)
                .length > 0
            ) {
              currentChildrenSchema = node?.schema.children
            }
            const map: VanTabItemProps[] = node?.schema.children.map(
              (child: any) => {
                const primaryKey = child.props.primaryKey || child.id
                return {
                  primaryKey: primaryKey,
                  title: child.props.title,
                  children: child.children,
                }
              },
            )
            return map
          },
          setValue: throttle((target: SettingTarget, value: any) => {
            console.log(
              '🚀 ~ file: van-tabs.ts: 触发 ~ setValue',
              target,
              value,
            )
            const node = target.getNode()
            const mergedValueMap: Record<string, VanTabItemProps> = {}
            const mergedValues: VanTabItemProps[] = []
            const map: Record<string, VanTabItemProps> = {}
            if (!Array.isArray(value)) {
              value = []
            }
            value.forEach((item: any) => {
              if (!mergedValueMap[item.primaryKey]) {
                mergedValueMap[item.primaryKey] = item
                mergedValues.push(item)
              }
              map[item.primaryKey] = item
            })

            const children = node.children.filter((child: any) => {
              if (!mergedValueMap[child.propsData.primaryKey]) {
                mergedValueMap[child.propsData.primaryKey] = child.propsData
                mergedValues.push(child.propsData)
              }
              return true
            })

            const preValue = children.map((child: any) => {
              return child.propsData
            })

            if (isEqual(preValue, value)) {
              return
            }

            ;(node.children as IPublicModelNodeChildren).mergeChildren(
              (child, idx) => {
                console.log('remover', child, idx)
                const primaryKey = String(
                  child.getPropValue('primaryKey') ||
                    child.schema.id ||
                    child.id,
                )
                if (Object.hasOwnProperty.call(map, primaryKey)) {
                  child.setPropValue('title', map[primaryKey].title)

                  let { children: schemaChildren, ...newPropsData } =
                    Object.assign({}, child.propsData || {}, map[primaryKey])

                  if (!schemaChildren && currentChildrenSchema.length > 0) {
                    const currentNodeSchemaItem = currentChildrenSchema.find(
                      (item) => item.id === newPropsData.primaryKey,
                    )
                    schemaChildren = currentNodeSchemaItem?.children
                  }

                  if (schemaChildren && !child.schema.children) {
                    child.schema.children = schemaChildren
                  }

                  node.replaceChild(child, {
                    componentName: 'van-tab',
                    props: newPropsData,
                    children: schemaChildren || [],
                  })

                  delete map[primaryKey]
                  return false
                }

                return true
              },
              () => {
                console.log('adder')
                const items = []
                for (const primaryKey in map) {
                  if (Object.hasOwnProperty.call(map, primaryKey)) {
                    items.push({
                      componentName: 'van-tab',
                      props: map[primaryKey],
                    })
                  }
                }
                return items
              },
              (child1, child2) => {
                console.log('sorter')
                const a = value.findIndex(
                  (item: any) =>
                    String(item.primaryKey) ===
                    String(child1.getPropValue('primaryKey')),
                )
                const b = value.findIndex(
                  (item: any) =>
                    String(item.primaryKey) ===
                    String(child2.getPropValue('primaryKey')),
                )
                return a - b
              },
            )
          }),
        },
      },
      {
        name: 'type',
        title: '样式风格',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: 'line',
                value: 'line',
              },
              {
                title: 'card',
                value: 'card',
              },
            ],
          },
        },
        defaultValue: 'line',
      },
      {
        name: 'color',
        title: '标签主题色',
        setter: 'ColorSetter',
        defaultValue: '#ee0a24',
      },
      {
        name: 'background',
        title: '标签栏背景色',
        setter: 'ColorSetter',
        defaultValue: '#fff',
      },
      {
        name: 'duration',
        title: {
          label: '动画时间',
          tip: '动画时间(单位：秒)',
        },
        setter: 'StringSetter',
        defaultValue: '0.3',
      },
      {
        name: 'lineWidth',
        title: '底部条宽度',
        setter: 'StringSetter',
        defaultValue: '40px',
      },
      {
        name: 'lineWidth',
        title: '底部条高度',
        setter: 'StringSetter',
        defaultValue: '3px',
      },
      {
        name: 'animated',
        title: {
          label: '开启转场动画',
          tip: '是否开启切换标签内容时的转场动画',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'border',
        title: {
          label: '显示标签栏外边框',
          tip: '是否显示标签栏外边框，仅在 type="line" 时有效',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'ellipsis',
        title: '是否省略过长的标题文字',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'sticky',
        title: '是否使用粘性定位布局',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'swipeable',
        title: '是否开启手势滑动切换',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'lazyRender',
        title: {
          label: '是否开启延迟渲染',
          tip: '是否开启延迟渲染（首次切换到标签时才触发内容渲染）',
        },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'scrollspy',
        title: '是否开启滚动导航',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'offsetTop',
        title: {
          label: '粘性定位与顶部的最小距离',
          tip: '粘性定位布局下与顶部的最小距离，支持 px vw vh rem 单位，默认 px',
        },
        setter: 'StringSetter',
        defaultValue: '0',
      },
      {
        name: 'swipeThreshold',
        title: {
          label: '滚动阈值',
          tip: '滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动',
        },
        setter: 'StringSetter',
        defaultValue: '5',
      },
      {
        name: 'titleActiveColor',
        title: '标题选中态颜色',
        setter: 'StringSetter',
      },
      {
        name: 'titleInactiveColor',
        title: '标题默认态颜色',
        setter: 'StringSetter',
      },
      {
        name: 'beforeChange',
        title: {
          label: '回调函数',
          tip: '切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise',
        },
        setter: 'FunctionSetter',
      },
    ],
    supports: {
      events: ['onClick', 'onChange', 'onDisabled', 'onRendered', 'onScroll'],
      loop: true,
      condition: true,
      style: true,
    },
    component: {
      isContainer: true,
    },
    advanced: {
      callbacks: {
        onNodeAdd: (_dragment, currentNode) => {
          currentChildrenSchema = currentNode.schema.children
        },
      },
    },
  },
  snippets: [
    {
      screenshot:
        'https://img.alicdn.com/imgextra/i4/O1CN01mh9LPG268B90t8DaA_!!6000000007616-55-tps-56-56.svg',
      title: '标签页组件',
      schema: {
        componentName: 'van-tabs',
        children: [...new Array(2).keys()].map((item, index) => ({
          componentName: 'van-tab',
          props: {
            primaryKey: String(Math.floor(Math.random() * 10000) + item),
            title: '标签项' + index,
          },
        })),
      },
    },
  ],
}

export default meta

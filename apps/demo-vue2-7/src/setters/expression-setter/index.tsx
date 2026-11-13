/**
 * 扩展官方的 ExpressionSetter 组件
 */

import { project } from '@alilc/lowcode-engine'
import { isJSExpression } from '@alilc/lowcode-utils'
// import AliLowCodeEngineExt from '@wshoto/lowcode-engine-ext';
import AliLowCodeEngineExt from '@cdlab996/lowcode-engine-ext-vue'

const ReactExpressionSetter = AliLowCodeEngineExt.setterMap.ExpressionSetter
const ReactExpressionSetterView = ReactExpressionSetter.component

function isPlainObject(val: unknown): val is Record<string, any> {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function flatObject(
  obj: unknown,
  parentPath: string[] = [],
  target: Record<string, any> = {},
): Record<string, any> {
  if (obj && isPlainObject(obj)) {
    for (const key in obj) {
      const value = obj[key]
      const path = parentPath.concat(key)
      target[path.join('.')] = value
      isPlainObject(value) && flatObject(value, path, target)
    }
  }
  return target
}

class ExpressionSetterView extends ReactExpressionSetterView {
  getDataSource(): string[] {
    const schema = project.exportSchema()
    const stateMap = schema.componentsTree[0].state
    const dataSource = []

    const datasourceMap = schema.componentsTree[0]?.dataSource
    const list = datasourceMap?.list || []

    for (const key in stateMap) {
      dataSource.push(`this.${key}`)

      const state = stateMap[key]
      if (isJSExpression(state)) {
        try {
          const data = new Function(`return ${state.value}`)()
          const flatted = flatObject(data, ['this', key])
          if (isPlainObject(flatted)) {
            dataSource.push(...Object.keys(flatted))
          }
        } catch (err) {
          console.warn('parse error', err)
        }
      }
    }

    for (const item of list) {
      if (item && item.id) {
        dataSource.push(`this.${item.id}`)
      }
    }

    return dataSource
  }
}

const ExpressionSetter = {
  ...ReactExpressionSetter,
  component: ExpressionSetterView,
}

export default ExpressionSetter

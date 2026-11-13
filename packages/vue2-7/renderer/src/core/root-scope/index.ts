import { getCurrentInstance } from 'vue'
import type { RuntimeScope } from '../../utils'
import { parseSchema } from '../../utils'
import type { RendererProps } from '../base'
import { useRootCss } from './css'
import { useRootDataSource } from './data-source'
import { useRootLifecycles } from './lifecycle'
import { useRootMethods } from './methods'
import { createAddToScope, useRootExtraScope } from './scope'
import { useRootState } from './state'

export function useRootScope(rendererProps: RendererProps) {
  const { __schema: schema } = rendererProps

  const {
    props: propsSchema,
    state: stateSchema,
    methods: methodsSchema,
    lifeCycles: lifeCyclesSchema,
  } = schema ?? {}

  // 将全局属性配置应用到 scope 中
  const instance = getCurrentInstance()!
  const scope = instance.proxy! as unknown as RuntimeScope

  // 处理 props
  const props = parseSchema(propsSchema) ?? {}
  const data = useRootState(stateSchema)
  useRootMethods(methodsSchema, scope)
  const { runCreated } = useRootLifecycles(lifeCyclesSchema, scope)
  useRootCss(rendererProps)

  const addToScope = createAddToScope(scope, data)
  useRootExtraScope(rendererProps, addToScope)
  useRootDataSource(rendererProps, scope, data, addToScope)
  runCreated()

  return {
    scope,
    data,
    addToScope,
  }
}

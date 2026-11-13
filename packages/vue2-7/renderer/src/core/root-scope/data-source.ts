import { ref } from 'vue'
import { createDataSourceManager } from '../../data-source'
import type { RuntimeScope } from '../../utils'
import type { RendererProps } from '../base'
import type { AddToScope } from './scope'
import type { RootData } from './state'

export function useRootDataSource(
  rendererProps: RendererProps,
  scope: RuntimeScope,
  data: RootData,
  addToScope: AddToScope,
) {
  const { __schema: schema } = rendererProps

  // 处理 dataSource
  const { dataSource, dataSourceMap, reloadDataSource } =
    createDataSourceManager(
      schema.dataSource ?? { list: [], dataHandler: undefined },
      scope,
      rendererProps.__requestHandlersMap,
    )
  Object.keys(dataSourceMap)
    .filter((key) => !(key in data))
    .forEach((key) => {
      data[key] = ref()
    })
  addToScope({ dataSource, dataSourceMap, reloadDataSource })
  // Item failures are already recorded on the item and passed to its
  // errorHandler; swallow the aggregate rejection of the init load (R-08).
  reloadDataSource().catch(() => {})
}

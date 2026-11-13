import { ref } from 'vue'
import type { RendererProps } from '../base'
import { createDataSourceManager } from '../data-source'
import type { RuntimeScope } from '../scope'
import type { AddToScope } from './scope'
import type { RootData } from './state'

/**
 * Adds `dataSource`, `dataSourceMap` and `reloadDataSource` to the scope and
 * one state binding per data source. Returns the initial load, to run once
 * the state is reachable through the instance.
 */
export function useRootDataSource(
  rendererProps: RendererProps,
  scope: RuntimeScope,
  bindings: RootData,
  addToScope: AddToScope,
): () => void {
  const { __schema: schema } = rendererProps

  const { dataSource, dataSourceMap, reloadDataSource } =
    createDataSourceManager(
      schema.dataSource ?? { list: [], dataHandler: undefined },
      scope,
      rendererProps.__requestHandlersMap,
    )
  for (const key of Object.keys(dataSourceMap)) {
    if (!(key in bindings)) bindings[key] = ref()
  }
  addToScope({ dataSource, dataSourceMap, reloadDataSource })
  // Item failures are recorded on the item and passed to its errorHandler;
  // the aggregate rejection of the initial load is not an error of its own.
  return () => {
    reloadDataSource().catch(() => {})
  }
}

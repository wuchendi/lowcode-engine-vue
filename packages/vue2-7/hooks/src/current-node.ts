import type { Node } from '@alilc/lowcode-designer'
import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'
import type { InjectionKey } from 'vue'
import { inject } from 'vue'
import type { DesignMode } from './renderer-context'

export interface EnvNode {
  mode: DesignMode
  node: Node<IPublicTypeNodeSchema> | null
  isDesignerEnv: boolean
}

export interface DesignerEnvNode extends EnvNode {
  mode: 'design'
  node: Node<IPublicTypeNodeSchema>
  isDesignerEnv: true
}

export interface LiveEnvNode extends EnvNode {
  mode: 'live'
  node: null
  isDesignerEnv: false
}

export type CurrentNode = DesignerEnvNode | LiveEnvNode

export function getCurrentNodeKey(): InjectionKey<CurrentNode> {
  const win = window as Window & { __currentNode?: InjectionKey<CurrentNode> }
  let key = win.__currentNode
  if (!key) {
    key = Symbol('__currentNode')
    win.__currentNode = key
  }
  return key
}

export function useCurrentNode(): CurrentNode {
  const key = getCurrentNodeKey()
  return inject(
    key,
    () => {
      return {
        mode: 'live',
        node: null,
        isDesignerEnv: false,
      } as LiveEnvNode
    },
    true,
  )
}

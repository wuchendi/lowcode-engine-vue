import type { Node } from '@alilc/lowcode-designer'
import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'
import type { Component, ComponentPublicInstance, InjectionKey } from 'vue'
import { getCurrentInstance, inject } from 'vue'

export type DesignMode = 'live' | 'design'

export interface RendererContext {
  readonly components: Record<string, Component>
  readonly designMode: DesignMode
  getNode(id: string): Node<IPublicTypeNodeSchema> | null
  triggerCompGetCtx(
    schema: IPublicTypeNodeSchema,
    val: ComponentPublicInstance,
  ): void
}

export function getRendererContextKey(): InjectionKey<RendererContext> {
  const win = window as Window & {
    __rendererContext?: InjectionKey<RendererContext>
  }
  let key = win.__rendererContext
  if (!key) {
    key = Symbol('__rendererContext')
    win.__rendererContext = key
  }
  return key
}

export function useRendererContext() {
  const key = getRendererContextKey()
  return inject(
    key,
    () => {
      const props = getCurrentInstance()?.proxy ?? {}
      return {
        components: getPropValue(props, 'components', {}),
        designMode: getPropValue<DesignMode>(props, 'designMode', 'live'),
        getNode: getPropValue(props, 'getNode', () => null),
        triggerCompGetCtx: getPropValue(
          props,
          'triggerCompGetCtx',
          () => void 0,
        ),
      }
    },
    true,
  )
}

function getPropValue<T>(
  props: Record<string, unknown>,
  key: string,
  defaultValue: T,
): T {
  return (props[key] || props[`__${key}`] || defaultValue) as T
}

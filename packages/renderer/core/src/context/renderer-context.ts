import type { Node } from '@alilc/lowcode-designer'
import type { IPublicTypeNodeSchema } from '@alilc/lowcode-types'
import type { InjectionKey } from 'vue'
import { getCurrentInstance, inject } from 'vue'
import type { ComponentInstance, VueComponent } from '../adapter'

export type DesignMode = 'live' | 'design'

export interface RendererContext {
  readonly components: Record<string, VueComponent>
  readonly designMode: DesignMode
  getNode(id: string): Node<IPublicTypeNodeSchema> | null
  triggerCompGetCtx(
    schema: IPublicTypeNodeSchema,
    instance: ComponentInstance | null,
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
      const props = (getCurrentInstance()?.proxy ?? {}) as Record<
        string,
        unknown
      >
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

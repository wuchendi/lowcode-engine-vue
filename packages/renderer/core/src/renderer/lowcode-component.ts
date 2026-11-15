import type { IPublicTypeComponentSchema } from '@alilc/lowcode-types'
import { defineComponent, markRaw } from 'vue'
import type { VueComponent } from '../adapter'
import { getAdapter } from '../adapter'
import { Renderer } from './renderer'
import { declaredOptions, listenersAsProps } from './schema-component'

/**
 * A low-code component: renders its schema with the renderer props given by
 * `rendererProps` (components, ...), read at each render. It declares the
 * schema's props (so Vue 2 passes object values) and forwards props, other
 * attributes and listeners to the renderer, whose schema component declares
 * the props and emits.
 */
export function lowCodeComponent(
  schema: IPublicTypeComponentSchema,
  rendererProps: () => Record<string, unknown>,
): VueComponent {
  const adapter = getAdapter()
  const { props: declared } = declaredOptions(schema)
  return markRaw(
    defineComponent({
      name: schema.fileName || schema.componentName,
      inheritAttrs: false,
      props: Object.keys(declared),
      setup(props, setupContext) {
        return () =>
          adapter.h(Renderer, {
            ...setupContext.attrs,
            ...listenersAsProps(setupContext),
            ...rendererProps(),
            schema,
            props: { ...props },
          })
      },
    }),
  ) as VueComponent
}

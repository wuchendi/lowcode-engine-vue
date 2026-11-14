import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import type { VueVersion } from '@cdlab996/lowcode-code-generator'
import { createElement } from 'react'
import { GeneratorButton } from './generator-dialog'

export interface Options {
  /** Vue version of the generated project (default 3). */
  vue?: VueVersion
  /** Name of the generated package and zip (default `lowcode-app`). */
  name?: string
}

const PluginCodeGenerator = (
  ctx: IPublicModelPluginContext,
  options: Options = {},
) => {
  return {
    init() {
      ctx.skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'codeGenerator',
        props: { align: 'right' },
        content: createElement(GeneratorButton, {
          ctx,
          vue: options.vue ?? 3,
          name: options.name ?? 'lowcode-app',
        }),
      })
    },
  }
}

PluginCodeGenerator.pluginName = 'PluginCodeGenerator'
PluginCodeGenerator.meta = {
  preferenceDeclaration: {
    title: 'PluginCodeGenerator Plugin Parameter Definition',
    properties: [
      { key: 'vue', type: 'number', description: 'Vue version: 2 or 3' },
      {
        key: 'name',
        type: 'string',
        description: 'Name of the generated package',
      },
    ],
  },
}

export default PluginCodeGenerator

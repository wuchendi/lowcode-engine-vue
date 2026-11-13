import type { Component } from 'vue'
import type { RendererComponent } from './core'
import { RENDERER_COMPS } from './renderers'

export type RendererModules = Record<string, RendererComponent>

export class Config {
  private renderers: RendererModules = { ...RENDERER_COMPS }
  private configProvider: Component | null = null

  setConfigProvider(comp: Component | null) {
    this.configProvider = comp
  }

  getConfigProvider() {
    return this.configProvider
  }

  setRenderers(renderers: RendererModules) {
    this.renderers = renderers
  }

  getRenderers() {
    return this.renderers
  }
}

export default new Config()

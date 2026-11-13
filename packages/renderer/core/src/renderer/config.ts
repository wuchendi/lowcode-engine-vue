import type { VueComponent } from '../adapter'
import type { RendererComponent } from './base'
import { RENDERER_COMPS } from './renderers'

export type RendererModules = Record<string, RendererComponent>

/** Renderer-wide settings shared by every `Renderer` on the page. */
export class RendererConfig {
  private renderers: RendererModules = { ...RENDERER_COMPS }
  private configProvider: VueComponent | null = null

  /** Wraps every renderer output, e.g. a UI library config provider. */
  setConfigProvider(comp: VueComponent | null) {
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

export const rendererConfig = new RendererConfig()

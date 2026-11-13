import type { RendererComponent } from '../core'
import { BlockRenderer } from './block'
import { ComponentRenderer } from './component'
import { PageRenderer } from './page'

export const RENDERER_COMPS: Record<string, RendererComponent> = {
  PageRenderer,
  BlockRenderer,
  ComponentRenderer,
}

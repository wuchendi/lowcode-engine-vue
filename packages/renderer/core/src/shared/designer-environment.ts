import type { AssetItem, IPublicApiProject } from '@alilc/lowcode-types'

export interface DesignerEnvironment {
  /** URL of the Vue runtime build that defines `window.Vue`. */
  vue: string
}

/**
 * Loads Vue into the designer canvas before the simulator starts. Call it in
 * the designer page before `init`.
 */
export function setupDesignerEnvironment(
  project: IPublicApiProject,
  environment: DesignerEnvironment,
): void {
  project.onSimulatorHostReady((host) => {
    const assets = [
      {
        type: 'jsText',
        content:
          'window.__is_simulator_env__=true;window.__VUE_DEVTOOLS_GLOBAL_HOOK__=window.parent.__VUE_DEVTOOLS_GLOBAL_HOOK__;',
      },
      { type: 'jsUrl', content: environment.vue, id: 'vue' },
    ] as AssetItem[]
    host.set('environment', assets)
  })
}

export interface ExtraLib {
  path: string
  content: string
}

/** Vue version the edited code targets. */
export type VueVersion = 2 | 3

/** Type declarations of Vue and vue-router for the editor. */
export async function loadVueTypes(version: VueVersion): Promise<ExtraLib[]> {
  if (version === 2) return (await import('./vue2')).default
  // Read from the installed Vue 3 and vue-router 4 at build time
  return (await import('virtual:vue3-types')).default
}

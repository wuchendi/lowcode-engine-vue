import { material, project } from '@alilc/lowcode-engine'
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'
import { projectMaterials } from '@/plugins/materials'
import type { ProjectRecord, ProjectStorage } from '@/utils/project-storage'
import { createLocalProjectStorage } from '@/utils/project-storage'
import { vueVersion } from '@/version'

/** The project storage of the designer: replace it to save to a backend. */
export const projectStorage: ProjectStorage = createLocalProjectStorage(
  window.localStorage,
  vueVersion,
)

/** The project being designed and the packages of its materials. */
export async function currentProject(): Promise<ProjectRecord> {
  return {
    schema: project.exportSchema(IPublicEnumTransformStage.Save),
    packages: await filterPackages(material.getAssets()?.packages),
    ...(projectMaterials().length ? { materials: projectMaterials() } : {}),
  }
}

export async function saveProject() {
  await projectStorage.save(await currentProject())
}

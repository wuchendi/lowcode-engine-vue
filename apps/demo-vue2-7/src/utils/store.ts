import { material, project } from '@alilc/lowcode-engine'
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import type {
  IPublicTypePackage,
  IPublicTypeProjectSchema,
} from '@alilc/lowcode-types'
import { IPublicEnumTransformStage } from '@alilc/lowcode-types'

export const setPackgesToLocalStorage = async () => {
  const packages = await filterPackages(material.getAssets()?.packages)
  window.localStorage.setItem('packages', JSON.stringify(packages))
}

export const getPackgesToLocalStorage = (): IPublicTypePackage[] => {
  const packagesString = window.localStorage.getItem('packages')
  if (packagesString) {
    return JSON.parse(packagesString) as IPublicTypePackage[]
  }
  return []
}

export const setProjectSchemaToLocalStorage = () => {
  window.localStorage.setItem(
    'projectSchema',
    JSON.stringify(project.exportSchema(IPublicEnumTransformStage.Save)),
  )
}

export const getProjectSchemaToLocalStorage = ():
  | IPublicTypeProjectSchema
  | undefined => {
  const schemaString = window.localStorage.getItem('projectSchema')
  if (schemaString) {
    return JSON.parse(schemaString) as IPublicTypeProjectSchema
  }
  return undefined
}

export const saveSchema = async () => {
  setProjectSchemaToLocalStorage()
  await setPackgesToLocalStorage()
}

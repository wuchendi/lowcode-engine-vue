export type VueVersion = 2 | 3

/** How generated code imports the components of a material (see the material builder). */
export interface CodegenManifest {
  exports: Record<
    string,
    { package: string; exportName: string; subName?: string }
  >
  styles: string[]
  dependencies: Record<string, string>
}

/** A package of the designer assets, with its code generation manifest. */
export interface MaterialPackage {
  package: string
  codegen?: CodegenManifest
}

export interface GenerateOptions {
  vue: VueVersion
  /** Material packages: their manifests map components to library imports. */
  packages: MaterialPackage[]
  /** Name of the generated package. */
  name?: string
  /** Format the files with prettier. */
  format?: boolean
}

export interface GeneratedProject {
  /** File path -> content. */
  files: Record<string, string>
  /** What could not be exported as is. */
  warnings: string[]
}

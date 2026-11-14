import { strToU8, zipSync } from 'fflate'

/** The files as a zip archive. */
export function toZip(files: Record<string, string>): Uint8Array {
  return zipSync(
    Object.fromEntries(
      Object.entries(files).map(([path, content]) => [path, strToU8(content)]),
    ),
  )
}

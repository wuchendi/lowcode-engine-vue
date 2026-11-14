#!/usr/bin/env node
// Usage: node scripts/check-release-deps.mjs <group>
// Fails when a package of packages/<group> depends (workspace:) on a package
// of another group whose version is not on npm yet: release that group first.
import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const group = process.argv[2]
if (!group) {
  console.error('Usage: check-release-deps.mjs <group>')
  process.exit(1)
}

const read = (dir) =>
  JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'))
const workspace = new Map()
for (const g of readdirSync('packages', { withFileTypes: true })) {
  if (!g.isDirectory()) continue
  for (const p of readdirSync(join('packages', g.name), {
    withFileTypes: true,
  })) {
    try {
      const pkg = read(join('packages', g.name, p.name))
      workspace.set(pkg.name, {
        group: g.name,
        version: pkg.version,
        private: pkg.private,
      })
    } catch {}
  }
}

const missing = []
for (const p of readdirSync(join('packages', group), { withFileTypes: true })) {
  let pkg
  try {
    pkg = read(join('packages', group, p.name))
  } catch {
    continue
  }
  if (pkg.private) continue
  const deps = { ...pkg.dependencies, ...pkg.peerDependencies }
  for (const [name, range] of Object.entries(deps)) {
    const dep = workspace.get(name)
    if (!String(range).startsWith('workspace:') || !dep || dep.group === group)
      continue
    let published = ''
    try {
      published = execFileSync(
        'npm',
        ['view', `${name}@${dep.version}`, 'version'],
        { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
      ).trim()
    } catch {}
    if (!published)
      missing.push(
        `${pkg.name} needs ${name}@${dep.version} (packages/${dep.group}): not on npm`,
      )
  }
}

if (missing.length) {
  for (const line of missing) console.error(`::error::${line}`)
  console.error(`Release the groups above before ${group}.`)
  process.exit(1)
}
console.log(`packages/${group}: dependencies on other groups are published`)

#!/usr/bin/env node
import { parseArgs } from 'node:util'
import { buildMaterial, devMaterial } from './build'

const usage = `Usage:
  lowcode-material build [--clean] [--mode <mode>]
  lowcode-material dev [--host <host>] [--port <port>] [--mode <mode>]`

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    clean: { type: 'boolean' },
    mode: { type: 'string' },
    host: { type: 'string' },
    port: { type: 'string' },
    help: { type: 'boolean', short: 'h' },
  },
})

const command = positionals[0]
const root = process.cwd()

if (values.help || (command !== 'build' && command !== 'dev')) {
  console.log(usage)
  process.exit(values.help ? 0 : 1)
}

try {
  if (command === 'build') {
    await buildMaterial({ root, mode: values.mode, clean: values.clean })
  } else {
    await devMaterial({
      root,
      mode: values.mode,
      host: values.host,
      port: values.port ? Number(values.port) : undefined,
    })
  }
} catch (error) {
  console.error(error)
  process.exit(1)
}

#!/usr/bin/env node
import { runCli } from './run-cli'

process.exitCode = await runCli(process.argv.slice(2), {
  cwd: process.cwd(),
  fetch,
  log: (line) => console.log(line),
  error: (line) => console.error(line),
})

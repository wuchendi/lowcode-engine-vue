#!/usr/bin/env bash
# Removes dependencies and build outputs (run `pnpm install` afterwards).
# Keeps .cache/material-docs (the fetched component library docs).

cd "$(dirname "$0")/.." || exit 1

DIRS_TO_DELETE=(
  "node_modules"
  "apps/*/node_modules"
  "apps/*/dist"
  "packages/*/node_modules"
  "packages/*/*/node_modules"
  "packages/*/*/dist"
  "packages/tools/material-builder/tests/fixtures/*/dist"
  "packages/tools/material-builder/tests/fixtures/*/node_modules"
  "test-results"
  "playwright-report"
)

echo "Start cleaning up directories: ${DIRS_TO_DELETE[*]}"

for dir in "${DIRS_TO_DELETE[@]}"
do
  # Unquoted on purpose: the patterns expand to the matching directories
  rm -rf $dir && echo "Removed $dir directory."
done

echo "Cleanup completed successfully!"

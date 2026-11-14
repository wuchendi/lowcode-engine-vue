# 20261114-1419-renderer-without-leaf Render nodes without the Leaf wrapper

- **status**: completed
- **priority**: P1
- **owner**: claude/session-gn15nk27
- **createdAt**: 2026-11-14 14:19

## Description

Every node is wrapped in a Leaf component (use.ts:172): libraries reading their children's vnodes (Element UI Tabs, Ant Design Tabs / Steps / Collapse) render wrong in the canvas, the preview and production.

## ActiveForm

Render nodes without the Leaf wrapper

## Dependencies

- **blocked by**: (none)
- **blocks**: (none)

## Notes

From the repository audit of 2026-11-14 (commit d422dd4). Plan: 20261114-1419-renderer-without-leaf

- complete: E2E 15/15

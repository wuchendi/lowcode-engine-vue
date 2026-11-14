# 20261114-0812-material-metas-docs Align the material metas with the component docs

- **status**: completed
- **createdAt**: 2026-11-14 08:12
- **approvedAt**: 2026-11-14 08:25
- **relatedTask**: 20261114-0812-material-metas-docs

## Context

Audit (`.tmp/audit/audit.cjs`): the built metas of each material compared
with the props / emits of the installed library components, plus the doc
links.

| Material     | Library              | Metas | Findings                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | -------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| element-ui   | element-ui 2.15.14   | 8     | missing common props (Button `nativeType`/`autofocus`, Checkbox `border`/`size`/`trueLabel`...), Input lists 11 props the component does not have (`rows`, `prepend`, `max`...), Select has a prop named `唯一性标识` (name and title swapped), Card has no docUrl, several docUrls point to the 2.14 docs                                                                                |
| element-plus | element-plus 2.14.8  | 9     | Cascader events `onExpand-change` / `onVisible-change` never fire (Element Plus emits `expandChange` / `visibleChange`; verified in Vue 3), Affix docUrl points to the Button page, missing props (Button `icon`/`nativeType`/`color`, Checkbox `border`/`size`...)                                                                                                                       |
| vant2        | vant 2.13.9          | 5     | Button has a prop named `是否为圆形按钮`, missing Button props (`round`, `block`, `color`...), all docUrls on the dead Gitee Pages domain                                                                                                                                                                                                                                                 |
| vant4        | vant 4.10.2          | 5     | same Button issues; Tabs uses the Vant 2 events (`click`, `disabled`; Vant 4 has `click-tab`), all docUrls dead                                                                                                                                                                                                                                                                           |
| antd-vue4    | ant-design-vue 4.2.6 | 1     | only Button, with 1 of 16 props                                                                                                                                                                                                                                                                                                                                                           |
| antd-vue1    | ant-design-vue 1.7.8 | 78    | metas follow the React antd / antdv 3+ API: props such as `bordered`, `virtual`, `showNow`, `items`, `tagRender` and events written as props (`onChange`) that 1.x does not have, across 50+ components; Button has a prop named `功能`; 69 metas without docUrl; sub-components (`AFormItem`, `ASelectOption`...) are re-exported in a way the code generation manifest does not capture |

## Versions

The user asked for exact versions: each material targets one library
version, Vue 2 materials the last one supporting Vue 2 (npm dist-tags and
peerDependencies, checked 2026-11-14):

| Vue | vue                  | vue-router                                      | element                    | vant                 | ant-design-vue          |
| --- | -------------------- | ----------------------------------------------- | -------------------------- | -------------------- | ----------------------- |
| 2   | 2.7.16 (`v2-latest`) | 3.6.5 (`legacy`)                                | element-ui 2.15.14 (final) | 2.13.9 (`latest-v2`) | 1.7.8 (2.x needs Vue 3) |
| 3   | 3.5.45               | 4.6.4 (4.6.5 is one day old; minimumReleaseAge) | element-plus 2.14.8        | 4.10.2               | 4.2.6                   |

Docs of those versions: element.eleme.cn (2.15), vant-ui.github.io/vant/v2,
1x.antdv.com; element-plus.org, vant-ui.github.io/vant, antdv.com.

## Proposal

0. Pin the versions above: exact versions in the material package.json
   files (the code generation manifest, hence generated projects, take
   them) and in the `vue2-7` / `vue3` catalogs.
1. Audit as a test: a Vitest suite (Node, jsdom) per material that loads the
   source metas and the library components and fails on
   - meta props the component does not declare (unknown props),
   - Vue 3 events the component does not emit (except `onClick` falling
     through to the root),
   - metas without `docUrl` or on a dead domain;
     missing props are reported, not failed (not every prop belongs in the
     setter panel).
2. Fix every meta against the official docs of the installed version
   (element.eleme.cn 2.15, element-plus.org, vant-ui.github.io/vant/v2 and
   /vant, 1x.antdv.com, antdv.com): prop names, setters and options,
   defaults, events, slots, docUrl; add the common props the docs list for
   each existing component.
3. antd-vue1: rewrite the metas on the 1.x API (largest part).
4. Material builder: capture sub-component re-exports
   (`const { Link: AnchorLink } = Anchor; export { AnchorLink as ... }`) in
   the code generation manifest as `exportName` + `subName`.
5. Rebuild the materials; E2E: the components pane lists them, each
   component drops and renders on both Vue versions without errors.

Not included: new components (antd-vue4 stays at Button, the other
libraries keep their component lists) unless asked.

## Risks

- Changed prop names break props saved in existing schemas (only for the
  wrong names, which do not work today anyway).
- antd-vue1 is large: 78 metas.

## Scope

`packages/materials/*` (metas, tests), `packages/tools/material-builder`
(manifest), docs.

## Alternatives

- Only fix the hard bugs (wrong names, dead links, events that never fire):
  small, but leaves antd-vue1 on a foreign API and the props incomplete.
- Generate metas from the library props: complete but without the doc
  titles, setters and options; can seed the rewrite.

## Annotations

- 2026-11-14: approved with a larger scope: every component of each library
  gets a meta (not only the existing ones). Metas are generated from the API
  tables of the versioned docs sources, checked against the installed
  component definitions, with hand-written overrides (snippets, nesting,
  modals).
- 2026-11-14: implementation notes.
  - Docs sources: the API tables of element-ui v2.15.14, vant v2.13.9 and
    v4.10.2, ant-design-vue 4.2.6 (markdown at those tags), element-plus
    2.14.8 (English markdown at the tag, Chinese texts from
    element-plus.org), ant-design-vue 1.7.8 (1x.antdv.com, rendered: the
    1.x docs repository is gone). A one-off generator (outside the
    repository) parsed them, kept the props each installed component
    declares (plus documented native attributes such as `placeholder`),
    and wrote the metas: element-ui 77, element-plus 107, vant2 81, vant4
    99, antd-vue1 94, antd-vue4 101. Ant Design Vue 1.x `Card.Grid` has no
    documented props and no meta.
  - Events: Vue 2 `onVisible-change`, Vue 3 `onVisibleChange`; Ant Design
    `value(v-model)` on Vue 3 is `v-model:value`.
  - Ant Design reads `Select.Option`, `Table.Column`, `Mentions.Option`...
    from the vnodes of its children; under the renderer's Leaf they are not
    recognised, so the main components take `options` / `columns` and those
    sub-component metas have no snippet (not in the components pane).
  - Renderer (Vue 2): components rendered by a Leaf see their parent
    component in `$parent` / `$children` (a global `beforeCreate` mixin in
    the Vue 2 adapter). Element UI's Steps, Carousel and Tabs (TabPane read
    `$parent.currentName`, its content never showed) needed it. Making Leaf
    abstract was tried and dropped: Vue 2.7 resolves provide / inject
    through `$parent`. The builtin Slot component is named `LcSlot` (`Slot`
    is a reserved tag for Vue 2).
  - Material builder and code generator: `export const ASelectOption =
    Select.Option` is a manifest export with a `subName`; generated code
    imports `Select` and reads `.Option`.
  - Generated projects pin Vue and vue-router (2.7.16 / 3.6.5, 3.5.45 /
    4.6.4) like the materials; create-lowcode templates follow the catalogs.
  - Verified: the audit test per material; every component inserted into the
    canvas on both Vue versions without errors (246 Vue 2, 301 Vue 3; one
    ordering flake of ElTableColumn not reproducible on its own); a project
    with every component generated by the CLI builds on both versions.

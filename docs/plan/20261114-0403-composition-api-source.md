# 20261114-0403-composition-api-source Composition API in the source panel

- **status**: completed
- **createdAt**: 2026-11-14 04:03
- **approvedAt**: 2026-11-14 04:04
- **relatedTask**: 20261114-0402-composition-api-source

## Context

- Source panel (`packages/plugins/vue-code-editor`):
  - shows `schema.meta.originCode` when present, otherwise fills an Options
    API template (`config/default-code.ts`: `props` / `data` / `methods` /
    lifecycles) from `state`, `methods`, `lifeCycles`;
  - on save, `parseCode` (`components/JsEditor/parse.ts`) turns the code into
    `state` (from `data`), `methods`, `lifeCycles` (lifecycles and the
    `init*` options; imports become `initModule`), and stores the code in
    `meta.originCode`. A `setup()` option already becomes
    `lifeCycles.setup` (default branch);
  - `addFunction` (event binding creates a handler) inserts a method into
    `methods` (or adds `methods`); `focusByFunctionName` finds
    `name(` / `async name(` at a line start;
  - bug: no `break` after `case 'emits'`: an object `emits` falls through
    into `methods`.
- Runtime: the renderer already runs `lifeCycles.setup` (bound to the
  scope; may be async); returned refs are unwrapped on the instance, so
  expressions such as `this.info.text` keep working. No renderer change.
- Designer consumers of `componentsTree[0].state` / `methods` (engine-ext):
  variable binding dialog (state tree, methods), event binding dialog
  (methods), expression setter (autocomplete of state). Bindings returned by
  `setup()` are invisible to them.
- Sample schemas (`apps/designer/src/assets/schema-vue{2,3}.json`): Options
  API (`state`, `methods`, `mounted` / `beforeMount`; Vue 2 loads a data
  source in `mounted`), plus a leftover React-class `originCode` at the root.
  Pages saved in localStorage keep their own code.

## Proposal

1. Parser (`parse.ts`), tests first (new Vitest project for the plugins'
   pure modules):
   - fix the `emits` fall-through;
   - for a `setup()` whose body ends with `return { ... }`, extract the
     returned bindings: a name bound to `ref(literal)` / `reactive({...})`
     (static literals) is a state entry with that initial value;
     `computed(...)` and other values are state entries with `null`; a
     function declaration or function expression is a method. `parseCode`
     returns them as `setupBindings: { state, methods }`.
2. `transformSchema` stores them in `meta.setupBindings` (removed when
   empty) next to `meta.originCode`.
3. Default code: a page without `state` / `methods` / `lifeCycles` gets a
   Composition API template (`setup(props, { emit })` with
   `return {}`); a schema with Options API data keeps the generated Options
   API code (both syntaxes stay supported).
4. `addFunction`: when the component has `setup()` with a returned object,
   insert `function <name>(...) {...}` before the `return` and add the name
   to the returned object (event templates are method shorthand:
   `name(args) {}` becomes `function name(args) {}`); otherwise the
   current `methods` path. `focusByFunctionName` also matches
   `function <name>(`.
5. engine-ext: one helper reads state and methods of the root schema from
   `state` / `methods` plus `meta.setupBindings`; the variable binding
   dialog, event binding dialog and expression setter use it.
6. Sample schemas: Composition API code (`ref` / `reactive`, functions,
   `onMounted` / `onBeforeMount`; Vue 2 keeps loading the data source and
   assigns `info.value`), generated with the panel's parser so
   `lifeCycles` (`setup`, `initModule`), `meta.originCode` and
   `meta.setupBindings` match what a save would produce; the leftover root
   `originCode` is removed.
7. Docs: design doc (source panel and `meta.setupBindings`), plugin README,
   changelog.

Verification: parser unit tests (both syntaxes, bindings, `emits`);
`lint`, `lint:type`, full tests; designer E2E on Vue 2.7 and Vue 3: the
sample page renders, the panel shows the `setup()` code, the variable
dialog lists the setup state and methods, the event dialog lists the
methods, binding a new event inserts a function into `setup()` and its
return, saving re-renders.

## Risks

- Static extraction only sees literal initial values and the returned
  object literal; other shapes still run, but their bindings are not listed
  by the dialogs (documented).
- `this` in `setup()` is the runtime scope (existing behaviour); the samples
  only use it inside lifecycle callbacks (`this.dataSourceMap`), as the
  current samples do.
- Pages already saved in localStorage keep their Options API code until
  reset.

## Scope

vue-code-editor (`parse.ts`, `JsEditor.tsx`, `config/default-code.ts`,
`pane/index.tsx`, tests), engine-ext (helper + 3 consumers), designer sample
schemas, `vitest.config.ts`, docs.

## Alternatives

See the task discussion: B (template only, dialogs blind to setup bindings)
and C (keep the Options API) were not chosen.

## Annotations

- Implementation notes:
  - The insertion logic of `addFunction` moved into a pure
    `insertFunction(code, params)` (`JsEditor/insert.ts`) so it is unit
    tested; it does not insert a function already declared in `setup()`.
  - `meta.setupBindings` is set to `undefined` when empty (no `delete`).
  - The default page template is `setup() { return {} }` (no params).
  - engine-ext: the variable dialog now also lists variables without a
    literal value (it skipped `null` state), and the expression setter
    suggests `this.<name>` (Vue) instead of `this.state.<name>` (React).
  - New Vitest project `plugins` for the plugins' pure modules.
  - Verified: 8 new unit tests, `lint`, `lint:type`, 318 tests; designer E2E
    on Vue 2.7 and Vue 3 (panel shows `setup()`, dialogs list the setup
    bindings, a new handler is inserted into `setup()` and saved into
    `meta.setupBindings`), plus the designer and interaction E2E.

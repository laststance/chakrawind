# Chakra Wind Design (Approved)

- Date: 2026-03-05
- Project: `chakrawind`
- Owner: Raphtalia
- Status: Approved for planning

## 1. Goal

Build **Chakra Wind**, a Tailwind CSS style-engine replacement for Chakra UI, with strict compatibility and two install paths:

- npm package install (`node_modules`)
- shadcn registry install (`npx shadcn add <url>`)

Success condition is defined by objective compatibility tests, including visual parity.

## 2. Locked Decisions

- Compatibility mode: **Strict parity**
- Baseline target: `@chakra-ui/react@3.34.0` (exact pin)
- Browser requirement for visual pass: **Chromium (Linux) only**
- Scope: `@chakra-ui/react` only (icons/snippets/blocks are out of v1 scope)
- React support: **React 19 only**
- License policy: MIT-compliant reference/import is allowed with strict attribution
- Release policy: **0.x incremental releases** with compatibility progress reporting
- Realworld validation: Include Twitter Clone parity test suite (`test:realworld`)

## 3. Out of Scope (v1)

- `@chakra-ui/icons` compatibility
- Chakra snippets/blocks parity
- React 18 support
- Multi-browser visual pass gate (WebKit/Firefox)

## 4. Approach Selection

Three options were evaluated:

1. Fork-first (clone and replace internals)
2. **Compatibility-test-first (selected)**
3. Clean-room full rewrite

Why option 2 was selected:

- Prevents ambiguous definition of "complete reproduction"
- Enables measurable 0.x delivery with a hard pass/fail gate
- Supports npm + shadcn registry output from one source of truth

Trade-off:

- Higher early investment in harness/test infra

Impact:

- Lower long-term maintenance risk than fork-first

## 5. Repository Architecture

```txt
chakrawind/
  packages/
    chakrawind-system
    chakrawind-tailwind
    chakrawind-react
    chakrawind-registry
  apps/
    compat-harness
    visual-lab
    realworld-twitter-base
    realworld-twitter-chakra
    realworld-twitter-wind
  fixtures/
    chakra-upstream-3.34.0
  tests/
    parity
    realworld-e2e
  docs/
    plans/
```

### Package responsibilities

#### `@laststance/chakrawind-system`

- Source of truth for:
  - tokens
  - semantic tokens
  - recipes / slotRecipes
  - conditions / breakpoints
- React-independent domain package

#### `@laststance/chakrawind-tailwind`

- Tailwind preset/plugin conversion layer from `chakrawind-system`
- CSS variable and style-engine bridge for Tailwind runtime
- shadcn coexistence safeguards (token naming + preflight strategy)

#### `@laststance/chakrawind-react`

- Chakra-compatible React API surface
- Components/hooks/provider for React 19
- Depends on system + tailwind bridge

## 6. Upstream Fixture Strategy

- Keep Chakra upstream reference in `fixtures/chakra-upstream-3.34.0`
- Use it as **comparison target only**, not as product package
- Track imported/referenced files with attribution headers and NOTICE aggregation

## 7. Compatibility Definition (DoD)

Chakra Wind is considered "fully reproduced" only when all are true:

- `export_coverage = 100%`
- `type_contract_pass = 100%`
- `runtime_contract_pass = 100%`
- `a11y_contract_pass = 100%`
- `visual_contract_pass = 100%` (Chromium Linux)
- `install_smoke_pass = 100%` (npm + registry)
- `realworld_parity_pass = 100%`

No waiver-based release for full-reproduction claim.

## 8. Test Architecture

## 8.1 Layered parity tests

1. API surface parity
2. Type contract parity
3. Runtime DOM/behavior parity
4. Accessibility parity
5. Visual parity
6. Installation parity (npm + shadcn registry)
7. Realworld parity (`test:realworld`)

## 8.2 Visual parity rules

- `toHaveScreenshot()` required
- Determinism settings:
  - `animations: "disabled"`
  - `caret: "hide"`
  - stable viewport/font/container settings
- Dynamic regions must be masked or normalized
- Default policy: zero-diff target (`maxDiffPixels = 0`), exceptions require explicit allowlist with reason

## 8.3 Realworld parity (`test:realworld`)

### Source policy

- Copy fixed source from:
  - `/Users/ryotamurakami/laststance/playwright-requirements/playground`
- Copy mode selected: **A (in-repo fixed copy)**

### App variants

- `apps/realworld-twitter-chakra`: Chakra UI baseline implementation
- `apps/realworld-twitter-wind`: Chakra Wind implementation
- Both must expose equivalent UI states and stable selectors

### Test execution model

- One shared E2E suite under `tests/realworld-e2e`
- Playwright projects:
  - `realworld-chakra`
  - `realworld-wind`
- Same scenarios run against both projects

### Mandatory screenshot checkpoints

- Initial render screenshot is required
- Every UI state transition step requires `toHaveScreenshot()`
  - examples: open/close, hover/focus-visible, like toggle, retweet toggle, modal states, form validation states

### Command contract

- Build first, then Playwright:
  - `pnpm build && pnpm exec playwright test --reporter=list`
- `webServer.command` uses `pnpm start`
- Add script:
  - `pnpm test:realworld`

## 9. Distribution Design

### npm distribution

- Publish 0.x packages:
  - `@laststance/chakrawind-system`
  - `@laststance/chakrawind-tailwind`
  - `@laststance/chakrawind-react`

### shadcn registry distribution

- Generate `registry.json` + `registry-item.json` files
- Host generated registry under `/r/*.json`
- Install path:
  - `npx shadcn@latest add <registry-item-url>`

## 10. Quality Gates for Release

Release is blocked if any fail:

- parity layers (API/type/runtime/a11y/visual/install)
- `test:realworld` parity
- license attribution checks

Each 0.x release includes compatibility progress metrics:

- components covered
- props covered
- visual pass rate
- a11y pass rate
- realworld parity pass rate

## 11. Risks and Mitigations

1. Visual flakes due environment differences
- Mitigation: containerized Linux runner and deterministic screenshot config

2. Shadcn coexistence conflicts (preflight/tokens/class collisions)
- Mitigation: explicit CSS var namespace strategy and integration fixtures

3. Upstream drift
- Mitigation: baseline pin (`3.34.0`) and explicit upgrade workflow

4. License management errors
- Mitigation: attribution header policy + NOTICE generation + CI check

## 12. Handoff

This design is approved and ready to move into implementation planning.

Note:
- The `writing-plans` skill was requested by the brainstorming workflow but is not available in this environment (`~/.agents/skills/writing-plans` and `~/.codex/skills/writing-plans` not found).
- Fallback is to create an implementation plan via standard planning workflow in the next step.

# Chakra Wind Implementation Plan

- Date: 2026-03-05
- Input Design: `docs/plans/2026-03-05-chakrawind-design.md`
- Scope: Planning only (no implementation in this document)

## 1. Milestone Strategy

1. `M0` Bootstrap and baseline lock
2. `M1` Compatibility harness and parity gates
3. `M2` Core packages (`system`, `tailwind`, `react`) skeleton
4. `M3` Component parity expansion
5. `M4` Realworld parity (`test:realworld`)
6. `M5` Distribution and 0.x release process

## 2. Work Breakdown

## M0: Bootstrap and baseline lock

- Initialize repo and workspace layout
- Pin baseline target to `@chakra-ui/react@3.34.0`
- Define Node/PNPM/toolchain constraints
- Add license policy docs (`NOTICE`, attribution rule)

Exit criteria:

- Workspace builds cleanly with empty package skeletons
- Baseline version lock is enforceable in CI

## M1: Compatibility harness and parity gates

- Build `apps/compat-harness`
- Add upstream fixture ingestion at `fixtures/chakra-upstream-3.34.0`
- Implement parity gate runners:
  - API surface
  - type contract
  - runtime contract
  - a11y contract
  - visual contract
  - install smoke (npm + registry)

Exit criteria:

- All gate commands exist and run in CI (can fail initially on parity)

## M2: Package skeletons

- `@laststance/chakrawind-system`
  - token/semantic token contract definitions
- `@laststance/chakrawind-tailwind`
  - preset/plugin APIs
- `@laststance/chakrawind-react`
  - provider and initial compatibility layer
- `@laststance/chakrawind-registry`
  - registry manifest generation scaffolding

Exit criteria:

- Public package APIs are frozen for 0.x initial consumers
- Type checks pass across package boundaries

## M3: Component parity expansion

- Prioritize components by dependency graph and usage frequency
- Add per-component parity matrix:
  - props
  - states
  - a11y behaviors
  - visual snapshots
- Track parity progress in machine-readable report

Exit criteria:

- Target component batch reaches full parity per DoD gates

## M4: Realworld parity (`test:realworld`)

- Copy fixed Twitter Clone source into `apps/realworld-twitter-base`
- Create:
  - `apps/realworld-twitter-chakra`
  - `apps/realworld-twitter-wind`
- Build shared E2E suite in `tests/realworld-e2e`
- Ensure screenshot checks:
  - initial render
  - every UI state transition

Exit criteria:

- Same E2E suite passes on both projects
- Chakra baseline snapshots are stable and Wind matches them

## M5: Distribution and release

- npm package publish pipeline for 0.x
- shadcn registry build and hosting pipeline
- Add compatibility report output to release notes

Exit criteria:

- `pnpm test:e2e:realworld` and all parity gates pass in release CI
- npm + registry install smoke passes

## 3. CI Command Contract

```bash
pnpm build
pnpm parity:baseline:freeze
pnpm parity:baseline:verify
pnpm test:api
pnpm test:types
pnpm test:runtime
pnpm test:a11y
pnpm test:visual:parity
pnpm test:visual:policy
pnpm test:command-scope:policy
pnpm test:coexist
pnpm test:install:npm
pnpm test:install:registry
pnpm test:e2e:realworld
pnpm realworld:flow-manifest:verify
pnpm test:realworld:catalog
pnpm legal:notice:verify
pnpm legal:attribution:verify
```

- Scope policy reference:
  - `docs/specs/test-command-scope.md`

## 4. Branch and Release Policy

- Work on feature branches
- 0.x incremental releases only while parity is incomplete
- Full parity claim only when all DoD gates are 100%

## 5. Risks and Controls

1. Snapshot instability
- Control: deterministic config and fixed Linux environment

2. Chakra/shadcn style collisions
- Control: namespace and preflight strategy tests

3. Attribution regressions
- Control: CI checker for source attribution and NOTICE updates

## 6. Immediate Next Actions

1. Initialize workspace and package scaffolds
2. Implement parity harness command shells
3. Import realworld base app and set dual-project Playwright config
4. Wire CI gates with temporary expected-fail markers where needed

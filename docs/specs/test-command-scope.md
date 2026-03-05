# Test Command Scope Specification

## Purpose

Prevent cross-phase contamination by enforcing phase-scoped test commands.

## Scope Rule

- Quality Gates must call phase-scoped wrapper scripts.
- Direct use of broad command `pnpm exec playwright test` is prohibited in gate definitions.

## Required Wrapper Commands

### Parity Phase (`M1`, `M3`, `M5`)

- `pnpm test:visual:parity`
  - Runs visual parity suites only (no realworld suites).

### Coexistence Phase (`M1`, `M5`)

- `pnpm test:coexist`
  - Runs coexistence matrix suites only.

### Realworld Phase (`M4`, `M5`)

- `pnpm test:e2e:realworld`
  - Runs realworld E2E suites only.
- `pnpm test:realworld`
  - Backward-compatible alias for `pnpm test:e2e:realworld`.
- `pnpm test:realworld:catalog`
  - Runs catalog completeness checks only.

## CI Enforcement

- CI must fail when a gate definition uses unscoped playwright command directly.
- Required policy check command:
  - `pnpm test:command-scope:policy`
- `pnpm test:command-scope:policy` must be included in required gate commands for `M1` and `M5`.

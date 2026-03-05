# Chakra Wind Project Agent Guide

## Project Mission

Chakra Wind is a Chakra UI compatible implementation that uses Tailwind CSS as its style engine.

## Non-Negotiable Requirements

1. Full Chakra UI reproduction with Tailwind CSS
- Target baseline is fixed to `@chakra-ui/react@3.34.0`.
- "Fully reproduced" means all parity gates are green (API, types, runtime, a11y, visual, coexist, install, realworld).
- `100%` metrics must use baseline manifests generated from `@chakra-ui/react@3.34.0`.

2. Coexistence with shadcn/ui without regressions
- Chakra Wind and shadcn/ui must be usable in the same application.
- Coexistence must be validated by dedicated integration tests (`test:coexist`) with fixed matrix:
- preflight: on/off
- color mode: light/dark
- token override: off/on

3. Two supported installation paths
- npm package installation (`node_modules` path).
- shadcn registry installation (`npx shadcn add <registry-item-url>` path).

## Source of Truth for Delivery

The phase documents define how to satisfy the three requirements:

- `docs/plans/phases/M0-bootstrap-and-baseline-lock.md`
- `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
- `docs/plans/phases/M2-core-packages-skeleton.md`
- `docs/plans/phases/M3-component-parity-expansion.md`
- `docs/plans/phases/M4-realworld-parity-test-realworld.md`
- `docs/plans/phases/M5-distribution-and-0x-release-process.md`

Audit specifications:

- `docs/specs/parity-baseline-manifest-spec.md`
- `docs/specs/coexistence-test-matrix.md`
- `docs/specs/install-smoke-matrix.md`
- `docs/specs/visual-diff-policy.md`
- `docs/specs/realworld-transition-catalog.md`

Do not claim requirement completion unless corresponding phase Quality Gates are satisfied.

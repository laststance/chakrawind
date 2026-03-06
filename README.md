# Chakra Wind

Chakra Wind is an OSS project to reproduce Chakra UI on top of Tailwind CSS.

## Core Requirements

1. Reproduce Chakra UI with Tailwind CSS
- Baseline target: `@chakra-ui/react@3.34.0`.
- Completion condition: all parity gates are green.
- `100%` metrics must use baseline manifests generated from fixed baseline.
- Phase gates must use scoped test wrappers (see test command scope spec).

2. Work together with shadcn/ui without issues
- Chakra Wind and shadcn/ui can be used simultaneously in one app.
- No style/token/preflight collisions are allowed.
- Coexistence is validated by `test:coexist` matrix:
- preflight: on/off
- color mode: light/dark
- token override: off/on

3. Support two installation methods
- npm install (`node_modules`).
- shadcn registry install (`npx shadcn@latest add <registry-item-url>`).

## How These Requirements Are Achieved

The phase specs are the execution contract for requirement delivery:

- [M0 Bootstrap and baseline lock](docs/plans/phases/M0-bootstrap-and-baseline-lock.md)
- [M1 Compatibility harness and parity gates](docs/plans/phases/M1-compatibility-harness-and-parity-gates.md)
- [M2 Core packages skeleton](docs/plans/phases/M2-core-packages-skeleton.md)
- [M3 Component parity expansion](docs/plans/phases/M3-component-parity-expansion.md)
- [M4 Realworld parity (`test:realworld`)](docs/plans/phases/M4-realworld-parity-test-realworld.md)
- [M5 Distribution and 0.x release process](docs/plans/phases/M5-distribution-and-0x-release-process.md)

Requirement completion is determined by each phase Quality Gate, not by subjective review.
The M4 `realworld_parity_pass` indicator is generated at `artifacts/reports/m4/realworld-parity.json`.

## Design and Planning Documents

- [Design](docs/plans/2026-03-05-chakrawind-design.md)
- [Implementation Plan](docs/plans/2026-03-05-chakrawind-implementation-plan.md)
- [Project TODO](docs/TODO.md)
- [Phase Index](docs/plans/phases/README.md)
- [Chakra Baseline Runtime Contract](docs/specs/chakra-baseline-runtime-contract.md)
- [Parity Baseline Manifest Spec](docs/specs/parity-baseline-manifest-spec.md)
- [Coexistence Test Matrix](docs/specs/coexistence-test-matrix.md)
- [Install Smoke Matrix](docs/specs/install-smoke-matrix.md)
- [Visual Diff Policy](docs/specs/visual-diff-policy.md)
- [Component Parity Matrix (M3)](docs/specs/component-parity-matrix.md)
- [Realworld Transition Catalog](docs/specs/realworld-transition-catalog.md)
- [Realworld Flow Manifest Spec](docs/specs/realworld-flow-manifest-spec.md)
- [Test Command Scope Spec](docs/specs/test-command-scope.md)
- [License Attribution Policy](docs/specs/license-attribution-policy.md)
- [Release Preflight Checklist](docs/specs/release-preflight-checklist.md)
- [Developer Required Commands (M0)](docs/specs/developer-required-commands.md)

## Quick Verification (Post-Clone)

Run the M0 bootstrap validation contract with:

```bash
pnpm verify:m0
```

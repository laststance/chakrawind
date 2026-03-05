# Pass 1: Spec Completeness Review (R2)

- Date: 2026-03-05
- Scope:
  - `README.md`, `AGENTS.md`
  - `docs/plans/2026-03-05-chakrawind-design.md`
  - `docs/plans/2026-03-05-chakrawind-implementation-plan.md`
  - `docs/plans/phases/M0..M5`
  - `docs/specs/*`
- Method:
  - task-style checklist review
  - sequential-thinking for severity classification

## Findings (Ordered by Severity)

## P1-1 (S2): Visual test command canonical name is ambiguous

- References:
  - `docs/specs/visual-diff-policy.md`
  - `docs/specs/test-command-scope.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
- Issue:
  - Visual policy lists both `pnpm test:visual` and `pnpm test:visual:parity` as required commands.
  - Scope spec and phase gates are aligned to `pnpm test:visual:parity`.
  - Canonical gate command is therefore not single-sourced.
- Risk:
  - CI and local workflows can diverge (different scripts used for the same gate).
  - Pass/fail interpretation can drift when scripts evolve.
- Recommendation:
  - Define `pnpm test:visual:parity` as canonical gate command.
  - If `pnpm test:visual` remains, mark it explicitly as non-gate alias.

## P1-2 (S2): Command-scope policy enforcement is optional, not gate-bound

- References:
  - `docs/specs/test-command-scope.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - Scope spec defines `pnpm test:command-scope:policy`, but marks it optional.
  - M1/M5 Quality Gate required command lists do not include this policy check.
- Risk:
  - Cross-phase contamination can regress without failing official gates.
  - Rule exists in prose but not in measurable enforcement.
- Recommendation:
  - Promote `pnpm test:command-scope:policy` to required gate command in M1 and M5.
  - Add Fail Fast clause when unscoped Playwright invocation is detected in gate definitions.

## P1-3 (S2): M4 deliverable list is missing one declared script artifact

- References:
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md`
- Issue:
  - Step 5 declares `pnpm test:e2e:realworld` script addition.
  - Deliverables list includes `test:realworld` and `test:realworld:catalog` only.
- Risk:
  - Handoff ambiguity on what script artifacts must exist at M4 completion.
- Recommendation:
  - Add `test:e2e:realworld` script to M4 deliverables explicitly.

## P1-4 (S2): Realworld catalog denominator is not fixed

- References:
  - `docs/specs/realworld-transition-catalog.md`
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md`
- Issue:
  - Completeness gate says:
    - `Catalog IDs referenced in tests == catalog entries for implemented flows`
  - `implemented flows` has no source-of-truth definition.
- Risk:
  - Denominator can be reinterpreted release-by-release.
  - `realworld_parity_pass = 100%` can become non-comparable across revisions.
- Recommendation:
  - Introduce a fixed flow manifest (for example `artifacts/realworld/flow-manifest.json`) and define:
    - pass denominator source
    - update process
    - checksum/versioning policy

## Summary

- S1: 0
- S2: 4
- S3: 0

Current state is implementable, but gate interpretation still has measurable ambiguity.

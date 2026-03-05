# Pass 4: Release/Legal Review (R1)

- Date: 2026-03-05
- Iteration: `Pass4-R1` (Action 1: Review)
- Scope:
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
  - `docs/specs/install-smoke-matrix.md`
  - release/legal related docs under `docs/`

## Findings (Severity Ordered)

## P4-1 (S1): Legal policy source-of-truth document is missing

- References:
  - `docs/plans/phases/M0-bootstrap-and-baseline-lock.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - M0/M5 mention NOTICE and attribution-header operation, but there is no dedicated legal policy spec document under `docs/specs/`.
- Risk:
  - Legal gate interpretation depends on tribal knowledge.
  - Release can pass process checks without enforceable legal rulebook.
- Recommendation:
  - Add `docs/specs/license-attribution-policy.md` with:
    - attribution header rule
    - NOTICE update rule
    - third-party intake checklist
    - failure conditions

## P4-2 (S1): Legal gate has no explicit command contract

- Reference:
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - Gate M5-4 defines outcomes (`NOTICE反映`, `規約違反0`) but has no required verification commands in the command list.
- Risk:
  - Gate is not mechanically measurable in CI.
- Recommendation:
  - Add required commands in M5:
    - `pnpm legal:notice:verify`
    - `pnpm legal:attribution:verify`
  - Add required artifacts for each command.

## P4-3 (S2): Release preflight checklist is not explicitly versioned as an artifact

- References:
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
  - `docs/TODO.md`
- Issue:
  - M5 mentions release template and metrics, but no canonical preflight checklist spec/doc is required artifact.
- Risk:
  - Release readiness verification can vary between maintainers.
- Recommendation:
  - Add `docs/specs/release-preflight-checklist.md`.
  - Require this checklist in M5 artifacts.

## Summary

- Open `S1`: 2
- Open `S2`: 1
- Open `S3`: 0

Pass4 remains `In Progress` until P4-1..P4-3 are patched and re-reviewed.

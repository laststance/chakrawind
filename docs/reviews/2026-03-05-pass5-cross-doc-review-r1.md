# Pass 5: Cross-Doc Consistency Review (R1)

- Date: 2026-03-05
- Iteration: `Pass5-R1` (Action 1: Review)
- Scope:
  - `README.md`, `AGENTS.md`
  - design / implementation plan
  - phase docs (`M0..M5`)
  - `docs/TODO.md`

## Findings (Severity Ordered)

## P5-1 (S2): Implementation Plan CI command contract drifts from hardened M5 gate

- References:
  - `docs/plans/2026-03-05-chakrawind-implementation-plan.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - Implementation plan CI command list misses commands that are now mandatory in M5:
    - `pnpm test:command-scope:policy`
    - `pnpm realworld:flow-manifest:verify`
    - `pnpm legal:notice:verify`
    - `pnpm legal:attribution:verify`
- Risk:
  - Handoff from plan to phase execution can run outdated gate set.
- Recommendation:
  - Sync implementation plan CI command contract to M5 mandatory set.

## P5-2 (S2): TODO Pass1 patch queue remains partially unchecked after Pass1 close

- Reference:
  - `docs/TODO.md`
- Issue:
  - Pass1 is closed, but `Immediate Patch Queue` still has unchecked `対象:` entries.
- Risk:
  - TODO status semantics become contradictory.
  - Exit checklist interpretation can diverge between maintainers.
- Recommendation:
  - Mark completed target entries as checked or archive the section as historical.

## P5-3 (S2): Design release gate wording uses non-canonical realworld command label

- Reference:
  - `docs/plans/2026-03-05-chakrawind-design.md`
- Issue:
  - Release gate text emphasizes `test:realworld` parity, while canonical gate command has been hardened to `test:e2e:realworld` (with alias note).
- Risk:
  - Readers can treat alias as primary contract.
- Recommendation:
  - Update release gate wording to canonical-first:
    - `test:e2e:realworld` parity (`test:realworld` as backward-compatible alias).

## Summary

- Open `S1`: 0
- Open `S2`: 3
- Open `S3`: 0

Pass5 remains `In Progress` until P5-1..P5-3 are patched and re-reviewed.

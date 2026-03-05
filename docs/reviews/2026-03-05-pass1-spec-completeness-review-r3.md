# Pass 1: Spec Completeness Review (R3)

- Date: 2026-03-05
- Iteration: `Pass1-R3` (Action 1: Review)
- Scope:
  - `README.md`, `AGENTS.md`
  - `docs/plans/2026-03-05-chakrawind-design.md`
  - `docs/plans/2026-03-05-chakrawind-implementation-plan.md`
  - `docs/plans/phases/M0..M5`
  - `docs/specs/*`
- Review Focus:
  - 抜け漏れ
  - 曖昧語
  - 未定義の判定条件

## Findings (Severity Ordered)

## P1-1 (S2): Visual command canonical name is ambiguous

- References:
  - `docs/specs/visual-diff-policy.md`
  - `docs/specs/test-command-scope.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
- Issue:
  - Visual policy で `pnpm test:visual` と `pnpm test:visual:parity` が併記され、正準コマンドが1つに固定されていない。
- Required Fix:
  - Gate正準を `pnpm test:visual:parity` に固定する。
  - `pnpm test:visual` は残すなら alias と明記する。

## P1-2 (S2): Command-scope policy is not bound to gate criteria

- References:
  - `docs/specs/test-command-scope.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - `pnpm test:command-scope:policy` が optional で、M1/M5の必須Gateコマンドに接続されていない。
- Required Fix:
  - M1/M5の必須検証コマンドに追加する。
  - 非scopedなPlaywright呼び出しをFail Fast条件へ追加する。

## P1-3 (S2): M4 deliverables are missing one declared script artifact

- Reference:
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md`
- Issue:
  - 手順には `test:e2e:realworld` script追加があるが、成果物一覧に未記載。
- Required Fix:
  - 成果物一覧へ `test:e2e:realworld` script を追記する。

## P1-4 (S2): Realworld completeness denominator is not fixed

- References:
  - `docs/specs/realworld-transition-catalog.md`
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md`
- Issue:
  - `implemented flows` の分母ソースが未定義で、`realworld_parity_pass=100%` の比較可能性が揺らぐ。
- Required Fix:
  - 分母ソースを固定（例: `artifacts/realworld/flow-manifest.json`）。
  - update手順、versioning、checksum方針を仕様化する。

## Summary

- `S1`: 0
- `S2`: 4
- `S3`: 0

Pass1 is still `In Progress` until P1-1..P1-4 are patched and re-reviewed.

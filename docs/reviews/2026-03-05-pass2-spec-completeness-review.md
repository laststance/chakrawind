# Pass 2: Spec Completeness Review

- Date: 2026-03-05
- Scope:
  - `AGENTS.md`
  - `README.md`
  - `docs/plans/2026-03-05-chakrawind-design.md`
  - `docs/plans/phases/M1..M5`
  - `docs/specs/*`
- Focus:
  - Verify Pass 1 fixes (P1-1..P1-3)
  - Detect remaining auditability gaps

## Pass 1 Fix Verification

- `P1-1` (denominator lock): **Resolved**
  - baseline manifest spec added and linked from design/phases.
- `P1-2` (coexist gate): **Resolved**
  - `coexist_contract_pass` and `test:coexist` matrix added.
- `P1-3` (realworld transition catalog): **Resolved**
  - catalog spec and `test:realworld:catalog` command added.

## Findings (Ordered by Severity)

## P2-1: Dual install support lacks fixed environment matrix

- References:
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - `test:install:npm` / `test:install:registry` は定義済みだが、
    どのプロジェクト条件で検証するか（Vite/Nextなど）が固定されていない。
- Risk:
  - 特定構成のみ成功しても「2インストール方式サポート達成」と誤判定される。
- Required update:
  - `docs/specs/install-smoke-matrix.md` を追加し、最低検証行列を固定:
    - Vite React 19 (clean)
    - Next.js App Router React 19 (clean)
    - shadcn導入済み状態での再導入

## P2-2: Visual diff threshold policy is not enforced in M1 gate

- References:
  - `docs/plans/2026-03-05-chakrawind-design.md` (zero-diff policy)
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
- Issue:
  - 設計書には `maxDiffPixels = 0` 方針があるが、M1のQuality Gateでは
    しきい値・例外登録（allowlist）・証跡の必須化が未定義。
- Risk:
  - 実装でしきい値を緩和してもフェーズ合格できる。
- Required update:
  - M1へ下記を追加:
    - 既定しきい値: `maxDiffPixels=0`
    - 例外は `visual-allowlist.json` に理由・期限付きで記録
    - allowlist差分をCIで監査

## P3-1: M4 handoff step does not list `test:realworld:catalog` as added script

- References:
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md` (手順 5)
- Issue:
  - Quality Gateには `pnpm test:realworld:catalog` があるが、
    手順5の「追加script」には `pnpm test:realworld` のみ記載。
- Risk:
  - 実装時にcatalog検証スクリプトの追加が漏れる。
- Required update:
  - 手順5のscript定義に `pnpm test:realworld:catalog` を明記。

## P3-2: Baseline manifest immutability check is implied but not operationalized

- References:
  - `docs/specs/parity-baseline-manifest-spec.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
- Issue:
  - 「Manual edits are prohibited」とあるが、改ざん検知の運用（checksum/signature）が未定義。
- Risk:
  - denominator sourceの改ざんに気づけない。
- Required update:
  - `pnpm parity:baseline:verify` を追加し、manifest hash検証をCI必須にする。

## Conclusion

- Current status: **Pass 1 blockers are closed**
- Remaining blockers before high-confidence implementation: `P2-1`, `P2-2`
- Recommended next action:
  - Apply targeted patch for `P2-1`, `P2-2`, `P3-1` (quick win)
  - Optionally add `P3-2` tamper-proofing in same patch

## Patch Status Update

- Update date: 2026-03-05
- Applied:
  - `P2-1` install smoke matrix spec added and linked (`docs/specs/install-smoke-matrix.md`)
  - `P2-2` visual diff policy spec added and enforced in M1/M5 (`docs/specs/visual-diff-policy.md`)
  - `P3-1` M4 step updated to include `pnpm test:realworld:catalog`
  - `P3-2` baseline manifest tamper check added (`pnpm parity:baseline:verify`)
- Next:
  - Run Pass 3 review for final doc consistency and closeout

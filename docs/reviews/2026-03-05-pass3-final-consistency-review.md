# Pass 3: Final Consistency Review

- Date: 2026-03-05
- Scope:
  - `AGENTS.md`, `README.md`
  - design / implementation plan
  - phase docs (`M0..M5`)
  - spec docs
  - pass1/pass2 review logs
- Focus:
  - Final cross-doc consistency
  - Remaining ambiguity that can affect gate operation

## Findings (Ordered by Severity)

## P2-1: Playwrightコマンドのスコープが広く、フェーズ分離を壊す可能性

- References:
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
  - `docs/plans/2026-03-05-chakrawind-design.md`
- Issue:
  - Gateコマンドで `pnpm exec playwright test --project=chromium --reporter=list` を使うと、
    将来的にテストディレクトリ増加時に M1 で M4系テストまで実行される可能性がある。
- Risk:
  - フェーズ独立性が低下し、M1の合否が後続フェーズ実装に依存する。
- Recommendation:
  - フェーズ専用コマンドへ分離（例: `pnpm test:visual:parity`, `pnpm test:e2e:realworld`）。
  - M1は parity系のみ、M4/M5で realworld 系を追加する構成に固定。

## P3-1: Coexistence visual snapshotの命名規約が未固定

- References:
  - `docs/specs/coexistence-test-matrix.md`
  - `docs/specs/visual-diff-policy.md`
- Issue:
  - coexist用スナップショットの命名規約・保存先が未指定。
- Risk:
  - parity系/realworld系とスナップショットが混在し、差分追跡が困難になる。
- Recommendation:
  - 例: `__screenshots__/coexist/{matrix-id}/{name}.png` を固定。
  - allowlistも同階層キーで管理。

## Validation Checks Executed

- Cross-file keyword consistency scan: completed
- Markdown link existence check: completed (`NO_MISSING_MD_LINKS`)

## Conclusion

- Review時点では Pass 1/2での主要欠陥は解消済み。
- 残件は運用明確化レベル（P2-1, P3-1）だった。
- Patch適用後の最終状態は次節 `Patch Status (Post-Review)` を正とする。

## Patch Status (Post-Review)

- `P2-1`: Resolved
  - Scoped command policy was added:
    - `docs/specs/test-command-scope.md`
  - Broad playwright command in phase/design/implementation gate docs was replaced by:
    - `pnpm test:visual:parity`
    - `pnpm test:e2e:realworld`
    - `pnpm test:realworld:catalog`
- `P3-1`: Resolved
  - Coexist snapshot naming/storage/allowlist key contract was fixed in:
    - `docs/specs/coexistence-test-matrix.md`
    - `docs/specs/visual-diff-policy.md`

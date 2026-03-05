# Pass 1: Spec Completeness Review

- Date: 2026-03-05
- Scope:
  - `AGENTS.md`
  - `README.md`
  - `docs/plans/2026-03-05-chakrawind-design.md`
  - `docs/plans/phases/M0..M5`
- Review Focus:
  - Requirement completeness
  - Measurability of Quality Gates
  - Ambiguity that may allow false-positive completion

## Findings (Ordered by Severity)

## P1-1: 「100%完全再現」の分母が固定されていない

- References:
  - `docs/plans/2026-03-05-chakrawind-design.md` (DoD: `export_coverage = 100%`, `type_contract_pass = 100%`)
  - `AGENTS.md` (`all parity gates are green`)
  - `README.md` (`all parity gates are green`)
- Issue:
  - 100%の定義に必要な「対象集合（分母）」の生成規則が未定義。
  - 例: export対象をどこまで含むか（deprecated、internal alias、型専用exportなど）。
- Risk:
  - 分母を縮小することで形式上100%を作れてしまう。
- Required Spec Update:
  - baseline package (`@chakra-ui/react@3.34.0`) から分母を自動抽出する仕様を固定。
  - 分母生成結果を versioned artifact として保存（例: `artifacts/parity/baseline-export-manifest.json`）。

## P1-2: shadcn同時利用要件に対する専用Gateが未定義

- References:
  - `AGENTS.md` (coexistence without regressions)
  - `README.md` (No style/token/preflight collisions)
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - 共存要件は記述されているが、`test:coexist` のような専用合格判定がない。
- Risk:
  - 単体互換は合格でも、shadcn併用時のみ発生する衝突を見逃す。
- Required Spec Update:
  - 新規Gateを追加:
    - `coexist_contract_pass = 100%`
  - 新規コマンドを追加:
    - `pnpm test:coexist`
  - 検証マトリクスを固定:
    - preflight on/off
    - dark/light
    - token overrideあり/なし

## P1-3: `test:realworld` の「UI変化ごと screenshot」定義が列挙不十分

- References:
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md` (UI変化ごと screenshot)
  - `docs/plans/2026-03-05-chakrawind-design.md` (Mandatory screenshot checkpoints)
- Issue:
  - 「UI変化」の完全な対象一覧が未固定。
  - 例示はあるが、全ステップ網羅判定の基準ファイルがない。
- Risk:
  - 取りこぼした遷移があっても、テスト合格してしまう。
- Required Spec Update:
  - `realworld-transition-catalog.md` を作成し、screen x transition x assertion を固定。
  - 各specで catalog ID を参照するルールを追加。

## P2-1: dual install 要件の検証環境マトリクス不足

- References:
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`
- Issue:
  - npm install / registry install のSmokeはあるが、検証対象プロジェクト条件が未固定。
- Risk:
  - 特定構成のみ成功し、一般利用で失敗する。
- Required Spec Update:
  - install smoke matrixを明文化:
    - Vite React 19
    - Next.js App Router React 19
    - clean project (no prior chakra/shadcn deps)

## P2-2: Visual比較の許容差分ポリシーがフェーズ文書へ反映されていない

- References:
  - `docs/plans/2026-03-05-chakrawind-design.md` (zero diff policy)
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
- Issue:
  - 設計書にはゼロ差分方針があるが、M1のGateとして明文化されていない。
- Risk:
  - 実装時に閾値を緩く設定しても検知できない。
- Required Spec Update:
  - M1 Gateへ「デフォルト閾値・例外登録手順」を追加。

## Pass 1 Conclusion

- Current status: **Not yet complete for strict auditability**
- Blocking gaps: `P1-1`, `P1-2`, `P1-3`
- Recommended next action:
  - Apply targeted spec patch for P1 items first
  - Re-run Pass 2 review after patch

## Patch Status Update

- Update date: 2026-03-05
- Applied:
  - `P1-1` denominator lock via baseline manifest spec and phase/design updates
  - `P1-2` coexist gate via `test:coexist` and fixed coexistence matrix
  - `P1-3` transition catalog via `docs/specs/realworld-transition-catalog.md` and phase/design gate updates
- Next:
  - Execute Pass 2 review to validate no new ambiguities remain

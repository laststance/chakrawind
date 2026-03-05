# Chakra Wind TODO

最終更新: 2026-03-05

## 0. 運用ルール

- このTODOは「レビューオーケストレーション」と「仕様反映」の進捗管理に使う
- 完了条件は各項目の出力ファイルとQuality Gate記述で判定する
- 仕様変更後は必ず対象docの相互参照を確認する

## 0.1 フェーズ内の循環ルール（重要）

- 1つのPassは1回で終わらない。以下を同じPass内で繰り返す
  - `Review -> Findings発行 -> Patch適用 -> Re-Review -> 再判定`
- 再レビューで新規問題が出た場合は、同じPass番号のまま継続する
  - 例: `Pass 1 R1 -> R2 -> R3`
- 次のPassへ進む条件
  - そのPassの `S1/S2` が解消済み、または「意図的にDeferred」で記録済み
  - 修正対象ファイルとレビュー文書が相互参照で結びついている
- つまり進め方は「Pass1完了後にPass2へ」ではなく、
  - `Pass1を閉じるまで反復` -> `Pass2開始` -> `Pass2を閉じるまで反復` の順序

## 0.2 ステータス定義

- `Open`: まだ着手していない
- `In Progress`: 修正または再レビュー中
- `Blocked`: 外部情報待ち（仕様確認、依存待ち）
- `Closed`: そのPassの終了条件を満たした

## 1. Review Orchestration

### Pass 1: Spec Completeness Review

- [x] Pass 1実施（抜け漏れ・曖昧語・未定義条件）
- [x] 重大度付き findings を作成
- [x] レビュー文書保存
  - `docs/reviews/2026-03-05-pass1-spec-completeness-review-r3.md`
- [x] Re-Review完了（`S1/S2/S3` open=0）
- [x] Pass1 Close判定記録

### Pass 2: Tech Validity Review

- [ ] Chakra UI / shadcn / Playwright 仕様との整合レビュー
- [ ] 公式情報に基づく前提更新（古い前提の修正）
- [ ] レビュー文書保存（`docs/reviews/*pass2*.md`）

### Pass 3: Quality Gate Review

- [ ] Gate測定可能性レビュー（コマンド・証跡・再現性）
- [ ] CI再現性レビュー（Fail Fastと証跡の一致）
- [ ] レビュー文書保存（`docs/reviews/*pass3*.md`）

### Pass 4: Release/Legal Review

- [ ] npm/registry配布手順の監査
- [ ] MIT表記 / NOTICE運用の監査
- [ ] 公開前チェックリスト確定版の作成

### Pass 5: Cross-Doc Consistency Review

- [ ] Design ↔ Implementation Plan ↔ M0-M5 の整合チェック
- [ ] 矛盾修正パッチの適用
- [ ] 最終整合レポート作成

## 2. Immediate Patch Queue (from Pass 1 R2)

### P1-1 (S2): Visual command canonicalization

- [x] `test:visual:parity` を正準コマンドとして明記
- [x] `test:visual` を残す場合は「非Gate alias」と明示
- [ ] 対象:
  - `docs/specs/visual-diff-policy.md`
  - `docs/specs/test-command-scope.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`

### P1-2 (S2): Command-scope policy gate binding

- [x] `pnpm test:command-scope:policy` をM1 Gate必須コマンドに追加
- [x] `pnpm test:command-scope:policy` をM5 Gate必須コマンドに追加
- [x] 非scoped Playwright呼び出しをFail Fast条件に追加
- [ ] 対象:
  - `docs/specs/test-command-scope.md`
  - `docs/plans/phases/M1-compatibility-harness-and-parity-gates.md`
  - `docs/plans/phases/M5-distribution-and-0x-release-process.md`

### P1-3 (S2): M4 deliverable completeness

- [x] M4成果物に `test:e2e:realworld` script を追記
- [ ] 対象:
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md`

### P1-4 (S2): Realworld denominator lock

- [x] `implemented flows` の分母ソースを固定仕様化
- [x] `artifacts/realworld/flow-manifest.json` の追加検討
- [x] update手順・versioning・checksum方針を仕様へ追加
- [ ] 対象:
  - `docs/specs/realworld-transition-catalog.md`
  - `docs/plans/phases/M4-realworld-parity-test-realworld.md`

## 3. Exit Checklist (このTODO完了条件)

- [ ] Pass 1〜5 のレビュー文書が出揃っている
- [ ] P1-1〜P1-4 が仕様に反映されている
- [ ] 参照リンク切れなし
- [ ] `AGENTS.md` / `README.md` と phase/spec 記述が整合している

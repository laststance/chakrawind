# M3: Component Parity Expansion

- Phase ID: `M3`
- Phase Name: Component parity expansion
- Status: Planned
- Depends On: `M2`

## 1. 目的

`M3` の目的は、Chakra UI 互換コンポーネント実装を段階的に拡張し、各コンポーネントを客観的に「合格」させることです。

- コンポーネント単位で互換進捗を管理する
- props/state/a11y/visualを統合した合格判定を適用する
- 0.x リリースで互換率を継続公開する

## 2. スコープ

### In Scope

- コンポーネント優先度定義
- パリティマトリクス（props/state/a11y/visual）作成
- 段階実装と段階合格
- 互換率レポート生成

### Out of Scope

- v1時点で対象外と定義した領域（iconsなど）

## 3. 手順（実施順）

1. 優先度の確定
- 利用頻度と依存関係に基づいて実装順を確定

2. コンポーネント単位の仕様化
- それぞれに対して以下を定義
- 対象props
- 期待DOM属性
- a11y挙動
- visual scenario一覧

3. 実装
- `react` 層で互換コンポーネント実装
- `system` と `tailwind` に必要なトークン/recipeを追加

4. 検証
- `M1` の7層ゲートで評価
- Fail差分を解消

5. 進捗更新
- `parity-report.json` 生成
- READMEに互換率を反映

## 4. 仕様（Definition）

- 合格はコンポーネント単位で判定する
- 一部propsのみ一致は「部分互換」として扱い、完全合格に含めない
- visual scenario不足は未完了扱い

## 5. 成果物

- 互換コンポーネント群
- コンポーネント別パリティマトリクス
- `parity-report.json`

## 6. Quality Gate（完了条件）

### Gate M3-1: コンポーネント単位の合格定義

- 各対象コンポーネントに評価基準が文書化されている
- 判定基準は API/type/runtime/a11y/visual を含む

### Gate M3-2: 合格の機械判定

- ゲート結果が手動判断ではなくCI判定で確定する
- 合格/未合格がレポートで追跡可能

### Gate M3-3: 互換率可視化

- リリース時に互換率を自動出力できる
- 互換率算出ロジックが固定されている

### Gate M3-4: 回帰防止

- 既存合格コンポーネントで回帰が発生しない
- 回帰時にFail層が特定できる

### 検証コマンド（必須）

```bash
pnpm test:api
pnpm test:types
pnpm test:runtime
pnpm test:a11y
pnpm exec playwright test --project=chromium --reporter=list
```

### 証跡（Artifacts）

- コンポーネント別パリティマトリクス
- `parity-report.json`
- 回帰履歴（前回比差分）

## 7. 失敗条件

- 実装優先順が不明でスプリント計画が不可能
- 合格基準が曖昧でレビュー依存になる
- 互換率の算出式がブレる

## 8. 完了チェックリスト

- [ ] 優先順リスト確定
- [ ] パリティマトリクス整備
- [ ] 主要対象の段階合格
- [ ] 互換率レポート出力

# M1: Compatibility Harness and Parity Gates

- Phase ID: `M1`
- Phase Name: Compatibility harness and parity gates
- Status: Planned
- Depends On: `M0`

## 1. 目的

`M1` の目的は、Chakra Wind の「完全再現」を定量判定できる互換テスト基盤を構築することです。

- 互換性の判定を実装ではなくテスト仕様として固定する
- API/Type/Runtime/A11y/Visual/Install の6層ゲートを導入する
- 後続フェーズで作る実装の合否判定軸を先に完成させる

## 2. スコープ

### In Scope

- `apps/compat-harness` の構築
- `fixtures/chakra-upstream-3.34.0` の比較用参照整備
- 6層パリティゲートの最小実装
- CIでゲートを実行する導線

### Out of Scope

- 全コンポーネントの合格達成
- 実装最適化

## 3. 手順（実施順）

1. 比較対象の固定化
- upstream Chakra の比較用fixtureを配置
- 比較対象バージョンをメタデータに記録

2. ハーネス作成
- Chakra版とChakra Wind版を同一シナリオで描画する実験場を作る
- DOM比較のための正規化処理（ランダムID除去など）を定義

3. ゲート定義
- `test:api`: export差分検知
- `test:types`: 型受理/拒否一致
- `test:runtime`: DOM/イベント挙動一致
- `test:a11y`: role/aria/keyboard/focus一致
- `test:visual`: screenshot一致
- `test:install:*`: npm / registry 導入成功

4. CI統合
- 失敗時にどの層で落ちたか一意に判別できるログ設計
- 将来の`test:realworld`追加に備えた拡張可能構成にする

## 4. 仕様（Definition）

- 互換判定は「レイヤー合算」で行う
- 1レイヤーでもFailなら互換未達
- Visualは Chromium (Linux) を唯一の必須環境とする
- すべての比較は `@chakra-ui/react@3.34.0` 基準で実施する

## 5. 成果物

- 互換ハーネスアプリ
- 6層ゲートコマンド
- CI統合ジョブ
- 失敗分析用の標準レポート形式

## 6. Quality Gate（完了条件）

### Gate M1-1: ゲート実行可能性

- 以下コマンドがCI/ローカル双方で実行可能
- `pnpm test:api`
- `pnpm test:types`
- `pnpm test:runtime`
- `pnpm test:a11y`
- `pnpm exec playwright test --project=chromium --reporter=list`
- `pnpm test:install:npm`
- `pnpm test:install:registry`

### Gate M1-2: 判定再現性

- 同一コミットで実行結果が再現可能
- flakeの既知要因（アニメーション、caret、動的値）の抑制が設定済み

### Gate M1-3: 差分可観測性

- Fail時にコンポーネント名、テスト層、差分要素を特定できる
- Visual Fail時に差分画像を保存できる

### Gate M1-4: 後続フェーズ接続性

- `M2` でコンポーネント実装を追加すると即時にゲートで評価できる

### 検証コマンド（必須）

```bash
pnpm test:api
pnpm test:types
pnpm test:runtime
pnpm test:a11y
pnpm exec playwright test --project=chromium --reporter=list
pnpm test:install:npm
pnpm test:install:registry
```

### 証跡（Artifacts）

- API差分レポート
- 型契約テスト結果
- Runtime/A11yレポート
- Visual差分画像（fail時）
- npm/registry導入ログ

## 7. 失敗条件

- ハーネスが片系（ChakraまたはWind）しか描画できない
- テストが層別に分離されていない
- CIで再現不能なローカル依存挙動がある

## 8. 完了チェックリスト

- [ ] 6層ゲートのコマンド定義完了
- [ ] CI接続完了
- [ ] 差分レポート整備完了
- [ ] `M2` 受け入れ可能

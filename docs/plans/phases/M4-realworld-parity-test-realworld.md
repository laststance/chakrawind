# M4: Realworld Parity (`test:realworld`)

- Phase ID: `M4`
- Phase Name: Realworld parity
- Status: Planned
- Depends On: `M3`

## 1. 目的

`M4` の目的は、実アプリ規模のシナリオで Chakra UI と Chakra Wind の実運用互換性を検証することです。

- Twitter Clone を2実装で運用し、同一E2Eを適用する
- 初期表示とUI状態変化ごとに `toHaveScreenshot()` を必須化する
- 合格時のみ `realworld_parity_pass = 100%` とする

## 2. スコープ

### In Scope

- ベースアプリ取り込み（固定コピー）
- Chakra版とWind版の2アプリ構築
- 共通Playwright E2Eスイート作成
- UI変化単位のVisualチェック導入

### Out of Scope

- 新機能追加
- Playwright要件外のブラウザ必須化

## 3. 手順（実施順）

1. ベース取り込み
- ソース元:
- `/Users/ryotamurakami/laststance/playwright-requirements/playground`
- 方式: `A`（in-repo fixed copy）
- 取り込み先: `apps/realworld-twitter-base`

2. 二系統アプリ作成
- `apps/realworld-twitter-chakra`
- `apps/realworld-twitter-wind`
- 機能差分は作らず、UI層のみ置換可能な構成にする

3. 共通E2E整備
- `tests/realworld-e2e` にシナリオを集約
- Playwright projects:
- `realworld-chakra`
- `realworld-wind`

4. Visual checkpoint強制
- 初期表示直後で screenshot
- UI状態変化（例: open/close, like/unlike, validation error）ごとに screenshot
- 差分ログに step名を必須記録

5. 実行コマンド統合
- `pnpm build && pnpm exec playwright test --reporter=list`
- `webServer.command = pnpm start`
- 追加script: `pnpm test:realworld`

## 4. 仕様（Definition）

- 2プロジェクトは同一E2Eシナリオを使う
- Chakra版 snapshot を基準とし、Wind版は同名snapshotで比較する
- screenshot未取得のUI変化ステップはテスト不備としてFail扱い

## 5. 成果物

- `apps/realworld-twitter-base`
- `apps/realworld-twitter-chakra`
- `apps/realworld-twitter-wind`
- `tests/realworld-e2e`
- `test:realworld` script

## 6. Quality Gate（完了条件）

### Gate M4-1: 同一シナリオ保証

- Chakra/Wind の両方で同一specファイルが実行される
- 分岐した別テストを持たない

### Gate M4-2: Visual checkpoint完全性

- 初期表示 screenshot が全specに存在
- UI変化イベントの後に screenshot が必ず存在
- checkpoint漏れ検知ルールを導入済み

### Gate M4-3: 実行成功

- `pnpm test:realworld` が安定して成功
- Fail時に「どのステップの見た目差分か」を特定できる

### Gate M4-4: 完全再現判定接続

- `realworld_parity_pass` 指標がメインDoDに連結される

### 検証コマンド（必須）

```bash
pnpm build && pnpm exec playwright test --reporter=list
pnpm test:realworld
```

### 証跡（Artifacts）

- Chakra/Wind 両projectの実行ログ
- 各UI変化ステップのsnapshot
- fail時の差分画像とstep名

## 7. 失敗条件

- テストがChakra専用/ Wind専用に分岐している
- UI変化に対する screenshot が欠落している
- `webServer` が `pnpm start` 以外を使用している

## 8. 完了チェックリスト

- [ ] base copy固定完了
- [ ] dual app完成
- [ ] shared E2E整備
- [ ] UI変化ごとの screenshot 強制化
- [ ] `pnpm test:realworld` 緑化

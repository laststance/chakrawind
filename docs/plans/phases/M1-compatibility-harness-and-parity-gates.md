# M1: Compatibility Harness and Parity Gates

- Phase ID: `M1`
- Phase Name: Compatibility harness and parity gates
- Status: Planned
- Depends On: `M0`

## 1. 目的

`M1` の目的は、Chakra Wind の「完全再現」を定量判定できる互換テスト基盤を構築することです。

- 互換性の判定を実装ではなくテスト仕様として固定する
- API/Type/Runtime/A11y/Visual/Coexist/Install の7層ゲートを導入する
- 後続フェーズで作る実装の合否判定軸を先に完成させる

## 2. スコープ

### In Scope

- `apps/compat-harness` の構築
- `fixtures/chakra-upstream-3.34.0` の比較用参照整備
- 分母固定用 baseline manifest 生成
- baseline manifest 改ざん検知（checksum verify）
- visual diff policy（zero-diff + allowlist運用）整備
- dual install smoke matrix整備
- 7層パリティゲートの最小実装
- CIでゲートを実行する導線

### Out of Scope

- 全コンポーネントの合格達成
- 実装最適化

## 3. 手順（実施順）

1. 比較対象の固定化
- upstream Chakra の比較用fixtureを配置
- 比較対象バージョンをメタデータに記録
- 分母固定artifactを生成し、バージョン管理する
  - `artifacts/parity/baseline-export-manifest.json`
  - `artifacts/parity/baseline-type-manifest.json`
  - `artifacts/parity/baseline-component-manifest.json`
  - `artifacts/parity/baseline-manifest-checksums.json`
- checksum検証コマンドを定義する
  - `pnpm parity:baseline:verify`

2. ハーネス作成
- Chakra版とChakra Wind版を同一シナリオで描画する実験場を作る
- DOM比較のための正規化処理（ランダムID除去など）を定義

3. ゲート定義
- `test:api`: export差分検知
- `test:types`: 型受理/拒否一致
- `test:runtime`: DOM/イベント挙動一致
- `test:a11y`: role/aria/keyboard/focus一致
- `test:visual`: screenshot一致
- `test:visual:policy`: visual allowlist監査
- `test:coexist`: Chakra Wind + shadcn/ui 共存検証
- `test:install:*`: npm / registry 導入成功

4. CI統合
- 失敗時にどの層で落ちたか一意に判別できるログ設計
- 将来の`test:realworld`追加に備えた拡張可能構成にする

## 4. 仕様（Definition）

- 互換判定は「レイヤー合算」で行う
- 1レイヤーでもFailなら互換未達
- Visualは Chromium (Linux) を唯一の必須環境とする
- すべての比較は `@chakra-ui/react@3.34.0` 基準で実施する
- `100%` 指標の分母は baseline manifest からのみ算出する
- baseline manifest は checksum検証を必須とする
- coexist仕様は以下マトリクスを全通過とする
  - preflight: on/off
  - color mode: light/dark
  - token override: off/on
- install smokeは環境マトリクス全通過を必須とする
- visual差分は以下を必須とする
  - default `maxDiffPixels=0`
  - 例外は allowlist に理由・期限付きで登録
- 参照仕様:
  - `docs/specs/parity-baseline-manifest-spec.md`
  - `docs/specs/coexistence-test-matrix.md`
  - `docs/specs/install-smoke-matrix.md`
  - `docs/specs/visual-diff-policy.md`

## 5. 成果物

- 互換ハーネスアプリ
- baseline manifest 生成スクリプト
- 7層ゲートコマンド
- CI統合ジョブ
- 失敗分析用の標準レポート形式

## 6. Quality Gate（完了条件）

### Gate M1-1: 分母固定

- baseline manifest が `@chakra-ui/react@3.34.0` から生成される
- manifest が versioned artifact として保存される
- `pnpm parity:baseline:verify` が成功する

### Gate M1-2: ゲート実行可能性

- 以下コマンドがCI/ローカル双方で実行可能
- `pnpm parity:baseline:freeze`
- `pnpm parity:baseline:verify`
- `pnpm test:api`
- `pnpm test:types`
- `pnpm test:runtime`
- `pnpm test:a11y`
- `pnpm exec playwright test --project=chromium --reporter=list`
- `pnpm test:visual:policy`
- `pnpm test:coexist`
- `pnpm test:install:npm`
- `pnpm test:install:registry`

### Gate M1-3: 判定再現性

- 同一コミットで実行結果が再現可能
- flakeの既知要因（アニメーション、caret、動的値）の抑制が設定済み
- visual allowlist の期限切れ例外が0件

### Gate M1-4: 差分可観測性

- Fail時にコンポーネント名、テスト層、差分要素を特定できる
- Visual Fail時に差分画像を保存できる

### Gate M1-5: 後続フェーズ接続性

- `M2` でコンポーネント実装を追加すると即時にゲートで評価できる

### 検証コマンド（必須）

```bash
pnpm parity:baseline:freeze
pnpm parity:baseline:verify
pnpm test:api
pnpm test:types
pnpm test:runtime
pnpm test:a11y
pnpm exec playwright test --project=chromium --reporter=list
pnpm test:visual:policy
pnpm test:coexist
pnpm test:install:npm
pnpm test:install:registry
```

### 証跡（Artifacts）

- baseline manifest（export/type/component）
- baseline checksumレポート
- API差分レポート
- 型契約テスト結果
- Runtime/A11yレポート
- Visual差分画像（fail時）
- visual policy監査レポート
- coexist matrix レポート
- npm/registry導入ログ
- install smoke matrix レポート

## 7. 失敗条件

- ハーネスが片系（ChakraまたはWind）しか描画できない
- テストが層別に分離されていない
- CIで再現不能なローカル依存挙動がある

## 8. 完了チェックリスト

- [ ] 7層ゲートのコマンド定義完了
- [ ] CI接続完了
- [ ] 差分レポート整備完了
- [ ] `M2` 受け入れ可能

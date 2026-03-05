# M5: Distribution and 0.x Release Process

- Phase ID: `M5`
- Phase Name: Distribution and 0.x release process
- Status: Planned
- Depends On: `M4`

## 1. 目的

`M5` の目的は、Chakra Wind を実利用可能な配布形態として公開し、0.x運用で互換率を透明に継続改善することです。

- npm配布経路を確立する
- shadcn registry配布経路を確立する
- リリース品質基準をCIで強制する

## 2. スコープ

### In Scope

- npm publishフロー
- registry build/hostフロー
- リリースノートの互換率自動反映
- 0.xバージョニング運用

### Out of Scope

- v1.0.0 宣言（完全再現達成後に別判断）

## 3. 手順（実施順）

1. npm配布整備
- package exports と files を精査
- `@laststance/chakrawind-system`
- `@laststance/chakrawind-tailwind`
- `@laststance/chakrawind-react`

2. registry配布整備
- `registry.json` / `registry-item.json` 生成
- `public/r/*.json` へ出力
- shadcn CLI導入手順をREADME化

3. publish前検証
- install smoke（npm）
- install smoke（registry）
- parity / coexist / realworld 全ゲート実行

4. 0.x公開
- 変更点と既知制限を明記
- 互換率指標を必ず添付

## 4. 仕様（Definition）

- 0.xでは「進捗公開」を優先し、互換未達領域を隠さない
- 完全再現主張はDoD全条件達成時のみ許可
- registry itemは schema準拠を必須とする
- 参照仕様:
  - `docs/specs/parity-baseline-manifest-spec.md`
  - `docs/specs/coexistence-test-matrix.md`
  - `docs/specs/install-smoke-matrix.md`
  - `docs/specs/visual-diff-policy.md`
  - `docs/specs/realworld-transition-catalog.md`
  - `docs/specs/realworld-flow-manifest-spec.md`
  - `docs/specs/test-command-scope.md`

## 5. 成果物

- npm配布設定
- registry生成・配信設定
- リリーステンプレート
- 互換率レポート埋め込み仕組み

## 6. Quality Gate（完了条件）

### Gate M5-1: 配布可能性

- npm package が `pnpm pack` で生成可能
- `npx shadcn@latest add <url>` で導入成功

### Gate M5-2: 事前検証の完全実行

- 以下がすべて成功
- `pnpm build`
- `pnpm parity:baseline:freeze`
- `pnpm parity:baseline:verify`
- `pnpm test:api`
- `pnpm test:types`
- `pnpm test:runtime`
- `pnpm test:a11y`
- `pnpm test:visual:parity`
- `pnpm test:visual:policy`
- `pnpm test:command-scope:policy`
- `pnpm test:coexist`
- `pnpm test:install:npm`
- `pnpm test:install:registry`
- `pnpm test:e2e:realworld`
- `pnpm test:realworld:catalog`

### Gate M5-3: 透明性

- リリースノートに互換率指標が掲載される
- 既知の未互換項目が明示される

### Gate M5-4: ライセンス適合

- MIT由来記載がNOTICEに反映される
- 出典ヘッダ規約違反がCIで0件

### 検証コマンド（必須）

```bash
pnpm build
pnpm parity:baseline:freeze
pnpm parity:baseline:verify
pnpm test:api
pnpm test:types
pnpm test:runtime
pnpm test:a11y
pnpm test:visual:parity
pnpm test:visual:policy
pnpm test:command-scope:policy
pnpm test:coexist
pnpm test:install:npm
pnpm test:install:registry
pnpm test:e2e:realworld
pnpm test:realworld:catalog
```

### 証跡（Artifacts）

- npm pack成果物
- registry build成果物（`registry.json`, `registry-item.json`）
- リリースノート（互換率付き）
- coexist matrix 結果
- baseline manifest（export/type/component）
- baseline checksum検証結果
- visual policy監査レポート
- install smoke matrix 結果
- ライセンス監査ログ

## 7. 失敗条件

- 配布成果物と実際導入手順が一致しない
- ゲート未達のまま公開される
- 互換率がリリース情報に含まれない
- 非scopedな `pnpm exec playwright test` 呼び出しがGate定義へ混入している

## 8. 完了チェックリスト

- [ ] npm配布経路確立
- [ ] registry配布経路確立
- [ ] 全品質ゲート通過
- [ ] 0.xリリーステンプレート完成
- [ ] 互換率公開フロー完成

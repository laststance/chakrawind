# M2: Core Packages (`system`, `tailwind`, `react`) Skeleton

- Phase ID: `M2`
- Phase Name: Core packages skeleton
- Status: Planned
- Depends On: `M1`

## 1. 目的

`M2` の目的は、Chakra Wind の責務分離アーキテクチャを実装可能な最小単位で確立することです。

- `system` を唯一のデザイントークン定義源にする
- `tailwind` を style-engine ブリッジとして定義する
- `react` を互換API提供層として定義する

## 2. スコープ

### In Scope

- 3パッケージの初期公開API定義
- 相互依存関係の固定
- 型契約の整備
- 最小Providerと最小コンポーネント雛形

### Out of Scope

- 主要コンポーネント群の完全実装
- 高度な最適化（bundle最適化、tree shaking最適化の深掘り）

## 3. 手順（実施順）

1. `@laststance/chakrawind-system`
- tokens/semantic tokens/recipes/slotRecipes/conditions の型定義
- public export設計

2. `@laststance/chakrawind-tailwind`
- preset/plugin API定義
- `system` 入力から Tailwind 設定を生成する最小経路を実装

3. `@laststance/chakrawind-react`
- `ChakraWindProvider` を実装
- 最小互換コンポーネント（例: `Box`, `Text`, `Button` の雛形）を置く
- runtime挙動は維持し、型整合から優先して固める

4. パッケージ連携検証
- 各パッケージのビルド
- cross-package typecheck
- `M1` のゲートへ接続

## 4. 仕様（Definition）

- `system` は React 依存を持たない
- `tailwind` は `system` 依存を持つ
- `react` は `system` と `tailwind` を利用する
- public API は 0.x で可能な限り安定化する

## 5. 成果物

- `packages/chakrawind-system`
- `packages/chakrawind-tailwind`
- `packages/chakrawind-react`
- 各パッケージの `package.json`, `tsconfig`, build entry

## 6. Quality Gate（完了条件）

### Gate M2-1: 依存方向の厳守

- `system` -> no React dependency
- `tailwind` -> depends on `system`
- `react` -> depends on `system` and `tailwind`

### Gate M2-2: API公開最小性

- 3パッケージに不要なexportがない
- exportは命名規則と責務に一致している

### Gate M2-3: 型整合

- `pnpm typecheck` が成功
- 公開型が downstream で利用可能

### Gate M2-4: ゲート接続

- `M1` の `test:api` と `test:types` に接続済み
- 失敗理由が明確に出力される

### 検証コマンド（必須）

```bash
pnpm build
pnpm typecheck
pnpm test:api
pnpm test:types
```

### 証跡（Artifacts）

- 3パッケージの公開API一覧
- 依存グラフ（`system` -> `tailwind` -> `react`）
- typecheckログ

## 7. 失敗条件

- `system` にUI実装が混入している
- `react` が token定義を内部重複で持つ
- Tailwind連携が動かず preset/plugin が空実装になっている

## 8. 完了チェックリスト

- [ ] 3パッケージ雛形完成
- [ ] 依存方向固定
- [ ] typecheck通過
- [ ] parity gate接続完了

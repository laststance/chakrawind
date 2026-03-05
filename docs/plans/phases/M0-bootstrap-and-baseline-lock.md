# M0: Bootstrap and Baseline Lock

- Phase ID: `M0`
- Phase Name: Bootstrap and baseline lock
- Status: Planned
- Owner: Raphtalia / Chakra Wind Core Team

## 1. 目的

`M0` の目的は、以降の全フェーズが前提として依存する「開発土台」を固定することです。

- リポジトリ初期構造を確定する
- ベースライン互換対象（`@chakra-ui/react@3.34.0`）を厳密固定する
- ツールチェイン（Node / pnpm / TypeScript / Playwright）の最小構成を固定する
- ライセンス運用ポリシー（MIT由来表記・NOTICE）を明文化する

## 2. スコープ

### In Scope

- ワークスペース定義
- 各パッケージのディレクトリ雛形
- 共通設定（`tsconfig` / `eslint` / `playwright` / `vitest`）
- ベースラインバージョン固定ルール
- ドキュメント雛形作成（設計・計画・ライセンス）

### Out of Scope

- コンポーネント実装
- 互換テスト本体の実装
- リリース公開

## 3. 前提条件

- 開発環境が macOS (Darwin)
- Node 22.x 以上を使用可能
- `pnpm` が利用可能
- Playwright 実行に必要なブラウザ依存を導入可能

## 4. 手順（実施順）

1. リポジトリ初期化
- `package.json`（workspace root）を作成
- `pnpm-workspace.yaml` を作成
- `apps/`, `packages/`, `tests/`, `fixtures/`, `docs/` を作成

2. バージョン固定
- `@chakra-ui/react` を `3.34.0` で固定
- React を `19.x` 系に固定
- lockfile を生成して依存を固定

3. 共通開発設定
- TypeScript 基本設定（strict有効）
- Lint/Format/Typecheck/Test の script を定義
- Playwright 基本設定（Chromiumのみ）を定義

4. ライセンス運用土台
- `NOTICE` 雛形を作成
- MIT由来コード取り込み時のヘッダ規約を `docs` に明文化

5. CI最小ジョブ
- install
- build（空実装でも通る構成）
- typecheck
- lint（最低限）

## 5. 仕様（Definition）

- ベースライン固定仕様
- `@chakra-ui/react@3.34.0` 以外を互換比較対象として扱わない
- バージョン更新は別フェーズの明示的アップグレード手順でのみ許可
- baseline fixture runtime assumptions は以下仕様に従う
  - `docs/specs/chakra-baseline-runtime-contract.md`
- ライセンス運用は以下仕様に従う
  - `docs/specs/license-attribution-policy.md`

- ツールチェイン仕様
- `pnpm` を標準パッケージマネージャとして採用
- E2E は Playwright、必須ブラウザは Chromium (Linux) のみ

- ディレクトリ仕様
- フェーズ分割とテスト分割に対応した固定構造を採用

## 6. 成果物

- ルート設定ファイル群
- ワークスペース雛形
- バージョン固定ルール
- ライセンス運用ドキュメント
- 最小CI設定

## 7. Quality Gate（完了条件）

### Gate M0-1: Workspace健全性

- `pnpm install` が成功する
- `pnpm build` が成功する
- `pnpm typecheck` が成功する

### Gate M0-2: ベースライン固定

- 依存定義上 `@chakra-ui/react` が `3.34.0` 固定である
- CIでバージョンドリフト検知を有効化している

### Gate M0-3: ルールの明文化

- ライセンス取り込み規約文書が存在する
- 開発者向け必須コマンド一覧が存在する

### Gate M0-4: フェーズ移行可能性

- `M1` の作業が追加設定なしで開始できる
- 開発者がクローン直後に最小コマンドで検証可能である

### 検証コマンド（必須）

```bash
pnpm install
pnpm build
pnpm typecheck
pnpm lint
```

### 証跡（Artifacts）

- 依存固定証跡: lockfile + `package.json`
- baseline固定証跡: `@chakra-ui/react@3.34.0` が確認できる定義
- 環境規約証跡: Node / pnpm バージョン要件記載
- ライセンス証跡: `NOTICE` および取り込み規約文書

## 8. 失敗条件（Fail Fast）

- lockfile未固定で依存が毎回変動する
- React 19固定が崩れている
- Chromium限定要件が設定に反映されていない
- ライセンス規約が未整備

## 9. 完了チェックリスト

- [ ] ワークスペース雛形作成完了
- [ ] baseline version lock 完了
- [ ] 共通script定義完了
- [ ] 最小CI通過
- [ ] ライセンス規約整備完了

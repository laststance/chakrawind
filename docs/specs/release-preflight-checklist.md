# Release Preflight Checklist

## Purpose

Provide one canonical checklist for 0.x release go/no-go.

## Checklist Items (All Required)

1. Build and baseline
- `pnpm build`
- `pnpm parity:baseline:freeze`
- `pnpm parity:baseline:verify`

2. Parity gates
- `pnpm test:api`
- `pnpm test:types`
- `pnpm test:runtime`
- `pnpm test:a11y`
- `pnpm test:visual:parity`
- `pnpm test:visual:policy`
- `pnpm test:command-scope:policy`
- `pnpm test:coexist`

3. Install and realworld
- `pnpm test:install:npm`
- `pnpm test:install:registry`
- `pnpm test:e2e:realworld`
- `pnpm realworld:flow-manifest:verify`
- `pnpm test:realworld:catalog`

4. Legal
- `pnpm legal:notice:verify`
- `pnpm legal:attribution:verify`
- NOTICE updated and included in release artifacts

5. Distribution
- `pnpm pack` succeeds
- registry build output exists at `public/r/*.json`
- shadcn install validated from same-build `public/r/*.json` URL

## Evidence Bundle

- CI run URL / build ID
- command logs for all checklist items
- artifact index (manifests, screenshots, policy reports, legal reports)

## Failure Policy

- Any unchecked item => release blocked

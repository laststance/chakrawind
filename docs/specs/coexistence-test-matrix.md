# Coexistence Test Matrix (Chakra Wind + shadcn/ui)

## Purpose

Define mandatory matrix for coexistence validation.

## Test Command

- `pnpm test:coexist`

## Matrix Axes

1. Preflight
- `on`
- `off`

2. Color Mode
- `light`
- `dark`

3. Token Override
- `off`
- `on`

## Required Combination Count

- Total combinations: `2 x 2 x 2 = 8`

All 8 combinations are mandatory.

## Required Assertions Per Combination

- App boot succeeds
- Chakra Wind component renders correctly
- shadcn component renders correctly
- Shared page has no style collision in critical selectors
- Focus-visible styles remain accessible
- Visual snapshot passes in Chromium baseline

## Snapshot Naming and Storage Contract

- Matrix ID format:
  - `preflight-{on|off}__mode-{light|dark}__token-{on|off}`
- Snapshot root directory:
  - `tests/__screenshots__/coexist/`
- Snapshot path format:
  - `tests/__screenshots__/coexist/{matrix-id}/{step-name}.png`
- `step-name` must be stable kebab-case and shared across Chakra/Wind runs.
- Coexist snapshots must not be stored under realworld or parity snapshot directories.

## Allowlist Key Contract

- Visual allowlist entries for coexist must use `snapshotName` with full relative key:
  - `coexist/{matrix-id}/{step-name}.png`
- Key format must match the path format above (excluding `tests/__screenshots__/` prefix).

## Failure Policy

- One failed combination => `coexist_contract_pass != 100%`
- Release gate must fail

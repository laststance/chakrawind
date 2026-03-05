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

## Failure Policy

- One failed combination => `coexist_contract_pass != 100%`
- Release gate must fail


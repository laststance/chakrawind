# Visual Diff Policy

## Purpose

Define auditable visual comparison policy for parity decisions.

## Default Threshold

- `maxDiffPixels = 0`
- `maxDiffPixelRatio` is unset by default

## Determinism Requirements

- `animations: "disabled"`
- `caret: "hide"`
- fixed viewport and font setup
- dynamic areas must be masked or normalized

## Exception Policy (Allowlist)

Exceptions are allowed only through:

- `artifacts/parity/visual-allowlist.json`

Each exception entry must include:

- `snapshotName`
- `reason`
- `owner`
- `ticket`
- `expiresAt` (YYYY-MM-DD)

## Required Commands

- `pnpm test:visual`
- `pnpm test:visual:policy`

`test:visual:policy` validates:

- allowlist schema validity
- no expired exception
- no exception without owner/reason/ticket

## Failure Policy

- Any violation of this policy => visual parity gate fails.


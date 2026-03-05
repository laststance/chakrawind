# Realworld Flow Manifest Spec

## Purpose

Fix denominator source for `realworld_parity_pass` and make catalog completeness auditable.

## Source of Truth

- `artifacts/realworld/flow-manifest.json`
- `artifacts/realworld/flow-manifest-checksums.json`

`realworld_parity_pass` denominator must be computed only from `flow-manifest.json`.

## Required Fields (flow-manifest.json)

- `manifestVersion` (string)
- `baseline` (string)
- `flows` (array)

Each `flows[]` item must include:

- `flowId` (string, matches catalog ID format)
- `required` (boolean)
- `screen` (string)
- `description` (string)
- `status` (enum: `implemented` | `planned` | `deprecated`)

## Denominator Rule

- Denominator = count of `flows[]` where:
  - `required = true`
  - `status = implemented`
- Numerator = those denominator flows that are referenced by realworld tests and pass required screenshot checkpoints.

## Update Policy

- Any flow add/remove/status change requires:
  - manifest update
  - checksum refresh
  - changelog note in release PR
- Manifest changes must be reviewed in the same PR as test/catalog changes.

## Required Commands

- `pnpm realworld:flow-manifest:freeze`
- `pnpm realworld:flow-manifest:verify`

## Failure Policy

- Missing manifest/checksum => fail
- Checksum mismatch => fail
- Test coverage computed from other source => fail

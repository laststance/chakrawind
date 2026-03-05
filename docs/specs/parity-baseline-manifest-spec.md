# Parity Baseline Manifest Spec

## Purpose

Define denominator sources for all `100%` parity claims.

## Baseline

- Package: `@chakra-ui/react`
- Version: `3.34.0`
- Generator command: `pnpm parity:baseline:freeze`
- Verification command: `pnpm parity:baseline:verify`

## Required Manifest Files

- `artifacts/parity/baseline-export-manifest.json`
- `artifacts/parity/baseline-type-manifest.json`
- `artifacts/parity/baseline-component-manifest.json`
- `artifacts/parity/baseline-manifest-checksums.json`

## Manifest Rules

1. All manifests must include:
- `baselinePackage`
- `baselineVersion`
- `generatedAt`
- `entries`

2. Export manifest denominator rule:
- Includes all public exports from package entrypoints.
- Excludes internal/private paths not reachable by public package exports.

3. Type manifest denominator rule:
- Includes publicly consumable type exports used by component APIs.
- Excludes internal helper types not exported publicly.

4. Component manifest denominator rule:
- Includes all public component roots in baseline package scope.
- Excludes out-of-scope packages (for v1), such as `@chakra-ui/icons`.

## Coverage Calculation Contract

- `export_coverage = implemented_export_count / baseline_export_count`
- `type_contract_pass = passed_type_cases / total_type_cases_from_manifest`
- `component_coverage = implemented_component_count / baseline_component_count`

## Acceptance

- `100%` is valid only if denominator is loaded from these manifests.
- Manual denominator edits are prohibited.
- CI must run `pnpm parity:baseline:verify` to detect tampering.

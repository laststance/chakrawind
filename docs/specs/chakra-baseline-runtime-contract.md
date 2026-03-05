# Chakra Baseline Runtime Contract

## Purpose

Lock baseline fixture runtime assumptions for Chakra UI `@chakra-ui/react@3.34.0` so compatibility harness setup is reproducible.

## Baseline Package

- `@chakra-ui/react@3.34.0`

## Baseline Runtime Dependencies (Fixture/Harness Side)

- Required:
  - `@emotion/react`
- Explicitly not required by v3 migration assumptions:
  - `@emotion/styled`
  - `framer-motion`

## Provider Composition Contract (Fixture/Harness Side)

- Baseline fixture must use Chakra v3-style provider composition.
- `ChakraProvider` should be initialized with system value compatible with v3 setup.
- Color mode composition should follow snippet/provider pattern used in v3 guidance.

Note:
- This contract is for baseline fixture reproducibility.
- It does not constrain Chakra Wind implementation internals.

## Verification

- Baseline fixture setup doc must declare dependency set and provider entrypoint.
- Harness boot test must fail when baseline provider wiring is broken.

## Failure Policy

- If fixture runtime deps/provider contract drifts from this spec, parity comparison is invalid.

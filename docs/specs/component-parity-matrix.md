# Component Parity Matrix (M3)

## Purpose

Define component-level pass criteria for M3 using five layers:

- API
- Types
- Runtime
- A11y
- Visual

This matrix is the source for machine-judged M3 reporting (`artifacts/reports/m3/*`).

## Evaluation Rules

- A component is `pass` only when all five layers are `pass`.
- A component with one or more `fail` layers is treated as `fail`.
- Compatibility rate formula is fixed:
  - `compatibilityRate = (passedComponents / totalComponents) * 100`

## Matrix

| Matrix ID | Component | API | Types | Runtime | A11y | Visual | Acceptance Rule |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M3-CMP-001 | Box | Exported from `@laststance/chakrawind-react` | `BoxProps` compatible with intrinsic div props | Renders deterministic root with Chakra Wind data marker | Remains keyboard and screen-reader neutral (no implicit role override) | Included in visual parity baseline scenarios | Pass when all five layers are pass |
| M3-CMP-002 | Text | Exported from `@laststance/chakrawind-react` | `TextProps` compatible with intrinsic paragraph props | Renders deterministic root with Chakra Wind data marker | Preserves semantic text element defaults | Included in visual parity baseline scenarios | Pass when all five layers are pass |
| M3-CMP-003 | Button | Exported from `@laststance/chakrawind-react` | `ButtonProps` compatible with intrinsic button props | Defaults `type="button"` and renders deterministic marker | Supports native button accessibility semantics | Included in visual parity baseline scenarios | Pass when all five layers are pass |

## Machine Judgement Contract

- Generation command: `pnpm m3:artifacts:generate`
- Required outputs:
  - `artifacts/reports/m3/component-parity-matrix.json`
  - `artifacts/reports/m3/parity-report.json`
  - `artifacts/reports/m3/regression-diff.json`

## Failure Policy

- Matrix row missing for an M3 target component => fail.
- Parity report missing or malformed => fail.
- Regression diff cannot identify changed component/layer statuses => fail.

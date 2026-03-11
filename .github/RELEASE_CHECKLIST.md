# Release Checklist

Release criteria for `@laststance/chakrawind-ui@0.1.0`. All items must be
checked before publishing.

---

## Goal 1: Full Chakra UI Reproduction

Baseline: `@chakra-ui/react@3.34.0`

- [ ] API gate GREEN — 1933/1933 exports match
      `scripts/baselines/api-manifest.json`
- [ ] Types gate GREEN — `tsc --noEmit` zero errors
- [ ] Runtime gate GREEN — all unit tests pass (`vitest`)
- [ ] A11y gate GREEN — Storybook accessibility tests pass
- [ ] Visual gate GREEN — Chromatic visual regression (or skip token present)
- [ ] Coexist gate GREEN — coexistence matrix tests pass
- [ ] Install gate GREEN — `npm pack` + install verified, `registry/` exists
- [ ] Realworld gate GREEN — all sandbox apps build successfully

## Goal 2: shadcn/ui Coexistence

- [ ] Coexist test matrix passes: preflight on/off x color mode light/dark x
      token override off/on
- [ ] No CSS variable conflicts between Chakra Wind and shadcn/ui
- [ ] Both libraries render correctly in the same application

## Goal 3: Two Installation Paths

- [ ] npm install path verified (`npm install @laststance/chakrawind-ui`)
- [ ] shadcn registry install path verified
      (`npx shadcn@latest add <registry-item-url>`)
- [ ] All 74 components available via npm path
- [ ] All 74 components available via registry path

## Release Prerequisites

- [ ] Package name set to `@laststance/chakrawind-ui`
- [ ] Version set to `0.1.0`
- [ ] CHANGELOG generated from changesets
- [ ] npm publish workflow active in `.github/workflows/`
- [ ] Registry hosted and accessible
- [ ] `scripts/gates/run-all.ts` passes all 8 gates

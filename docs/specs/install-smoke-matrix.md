# Install Smoke Matrix

## Purpose

Define mandatory environments to validate both supported installation paths:

- npm install (`node_modules`)
- shadcn registry install (`npx shadcn@latest add <registry-item-url>`)

## Required Commands

- `pnpm test:install:npm`
- `pnpm test:install:registry`

## Environment Matrix

All rows are mandatory.

| Matrix ID | Framework | Runtime | Initial State | Install Path |
| --- | --- | --- | --- | --- |
| ISM-001 | Vite React | React 19 | clean project | npm |
| ISM-002 | Vite React | React 19 | clean project | registry |
| ISM-003 | Next.js App Router | React 19 | clean project | npm |
| ISM-004 | Next.js App Router | React 19 | clean project | registry |
| ISM-005 | Vite React + shadcn preinstalled | React 19 | shadcn existing | npm |
| ISM-006 | Vite React + shadcn preinstalled | React 19 | shadcn existing | registry |

## Required Assertions Per Matrix Row

- install command succeeds
- project build succeeds
- minimal render route boots
- one Chakra Wind component renders
- one shadcn component renders (where applicable)
- no fatal style/runtime collision

## Failure Policy

- One failed matrix row => install support is not complete.
- Release gate must fail.

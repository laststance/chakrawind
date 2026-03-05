# License Attribution Policy

## Purpose

Define enforceable legal rules for MIT-origin code usage, attribution headers, and NOTICE maintenance in Chakra Wind.

## Scope

- Source files imported or adapted from third-party MIT projects
- Generated distribution artifacts (npm and registry)
- Release notes legal disclosure section

## Required Rules

1. Attribution Header Rule
- Any imported/adapted source file must include attribution header with:
  - original project/repository
  - source path or URL
  - license identifier
  - modification note

2. NOTICE Update Rule
- Every third-party intake or update must be reflected in `NOTICE`.
- `NOTICE` must include project name, license type, and reference link.

3. Intake Checklist Rule
- Third-party adoption PR must include:
  - license compatibility confirmation
  - attribution header evidence
  - NOTICE diff evidence

## Required Commands

- `pnpm legal:notice:verify`
- `pnpm legal:attribution:verify`

## Required Evidence

- notice verification report
- attribution verification report
- release artifact checklist confirming NOTICE inclusion

## Failure Policy

- Missing attribution header on imported/adapted file => fail
- NOTICE missing required entry => fail
- Verification commands not executed in release pipeline => fail

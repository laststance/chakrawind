# Realworld Transition Catalog

## Purpose

Define complete transition coverage for `test:realworld`.

## Rule

- Every UI state transition in realworld E2E must map to one catalog ID.
- Every mapped transition must include:
- screen
- actor
- trigger
- expected state change
- required screenshot checkpoint

## Catalog Table

| Catalog ID | Screen | Actor | Trigger | Expected State Change | Screenshot Name |
| --- | --- | --- | --- | --- | --- |
| RW-INIT-001 | Home timeline | Guest/User | Initial render | Initial UI is stable and visible | `rw-home-initial.png` |
| RW-AUTH-001 | Login | Guest | Submit valid credentials | Redirect to authenticated timeline | `rw-login-success.png` |
| RW-AUTH-002 | Login | Guest | Submit invalid credentials | Validation error state is visible | `rw-login-error.png` |
| RW-POST-001 | Composer | User | Create post | New post appears in timeline | `rw-post-created.png` |
| RW-INT-001 | Timeline card | User | Toggle like | Like state changes | `rw-like-toggled.png` |
| RW-INT-002 | Timeline card | User | Toggle retweet | Retweet state changes | `rw-retweet-toggled.png` |
| RW-THREAD-001 | Thread page | User | Submit reply | Reply appears under parent post | `rw-thread-replied.png` |
| RW-NOTIF-001 | Notifications | User | Receive interaction | Notification appears in list | `rw-notification-visible.png` |

## Test Implementation Contract

- Each E2E test step must include catalog reference comment, for example:
- `// catalog: RW-INT-001`
- Missing catalog reference is test failure.

## Completeness Gate

- Command: `pnpm test:realworld:catalog`
- Pass condition:
- Catalog IDs referenced in tests == catalog entries for implemented flows
- No duplicate catalog IDs
- No dead catalog IDs (defined but never used)


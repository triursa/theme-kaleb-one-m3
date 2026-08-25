# M3 Theme Audit — v0.3.0 (June 2026)

Full bug-and-feature audit of theme-kaleb-one-m3. All items below were fixed in the same session.

## Bugs Fixed

### Critical (WCAG)
1. **No `:focus-visible`** — text fields used `:focus`, buttons/chips/nav had zero focus indicators. Fixed: `:focus-visible` ring on all interactive elements.
2. **No disabled button styles** — `--md-sys-state-disabled-opacity` defined but never applied. Fixed: `.md-button:disabled` + `.md-chip:disabled` with 38% opacity.
3. **No `prefers-reduced-motion`** — transitions played regardless of user preference. Fixed: `@media (prefers-reduced-motion: reduce)` override.
4. **Showcase: 47 interactive `<div>`s with no keyboard access** — added `tabindex="0"`, `role`, `onkeydown` handlers.
5. **Showcase: no skip-nav link** — added.
6. **Showcase: no ARIA on tabs/dialog/snackbar** — added `role="tablist"/"tab"/"tabpanel"`, `aria-selected`, `role="dialog"`, `aria-modal`, `role="status"`, `aria-live="polite"`.

### Build System
7. **State layer derived tokens mixed into `transparent`** — `buildStateLayerCSS()` generated `color-mix(on-color 8%, transparent)`. Fixed: now `color-mix(on-color opacity-var, container-color)`.
8. **`surface-variant` state layers not generated** — added to colorRoles array with `on-surface-variant` mapping.
9. **Frost missing `md-sys-color-elevation`** — light theme had 34 roles vs dark's 35. Fixed: added `"md-sys-color-elevation": "transparent"`.

### Architecture
10. **Dialog scrim hardcoded `rgba(0,0,0,0.4)`** — replaced with `color-mix(in srgb, var(--md-sys-color-scrim) 40%, transparent)`.
11. **20+ hardcoded px values** — buttons (40px->2.5rem), chips (32px->2rem), nav-rail-item (56px->3.5rem, 4px gap->spacing-1), textfield padding, dialog widths, menu dimensions, expressive list items, search bar max-width, type-label font-size, app-bar padding. All converted to rem or token references.
12. **FAB duplication** — `.md-button--fab` and `.md-fab` both defined 56px dimensions. Fixed: `.md-fab` now only adds positioning; styling comes from `.md-button--fab`.
13. **Missing tonal stops 25/35** — secondary/tertiary/error palettes lacked stops at tone 25 and 35. Added interpolated values for all 4 palettes.
14. **Showcase `.palette-btn--active`** used `secondary-container` instead of `primary`. Fixed to match M3 spec.

### Documentation
15. **AGENT.md palette tables incomplete** — Midnight Ocean (16->35), Volcanic (12->35), Frost (8->35) tokens. All now complete with hex values sourced from tokens.json.
16. **AGENT.md state layer docs** — added `surface-variant` example and corrected pattern.

## What Was NOT Changed (by design)
- Show inline `<style>` block overlaps with components.css — the showcase uses fixed positioning for its specific layout; the component library correctly uses sticky. These are different design contexts.
- `.main-content` margin-left conflict — showcase uses fixed nav rail, components uses token-based layout. Both valid.
- Palette generator uses HSL approximation — documented as simplified, not a bug.

### Showcase — Inspector Panel (v0.3.1 hotfix, June 2026)
17. **Token Inspector visible at all times** — The inspector panel was stuck in the middle of the viewport even when closed. Root cause: mobile-first CSS set `left: 0; right: 0` on `.inspector-overlay` for the bottom-sheet pattern, and the `@media (min-width: 840px)` override switched to a side panel with `right: 0` and `transform: translateX(100%)` but never reset `left`. CSS resolved `left: 0; right: 0; width: 360px` by honoring `left` + `width` and ignoring `right`, placing the panel at the left edge instead of the right. `translateX(100%)` then shifted it 360px right — centering it on screen. **Fix:** Added `left: auto` in the desktop media query, `visibility: hidden`/`pointer-events: none` on the hidden state, and restructured the showcase to use proper mobile-first bottom-sheet -> desktop side-panel pattern with a drag handle.

## Verification
After all fixes, `node scripts/build-tokens.js` succeeds, all 4 palettes output 35 roles, state layer tokens use container colors, and components.css has no hardcoded values in component dimensions.
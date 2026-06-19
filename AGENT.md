# AGENT.md — Theme Design System Reference

> **For AI agents and developers building UIs in the kaleb.one ecosystem.**
> This document provides everything needed to use `theme-kaleb-one-m3` (formerly `theme-kaleb-one`) to create visually consistent Material 3 interfaces.

## Quick Start

### Via CDN (recommended for static pages & visualizations)

```html
<!-- Load the full theme (all 4 palettes + tokens) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-all.css">

<!-- Or load a single palette (smaller file) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-obsidian.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-midnight-ocean.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-volcanic.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-frost.css">

<!-- Load pre-built M3 component styles (optional but recommended) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/components.css">

<!-- Load fonts (required for correct typography) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Activating a Palette

Set the `data-theme` attribute on `<html>`:

```html
<html data-theme="obsidian">
```

Values: `"obsidian"` | `"midnight-ocean"` | `"volcanic"` | `"frost"`

**Default behavior:**
- **`theme-all.css`**: When `data-theme` is not set on `<html>`, the CSS uses `@media (prefers-color-scheme: dark)` to auto-select **Obsidian** for dark-mode users and **Frost** for light-mode users. Setting `data-theme` overrides this fallback.
- **Single-palette files** (e.g., `theme-obsidian.css`): Include a `:root` block that applies all tokens without requiring `data-theme`. A `:root[data-theme]` block has higher specificity and overrides when set, so you can still use `data-theme` for palette switching.

### Via npm (for build-tool projects)

```bash
npm install @kaleb-one/theme
```

```js
// Import a specific palette CSS
import '@kaleb-one/theme/css/obsidian';

// Or import all palettes
import '@kaleb-one/theme/css/all';

// Import component styles
import '@kaleb-one/theme/css/components';
```

```js
// Tailwind preset (v3)
// tailwind.config.js
module.exports = {
  presets: [require('@kaleb-one/theme/tailwind')],
};

// Tailwind v4 (CSS-first)
// Import tokens as CSS, then use arbitrary values:
// bg-[var(--md-sys-color-surface)]
```

---

## Palette Reference

| # | Name | `data-theme` | Vibe | Source Color |
|---|------|-------------|------|-------------|
| 1 | **Obsidian** | `obsidian` | Dark slate, electric accent — sharp, modern, minimal | `#7B8FA8` |
| 2 | **Midnight Ocean** | `midnight-ocean` | Deep navy, teal accent — calm authority | `#4A90D9` |
| 3 | **Volcanic** | `volcanic` | Dark warm gray, amber/orange accent — warm, grounded | `#D4853A` |
| 4 | **Frost** | `frost` | Light theme — cool gray, blue accent — clean, professional | `#3B82F6` |

**Default choice:** Always use **Obsidian** unless the project explicitly calls for a different palette. Obsidian is the canonical kaleb.one dark theme.

---

## Complete Color Token Reference

### Obsidian (default dark palette)

| Token | Hex | Usage |
|-------|-----|-------|
| `--md-sys-color-primary` | `#BACFE5` | Primary actions, FABs, active states |
| `--md-sys-color-on-primary` | `#2C3E50` | Text/icons on primary color |
| `--md-sys-color-primary-container` | `#3D5167` | Container variant of primary |
| `--md-sys-color-on-primary-container` | `#D6E5F5` | Text/icons on primary container |
| `--md-sys-color-secondary` | `#C6CBD9` | Secondary actions, toggle active |
| `--md-sys-color-on-secondary` | `#31343C` | Text/icons on secondary |
| `--md-sys-color-secondary-container` | `#474B55` | Secondary containers, nav highlights |
| `--md-sys-color-on-secondary-container` | `#E3E6EF` | Text/icons on secondary container |
| `--md-sys-color-tertiary` | `#CDC6E2` | Tertiary accent, distinction |
| `--md-sys-color-on-tertiary` | `#342F45` | Text/icons on tertiary |
| `--md-sys-color-tertiary-container` | `#4B465C` | Tertiary containers |
| `--md-sys-color-on-tertiary-container` | `#E9E2FF` | Text/icons on tertiary container |
| `--md-sys-color-error` | `#FFB4AB` | Error states, destructive actions |
| `--md-sys-color-on-error` | `#690005` | Text/icons on error |
| `--md-sys-color-error-container` | `#93000A` | Error containers/banners |
| `--md-sys-color-on-error-container` | `#FFDAD6` | Text on error containers |
| `--md-sys-color-surface` | `#11151C` | **Page background** |
| `--md-sys-color-on-surface` | `#DCE1E9` | **Primary text color** |
| `--md-sys-color-surface-variant` | `#454D56` | Surface variant backgrounds |
| `--md-sys-color-on-surface-variant` | `#C5CDD9` | Secondary text / captions |
| `--md-sys-color-surface-container-lowest` | `#0D1117` | Deepest background layer |
| `--md-sys-color-surface-container-low` | `#1A1F26` | Low container (cards at rest) |
| `--md-sys-color-surface-container` | `#1E242C` | Default container (dialogs, sheets) |
| `--md-sys-color-surface-container-high` | `#282E36` | Elevated container (hover states) |
| `--md-sys-color-surface-container-highest` | `#31383F` | Highest container (filled cards) |
| `--md-sys-color-outline` | `#8F97A3` | Borders, dividers, outlines |
| `--md-sys-color-outline-variant` | `#454D56` | Subtle borders, disabled outlines |
| `--md-sys-color-surface-dim` | `#11151C` | Dimmest surface |
| `--md-sys-color-surface-bright` | `#353C44` | Brightest surface (dark theme) |
| `--md-sys-color-inverse-surface` | `#DCE1E9` | Snackbars, inverted surfaces |
| `--md-sys-color-inverse-on-surface` | `#1A1F26` | Text on inverted surfaces |
| `--md-sys-color-inverse-primary` | `#506680` | Inverted primary |
| `--md-sys-color-scrim` | `#000000` | Modal/scrim overlay |
| `--md-sys-color-shadow` | `#000000` | Shadow color |
| `--md-sys-color-elevation` | `transparent` | Elevation tint (dark: transparent) |

### Midnight Ocean

| Token | Hex |
|-------|-----|
| `--md-sys-color-primary` | `#A1C2F2` |
| `--md-sys-color-on-primary` | `#1B2D44` |
| `--md-sys-color-primary-container` | `#2A4264` |
| `--md-sys-color-on-primary-container` | `#C4DDFF` |
| `--md-sys-color-secondary` | `#BECAD9` |
| `--md-sys-color-on-secondary` | `#2A3340` |
| `--md-sys-color-secondary-container` | `#404958` |
| `--md-sys-color-on-secondary-container` | `#DAE5F0` |
| `--md-sys-color-tertiary` | `#53D8D6` |
| `--md-sys-color-on-tertiary` | `#003736` |
| `--md-sys-color-tertiary-container` | `#004F4E` |
| `--md-sys-color-on-tertiary-container` | `#7CF5F2` |
| `--md-sys-color-error` | `#FFB4AB` |
| `--md-sys-color-on-error` | `#690005` |
| `--md-sys-color-error-container` | `#93000A` |
| `--md-sys-color-on-error-container` | `#FFDAD6` |
| `--md-sys-color-surface` | `#10151E` |
| `--md-sys-color-on-surface` | `#DDE5EE` |
| `--md-sys-color-surface-dim` | `#10151E` |
| `--md-sys-color-surface-bright` | `#353D4A` |
| `--md-sys-color-surface-variant` | `#424B58` |
| `--md-sys-color-on-surface-variant` | `#C1CAD9` |
| `--md-sys-color-surface-container-lowest` | `#0C1118` |
| `--md-sys-color-surface-container-low` | `#171E28` |
| `--md-sys-color-surface-container` | `#1C232E` |
| `--md-sys-color-surface-container-high` | `#262D38` |
| `--md-sys-color-surface-container-highest` | `#303844` |
| `--md-sys-color-outline` | `#8C95A4` |
| `--md-sys-color-outline-variant` | `#424B58` |
| `--md-sys-color-inverse-surface` | `#DDE5EE` |
| `--md-sys-color-inverse-on-surface` | `#171E28` |
| `--md-sys-color-inverse-primary` | `#3D5986` |
| `--md-sys-color-scrim` | `#000000` |
| `--md-sys-color-shadow` | `#000000` |
| `--md-sys-color-elevation` | `transparent` |

### Volcanic

| Token | Hex |
|-------|-----|
| `--md-sys-color-primary` | `#E4BB8E` |
| `--md-sys-color-on-primary` | `#442C14` |
| `--md-sys-color-primary-container` | `#5C4021` |
| `--md-sys-color-on-primary-container` | `#FFD7AD` |
| `--md-sys-color-secondary` | `#CAC4BD` |
| `--md-sys-color-on-secondary` | `#322F2A` |
| `--md-sys-color-secondary-container` | `#494540` |
| `--md-sys-color-on-secondary-container` | `#E7E0D9` |
| `--md-sys-color-tertiary` | `#C6C8CA` |
| `--md-sys-color-on-tertiary` | `#2F3132` |
| `--md-sys-color-tertiary-container` | `#464849` |
| `--md-sys-color-on-tertiary-container` | `#E2E4E6` |
| `--md-sys-color-error` | `#FFB4AB` |
| `--md-sys-color-on-error` | `#690005` |
| `--md-sys-color-error-container` | `#93000A` |
| `--md-sys-color-on-error-container` | `#FFDAD6` |
| `--md-sys-color-surface` | `#15130F` |
| `--md-sys-color-on-surface` | `#E5E1DA` |
| `--md-sys-color-surface-dim` | `#15130F` |
| `--md-sys-color-surface-bright` | `#383632` |
| `--md-sys-color-surface-variant` | `#48443E` |
| `--md-sys-color-on-surface-variant` | `#C7C4BD` |
| `--md-sys-color-surface-container-lowest` | `#110F0D` |
| `--md-sys-color-surface-container-low` | `#1C1A16` |
| `--md-sys-color-surface-container` | `#201E1A` |
| `--md-sys-color-surface-container-high` | `#2A2824` |
| `--md-sys-color-surface-container-highest` | `#34322D` |
| `--md-sys-color-outline` | `#928F88` |
| `--md-sys-color-outline-variant` | `#48443E` |
| `--md-sys-color-inverse-surface` | `#E5E1DA` |
| `--md-sys-color-inverse-on-surface` | `#1C1A16` |
| `--md-sys-color-inverse-primary` | `#76562E` |
| `--md-sys-color-scrim` | `#000000` |
| `--md-sys-color-shadow` | `#000000` |
| `--md-sys-color-elevation` | `transparent` |

### Frost (light theme)

| Token | Hex |
|-------|-----|
| `--md-sys-color-primary` | `#0064C2` |
| `--md-sys-color-on-primary` | `#FFFFFF` |
| `--md-sys-color-primary-container` | `#D3E3FF` |
| `--md-sys-color-on-primary-container` | `#001B3D` |
| `--md-sys-color-secondary` | `#5A5F71` |
| `--md-sys-color-on-secondary` | `#FFFFFF` |
| `--md-sys-color-secondary-container` | `#DDE4FB` |
| `--md-sys-color-on-secondary-container` | `#171C2B` |
| `--md-sys-color-tertiary` | `#605E78` |
| `--md-sys-color-on-tertiary` | `#FFFFFF` |
| `--md-sys-color-tertiary-container` | `#E7E0FF` |
| `--md-sys-color-on-tertiary-container` | `#1C1B2E` |
| `--md-sys-color-error` | `#BA1A1A` |
| `--md-sys-color-on-error` | `#FFFFFF` |
| `--md-sys-color-error-container` | `#FFDAD6` |
| `--md-sys-color-on-error-container` | `#410002` |
| `--md-sys-color-surface` | `#F8F8FF` |
| `--md-sys-color-on-surface` | `#1B1B1F` |
| `--md-sys-color-surface-dim` | `#DBDBE5` |
| `--md-sys-color-surface-bright` | `#F8F8FF` |
| `--md-sys-color-surface-variant` | `#E2E2EB` |
| `--md-sys-color-on-surface-variant` | `#464752` |
| `--md-sys-color-surface-container-lowest` | `#FFFFFF` |
| `--md-sys-color-surface-container-low` | `#F3F3FB` |
| `--md-sys-color-surface-container` | `#EDEDF5` |
| `--md-sys-color-surface-container-high` | `#E8E8F2` |
| `--md-sys-color-surface-container-highest` | `#DBDBE5` |
| `--md-sys-color-outline` | `#767780` |
| `--md-sys-color-outline-variant` | `#C6C6CF` |
| `--md-sys-color-inverse-surface` | `#2E2E33` |
| `--md-sys-color-inverse-on-surface` | `#F0F0F8` |
| `--md-sys-color-inverse-primary` | `#A8C7FF` |
| `--md-sys-color-scrim` | `#000000` |
| `--md-sys-color-shadow` | `#000000` |
| `--md-sys-color-elevation` | `transparent` |

> **Note:** When using `theme-all.css`, switch palettes at runtime with `document.documentElement.setAttribute('data-theme', 'volcanic')`.

---

## Typography Scale

All palette CSS files include the full M3 typography scale. Use these CSS custom properties.
All size, tracking, and line-height values use **rem** units (base 16px) for accessibility — they respect user font-size preferences.

| Token | Size | Weight | Tracking | Line Height | Use Case |
|-------|------|--------|----------|-------------|----------|
| `--md-sys-typescale-display-large` | 3.5625rem | 400 | -0.01563rem | 4rem | Hero headlines |
| `--md-sys-typescale-display-medium` | 2.8125rem | 400 | 0 | 3.25rem | Large feature text |
| `--md-sys-typescale-display-small` | 2.25rem | 400 | 0 | 2.75rem | Page titles |
| `--md-sys-typescale-headline-large` | 2rem | 400 | 0 | 2.5rem | Section headers |
| `--md-sys-typescale-headline-medium` | 1.75rem | 400 | 0 | 2.25rem | Card titles |
| `--md-sys-typescale-headline-small` | 1.5rem | 400 | 0 | 2rem | Emphasized text |
| `--md-sys-typescale-title-large` | 1.375rem | 500 | 0 | 1.75rem | List item titles |
| `--md-sys-typescale-title-medium` | 1rem | 500 | 0.00938rem | 1.5rem | Card titles, tabs |
| `--md-sys-typescale-title-small` | 0.875rem | 500 | 0.00625rem | 1.25rem | Small headers |
| `--md-sys-typescale-body-large` | 1rem | 400 | 0.03125rem | 1.5rem | Primary body text |
| `--md-sys-typescale-body-medium` | 0.875rem | 400 | 0.01563rem | 1.25rem | Default body text |
| `--md-sys-typescale-body-small` | 0.75rem | 400 | 0.025rem | 1rem | Captions, helpers |
| `--md-sys-typescale-label-large` | 0.875rem | 500 | 0.00625rem | 1.25rem | Button text, tabs |
| `--md-sys-typescale-label-medium` | 0.75rem | 500 | 0.03125rem | 1rem | Tags, chip text |
| `--md-sys-typescale-label-small` | 0.6875rem | 500 | 0.03125rem | 1rem | Small labels |

**Font families:**
- `--md-sys-font-family-display` / `--md-sys-font-family-body`: `'Inter', 'Roboto', sans-serif`
- `--md-sys-font-family-mono`: `'JetBrains Mono', 'Fira Code', monospace`

Always load these Google Fonts when using the theme:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## Spacing Scale

4px base unit, consistent across all palettes:

| Token | Value | Common Name |
|-------|-------|-------------|
| `--md-sys-spacing-0` | 0px | None |
| `--md-sys-spacing-1` | 4px | xs |
| `--md-sys-spacing-2` | 8px | sm |
| `--md-sys-spacing-3` | 12px | md-sm |
| `--md-sys-spacing-4` | 16px | base |
| `--md-sys-spacing-5` | 20px | md |
| `--md-sys-spacing-6` | 24px | lg |
| `--md-sys-spacing-7` | 28px | lg-md |
| `--md-sys-spacing-8` | 32px | xl |
| `--md-sys-spacing-9` | 36px | |
| `--md-sys-spacing-10` | 40px | 2xl |
| `--md-sys-spacing-11` | 44px | |
| `--md-sys-spacing-12` | 48px | 3xl |
| `--md-sys-spacing-16` | 64px | 4xl |

---

## Shape (Corner Radii)

| Token | Value | Usage |
|-------|-------|-------|
| `--md-sys-shape-corner-none` | 0px | Sharp edges |
| `--md-sys-shape-corner-extra-small` | 4px | Chips, small elements |
| `--md-sys-shape-corner-small` | 8px | Cards (small) |
| `--md-sys-shape-corner-medium` | 12px | Cards, dialogs |
| `--md-sys-shape-corner-large` | 16px | FABs, large cards |
| `--md-sys-shape-corner-extra-large` | 28px | Dialogs, modal sheets |
| `--md-sys-shape-corner-full` | 9999px | Pills, circular buttons |

---

## Elevation

CSS box-shadow tokens for M3 elevation levels:

| Token | Value | Usage |
|-------|-------|-------|
| `--md-sys-elevation-0` | `none` | Flat surface |
| `--md-sys-elevation-1` | `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14)` | Cards at rest |
| `--md-sys-elevation-2` | `0 2px 6px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14)` | Lifted cards |
| `--md-sys-elevation-3` | `0 4px 12px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14)` | Dialogs, menus |
| `--md-sys-elevation-4` | `0 6px 18px rgba(0,0,0,0.12), 0 8px 10px rgba(0,0,0,0.14)` | Snackbars |
| `--md-sys-elevation-5` | `0 10px 24px rgba(0,0,0,0.12), 0 12px 14px rgba(0,0,0,0.14)` | Modals |

### Dark Theme Elevation Overlays

In dark themes, Material 3 uses **tinted overlays** instead of shadow-only elevation. The elevation CSS classes apply `color-mix()` to blend the primary color into the surface:

```css
.md-elevation-1 { background-color: color-mix(in srgb, var(--md-sys-color-primary) 3%, var(--md-sys-color-surface)); }
.md-elevation-2 { background-color: color-mix(in srgb, var(--md-sys-color-primary) 6%, var(--md-sys-color-surface)); }
.md-elevation-3 { background-color: color-mix(in srgb, var(--md-sys-color-primary) 8%, var(--md-sys-color-surface)); }
.md-elevation-4 { background-color: color-mix(in srgb, var(--md-sys-color-primary) 12%, var(--md-sys-color-surface)); }
.md-elevation-5 { background-color: color-mix(in srgb, var(--md-sys-color-primary) 14%, var(--md-sys-color-surface)); }
```

**For dark theme cards/containers**: Apply both `box-shadow` from the elevation tokens AND the `.md-elevation-N` class for correct M3 elevation.

---

## State Layers (Interaction States)

M3 defines **state layer opacities** that overlay the "on" color onto the container color to produce hover, focus, active, drag, and disabled effects. The theme provides both raw opacity tokens and per-palette derived custom properties using `color-mix()`.

### State Layer Opacities

| Token | Value | Usage |
|-------|-------|-------|
| `--md-sys-state-hover-opacity` | `8%` | Hover state overlay |
| `--md-sys-state-focus-opacity` | `12%` | Focus state overlay |
| `--md-sys-state-active-opacity` | `12%` | Active/pressed state overlay |
| `--md-sys-state-drag-opacity` | `16%` | Drag state overlay |
| `--md-sys-state-disabled-opacity` | `38%` | Disabled element opacity (applied to entire component) |
| `--md-sys-state-disabled-container-opacity` | `12%` | Disabled container opacity |

### Per-Palette Derived State Layers

For convenience, each palette CSS generates derived custom properties of the form `--md-sys-state-{color}-{state}` using `color-mix()`:

```css
/* Example: hover state on primary button */
--md-sys-state-primary-hover: color-mix(in srgb, var(--md-sys-color-on-primary) var(--md-sys-state-hover-opacity), var(--md-sys-color-primary));

/* Example: active state on surface */
--md-sys-state-surface-active: color-mix(in srgb, var(--md-sys-color-on-surface) var(--md-sys-state-active-opacity), var(--md-sys-color-surface));

/* Example: hover state on surface-variant */
--md-sys-state-surface-variant-hover: color-mix(in srgb, var(--md-sys-color-on-surface-variant) var(--md-sys-state-hover-opacity), var(--md-sys-color-surface-variant));
```

Available `{color}` values: `primary`, `secondary`, `tertiary`, `error`, `surface`, `surface-variant`.
Available `{state}` values: `hover`, `focus`, `active`, `drag`.

**Usage in buttons and interactive elements:**

```css
/* ✅ Correct: M3 state layers */
.button:hover { background-color: var(--md-sys-state-primary-hover); }
.button:active { background-color: var(--md-sys-state-primary-active); }

/* ❌ Avoid: filter-based brightness */
.button:hover { filter: brightness(1.1); }
```

---

## Motion (Duration & Easing)

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--md-sys-motion-duration-short1` | 50ms | Micro-feedback |
| `--md-sys-motion-duration-short2` | 100ms | Ripple, press |
| `--md-sys-motion-duration-short3` | 150ms | Toggle, checkbox |
| `--md-sys-motion-duration-short4` | 200ms | Small transitions |
| `--md-sys-motion-duration-medium1` | 250ms | Button hover |
| `--md-sys-motion-duration-medium2` | 300ms | **Default transition** |
| `--md-sys-motion-duration-medium3` | 350ms | Expand, collapse |
| `--md-sys-motion-duration-medium4` | 400ms | Sheet transitions |
| `--md-sys-motion-duration-long1` | 450ms | Page transitions |
| `--md-sys-motion-duration-long2` | 500ms | Complex animations |
| `--md-sys-motion-duration-extra-long1`–`4` | 550–700ms | Emphasized transitions |

### Easing

| Token | Value | Usage |
|-------|-------|-------|
| `--md-sys-motion-easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` | **Default easing** — most transitions |
| `--md-sys-motion-easing-standard-accelerate` | `cubic-bezier(0.3, 0, 0.8, 0.15)` | Entering elements |
| `--md-sys-motion-easing-standard-decelerate` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Exiting elements |
| `--md-sys-motion-easing-emphasized` | `cubic-bezier(0.2, 0, 0, 1)` | Emphasized transitions |
| `--md-sys-motion-easing-emphasized-accelerate` | `cubic-bezier(0.3, 0, 0.8, 0.15)` | Emphasized enter |
| `--md-sys-motion-easing-emphasized-decelerate` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Emphasized exit |
| `--md-sys-motion-easing-legacy` | `cubic-bezier(0.4, 0, 0.2, 1)` | Legacy compatibility |
| `--md-sys-motion-easing-linear` | `linear` | Linear progress |

---

## Pre-built Components (components.css)

When you load `components.css`, these M3 component classes are available:

> **Note:** `components.css` sets `html { font-size: 100% }` to establish the rem baseline (16px). All typography and spacing tokens use rem units, so the entire component library scales correctly with user font-size preferences. The nav-rail width and search bar dimensions use `--md-sys-layout-rail-width` and other layout tokens for consistency.

### Buttons

```html
<!-- Filled (primary) -->
<button class="md-button md-button--filled">Primary Action</button>

<!-- Filled (secondary) -->
<button class="md-button md-button--filled-secondary">Secondary</button>

<!-- Filled (tertiary) -->
<button class="md-button md-button--filled-tertiary">Tertiary</button>

<!-- Outlined -->
<button class="md-button md-button--outlined">Outlined</button>

<!-- Tonal -->
<button class="md-button md-button--tonal">Tonal</button>

<!-- Text -->
<button class="md-button md-button--text">Text Button</button>

<!-- Icon -->
<button class="md-button md-button--icon">🔍</button>

<!-- FAB -->
<button class="md-button md-button--fab">＋</button>
```

### Cards

```html
<div class="md-card md-card--elevated">Elevated card (shadow)</div>
<div class="md-card md-card--filled">Filled card (surface-container-highest bg)</div>
<div class="md-card md-card--outlined">Outlined card (border)</div>

<!-- With content -->
<div class="md-card md-card--elevated">
  <div class="md-card-title">Title</div>
  <div class="md-card-subtitle">Subtitle</div>
  <div class="md-card-body">Body text here</div>
</div>
```

### Chips

```html
<span class="md-chip md-chip--assist">Assist</span>
<span class="md-chip md-chip--filter">Filter</span>
<span class="md-chip md-chip--suggestion">Suggestion</span>
```

### Text Fields

```html
<div class="md-textfield">
  <input type="text" id="name" placeholder=" ">
  <label for="name">Name</label>
</div>
```

### Navigation Rail

```html
<nav class="nav-rail">
  <a href="#" class="nav-rail-item nav-rail-item--active">
    <div class="nav-rail-icon">🏠</div>
    <span>Home</span>
  </a>
</nav>
```

**Important:** Add `app-bar { margin-left: 80px; }` and `.main-content { margin-left: 80px; }` when using the nav rail.

### Dialog

```html
<div class="md-dialog-overlay">
  <div class="md-dialog">
    <div class="md-dialog-title">Confirm?</div>
    <div class="md-dialog-body">Are you sure?</div>
    <div class="md-dialog-actions">
      <button class="md-button md-button--text">Cancel</button>
      <button class="md-button md-button--filled">Confirm</button>
    </div>
  </div>
</div>
```

### Snackbar

```html
<div class="md-snackbar">
  Item archived
  <button class="md-button md-button--text">Undo</button>
</div>
```

### Divider

```html
<hr class="md-divider">
```

### Lists & Progress

```html
<div class="md-list">
  <div class="md-list-item">
    <div class="md-list-item-icon">📥</div>
    <div class="md-list-item-text">
      <div class="md-list-item-headline">Inbox</div>
      <div class="md-list-item-supporting">12 new messages</div>
    </div>
  </div>
</div>

<div class="md-progress-linear">
  <div class="md-progress-linear__bar" style="width: 75%;"></div>
</div>
```

---

## Agent Guidelines: Building Consistent M3 Sites

### 1. Always Use the Token System

**✅ Do:**
```css
background-color: var(--md-sys-color-surface);
color: var(--md-sys-color-on-surface);
padding: var(--md-sys-spacing-4);
border-radius: var(--md-sys-shape-corner-medium);
font-size: var(--md-sys-typescale-body-medium-size);
```

**❌ Don't:**
```css
background-color: #11151C;   /* Hard-coded color */
color: #e2e3de;               /* Hard-coded color */
padding: 16px;                /* Magic number */
border-radius: 12px;          /* Magic number */
```

### 2. Layout Structure

For a standard M3 app layout with navigation rail:

```html
<html data-theme="obsidian">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-all.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/components.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
  <nav class="nav-rail"><!-- ... --></nav>
  <header class="app-bar"><h1>App Name</h1></header>
  <main class="main-content"><!-- ... --></main>
</body>
</html>
```

### 3. Palette Selection Rule

- **Default:** Obsidian (dark)
- **Dashboard / analytics:** Midnight Ocean (teal accent stands out in data viz)
- **Warm / content site:** Volcanic
- **Documentation / public site:** Frost (light)
- **Never** mix palettes on a single page

### 4. Dark Theme Best Practices

1. **Always use surface-container variants** for elevated content (cards, sheets, modals), never pure surface:
   - Surface → page background
   - Surface-container-low → resting cards
   - Surface-container → dialogs, search bars
   - Surface-container-high → hover states
   - Surface-container-highest → filled cards, emphasized surfaces

2. **Use elevation overlays** for dark themes. Apply `box-shadow: var(--md-sys-elevation-N)` for shadow AND optionally `.md-elevation-N` for tinted background.

3. **On-surface-variant** is your secondary text color — use it for captions, descriptions, and supporting text.

4. **Outline / outline-variant** for borders — never use opaque grays.

### 5. Interactive Elements

```css
/* Buttons: use theme tokens */
.button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border-radius: var(--md-sys-shape-corner-full);
  padding: 0 var(--md-sys-spacing-4);
  height: 40px;
  font-size: var(--md-sys-typescale-label-large-size);
  transition: all var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard);
}
/* M3 state layers — use color-mix() derived tokens, not filter: brightness() */
.button:hover { background-color: var(--md-sys-state-primary-hover); }
.button:active { background-color: var(--md-sys-state-primary-active); }
```

### 6. Common Patterns

**Card in a grid:**
```html
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--md-sys-spacing-4);">
  <div class="md-card md-card--elevated">
    <div class="md-card-title">Title</div>
    <div class="md-card-body">Content</div>
  </div>
</div>
```

**Data table row:**
```html
<div style="background-color: var(--md-sys-color-surface-container-low); border-radius: var(--md-sys-shape-corner-small); padding: var(--md-sys-spacing-3) var(--md-sys-spacing-4); margin-bottom: var(--md-sys-spacing-2);">
  <span style="color: var(--md-sys-color-on-surface); font-size: var(--md-sys-typescale-body-medium-size);">Row content</span>
</div>
```

**Status badge / pill:**
```html
<span style="background-color: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); padding: var(--md-sys-spacing-1) var(--md-sys-spacing-3); border-radius: var(--md-sys-shape-corner-full); font-size: var(--md-sys-typescale-label-small-size);">
  Active
</span>
```

---

## Showcase

A live preview site is included at `showcase/index.html`. To run it:

```bash
cd theme-kaleb-one
npm run dev     # Python http.server on :8080
# or
npx serve showcase   # Alternative
```

The showcase demonstrates all four palettes, the full color system, typography scale, elevation, buttons, cards, inputs, chips, dialogs, snackbars, lists, progress indicators, and motion/shape tokens.

---

## File Structure

```
theme-kaleb-one/
├── AGENT.md              ← You are here
├── README.md             ← Human-facing overview
├── package.json          ← npm package config (@kaleb-one/theme)
├── scripts/
│   └── build-tokens.js   ← Token build script
├── src/
│   ├── tokens/
│   │   ├── colors/
│   │   │   ├── palettes.js       ← Palette definitions (source colors)
│   │   │   └── derive-roles.js    ← M3 color role derivation algorithm
│   │   ├── typography/scale.js    ← Typography token definitions
│   │   ├── spacing/grid.js        ← Spacing scale
│   │   ├── elevation/shadows.js   ← Elevation + dark overlay percentages
│   │   ├── interaction/state-layers.js ← M3 state layer opacities (hover, focus, active, drag, disabled)
│   │   ├── shape/corners.js       ← Shape radii
│   │   └── motion/transitions.js  ← Duration + easing
│   └── components/
│       └── components.css         ← Pre-built M3 component styles
├── dist/                         ← Built output (committed)
│   ├── theme-obsidian.css        ← Single-palette CSS
│   ├── theme-midnight-ocean.css
│   ├── theme-volcanic.css
│   ├── theme-frost.css
│   ├── theme-all.css             ← All palettes + tokens
│   ├── components.css            ← Component styles (copy of src)
│   ├── tokens.json               ← Machine-readable token data
│   └── tailwind-preset.js         ← Tailwind v3 preset (Obsidian)
└── showcase/
    ├── index.html               ← Interactive showcase site
    └── css/
        ├── theme-all.css         ← Copied from dist on build
        └── components.css
```

---

## Token Data (JSON)

If you need tokens programmatically, use `dist/tokens.json`:

```js
import tokens from '@kaleb-one/theme'; // or fetch the JSON

// Full structure:
tokens.palettes.obsidian.roles['--md-sys-color-primary'] // → '#BACFE5'
tokens.typography.fontFamily.display                         // → "'Inter', 'Roboto', sans-serif"
tokens.spacing['--md-sys-spacing-4']                        // → '16px'
tokens.shape['--md-sys-shape-corner-medium']                // → '12px'
tokens.elevation['--md-sys-elevation-2']                    // → '0 2px 6px ...'
tokens.motion.duration['--md-sys-motion-duration-medium2']  // → '300ms'
tokens.motion.easing['--md-sys-motion-easing-standard']     // → 'cubic-bezier(0.2, 0, 0, 1)'
```

---

## Building & Modifying

```bash
npm install          # Install dependencies
npm run build        # Regenerate all dist/ files from src/
npm run dev           # Serve showcase on :8080
npm run build:site    # Build + copy showcase assets
```

To add a new palette, edit `src/tokens/colors/palettes.js` and run `npm run build`. The build script will regenerate all CSS, JSON, and Tailwind preset files.

### CI Validation

A GitHub Actions workflow at `.github/workflows/validate.yml` runs on every push/PR to `main`. It validates:

1. **Build succeeds** — `npm run build` completes without error.
2. **`dist/` is in sync** — No uncommitted changes to `dist/` after a clean build.
3. **Key tokens present** — Checks that `theme-all.css` contains essential tokens across all categories (color, typography, spacing, shape, elevation, motion, layout, state, font-family).
4. **Typography uses rem** — Fails if any `--md-sys-typescale-*-size` token still uses `px` instead of `rem`.
5. **`prefers-color-scheme` fallback exists** — Ensures `theme-all.css` includes the auto-dark/light fallback.

### Contrast Audit

All text-on-background token pairs pass **WCAG AA**. Two decorative tokens intentionally fail AA for text but are correct per M3 spec:

- `outline-variant` on `surface` — used only for borders and dividers, not text.
- `error-container` on `surface` — used only for background fills, not text.

These are not accessibility violations because they are never used as foreground text colors.

---

## License

MIT — use freely for any project, commercial or personal.
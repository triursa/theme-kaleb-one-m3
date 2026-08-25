---
name: m3-design
description: Build UIs with the kaleb.one Material Design 3 theme system.
version: 1.1.0
author: Kaleb (triursa), Hermes Agent
license: MIT
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [m3, material-design, design-system, tokens, kaleb-one, ui, css]
    related_skills: [design-md, popular-web-designs, architecture-diagram]
---

# M3 Design Skill — kaleb.one Theme System

Use this skill whenever designing, building, or reviewing UI for any kaleb.one project.
It provides the full token reference, component recipes, palette rules, and dark-theme
guidelines from this repo (`theme-kaleb-one-m3`).

## Theme Repo

- **GitHub:** https://github.com/triursa/theme-kaleb-one-m3
- **npm package:** `@kaleb-one/theme`
- **CDN base:** `https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/`
- **Showcase:** https://theme.kaleb.one

## When to Use

- Designing, building, or reviewing UI for any kaleb.one project
- Applying M3 tokens to a new or existing web app
- Adding or modifying palettes, tokens, or components in this repo
- Debugging M3 theme issues (wrong colors, missing tokens, broken states)

## Don't use for

- Non-M3 design systems (use `popular-web-designs` instead)
- Google Docs / plain-text formatting (no CSS tokens there)

## Quick Start — CDN (for static pages, visualizations, one-off HTML)

Zero-build-step path. No npm, no Vite, no SvelteKit. Just HTML with `<link>` tags.

```html
<!DOCTYPE html>
<html data-theme="obsidian">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>App Name</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-all.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/components.css">
  <style>
    body {
      background-color: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
      font-family: var(--md-sys-font-family-body), sans-serif;
    }
  </style>
</head>
<body>
  <!-- your content -->
</body>
</html>
```

### Static HTML deployment pattern (kaleb.one)

For static single-page apps on kaleb.one infrastructure:
- **Dockerfile**: `FROM caddy:2-alpine` -> copy Caddyfile + `*.html` to `/srv/`
- **Caddyfile**: Listen on the assigned port, `root * /srv`, `file_server`, `try_files {path} /index.html`
- **docker-compose.yml**: Bind to `127.0.0.1:PORT` only (cloudflared handles external access)
- **No CF Access needed** for public tools

**Caddyfile template:**
```
:PORT {
  root * /srv
  file_server
  try_files {path} /index.html
}
```

**Dockerfile template:**
```dockerfile
FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY *.html /srv/
EXPOSE PORT
```

### Pitfalls (static HTML path)
- **Dockerfile must copy all HTML files**: Use `COPY *.html /srv/`, not `COPY index.html /srv/index.html`.
- **M3 tokens via inline `style` attributes work fine** in static HTML. Use CSS custom properties everywhere, never hardcode hex values.
- **No SPA router needed** for single-page tools. Use `try_files {path} /index.html` only if you have client-side routing.

## Quick Start — npm (for build-tool projects)

```bash
npm install @kaleb-one/theme
```

```js
// Import a specific palette
import '@kaleb-one/theme/css/obsidian';
// Or all palettes (switch at runtime with data-theme)
import '@kaleb-one/theme/css/all';
// Component styles
import '@kaleb-one/theme/css/components';
```

```js
// Tailwind v3 preset
// tailwind.config.js
module.exports = {
  presets: [require('@kaleb-one/theme/tailwind')],
};
// Usage: bg-m3-surface, text-m3-on-surface, etc.
```

## Palette Selection

| Use Case | Palette | data-theme | Why |
|----------|---------|------------|-----|
| Default / most apps | **Obsidian** | `obsidian` | Canonical dark theme, slate + electric blue accent |
| Dashboards / data viz | **Midnight Ocean** | `midnight-ocean` | Navy + teal makes data pop |
| Warm / content sites | **Volcanic** | `volcanic` | Dark warm gray + amber accent |
| Docs / public sites | **Frost** | `frost` | Light theme, cool gray + blue |

**Auto-detection:** When using `theme-all.css` without a `data-theme` attribute, `prefers-color-scheme` automatically selects Obsidian (dark) or Frost (light) based on the user's OS preference.

**Single-palette files:** `theme-obsidian.css` etc. include a `:root` fallback, tokens apply without `data-theme`. Setting `data-theme` overrides via higher specificity.

**Rule:** Never mix palettes on a single page. One palette per app.

## Color Token Quick Reference (Obsidian, default)

| Token | Hex | Usage |
|-------|-----|-------|
| `--md-sys-color-primary` | `#BACFE5` | Primary actions, FABs, active states |
| `--md-sys-color-on-primary` | `#2C3E50` | Text/icons on primary |
| `--md-sys-color-primary-container` | `#3D5167` | Container variant |
| `--md-sys-color-on-primary-container` | `#D6E5F5` | Text on primary container |
| `--md-sys-color-secondary` | `#C6CBD9` | Secondary actions, toggle active |
| `--md-sys-color-on-secondary` | `#31343C` | Text on secondary |
| `--md-sys-color-secondary-container` | `#474B55` | Nav highlights, secondary containers |
| `--md-sys-color-on-secondary-container` | `#E3E6EF` | Text on secondary container |
| `--md-sys-color-tertiary` | `#CDC6E2` | Tertiary accent |
| `--md-sys-color-tertiary-container` | `#4B465C` | Tertiary containers |
| `--md-sys-color-on-tertiary-container` | `#E9E2FF` | Text on tertiary container |
| `--md-sys-color-error` | `#FFB4AB` | Error / destructive actions |
| `--md-sys-color-error-container` | `#93000A` | Error banners |
| `--md-sys-color-surface` | `#11151C` | **Page background** |
| `--md-sys-color-on-surface` | `#DCE1E9` | **Primary text** |
| `--md-sys-color-surface-variant` | `#454D56` | Surface variant bg |
| `--md-sys-color-on-surface-variant` | `#C5CDD9` | Secondary text / captions |
| `--md-sys-color-surface-container-lowest` | `#0D1117` | Deepest bg layer |
| `--md-sys-color-surface-container-low` | `#1A1F26` | Resting cards |
| `--md-sys-color-surface-container` | `#1E242C` | Dialogs, search bars |
| `--md-sys-color-surface-container-high` | `#282E36` | Hover states |
| `--md-sys-color-surface-container-highest` | `#31383F` | Filled cards |
| `--md-sys-color-outline` | `#8F97A3` | Borders, dividers |
| `--md-sys-color-outline-variant` | `#454D56` | Subtle borders |

**For other palettes,** always load the CSS and reference tokens, never hardcode hex values.

## Typography Scale

All sizes use `rem` units (base 16px) for accessibility. Use CSS custom properties, never raw sizes:

| Token | Size (rem) | Weight | Use |
|-------|-----------|--------|-----|
| `--md-sys-typescale-display-large` | 3.5625rem | 400 | Hero headlines |
| `--md-sys-typescale-display-medium` | 2.8125rem | 400 | Large features |
| `--md-sys-typescale-display-small` | 2.25rem | 400 | Page titles |
| `--md-sys-typescale-headline-large` | 2rem | 400 | Section headers |
| `--md-sys-typescale-headline-medium` | 1.75rem | 400 | Card titles |
| `--md-sys-typescale-headline-small` | 1.5rem | 400 | Emphasized text |
| `--md-sys-typescale-title-large` | 1.375rem | 500 | List item titles |
| `--md-sys-typescale-title-medium` | 1rem | 500 | Card titles, tabs |
| `--md-sys-typescale-title-small` | 0.875rem | 500 | Small headers |
| `--md-sys-typescale-body-large` | 1rem | 400 | Primary body text |
| `--md-sys-typescale-body-medium` | 0.875rem | 400 | Default body text |
| `--md-sys-typescale-body-small` | 0.75rem | 400 | Captions, helpers |
| `--md-sys-typescale-label-large` | 0.875rem | 500 | Button text, tabs |
| `--md-sys-typescale-label-medium` | 0.75rem | 500 | Tags, chip text |
| `--md-sys-typescale-label-small` | 0.6875rem | 500 | Small labels |

Each token has `-size`, `-weight`, `-tracking`, `-line-height` sub-properties.

**Font families:**
- `--md-sys-font-family-display` / `--md-sys-font-family-body`: `'Inter', 'Roboto', sans-serif`
- `--md-sys-font-family-mono`: `'JetBrains Mono', 'Fira Code', monospace`

## Spacing, Shape, Elevation, Motion

All available as CSS custom properties. Reference them, never hardcode:

- **Spacing:** `--md-sys-spacing-1` (4px) through `--md-sys-spacing-16` (64px)
- **Shape:** `--md-sys-shape-corner-none` (0) through `--md-sys-shape-corner-full` (9999px)
- **Elevation shadows:** `--md-sys-elevation-0` through `--md-sys-elevation-5`
- **Elevation overlays (dark):** `.md-elevation-1` through `.md-elevation-5` classes
- **Motion duration:** `--md-sys-motion-duration-short1` (50ms) through extra-long (700ms)
- **Motion easing:** `--md-sys-motion-easing-standard` as default

## State Layers (Interaction States)

M3 defines interaction state layers as overlays of the "on" color at specific opacities:

| Token | Value | Usage |
|-------|-------|-------|
| `--md-sys-state-hover-opacity` | 8% | Hover state |
| `--md-sys-state-focus-opacity` | 12% | Focus state |
| `--md-sys-state-active-opacity` | 12% | Active/pressed state |
| `--md-sys-state-drag-opacity` | 16% | Drag state |
| `--md-sys-state-disabled-opacity` | 38% | Disabled content opacity |
| `--md-sys-state-disabled-container-opacity` | 12% | Disabled container opacity |

Per-palette derived state layers are also available (e.g., `--md-sys-state-primary-hover`, `--md-sys-state-surface-active`) using `color-mix()`.

**Correct usage:**
```css
.md-button--filled:hover {
  background-color: color-mix(in srgb, var(--md-sys-color-on-primary) var(--md-sys-state-hover-opacity), var(--md-sys-color-primary));
}
```

**Don't use `filter: brightness()`**, it doesn't respect M3's color system and produces inconsistent results across palettes.

## Dark Theme Rules (Critical)

1. **Always use surface-container variants** for elevated content, never pure `surface`:
   - Cards at rest -> `surface-container-low`
   - Dialogs, search -> `surface-container`
   - Hover states -> `surface-container-high`
   - Filled/emphasized -> `surface-container-highest`

2. **Apply both shadow + overlay** for dark elevation:
   ```html
   <div class="md-card md-card--elevated md-elevation-1">
   ```
   The `.md-elevation-N` class applies primary-tinted background; the card class applies `box-shadow`.

3. **On-surface-variant** is your secondary text color for captions, descriptions.
4. **Outline / outline-variant** for borders, never use opaque grays.

## Pre-built Components

Load `components.css` to get:
- Buttons: `md-button--filled`, `--filled-secondary`, `--filled-tertiary`, `--outlined`, `--tonal`, `--text`, `--icon`, `--fab`
- Cards: `md-card--elevated`, `--filled`, `--outlined`
- Chips: `md-chip--assist`, `--filter`, `--suggestion`
- Text fields: `md-textfield` with floating labels
- Navigation rail: `nav-rail`, `nav-rail-item`
- Dialog: `md-dialog-overlay`, `md-dialog`
- Snackbar: `md-snackbar`
- Divider: `md-divider`
- Lists: `md-list`, `md-list-item`
- Progress: `md-progress-linear`
- Tabs: `md-tabs`, `md-tab`
- M3 I/O 2026 Expressive: `md-list--expressive`, `md-menu--vertical`, `md-search-bar--contained`

## Layout Scaffold

```
<html data-theme="obsidian">
  <nav class="nav-rail">...</nav>
  <header class="app-bar"><h1>App</h1></header>
  <main class="main-content">...</main>
</html>
```

- Nav rail: 80px wide (expanded: 112px)
- App bar + main content: `margin-left: 80px` on desktop
- Compact (<600px): nav rail hides, full-width layout
- Max content width: 1200px

## Building New UI — Checklist

1. Start with `data-theme="obsidian"` (or appropriate palette)
2. Load `theme-all.css` + `components.css` + Google Fonts
3. Use CSS custom properties for ALL colors, sizes, spacing, radii
4. Use `surface-container-*` hierarchy, not raw surface colors
5. Use `on-surface` for primary text, `on-surface-variant` for secondary
6. Use `outline` / `outline-variant` for borders, never hard-coded grays
7. Apply both `box-shadow` token AND `.md-elevation-N` class for dark elevation
8. Use motion tokens for transitions: `var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-standard)`
9. Use state layer tokens for hover/focus/active: `var(--md-sys-state-hover-opacity)` with `color-mix()`
10. Never hardcode hex colors, always use `var(--md-sys-color-*)`
11. Never mix palettes on a single page
12. Never use opaque grays for borders on dark themes
13. Never use `filter: brightness()` for interactive states, use M3 state layers instead

## Adding New Palettes

Edit `src/tokens/colors/palettes.js` and add a new entry with full tonal stops
(0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 99, 100) for primary,
secondary, tertiary, error, neutral, and neutral-variant. Then run `npm run build`
to regenerate everything.

## File Structure Reference

```
theme-kaleb-one-m3/
├── src/
│   ├── tokens/
│   │   ├── colors/palettes.js        # Palette definitions (seed colors + tonal stops)
│   │   ├── colors/derive-roles.js     # M3 role derivation (dark/light)
│   │   ├── typography/scale.js        # Type scale tokens
│   │   ├── spacing/grid.js            # 4px spacing scale
│   │   ├── elevation/shadows.js       # Shadow + dark overlay %
│   │   ├── shape/corners.js           # Corner radii
│   │   ├── motion/transitions.js     # Duration + easing
│   │   ├── interaction/state-layers.js # M3 state layer opacities
│   │   └── layout/
│   │       ├── breakpoints.js         # M3 I/O 2026 breakpoints
│   │       └── scaffold.js            # Layout scaffold tokens
│   └── components/components.css      # Pre-built M3 component styles
├── dist/                              # Built output (committed)
│   ├── theme-obsidian.css
│   ├── theme-midnight-ocean.css
│   ├── theme-volcanic.css
│   ├── theme-frost.css
│   ├── theme-all.css
│   ├── components.css
│   ├── tokens.json
│   └── tailwind-preset.js
├── showcase/                           # Interactive preview site
├── AGENT.md                            # AI agent reference
└── scripts/build-tokens.js             # Build script
```

## SvelteKit Integration (v5 + Tailwind CSS v4)

When using M3 in a SvelteKit project (the common kaleb.one stack):

### Installation
```bash
pnpm add @kaleb-one/theme
```

### CSS Setup (app.css)
```css
@import 'tailwindcss';
@import '@kaleb-one/theme/css/all';
@import '@kaleb-one/theme/css/components';

body {
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  font-family: var(--md-sys-font-family-body), sans-serif;
}
```

### HTML Setup (app.html)
Set `data-theme="obsidian"` on the `<html>` element and load Google Fonts:
```html
<html lang="en" data-theme="obsidian">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  </head>
```

### Inline Style vs Tailwind Strategy
**Prefer M3 CSS custom properties via inline styles over Tailwind color utilities.** Tailwind's `bg-primary`, `text-gray-500`, etc. are NOT M3 tokens, they're Tailwind's own palette and will not respond to palette changes or follow the M3 color system.

**Correct pattern:**
```svelte
<div style="background-color: var(--md-sys-color-surface-container-low); color: var(--md-sys-color-on-surface);">
  <h2 style="font-size: var(--md-sys-typescale-headline-medium-size);">Section</h2>
</div>
```

**Incorrect pattern (do NOT mix):**
```svelte
<div class="bg-gray-800 text-white rounded-lg p-4">
```

**Tailwind layout utilities are fine**, `flex`, `grid`, `gap-4`, `max-w-6xl`, etc. don't affect theming and are perfectly compatible with M3.

### Defining App-Specific Component Classes (app.css)
When a UI pattern repeats (cards, buttons, trackers, tabs), define it as a CSS class using M3 tokens in `app.css` rather than repeating inline styles:
```css
.md-card {
  background-color: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-medium, 12px);
  padding: var(--md-sys-spacing-4, 16px);
}
```

### SvelteKit SSR + better-sqlite3 Pitfall
If your SvelteKit app uses `better-sqlite3` (or any native Node module) AND `@auth/sveltekit`, the Vite dev server will crash with a generic "Internal Error" if either:
1. The native module isn't externalized in `vite.config.ts`: `ssr: { external: ['better-sqlite3'], noExternal: ['@nimble/shared'] }`
2. The auth module is imported at the top level without env vars set

### SvelteKit CSS Import Pitfall (CRITICAL)
When rewriting SvelteKit pages to use M3 tokens, the `+layout.svelte` file MUST have a `<script>` tag that imports `app.css`. Without this import, **no CSS loads at all**, M3 variables resolve to empty strings, the page renders with transparent backgrounds and black text, and the theme appears completely broken.

**Correct pattern:**
```svelte
<script>
  import '../app.css';
</script>

<nav class="app-bar">...</nav>
<main><slot /></main>
```

**Debugging:** If M3 variables are empty, check `document.styleSheets` length in the browser console. If it's 0 (or missing your app.css), the import was dropped.

### Interactive State Colors with color-mix()
For hover/active states on M3-themed buttons and cards, use `color-mix()` with the M3 state opacity tokens:
```css
.md-card:hover {
  background-color: var(--md-sys-color-surface-container-high);
}
.md-button--filled:hover {
  background-color: color-mix(in srgb, var(--md-sys-color-on-primary) var(--md-sys-state-hover-opacity, 8%), var(--md-sys-color-primary));
}
```
**Never use `filter: brightness()`**, it breaks M3's color system and produces inconsistent results across palettes.

## Pitfalls — Responsive Panels (Showcase & Any Slide-over/Bottom-sheet)

When building mobile-first overlay panels that switch between bottom-sheet and side-drawer across breakpoints:

1. **Always explicitly reset `left`/`right`/`top`/`bottom` in media query overrides.** A base rule like `left: 0; right: 0` for a mobile bottom-sheet will persist into desktop breakpoints unless you add `left: auto` (or `right: auto`) in the override. CSS does not "reset" properties just because you set a different positioning axis.

2. **Use `visibility: hidden` + `pointer-events: none` as belt-and-suspenders for hidden panels.** `transform: translateX(100%)` alone is not reliable, if a `left`/`right` conflict places the element mid-viewport, the transform may not hide it.

3. **M3 I/O 2026 breakpoint pattern for panels:**
   - **Compact (<600px):** Full-width bottom sheet, `transform: translateY(100%)`
   - **Medium (600-839px):** Same bottom sheet, narrower if desired
   - **Expanded (>=840px):** Side panel `right: 0; left: auto; width: 360px; transform: translateX(100%)`

4. **Debugging tip:** Use `getComputedStyle(el)` to check all four inset properties. If both `left` and `right` resolve to pixel values with `width` also set, CSS silently ignores `right` (for LTR). The element will be pinned to `left: 0` instead of `right: 0`.

## Remaining Known Gaps

- **No `surface-tint` role**, M3 defines this for light theme elevation tinting; consider adding
- **Error palette is identical** across all 4 themes (correct per M3, but Frost error-container contrast may need verification for text on light surfaces)
- **No automated WCAG contrast validation** in CI, only manual audits done so far
- **Missing M3 components**, Checkbox, Radio, Switch, Slider, Select/Dropdown, Tooltip, Badge, Bottom Nav, Navigation Drawer, Date/Time Picker

## Audit History

- **v0.3.0 (June 2026)**, Full bug + feature audit. 16 issues fixed (3 WCAG critical, 3 build system, 8 architecture, 2 docs). See `references/audit-v03.md` for the complete findings and fixes.

## Verification

When building UI with this theme:
- Run `node scripts/build-tokens.js` to confirm all palettes generate 35 roles each
- Check `dist/` contains all expected CSS files after build
- Verify no hardcoded hex values in component CSS, all values should be `var(--md-sys-color-*)`
- Test dark theme elevation: both `box-shadow` and `.md-elevation-N` overlay should be visible
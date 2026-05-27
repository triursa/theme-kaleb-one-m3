# theme-kaleb-one-m3

Shared Material Design 3 theme package for the **kaleb.one ecosystem**.

## What This Is

- **Design tokens** — colors, typography, spacing, elevation, shape, motion
- **Multiple palettes** — pick what fits your vibe, we'll tune from there
- **Component showcase** — static site to preview every token and component
- **Export-ready** — CSS custom properties, Tailwind config, and JSON tokens

## Palettes

| # | Name | Vibe |
|---|------|------|
| 1 | **Obsidian** | Dark slate, electric accent — sharp, modern, minimal |
| 2 | **Midnight Ocean** | Deep navy, teal accent — calm authority |
| 3 | **Volcanic** | Dark warm gray, amber/orange accent — warm, grounded |
| 4 | **Frost** | Light theme — cool gray, blue accent — clean, professional |

## Dev

```bash
# Install dependencies
npm install

# Build CSS tokens
npm run build

# Serve showcase locally
npm run dev

# Build static showcase site
npm run build:site
```

## Structure

```
theme-kaleb-one/
├── src/
│   ├── tokens/          # Design token definitions (JSON)
│   │   ├── colors/
│   │   ├── typography/
│   │   ├── spacing/
│   │   ├── elevation/
│   │   ├── shape/
│   │   └── motion/
│   ├── palettes/        # Pre-built palette themes
│   ├── components/      # Component HTML/CSS
│   └── showcase/        # Static preview site
├── dist/                # Built output (CSS, JSON)
│   ├── theme-obsidian.css
│   ├── theme-midnight-ocean.css
│   ├── theme-volcanic.css
│   ├── theme-frost.css
│   └── tokens.json
└── package.json
```

## Usage (in other kaleb.one apps)

```html
<!-- Load a palette -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/triursa/theme-kaleb-one@main/dist/theme-obsidian.css">

<!-- Or import via npm -->
@import 'theme-kaleb-one/dist/tokens';
```

## 🤖 For AI Agents

See **[AGENT.md](./AGENT.md)** for a comprehensive design system reference — complete color token tables, typography scale, component recipes, and M3 best practices. If you're an AI agent building UIs with this theme system, start there.
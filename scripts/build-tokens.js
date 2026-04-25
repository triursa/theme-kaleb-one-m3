// Build script — generates CSS custom properties + JSON tokens from source definitions
const fs = require('fs');
const path = require('path');

const palettes = require('../src/tokens/colors/palettes');
const { deriveDarkTheme, deriveLightTheme } = require('../src/tokens/colors/derive-roles');
const typography = require('../src/tokens/typography/scale');
const spacing = require('../src/tokens/spacing/grid');
const elevation = require('../src/tokens/elevation/shadows');
const shape = require('../src/tokens/shape/corners');
const motion = require('../src/tokens/motion/transitions');

const distDir = path.join(__dirname, '..', 'dist');
const showcaseDir = path.join(__dirname, '..', 'showcase');

// Ensure dist exists
fs.mkdirSync(distDir, { recursive: true });

// Typography CSS
function buildTypographyCSS() {
  let css = `/* === Typography === */\n`;
  css += `:root {\n`;
  css += `  --md-sys-font-family-display: ${typography.fontFamily.display};\n`;
  css += `  --md-sys-font-family-body: ${typography.fontFamily.body};\n`;
  css += `  --md-sys-font-family-mono: ${typography.fontFamily.mono};\n\n`;
  const scales = ['displayLarge','displayMedium','displaySmall','headlineLarge','headlineMedium','headlineSmall','titleLarge','titleMedium','titleSmall','bodyLarge','bodyMedium','bodySmall','labelLarge','labelMedium','labelSmall'];
  for (const s of scales) {
    const t = typography[s];
    css += `  --md-sys-typescale-${s.replace(/([A-Z])/g, '-$1').toLowerCase()}-size: ${t.size};\n`;
    css += `  --md-sys-typescale-${s.replace(/([A-Z])/g, '-$1').toLowerCase()}-weight: ${t.weight};\n`;
    css += `  --md-sys-typescale-${s.replace(/([A-Z])/g, '-$1').toLowerCase()}-tracking: ${t.tracking};\n`;
    css += `  --md-sys-typescale-${s.replace(/([A-Z])/g, '-$1').toLowerCase()}-line-height: ${t.lineHeight};\n`;
  }
  css += `}\n\n`;
  return css;
}

// Spacing + Shape + Motion + Elevation CSS
function buildUtilityCSS() {
  let css = `/* === Spacing === */\n:root {\n`;
  for (const [k, v] of Object.entries(spacing)) {
    css += `  --${k}: ${v};\n`;
  }
  css += `}\n\n`;

  css += `/* === Elevation === */\n:root {\n`;
  for (const [k, v] of Object.entries(elevation)) {
    css += `  --${k}: ${v};\n`;
  }
  css += `}\n\n`;

  css += `/* === Shape === */\n:root {\n`;
  for (const [k, v] of Object.entries(shape)) {
    css += `  --${k}: ${v};\n`;
  }
  css += `}\n\n`;

  css += `/* === Motion — Duration === */\n:root {\n`;
  for (const [k, v] of Object.entries(motion.duration)) {
    css += `  --${k}: ${v};\n`;
  }
  css += `}\n\n`;

  css += `/* === Motion — Easing === */\n:root {\n`;
  for (const [k, v] of Object.entries(motion.easing)) {
    css += `  --${k}: ${v};\n`;
  }
  css += `}\n\n`;

  return css;
}

// Palette CSS
function buildPaletteCSS(paletteKey) {
  const palette = palettes[paletteKey];
  const roles = palette.dark ? deriveDarkTheme(palette) : deriveLightTheme(palette);
  const slug = paletteKey.replace(/([A-Z])/g, '-$1').toLowerCase();

  let css = `/*\n * Theme: ${palette.name}\n * ${palette.description}\n * Generated from source color: ${palette.source}\n */\n`;
  css += `:root[data-theme="${slug}"] {\n`;
  for (const [k, v] of Object.entries(roles)) {
    css += `  --${k}: ${v};\n`;
  }
  css += `}\n\n`;

  // Elevation overlays for dark themes
  if (palette.dark) {
    css += `:root[data-theme="${slug}"] .md-elevation-1 {\n`;
    css += `  background-color: color-mix(in srgb, var(--md-sys-color-primary) ${elevation.darkOverlays["md-sys-elevation-overlay-1"]}, var(--md-sys-color-surface));\n`;
    css += `}\n`;
    css += `:root[data-theme="${slug}"] .md-elevation-2 {\n`;
    css += `  background-color: color-mix(in srgb, var(--md-sys-color-primary) ${elevation.darkOverlays["md-sys-elevation-overlay-2"]}, var(--md-sys-color-surface));\n`;
    css += `}\n`;
    css += `:root[data-theme="${slug}"] .md-elevation-3 {\n`;
    css += `  background-color: color-mix(in srgb, var(--md-sys-color-primary) ${elevation.darkOverlays["md-sys-elevation-overlay-3"]}, var(--md-sys-color-surface));\n`;
    css += `}\n`;
    css += `:root[data-theme="${slug}"] .md-elevation-4 {\n`;
    css += `  background-color: color-mix(in srgb, var(--md-sys-color-primary) ${elevation.darkOverlays["md-sys-elevation-overlay-4"]}, var(--md-sys-color-surface));\n`;
    css += `}\n`;
    css += `:root[data-theme="${slug}"] .md-elevation-5 {\n`;
    css += `  background-color: color-mix(in srgb, var(--md-sys-color-primary) ${elevation.darkOverlays["md-sys-elevation-overlay-5"]}, var(--md-sys-color-surface));\n`;
    css += `}\n\n`;
  }

  return css;
}

// Also build a combined "all palettes" CSS
function buildAllPalettesCSS() {
  let css = `/*\n * theme-kaleb-one — All Palettes\n * Material Design 3 theme tokens for kaleb.one\n * \n * Usage: Set data-theme on <html> to one of:\n *   "obsidian" | "midnight-ocean" | "volcanic" | "frost"\n */\n\n`;
  css += buildTypographyCSS();
  css += buildUtilityCSS();
  for (const key of Object.keys(palettes)) {
    css += buildPaletteCSS(key);
  }
  return css;
}

// Build individual palette CSS files
for (const key of Object.keys(palettes)) {
  const slug = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  let css = `/*\n * Theme: ${palettes[key].name}\n * ${palettes[key].description}\n * Source: ${palettes[key].source}\n */\n\n`;
  css += buildTypographyCSS();
  css += buildUtilityCSS();
  css += buildPaletteCSS(key);
  fs.writeFileSync(path.join(distDir, `theme-${slug}.css`), css);
  console.log(`  ✓ dist/theme-${slug}.css`);
}

// Combined CSS
const allCSS = buildAllPalettesCSS();
fs.writeFileSync(path.join(distDir, 'theme-all.css'), allCSS);
console.log('  ✓ dist/theme-all.css');

// JSON tokens
const tokens = {
  palettes: {},
  typography,
  spacing,
  elevation,
  shape,
  motion,
};
for (const [key, palette] of Object.entries(palettes)) {
  const slug = key.replace(/([A-Z])/g, '-$1').toLowerCase();
  tokens.palettes[slug] = {
    name: palette.name,
    description: palette.description,
    dark: palette.dark,
    source: palette.source,
    roles: palette.dark ? deriveDarkTheme(palette) : deriveLightTheme(palette),
  };
}
fs.writeFileSync(path.join(distDir, 'tokens.json'), JSON.stringify(tokens, null, 2));
console.log('  ✓ dist/tokens.json');

// Copy component CSS into dist (for CDN consumption by apps)
const componentsSrc = path.join(__dirname, '..', 'src', 'components', 'components.css');
if (fs.existsSync(componentsSrc)) {
  fs.copyFileSync(componentsSrc, path.join(distDir, 'components.css'));
  console.log('  ✓ dist/components.css');
}

// Copy all CSS into showcase dir for the preview site
fs.mkdirSync(path.join(showcaseDir, 'css'), { recursive: true });
fs.copyFileSync(path.join(distDir, 'theme-all.css'), path.join(showcaseDir, 'css', 'theme-all.css'));
if (fs.existsSync(componentsSrc)) {
  fs.copyFileSync(componentsSrc, path.join(showcaseDir, 'css', 'components.css'));
}

console.log('\nBuild complete.');
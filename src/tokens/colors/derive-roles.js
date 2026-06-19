// M3 Surface & Container derivation for dark/light themes
// Given a palette, generates all M3 color roles

function deriveDarkTheme(palette) {
  return {
    // Primary
    "md-sys-color-primary": palette.primary[80],
    "md-sys-color-on-primary": palette.primary[20],
    "md-sys-color-primary-container": palette.primary[30],
    "md-sys-color-on-primary-container": palette.primary[90],
    // Secondary
    "md-sys-color-secondary": palette.secondary[80],
    "md-sys-color-on-secondary": palette.secondary[20],
    "md-sys-color-secondary-container": palette.secondary[30],
    "md-sys-color-on-secondary-container": palette.secondary[90],
    // Tertiary
    "md-sys-color-tertiary": palette.tertiary[80],
    "md-sys-color-on-tertiary": palette.tertiary[20],
    "md-sys-color-tertiary-container": palette.tertiary[30],
    "md-sys-color-on-tertiary-container": palette.tertiary[90],
    // Error
    "md-sys-color-error": palette.error[80],
    "md-sys-color-on-error": palette.error[20],
    "md-sys-color-error-container": palette.error[30],
    "md-sys-color-on-error-container": palette.error[90],
    // Surface
    "md-sys-color-surface": palette.neutral[6],
    "md-sys-color-on-surface": palette.neutral[90],
    "md-sys-color-surface-dim": palette.neutral[6],      // M3 I/O 2026 — darkest surface (same as surface in dark theme)
    "md-sys-color-surface-bright": palette.neutral[24],    // M3 I/O 2026 — lightest surface in dark theme
    "md-sys-color-surface-variant": palette["neutral-variant"][30],
    "md-sys-color-on-surface-variant": palette["neutral-variant"][80],
    "md-sys-color-surface-container-lowest": palette.neutral[4],
    "md-sys-color-surface-container-low": palette.neutral[10],
    "md-sys-color-surface-container": palette.neutral[12],
    "md-sys-color-surface-container-high": palette.neutral[17],
    "md-sys-color-surface-container-highest": palette.neutral[22],
    // Outline
    "md-sys-color-outline": palette["neutral-variant"][60],
    "md-sys-color-outline-variant": palette["neutral-variant"][30],
    // Inverse
    "md-sys-color-inverse-surface": palette.neutral[90],
    "md-sys-color-inverse-on-surface": palette.neutral[10],
    "md-sys-color-inverse-primary": palette.primary[40],
    // scrim
    "md-sys-color-scrim": palette.neutral[0],
    // Shadow
    "md-sys-color-shadow": palette.neutral[0],
    // Elevation overlays (M3 dark theme uses primary tinting)
    "md-sys-color-elevation": "transparent",
  };
}

function deriveLightTheme(palette) {
  return {
    // Primary
    "md-sys-color-primary": palette.primary[40],
    "md-sys-color-on-primary": palette.neutral[100],
    "md-sys-color-primary-container": palette.primary[90],
    "md-sys-color-on-primary-container": palette.primary[10],
    // Secondary
    "md-sys-color-secondary": palette.secondary[40],
    "md-sys-color-on-secondary": palette.neutral[100],
    "md-sys-color-secondary-container": palette.secondary[90],
    "md-sys-color-on-secondary-container": palette.secondary[10],
    // Tertiary
    "md-sys-color-tertiary": palette.tertiary[40],
    "md-sys-color-on-tertiary": palette.neutral[100],
    "md-sys-color-tertiary-container": palette.tertiary[90],
    "md-sys-color-on-tertiary-container": palette.tertiary[10],
    // Error
    "md-sys-color-error": palette.error[40],
    "md-sys-color-on-error": palette.neutral[100],
    "md-sys-color-error-container": palette.error[90],
    "md-sys-color-on-error-container": palette.error[10],
    // Surface
    "md-sys-color-surface": palette.neutral[98],
    "md-sys-color-on-surface": palette.neutral[10],
    "md-sys-color-surface-dim": palette.neutral[87],      // M3 I/O 2026 — dimmed surface in light theme
    "md-sys-color-surface-bright": palette.neutral[98],      // M3 I/O 2026 — brightest surface in light theme (same as surface)
    "md-sys-color-surface-variant": palette["neutral-variant"][90],
    "md-sys-color-on-surface-variant": palette["neutral-variant"][30],
    "md-sys-color-surface-container-lowest": palette.neutral[100],
    "md-sys-color-surface-container-low": palette.neutral[96],
    "md-sys-color-surface-container": palette.neutral[94],
    "md-sys-color-surface-container-high": palette.neutral[92],
    "md-sys-color-surface-container-highest": palette.neutral[87],
    // Outline
    "md-sys-color-outline": palette["neutral-variant"][50],
    "md-sys-color-outline-variant": palette["neutral-variant"][80],
    // Inverse
    "md-sys-color-inverse-surface": palette.neutral[20],
    "md-sys-color-inverse-on-surface": palette.neutral[95],
    "md-sys-color-inverse-primary": palette.primary[80],
    // Scrim
    "md-sys-color-scrim": palette.neutral[0],
    // Shadow
    "md-sys-color-shadow": palette.neutral[0],
    // Elevation
    "md-sys-color-elevation": "transparent",
  };
}

module.exports = { deriveDarkTheme, deriveLightTheme };
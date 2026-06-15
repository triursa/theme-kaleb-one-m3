// Typography tokens — Material Design 3 type scale
// Sizes use rem for accessibility (respects user font-size preferences)
// Base: 16px (browser default). Conversion: px / 16 = rem (5 decimal precision)
module.exports = {
  fontFamily: {
    display: "'Inter', 'Roboto', sans-serif",
    body: "'Inter', 'Roboto', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  // M3 type scale (rem values — 16px base)
  displayLarge: { size: "3.5625rem", weight: 400, tracking: "-0.01563rem", lineHeight: "4rem" },
  displayMedium: { size: "2.8125rem", weight: 400, tracking: "0", lineHeight: "3.25rem" },
  displaySmall: { size: "2.25rem", weight: 400, tracking: "0", lineHeight: "2.75rem" },
  headlineLarge: { size: "2rem", weight: 400, tracking: "0", lineHeight: "2.5rem" },
  headlineMedium: { size: "1.75rem", weight: 400, tracking: "0", lineHeight: "2.25rem" },
  headlineSmall: { size: "1.5rem", weight: 400, tracking: "0", lineHeight: "2rem" },
  titleLarge: { size: "1.375rem", weight: 500, tracking: "0", lineHeight: "1.75rem" },
  titleMedium: { size: "1rem", weight: 500, tracking: "0.00938rem", lineHeight: "1.5rem" },
  titleSmall: { size: "0.875rem", weight: 500, tracking: "0.00625rem", lineHeight: "1.25rem" },
  bodyLarge: { size: "1rem", weight: 400, tracking: "0.03125rem", lineHeight: "1.5rem" },
  bodyMedium: { size: "0.875rem", weight: 400, tracking: "0.01563rem", lineHeight: "1.25rem" },
  bodySmall: { size: "0.75rem", weight: 400, tracking: "0.025rem", lineHeight: "1rem" },
  labelLarge: { size: "0.875rem", weight: 500, tracking: "0.00625rem", lineHeight: "1.25rem" },
  labelMedium: { size: "0.75rem", weight: 500, tracking: "0.03125rem", lineHeight: "1rem" },
  labelSmall: { size: "0.6875rem", weight: 500, tracking: "0.03125rem", lineHeight: "1rem" },
};
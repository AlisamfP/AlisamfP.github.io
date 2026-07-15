// Single source of truth for the theme selector.
// Every id here MUST have a matching [data-theme="<id>"] block in _themes.scss.

export type ThemeMode = "light" | "dark";

export interface ThemeMeta {
  /** Matches [data-theme="<id>"] in _themes.scss */
  id: string;
  /** Human-readable name shown in the selector */
  label: string;
  /** Whether the theme reads as light or dark (for grouping/icons) */
  mode: ThemeMode;
  /**
   * Primary color(s) shown as the selector swatch. One or two hex values —
   * with two, the swatch circle is split diagonally. Mirrors the theme's
   * --color-accent / --color-secondary in _themes.scss.
   */
  colors: [string] | [string, string];
}

export const THEMES: ThemeMeta[] = [
  { id: "teal", label: "Teal & Ember", mode: "dark", colors: ["#62c0c0", "#d9773f"] },
  { id: "rose", label: "Rose", mode: "light", colors: ["#a83f5e", "#2f7e7e"] },
  { id: "forest", label: "Forest", mode: "dark", colors: ["#e0a458", "#6bbf8a"] },
  { id: "sand", label: "Sand", mode: "light", colors: ["#2f6b4f", "#b5652f"] },
];

export const THEME_IDS = THEMES.map((t) => t.id);

export const DEFAULT_THEME = "teal";

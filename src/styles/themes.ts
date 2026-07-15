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
}

export const THEMES: ThemeMeta[] = [
  { id: "teal", label: "Teal & Ember", mode: "dark" },
  { id: "rose", label: "Rose", mode: "light" },
  { id: "forest", label: "Forest", mode: "dark" },
  { id: "sand", label: "Sand", mode: "light" },
];

export const THEME_IDS = THEMES.map((t) => t.id);

export const DEFAULT_THEME = "teal";

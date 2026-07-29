// Single source of truth for the display-options picker.
// Mode (light/dark) and accent are independent axes — every accent must have
// a matching [data-accent="<id>"] block in _themes.scss (base = dark-tuned
// value, overridden for light via [data-mode="light"][data-accent="<id>"]).

export type Mode = "light" | "dark";

export interface AccentMeta {
  /** Matches [data-accent="<id>"] in _themes.scss */
  id: string;
  /** Human-readable name shown in the picker */
  label: string;
  /**
   * The accent's representative color, shown as the picker swatch
   * (dark-mode value — a representative sample, not mode-dependent).
   */
  color: string;
}

export const ACCENTS: AccentMeta[] = [
  { id: "teal", label: "Teal", color: "#62c0c0" },
  { id: "rose", label: "Rose", color: "#e8789a" },
  { id: "forest", label: "Forest", color: "#6bbf8a" },
  { id: "sand", label: "Sand", color: "#e0975a" },
];

export const ACCENT_IDS = ACCENTS.map((a) => a.id);
export const DEFAULT_ACCENT = "teal";

export const MODES: Mode[] = ["light", "dark"];
export const DEFAULT_MODE: Mode = "dark";

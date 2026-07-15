"use client";

import { useTheme } from "next-themes";
import { THEMES, DEFAULT_THEME } from "@/styles/themes";
import styles from "./ThemeSelector.module.scss";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  // `theme` is undefined until next-themes reads storage on the client, so we
  // fall back to the default and let it reconcile (hydration warning suppressed).
  const current = theme ?? DEFAULT_THEME;

  return (
    <div
      className={styles.wrapper}
      role="radiogroup"
      aria-label="Color theme"
      suppressHydrationWarning
    >
      {THEMES.map((t) => {
        const selected = t.id === current;
        // One color → solid; two colors → split diagonally down the center.
        const background =
          t.colors.length === 2
            ? `linear-gradient(135deg, ${t.colors[0]} 0 50%, ${t.colors[1]} 50% 100%)`
            : t.colors[0];

        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={t.label}
            title={t.label}
            className={styles.swatch}
            data-selected={selected}
            style={{ background }}
            onClick={() => setTheme(t.id)}
            suppressHydrationWarning
          />
        );
      })}
    </div>
  );
}

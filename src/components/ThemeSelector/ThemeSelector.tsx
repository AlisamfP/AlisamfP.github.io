"use client";

import { useTheme } from "next-themes";
import { TbPalette } from "react-icons/tb";
import { THEMES, DEFAULT_THEME } from "@/styles/themes";
import styles from "./ThemeSelector.module.scss";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  // `theme` is undefined until next-themes reads storage on the client, so we
  // fall back to the default and let it reconcile (hydration warning suppressed).
  return (
    <div className={styles.wrapper}>
      <TbPalette className={styles.icon} aria-hidden />
      <label htmlFor="theme-select" className="visually-hidden">
        Color theme
      </label>
      <select
        id="theme-select"
        className={styles.select}
        value={theme ?? DEFAULT_THEME}
        onChange={(e) => setTheme(e.target.value)}
        suppressHydrationWarning
      >
        {THEMES.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { THEMES, DEFAULT_THEME } from "@/styles/themes";
import styles from "./ThemeSelector.module.scss";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // The real stored theme is unknown at SSR time, so the server always
  // renders the default. Sticking to that default until after mount keeps
  // the first client render identical to the server's — no hydration
  // mismatch — then a normal post-mount update swaps in the real theme.
  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme ?? DEFAULT_THEME) : DEFAULT_THEME;
  const currentMeta = THEMES.find((t) => t.id === current) ?? THEMES[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.wrapper} ref={rootRef}>
      {/* Background comes from --color-primary/--color-accent (CSS), not JS
          state, so it's correct instantly on load — no flash of the default
          theme's colors. */}
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Color theme: ${currentMeta.label}. Choose a theme.`}
        onClick={() => setOpen((prev) => !prev)}
      />

      <div
        className={styles.panel}
        data-open={open}
        role="group"
        aria-label="Color theme"
        inert={!open}
      >
        {THEMES.filter((t) => t.id !== current).map((t) => (
          <button
            key={t.id}
            type="button"
            aria-label={t.label}
            title={t.label}
            className={styles.option}
            style={{
              background: `linear-gradient(135deg, ${t.colors[0]} 0 50%, ${t.colors[1]} 50% 100%)`,
            }}
            onClick={() => {
              setTheme(t.id);
              setOpen(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
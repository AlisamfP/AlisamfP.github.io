"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useAccent } from "@/app/accent-provider";
import { ACCENTS, DEFAULT_MODE } from "@/styles/themes";
import styles from "./DisplayOptions.module.scss";

export function DisplayOptions() {
  const { theme, setTheme } = useTheme();
  const { accent, setAccent } = useAccent();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // The real stored mode is unknown at SSR time, so the server always
  // renders the default. Sticking to that default until after mount keeps
  // the first client render identical to the server's — no hydration
  // mismatch — then a normal post-mount update swaps in the real mode.
  useEffect(() => setMounted(true), []);

  const mode = mounted ? (theme ?? DEFAULT_MODE) : DEFAULT_MODE;
  const currentAccent = ACCENTS.find((a) => a.id === accent) ?? ACCENTS[0];

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
      {/* Background comes from --color-primary (CSS), not JS state, so it's
          correct instantly on load — no flash of the default accent. */}
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Display options: ${currentAccent.label}. Choose appearance.`}
        onClick={() => setOpen((prev) => !prev)}
      />

      <div
        className={styles.panel}
        data-open={open}
        role="group"
        aria-label="Display options"
        inert={!open}
      >
        <div className={styles.modeToggle} role="radiogroup" aria-label="Light or dark mode">
          <button
            type="button"
            role="radio"
            aria-checked={mode === "light"}
            className={styles.modeButton}
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === "dark"}
            className={styles.modeButton}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </div>

        <div className={styles.accents}>
          {ACCENTS.map((a) => (
            <button
              key={a.id}
              type="button"
              aria-label={a.label}
              title={a.label}
              className={styles.swatch}
              data-selected={a.id === currentAccent.id}
              style={{ background: a.color }}
              onClick={() => setAccent(a.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

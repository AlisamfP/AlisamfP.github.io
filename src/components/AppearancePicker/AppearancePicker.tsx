"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { PiMoonStars, PiStarFourFill, PiSun } from "react-icons/pi";
import { useAccent } from "@/app/accent-provider";
import { ACCENTS, DEFAULT_MODE } from "@/styles/themes";
import styles from "./AppearancePicker.module.scss";

export function AppearancePicker() {
  const { theme, setTheme } = useTheme();
  const { accent, setAccent } = useAccent();
  const [mounted, setMounted] = useState(false);

  // The real stored mode is unknown at SSR time, so the server always
  // renders the default. Sticking to that default until after mount keeps
  // the first client render identical to the server's — no hydration
  // mismatch — then a normal post-mount update swaps in the real mode.
  useEffect(() => setMounted(true), []);

  const mode = mounted ? (theme ?? DEFAULT_MODE) : DEFAULT_MODE;
  const currentAccent = ACCENTS.find((a) => a.id === accent) ?? ACCENTS[0];

  return (
    <div className={styles.appearance}>
      <div className={styles.modeRow}>
        <span className={styles.modeLabel} data-active={mode === "light"}>
          Light
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={mode === "dark"}
          aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className={styles.modeToggle}
          data-mode={mode}
          onClick={() => setTheme(mode === "dark" ? "light" : "dark")}
        >
          <span className={styles.sky} aria-hidden="true">
            <PiStarFourFill className={styles.star} />
            <PiStarFourFill className={styles.star} />
            <PiStarFourFill className={styles.star} />
          </span>
          <span className={styles.thumb} aria-hidden="true">
            {mode === "dark" ? <PiMoonStars /> : <PiSun />}
          </span>
        </button>
        <span className={styles.modeLabel} data-active={mode === "dark"}>
          Dark
        </span>
      </div>

      <h4 className={styles.heading}>Accent Color</h4>
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
  );
}

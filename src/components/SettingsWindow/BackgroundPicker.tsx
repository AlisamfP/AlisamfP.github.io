"use client";

import { WALLPAPERS, useBackground } from "@/components/Desktop/background-provider";
import styles from "./BackgroundPicker.module.scss";

export function BackgroundPicker() {
  const { wallpaper, setWallpaper } = useBackground();

  return (
    <div className={styles.options} role="radiogroup" aria-label="Desktop background">
      {WALLPAPERS.map((w) => (
        <button
          key={w.id}
          type="button"
          role="radio"
          aria-checked={wallpaper === w.id}
          className={styles.option}
          onClick={() => setWallpaper(w.id)}
        >
          {w.label}
        </button>
      ))}
    </div>
  );
}

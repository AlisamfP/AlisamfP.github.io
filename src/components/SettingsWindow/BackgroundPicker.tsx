"use client";

import { WALLPAPERS, useBackground } from "@/components/Desktop/background-provider";
import { getWallpaperPhoto } from "@/components/Desktop/wallpaper-photos";
import styles from "./BackgroundPicker.module.scss";

export function BackgroundPicker() {
  const { wallpaper, setWallpaper } = useBackground();

  return (
    <div className={styles.options} role="radiogroup" aria-label="Desktop background">
      {WALLPAPERS.map((w) => {
        const photo = getWallpaperPhoto(w.id);
        return (
          <button
            key={w.id}
            type="button"
            role="radio"
            aria-checked={wallpaper === w.id}
            aria-label={w.label}
            title={w.label}
            className={styles.swatch}
            data-swatch={photo ? undefined : w.id}
            style={photo ? { backgroundImage: `url(/wallpapers/photos/${photo.file})` } : undefined}
            onClick={() => setWallpaper(w.id)}
          />
        );
      })}
    </div>
  );
}

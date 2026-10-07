"use client";

import type { CSSProperties } from "react";
import { Window } from "@/components/Window/Window";
import { useWindowManager } from "./window-manager";
import { useBackground } from "./background-provider";
import { useAppLauncher } from "./use-app-launcher";
import { APPS, DESKTOP_ICON_APPS, getWindowContent } from "./apps";
import { DesktopIcon } from "./DesktopIcon";
import { getWallpaperPhoto } from "./wallpaper-photos";
import styles from "./Desktop.module.scss";

export function Desktop() {
  const { windows, focusWindow, minimizeWindow, updatePosition, resizeWindow } =
    useWindowManager();
  const { wallpaper } = useBackground();
  const { openApp, closeApp } = useAppLauncher();
  const photo = getWallpaperPhoto(wallpaper);

  return (
    <div
      id="desktop-root"
      className={styles.desktop}
      data-wallpaper={photo ? "photo" : wallpaper}
      style={
        photo
          ? ({ "--wallpaper-image": `url(/wallpapers/photos/${photo.file})` } as CSSProperties)
          : undefined
      }
    >
      <div className={styles.icons}>
        {DESKTOP_ICON_APPS.map((id) => (
          <DesktopIcon
            key={id}
            label={APPS[id].title}
            glyph={APPS[id].glyph}
            onOpen={() => openApp(id)}
          />
        ))}
      </div>

      {windows.map((w) => {
        const app = getWindowContent(w.id);
        if (!app) return null;
        return (
          <Window
            key={w.id}
            id={w.id}
            title={w.title}
            position={w.position}
            zIndex={w.zIndex}
            size={app.size}
            customSize={w.customSize}
            hidden={w.minimized}
            onClose={() => closeApp(w.id)}
            onMinimize={() => minimizeWindow(w.id)}
            onFocus={() => focusWindow(w.id)}
            onDrag={(position) => updatePosition(w.id, position)}
            onResize={(size) => resizeWindow(w.id, size)}
          >
            {app.content}
          </Window>
        );
      })}
    </div>
  );
}

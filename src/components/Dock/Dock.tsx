"use client";

import { useAppLauncher } from "@/components/Desktop/use-app-launcher";
import { useWindowManager } from "@/components/Desktop/window-manager";
import { APPS, DOCK_APPS } from "@/components/Desktop/apps";
import styles from "./Dock.module.scss";

export function Dock() {
  const { openApp } = useAppLauncher();
  const { windows } = useWindowManager();

  return (
    <div className={styles.dock}>
      {DOCK_APPS.map((id) => {
        const isOpen = windows.some((w) => w.id === id);
        const Glyph = APPS[id].glyph;
        return (
          <button
            key={id}
            type="button"
            className={styles.dockItem}
            aria-pressed={isOpen}
            onClick={() => openApp(id)}
          >
            <Glyph className={styles.glyph} aria-hidden="true" />
            <span className={styles.label}>{APPS[id].title}</span>
            <span className={styles.indicator} data-open={isOpen} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

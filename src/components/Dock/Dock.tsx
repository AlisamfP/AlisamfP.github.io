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
        return (
          <button
            key={id}
            type="button"
            className={styles.dockItem}
            aria-pressed={isOpen}
            onClick={() => openApp(id)}
          >
            <span className={styles.glyph} aria-hidden="true">
              {APPS[id].glyph}
            </span>
            <span className={styles.label}>{APPS[id].title}</span>
            <span className={styles.indicator} data-open={isOpen} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

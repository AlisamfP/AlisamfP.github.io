"use client";

import { useAppLauncher } from "@/components/Desktop/use-app-launcher";
import { useWindowManager, type WindowInstance } from "@/components/Desktop/window-manager";
import { DisplayOptions } from "@/components/DisplayOptions/DisplayOptions";
import { useDismissablePopover } from "@/hooks/useDismissablePopover";
import { Clock } from "./Clock";
import styles from "./MenuBar.module.scss";

export function MenuBar() {
  const { openApp } = useAppLauncher();
  const { windows, centerWindow } = useWindowManager();
  const portfolioMenu = useDismissablePopover<HTMLDivElement>();
  const viewMenu = useDismissablePopover<HTMLDivElement>();

  const openPortfolioApp = (id: "portfolioAbout" | "portfolioWorks") => {
    openApp(id);
    portfolioMenu.setOpen(false);
  };

  const handleCenterWindow = () => {
    const topmost = windows
      .filter((w) => !w.minimized)
      .reduce<WindowInstance | null>((top, w) => (!top || w.zIndex > top.zIndex ? w : top), null);
    if (topmost) centerWindow(topmost.id);
    viewMenu.setOpen(false);
  };

  return (
    <header className={styles.menuBar}>
      <nav className={styles.nav} aria-label="Primary">
        <img src="/icon.svg" alt="" className={styles.favicon} />

        <div className={styles.menu} ref={portfolioMenu.rootRef}>
          <button
            type="button"
            className={styles.navItem}
            aria-haspopup="true"
            aria-expanded={portfolioMenu.open}
            onClick={() => portfolioMenu.setOpen((prev) => !prev)}
          >
            Portfolio
          </button>

          <div
            className={styles.menuPanel}
            data-open={portfolioMenu.open}
            role="menu"
            inert={!portfolioMenu.open}
          >
            <button
              type="button"
              role="menuitem"
              className={styles.menuOption}
              onClick={() => openPortfolioApp("portfolioAbout")}
            >
              About
            </button>
            <button
              type="button"
              role="menuitem"
              className={styles.menuOption}
              onClick={() => openPortfolioApp("portfolioWorks")}
            >
              View Works
            </button>
          </div>
        </div>

        <div className={styles.menu} ref={viewMenu.rootRef}>
          <button
            type="button"
            className={styles.navItem}
            aria-haspopup="true"
            aria-expanded={viewMenu.open}
            onClick={() => viewMenu.setOpen((prev) => !prev)}
          >
            View
          </button>

          <div
            className={styles.menuPanel}
            data-open={viewMenu.open}
            role="menu"
            inert={!viewMenu.open}
          >
            <button
              type="button"
              role="menuitem"
              className={styles.menuOption}
              onClick={handleCenterWindow}
            >
              Center Window
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.status}>
        <Clock />
        <DisplayOptions />
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { PiCaretRight, PiList } from "react-icons/pi";
import { useAppLauncher } from "@/components/Desktop/use-app-launcher";
import { useWindowManager, type WindowInstance } from "@/components/Desktop/window-manager";
import { DisplayOptions } from "@/components/DisplayOptions/DisplayOptions";
import { useDismissablePopover } from "@/hooks/useDismissablePopover";
import { Clock } from "./Clock";
import styles from "./MenuBar.module.scss";

type MobileSection = "portfolio" | "view" | null;

export function MenuBar() {
  const { openApp } = useAppLauncher();
  const { windows, centerWindow } = useWindowManager();
  const portfolioMenu = useDismissablePopover<HTMLDivElement>();
  const viewMenu = useDismissablePopover<HTMLDivElement>();
  const mobileMenu = useDismissablePopover<HTMLDivElement>();
  const [mobileSection, setMobileSection] = useState<MobileSection>(null);

  const closeMobileMenu = () => {
    mobileMenu.setOpen(false);
    setMobileSection(null);
  };

  const openPortfolioApp = (id: "portfolioAbout" | "portfolioWorks") => {
    openApp(id);
    portfolioMenu.setOpen(false);
    closeMobileMenu();
  };

  const handleCenterWindow = () => {
    const topmost = windows
      .filter((w) => !w.minimized)
      .reduce<WindowInstance | null>((top, w) => (!top || w.zIndex > top.zIndex ? w : top), null);
    if (topmost) centerWindow(topmost.id);
    viewMenu.setOpen(false);
    closeMobileMenu();
  };

  return (
    <header className={styles.menuBar}>
      <nav className={styles.nav} aria-label="Primary">
        <div className={`${styles.menu} ${styles.desktopOnly}`} ref={portfolioMenu.rootRef}>
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

        <div className={`${styles.menu} ${styles.desktopOnly}`} ref={viewMenu.rootRef}>
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

        <div className={`${styles.menu} ${styles.mobileOnly}`} ref={mobileMenu.rootRef}>
          <button
            type="button"
            className={styles.navItem}
            aria-haspopup="true"
            aria-expanded={mobileMenu.open}
            aria-label="Menu"
            onClick={() => {
              mobileMenu.setOpen((prev) => !prev);
              setMobileSection(null);
            }}
          >
            <PiList aria-hidden="true" />
          </button>

          <div
            className={styles.menuPanel}
            data-open={mobileMenu.open}
            role="menu"
            inert={!mobileMenu.open}
          >
            <div className={styles.menuItem}>
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={mobileSection === "portfolio"}
                className={styles.menuOption}
                onClick={() =>
                  setMobileSection((prev) => (prev === "portfolio" ? null : "portfolio"))
                }
              >
                Portfolio
                <PiCaretRight aria-hidden="true" />
              </button>

              <div
                className={styles.submenuPanel}
                data-open={mobileSection === "portfolio"}
                role="menu"
                inert={mobileSection !== "portfolio"}
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

            <div className={styles.menuItem}>
              <button
                type="button"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={mobileSection === "view"}
                className={styles.menuOption}
                onClick={() => setMobileSection((prev) => (prev === "view" ? null : "view"))}
              >
                View
                <PiCaretRight aria-hidden="true" />
              </button>

              <div
                className={styles.submenuPanel}
                data-open={mobileSection === "view"}
                role="menu"
                inert={mobileSection !== "view"}
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

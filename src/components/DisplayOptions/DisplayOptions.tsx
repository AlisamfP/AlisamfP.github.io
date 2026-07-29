"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { PiSun, PiMoon } from "react-icons/pi";
import { useAppLauncher } from "@/components/Desktop/use-app-launcher";
import { APPS } from "@/components/Desktop/apps";
import { DEFAULT_MODE } from "@/styles/themes";
import { AppearancePicker } from "@/components/AppearancePicker/AppearancePicker";
import { useDismissablePopover } from "@/hooks/useDismissablePopover";
import styles from "./DisplayOptions.module.scss";

export function DisplayOptions() {
  const { theme } = useTheme();
  const { openApp } = useAppLauncher();
  const { open, setOpen, rootRef } = useDismissablePopover<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  // The real stored mode is unknown at SSR time, so the server always
  // renders the default. Sticking to that default until after mount keeps
  // the first client render identical to the server's — no hydration
  // mismatch — then a normal post-mount update swaps in the real mode.
  useEffect(() => setMounted(true), []);

  const mode = mounted ? (theme ?? DEFAULT_MODE) : DEFAULT_MODE;
  const ModeIcon = mode === "light" ? PiSun : PiMoon;
  const SettingsIcon = APPS.settings.glyph;

  return (
    <div className={styles.wrapper} ref={rootRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Display options — ${mode} mode`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <ModeIcon aria-hidden="true" />
      </button>

      <div
        className={styles.panel}
        data-open={open}
        role="group"
        aria-label="Display options"
        inert={!open}
      >
        <AppearancePicker />

        <button
          type="button"
          className={styles.settingsLink}
          onClick={() => {
            openApp("settings");
            setOpen(false);
          }}
        >
          <SettingsIcon aria-hidden="true" /> Settings
        </button>
      </div>
    </div>
  );
}

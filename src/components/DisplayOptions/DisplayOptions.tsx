"use client";

import { useAccent } from "@/app/accent-provider";
import { useAppLauncher } from "@/components/Desktop/use-app-launcher";
import { APPS } from "@/components/Desktop/apps";
import { ACCENTS } from "@/styles/themes";
import { AppearancePicker } from "@/components/AppearancePicker/AppearancePicker";
import { useDismissablePopover } from "@/hooks/useDismissablePopover";
import styles from "./DisplayOptions.module.scss";

export function DisplayOptions() {
  const { accent } = useAccent();
  const { openApp } = useAppLauncher();
  const { open, setOpen, rootRef } = useDismissablePopover<HTMLDivElement>();

  // Accent has no SSR/client mismatch risk — AccentProvider's initial state
  // is the same default on both server and client, only updating from
  // localStorage post-mount — so no "mounted" guard is needed here.
  const currentAccent = ACCENTS.find((a) => a.id === accent) ?? ACCENTS[0];

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
        <AppearancePicker />

        <button
          type="button"
          className={styles.settingsLink}
          onClick={() => {
            openApp("settings");
            setOpen(false);
          }}
        >
          <span aria-hidden="true">{APPS.settings.glyph}</span> Settings
        </button>
      </div>
    </div>
  );
}

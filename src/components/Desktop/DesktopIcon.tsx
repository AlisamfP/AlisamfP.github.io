"use client";

import styles from "./DesktopIcon.module.scss";

type DesktopIconProps = {
  label: string;
  glyph?: string;
  onOpen: () => void;
};

export function DesktopIcon({ label, glyph = "📄", onOpen }: DesktopIconProps) {
  return (
    <button type="button" className={styles.icon} onClick={onOpen}>
      <span className={styles.glyph} aria-hidden="true">
        {glyph}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

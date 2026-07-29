"use client";

import type { IconType } from "react-icons";
import { PiFile } from "react-icons/pi";
import styles from "./DesktopIcon.module.scss";

type DesktopIconProps = {
  label: string;
  glyph?: IconType;
  onOpen: () => void;
};

export function DesktopIcon({ label, glyph: Glyph = PiFile, onOpen }: DesktopIconProps) {
  return (
    <button type="button" className={styles.icon} onClick={onOpen}>
      <Glyph className={styles.glyph} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
    </button>
  );
}

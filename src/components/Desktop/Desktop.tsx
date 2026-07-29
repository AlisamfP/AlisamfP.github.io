"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Window } from "@/components/Window/Window";
import { AboutMeWindow } from "@/components/AboutMeWindow/AboutMeWindow";
import { PronunciationWindow } from "@/components/PronunciationWindow/PronunciationWindow";
import { DesktopIcon } from "./DesktopIcon";
import styles from "./Desktop.module.scss";

type Position = { x: number; y: number };

type WindowInstance = {
  id: string;
  title: string;
  position: Position;
  zIndex: number;
};

type AppId = "about" | "pronunciation";

const APPS: Record<AppId, { title: string; glyph: string; content: ReactNode }> = {
  about: { title: "aboutme.txt", glyph: "📄", content: <AboutMeWindow /> },
  pronunciation: { title: "name.wav", glyph: "🔊", content: <PronunciationWindow /> },
};

const BASE_POSITION: Position = { x: 160, y: 40 };
const CASCADE_OFFSET = 32;
const CASCADE_WRAP = 5;

export function Desktop() {
  const [windows, setWindows] = useState<WindowInstance[]>([]);

  const openOrFocus = (id: AppId) => {
    setWindows((prev) => {
      const maxZIndex = Math.max(0, ...prev.map((w) => w.zIndex));
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w));
      }
      const step = prev.length % CASCADE_WRAP;
      const position = {
        x: BASE_POSITION.x + step * CASCADE_OFFSET,
        y: BASE_POSITION.y + step * CASCADE_OFFSET,
      };
      return [...prev, { id, title: APPS[id].title, position, zIndex: maxZIndex + 1 }];
    });
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setWindows((prev) => {
      const maxZIndex = Math.max(0, ...prev.map((w) => w.zIndex));
      return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w));
    });
  };

  const updatePosition = (id: string, position: Position) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, position } : w)));
  };

  return (
    <div className={styles.desktop}>
      <div className={styles.icons}>
        <DesktopIcon
          label={APPS.about.title}
          glyph={APPS.about.glyph}
          onOpen={() => openOrFocus("about")}
        />
        <DesktopIcon
          label={APPS.pronunciation.title}
          glyph={APPS.pronunciation.glyph}
          onOpen={() => openOrFocus("pronunciation")}
        />
      </div>

      {windows.map((w) => (
        <Window
          key={w.id}
          title={w.title}
          position={w.position}
          zIndex={w.zIndex}
          onClose={() => closeWindow(w.id)}
          onFocus={() => focusWindow(w.id)}
          onDrag={(position) => updatePosition(w.id, position)}
        >
          {APPS[w.id as AppId].content}
        </Window>
      ))}
    </div>
  );
}

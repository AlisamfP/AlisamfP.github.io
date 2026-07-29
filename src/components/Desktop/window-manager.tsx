"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export type Position = { x: number; y: number };
export type Size = { width: number; height: number };

export type WindowInstance = {
  id: string;
  title: string;
  position: Position;
  zIndex: number;
  minimized: boolean;
  /** Explicit pixel size once the user drags to resize — null means "use
   * the app's default size preset" (see window-sizes.ts). */
  customSize: Size | null;
};

type WindowManagerValue = {
  windows: WindowInstance[];
  openOrFocus: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  updatePosition: (id: string, position: Position) => void;
  resizeWindow: (id: string, size: Size) => void;
  centerWindow: (id: string) => void;
};

// Selectors used to measure real rendered rects for centering — kept next to
// the ids Window.tsx/Desktop.tsx apply them with, see those files.
const WINDOW_SELECTOR = (id: string) => `[data-window-id="${CSS.escape(id)}"]`;
const DESKTOP_ROOT_ID = "desktop-root";

const WindowManagerContext = createContext<WindowManagerValue | null>(null);

const BASE_POSITION: Position = { x: 160, y: 40 };
const CASCADE_OFFSET = 32;
const CASCADE_WRAP = 5;
const STORAGE_KEY = "desktop-windows";

// Only the fields every persisted window has always had are required here —
// `minimized`/`customSize` are filled in with defaults after validation so
// windows saved before those fields existed still restore correctly.
function isWindowInstance(value: unknown): value is WindowInstance {
  if (!value || typeof value !== "object") return false;
  const w = value as Record<string, unknown>;
  const position = w.position as Record<string, unknown> | undefined;
  return (
    typeof w.id === "string" &&
    typeof w.title === "string" &&
    typeof w.zIndex === "number" &&
    typeof position?.x === "number" &&
    typeof position?.y === "number"
  );
}

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const isFirstPersist = useRef(true);

  // Restore persisted windows once, after mount — localStorage isn't
  // available during SSR, so this can't be the initial state without
  // causing a hydration mismatch (cleared if the user clears site data).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.every(isWindowInstance)) {
        setWindows(
          parsed.map((w) => ({
            ...w,
            minimized: w.minimized ?? false,
            customSize: w.customSize ?? null,
          })),
        );
      }
    } catch {
      // Malformed/corrupt storage — ignore and start with a bare desktop.
    }
  }, []);

  // Persist on every change — but not on the very first effect pass, which
  // would otherwise overwrite storage with `[]` before the restore effect
  // above has had a chance to apply its own (async) state update.
  useEffect(() => {
    if (isFirstPersist.current) {
      isFirstPersist.current = false;
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(windows));
  }, [windows]);

  const openOrFocus = (id: string, title: string) => {
    setWindows((prev) => {
      const maxZIndex = Math.max(0, ...prev.map((w) => w.zIndex));
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        // Re-opening an already-open (possibly minimized) window just
        // brings it back and focuses it — it doesn't create a duplicate.
        return prev.map((w) =>
          w.id === id ? { ...w, zIndex: maxZIndex + 1, minimized: false } : w,
        );
      }
      const step = prev.length % CASCADE_WRAP;
      const position = {
        x: BASE_POSITION.x + step * CASCADE_OFFSET,
        y: BASE_POSITION.y + step * CASCADE_OFFSET,
      };
      return [
        ...prev,
        { id, title, position, zIndex: maxZIndex + 1, minimized: false, customSize: null },
      ];
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

  const minimizeWindow = (id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  };

  const updatePosition = (id: string, position: Position) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, position } : w)));
  };

  const resizeWindow = (id: string, size: Size) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, customSize: size } : w)));
  };

  // Measures the window's actual rendered box (whatever size preset or
  // custom resize it currently has) and the desktop area it sits in, then
  // positions it dead center within that area.
  const centerWindow = (id: string) => {
    const windowEl = document.querySelector<HTMLElement>(WINDOW_SELECTOR(id));
    const desktopEl = document.getElementById(DESKTOP_ROOT_ID);
    if (!windowEl || !desktopEl) return;
    const windowRect = windowEl.getBoundingClientRect();
    const desktopRect = desktopEl.getBoundingClientRect();
    updatePosition(id, {
      x: Math.max(0, (desktopRect.width - windowRect.width) / 2),
      y: Math.max(0, (desktopRect.height - windowRect.height) / 2),
    });
  };

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        openOrFocus,
        closeWindow,
        focusWindow,
        minimizeWindow,
        updatePosition,
        resizeWindow,
        centerWindow,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) throw new Error("useWindowManager must be used within WindowManagerProvider");
  return ctx;
}

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type WallpaperId = "gradient" | "solid" | "wash";

export interface WallpaperMeta {
  id: WallpaperId;
  label: string;
}

export const WALLPAPERS: WallpaperMeta[] = [
  { id: "gradient", label: "Gradient" },
  { id: "solid", label: "Solid" },
  { id: "wash", label: "Accent wash" },
];

const STORAGE_KEY = "desktop-wallpaper";
const DEFAULT_WALLPAPER: WallpaperId = "gradient";

type BackgroundContextValue = {
  wallpaper: WallpaperId;
  setWallpaper: (id: WallpaperId) => void;
};

const BackgroundContext = createContext<BackgroundContextValue | null>(null);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [wallpaper, setWallpaperState] = useState<WallpaperId>(DEFAULT_WALLPAPER);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as WallpaperId | null;
    if (stored && WALLPAPERS.some((w) => w.id === stored)) setWallpaperState(stored);
  }, []);

  const setWallpaper = (id: WallpaperId) => {
    setWallpaperState(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  };

  return (
    <BackgroundContext.Provider value={{ wallpaper, setWallpaper }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const ctx = useContext(BackgroundContext);
  if (!ctx) throw new Error("useBackground must be used within BackgroundProvider");
  return ctx;
}

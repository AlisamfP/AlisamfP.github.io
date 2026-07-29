"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ACCENT_IDS, DEFAULT_ACCENT } from "@/styles/themes";

// Must match the inline no-flash script in layout.tsx.
export const ACCENT_STORAGE_KEY = "accent-color";

type AccentContextValue = {
  accent: string;
  setAccent: (id: string) => void;
};

const AccentContext = createContext<AccentContextValue | null>(null);

export function AccentProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState(DEFAULT_ACCENT);

  // The real stored accent is unknown at SSR time (see the inline script in
  // layout.tsx for the pre-hydration DOM attribute) — this just brings React
  // state in sync with whatever that script already applied.
  useEffect(() => {
    const stored = window.localStorage.getItem(ACCENT_STORAGE_KEY);
    if (stored && ACCENT_IDS.includes(stored)) setAccentState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
  }, [accent]);

  const setAccent = (id: string) => {
    setAccentState(id);
    window.localStorage.setItem(ACCENT_STORAGE_KEY, id);
  };

  return (
    <AccentContext.Provider value={{ accent, setAccent }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  const ctx = useContext(AccentContext);
  if (!ctx) throw new Error("useAccent must be used within AccentProvider");
  return ctx;
}

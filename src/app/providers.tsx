"use client";

import { ThemeProvider } from "next-themes";
import { THEME_IDS, DEFAULT_THEME } from "@/styles/themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme={DEFAULT_THEME}
      themes={THEME_IDS}
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

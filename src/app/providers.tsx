"use client";

import { ThemeProvider } from "next-themes";
import { MODES, DEFAULT_MODE } from "@/styles/themes";
import { AccentProvider } from "./accent-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-mode"
      defaultTheme={DEFAULT_MODE}
      themes={MODES}
      enableSystem={false}
      disableTransitionOnChange
    >
      <AccentProvider>{children}</AccentProvider>
    </ThemeProvider>
  );
}

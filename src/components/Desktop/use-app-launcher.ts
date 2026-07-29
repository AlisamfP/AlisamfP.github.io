"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useWindowManager, type WindowInstance } from "./window-manager";
import { APPS, type AppId } from "./apps";

/** Single entry point for opening/closing a fixed app (about/pronunciation/
 * settings/etc — not the dynamic `project:<slug>` windows, which have no
 * route). Updates window-manager state, and for apps that declare an
 * `href`, also syncs the URL — so opening the app navigates to its route,
 * landing on that route directly pre-opens the app, and closing it (while
 * sitting on that route) navigates away rather than leaving a dead end. */
export function useAppLauncher() {
  const router = useRouter();
  const pathname = usePathname();
  const { windows, openOrFocus, closeWindow } = useWindowManager();

  // Only re-checked when the pathname itself actually changes — NOT on every
  // `windows` update. If this also reran when `windows` shrank, closing a
  // linked app (which removes it, then navigates away) would see the old
  // pathname still matching for one tick and immediately reopen the window
  // it was just asked to close, before the navigation had a chance to land.
  const lastHandledPathname = useRef<string | null>(null);

  useEffect(() => {
    if (lastHandledPathname.current === pathname) return;
    lastHandledPathname.current = pathname;

    const entry = (Object.entries(APPS) as [AppId, (typeof APPS)[AppId]][]).find(
      ([, app]) => app.href === pathname,
    );
    if (!entry) return;
    const [id, app] = entry;
    openOrFocus(id, app.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const openApp = (id: AppId) => {
    const app = APPS[id];
    openOrFocus(id, app.title);
    if (app.href && app.href !== pathname) {
      router.push(app.href, { scroll: false });
    }
  };

  const closeApp = (id: string) => {
    const app = APPS[id as AppId] as (typeof APPS)[AppId] | undefined;
    closeWindow(id);

    // Only navigate away if we're actually sitting on this app's own route —
    // closing an unrelated window (e.g. Settings, opened as a popup) should
    // never move the URL.
    if (!app?.href || app.href !== pathname) return;

    const remaining = windows.filter((w) => w.id !== id);
    const topmost = remaining.reduce<WindowInstance | null>(
      (top, w) => (!top || w.zIndex > top.zIndex ? w : top),
      null,
    );
    const topmostHref = topmost ? APPS[topmost.id as AppId]?.href : undefined;
    router.push(topmostHref ?? "/", { scroll: false });
  };

  return { openApp, closeApp };
}

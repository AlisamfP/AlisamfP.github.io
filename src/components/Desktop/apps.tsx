import type { ReactNode } from "react";
import { projects } from "@/data/projects";
import { AboutMeWindow } from "@/components/AboutMeWindow/AboutMeWindow";
import { PronunciationWindow } from "@/components/PronunciationWindow/PronunciationWindow";
import { SettingsWindow } from "@/components/SettingsWindow/SettingsWindow";
import { AboutPortfolioWindow } from "@/components/PortfolioWindow/AboutPortfolioWindow";
import { WorksWindow } from "@/components/PortfolioWindow/WorksWindow";
import { ExperienceWindow } from "@/components/ExperienceWindow/ExperienceWindow";
import { ProjectWindow } from "@/components/ProjectWindow/ProjectWindow";
import type { WindowSize } from "@/components/Window/window-sizes";

export type AppId =
  | "about"
  | "pronunciation"
  | "settings"
  | "portfolioAbout"
  | "portfolioWorks"
  | "experience";

type AppMeta = {
  title: string;
  glyph: string;
  content: ReactNode;
  /** One of the standard window sizes (see window-sizes.ts). Defaults to
   * "thin" (via Window) when omitted. */
  size?: WindowSize;
  /** Deep-linkable route for this app, if any — opening the app navigates
   * here, and landing on this route pre-opens the app. */
  href?: string;
};

// Desktop-icon apps live under /desktop/<id> — kept distinct from the dock
// apps' plain routes so e.g. "aboutme.txt" (/desktop/about) and the dock's
// "About" (/about) never collide despite both being about-ish.
export const APPS: Record<AppId, AppMeta> = {
  about: {
    title: "aboutme.txt",
    glyph: "📄",
    content: <AboutMeWindow />,
    href: "/desktop/about",
  },
  pronunciation: {
    title: "name.wav",
    glyph: "🔊",
    content: <PronunciationWindow />,
    size: "compact",
    href: "/desktop/pronunciation",
  },
  settings: {
    title: "Settings",
    glyph: "⚙️",
    content: <SettingsWindow />,
    href: "/settings",
  },
  portfolioAbout: {
    title: "About",
    glyph: "🖼️",
    content: <AboutPortfolioWindow />,
    size: "base",
    href: "/about",
  },
  portfolioWorks: {
    title: "Works",
    glyph: "🗂️",
    content: <WorksWindow />,
    href: "/works",
  },
  experience: {
    title: "Experience",
    glyph: "💼",
    content: <ExperienceWindow />,
    size: "wide",
    href: "/experience",
  },
};

export const DESKTOP_ICON_APPS: AppId[] = ["about", "pronunciation"];

export const DOCK_APPS: AppId[] = [
  "portfolioAbout",
  "portfolioWorks",
  "experience",
  "settings",
];

const PROJECT_ID_PREFIX = "project:";

/** Resolves a window id (a fixed AppId or a `project:<slug>` id) to its
 * title/content, or undefined if it doesn't match anything (e.g. a project
 * slug that no longer exists). */
export function getWindowContent(id: string): AppMeta | undefined {
  if (id in APPS) return APPS[id as AppId];

  if (id.startsWith(PROJECT_ID_PREFIX)) {
    const slug = id.slice(PROJECT_ID_PREFIX.length);
    const project = projects.find((p) => p.id === slug);
    if (!project) return undefined;
    return {
      title: project.title,
      glyph: "🗂️",
      content: <ProjectWindow project={project} />,
      size: "base",
    };
  }

  return undefined;
}

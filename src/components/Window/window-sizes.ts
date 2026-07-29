export type WindowSize = "compact" | "thin" | "base" | "wide";

/** CSS `width` values for each standard window size — apps pick one of
 * these by name instead of hand-tuning a pixel width per app. "thin" is the
 * default most simple/text apps use; "base" and "wide" step up from there
 * for content-heavier windows. */
export const WINDOW_SIZES: Record<WindowSize, string> = {
  compact: "fit-content",
  thin: "420px",
  base: "640px",
  wide: "800px",
};

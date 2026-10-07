"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { WINDOW_SIZES, type WindowSize } from "./window-sizes";
import styles from "./Window.module.scss";

// Layout effects don't run during SSR (React warns if used directly in a
// server-rendered tree) — falls back to a regular effect there, since the
// clamp-before-paint trick this hook enables only matters once we're in the
// browser anyway.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Position = { x: number; y: number };
type Size = { width: number; height: number };
type ResizeAxis = "both" | "width" | "height";

const MIN_WIDTH = 260;
const MIN_HEIGHT = 160;
// Keeps dragged windows from crossing the desktop's own edge — matches the
// `--space-lg` (2rem) inset the desktop already uses for its own padding.
const DRAG_MARGIN = 12;

/** Clamps a candidate drag position so the window's box stays fully inside
 * its desktop container (measuring both live, since a window's rendered
 * size varies by preset/custom-resize and the desktop resizes with the
 * viewport). Falls back to the unclamped position if either can't be
 * measured yet. */
function clampToDesktop(position: Position, windowEl: HTMLElement | null): Position {
  const desktopEl = windowEl?.parentElement;
  if (!windowEl || !desktopEl) return position;
  const windowRect = windowEl.getBoundingClientRect();
  const desktopRect = desktopEl.getBoundingClientRect();
  const maxX = Math.max(DRAG_MARGIN, desktopRect.width - windowRect.width - DRAG_MARGIN);
  const maxY = Math.max(DRAG_MARGIN, desktopRect.height - windowRect.height - DRAG_MARGIN);
  return {
    x: Math.min(Math.max(position.x, DRAG_MARGIN), maxX),
    y: Math.min(Math.max(position.y, DRAG_MARGIN), maxY),
  };
}

type WindowProps = {
  /** Registry id — rendered as `data-window-id` so actions like "center
   * window" (see window-manager.tsx) can measure this DOM node directly. */
  id: string;
  title: string;
  position: Position;
  zIndex: number;
  /** One of the standard window sizes (see window-sizes.ts). Defaults to
   * "thin" — the size most simple/text apps should use unless they need
   * more room ("base"/"wide") or fit their content instead ("compact"). */
  size?: WindowSize;
  /** Explicit pixel size once the user has dragged to resize — overrides
   * `size` for this window instance until it's closed. */
  customSize?: Size | null;
  /** Hides the window without unmounting it, so state inside (like a
   * gallery's active image) survives minimize/restore. */
  hidden?: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  onDrag: (position: Position) => void;
  onResize: (size: Size) => void;
  children: ReactNode;
};

export function Window({
  id,
  title,
  position,
  zIndex,
  size = "thin",
  customSize = null,
  hidden = false,
  onClose,
  onMinimize,
  onFocus,
  onDrag,
  onResize,
  children,
}: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  // Stays hidden for the first paint so the clamp below (which needs a real
  // measured rect) can correct an offscreen cascade position before the
  // window ever becomes visible — otherwise it flashes at the wrong spot
  // and visibly jumps.
  const [ready, setReady] = useState(false);

  // A window's cascade position is chosen without knowing the viewport size
  // (see BASE_POSITION in window-manager.tsx), so on a narrow/mobile desktop
  // it can land partly offscreen. Snap it back inside the desktop bounds
  // right after mount, before the browser gets to paint the unclamped spot.
  useIsomorphicLayoutEffect(() => {
    const clamped = clampToDesktop(position, windowRef.current);
    if (clamped.x !== position.x || clamped.y !== position.y) onDrag(clamped);
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dragState = useRef<{
    pointerId: number;
    startPointer: Position;
    startPosition: Position;
  } | null>(null);

  const resizeState = useRef<{
    pointerId: number;
    startPointer: Position;
    startSize: Size;
    axis: ResizeAxis;
  } | null>(null);

  const handleTitleBarPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    // Don't hijack pointer capture when the press starts on a control (e.g.
    // the close/minimize buttons) — capturing here would reroute its
    // pointerup away from the button and silently swallow the click.
    if ((e.target as HTMLElement).closest("button")) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = {
      pointerId: e.pointerId,
      startPointer: { x: e.clientX, y: e.clientY },
      startPosition: position,
    };
  };

  const handleTitleBarPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    const next = {
      x: drag.startPosition.x + (e.clientX - drag.startPointer.x),
      y: drag.startPosition.y + (e.clientY - drag.startPointer.y),
    };
    onDrag(clampToDesktop(next, windowRef.current));
  };

  const handleTitleBarPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (dragState.current?.pointerId === e.pointerId) {
      dragState.current = null;
    }
  };

  const startResize = (axis: ResizeAxis, e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const rect = windowRef.current?.getBoundingClientRect();
    resizeState.current = {
      pointerId: e.pointerId,
      startPointer: { x: e.clientX, y: e.clientY },
      startSize: {
        width: customSize?.width ?? rect?.width ?? MIN_WIDTH,
        height: customSize?.height ?? rect?.height ?? MIN_HEIGHT,
      },
      axis,
    };
  };

  const handleResizePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const resize = resizeState.current;
    if (!resize || resize.pointerId !== e.pointerId) return;
    const width =
      resize.axis === "height"
        ? resize.startSize.width
        : Math.max(MIN_WIDTH, resize.startSize.width + (e.clientX - resize.startPointer.x));
    const height =
      resize.axis === "width"
        ? resize.startSize.height
        : Math.max(MIN_HEIGHT, resize.startSize.height + (e.clientY - resize.startPointer.y));
    onResize({ width, height });
  };

  const handleResizePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (resizeState.current?.pointerId === e.pointerId) {
      resizeState.current = null;
    }
  };

  return (
    <div
      ref={windowRef}
      data-window-id={id}
      className={styles.window}
      style={
        {
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex,
          display: hidden ? "none" : undefined,
          opacity: ready ? 1 : 0,
          "--window-width": customSize ? `${customSize.width}px` : WINDOW_SIZES[size],
          "--window-height": customSize ? `${customSize.height}px` : "auto",
        } as CSSProperties
      }
      onPointerDown={onFocus}
    >
      <div
        className={styles.titleBar}
        onPointerDown={handleTitleBarPointerDown}
        onPointerMove={handleTitleBarPointerMove}
        onPointerUp={handleTitleBarPointerUp}
        onPointerCancel={handleTitleBarPointerUp}
      >
        <span className={styles.title}>{title}</span>
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.minimize}
            onClick={onMinimize}
            aria-label={`Minimize ${title}`}
          >
            &minus;
          </button>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label={`Close ${title}`}
          >
            &times;
          </button>
        </div>
      </div>
      <div className={styles.body}>{children}</div>
      <div
        className={styles.resizeRight}
        onPointerDown={(e) => startResize("width", e)}
        onPointerMove={handleResizePointerMove}
        onPointerUp={handleResizePointerUp}
        onPointerCancel={handleResizePointerUp}
        aria-hidden="true"
      />
      <div
        className={styles.resizeBottom}
        onPointerDown={(e) => startResize("height", e)}
        onPointerMove={handleResizePointerMove}
        onPointerUp={handleResizePointerUp}
        onPointerCancel={handleResizePointerUp}
        aria-hidden="true"
      />
      <div
        className={styles.resizeCorner}
        onPointerDown={(e) => startResize("both", e)}
        onPointerMove={handleResizePointerMove}
        onPointerUp={handleResizePointerUp}
        onPointerCancel={handleResizePointerUp}
        aria-hidden="true"
      />
    </div>
  );
}

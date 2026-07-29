"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import styles from "./Window.module.scss";

type Position = { x: number; y: number };

type WindowProps = {
  title: string;
  position: Position;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  onDrag: (position: Position) => void;
  children: ReactNode;
};

export function Window({
  title,
  position,
  zIndex,
  onClose,
  onFocus,
  onDrag,
  children,
}: WindowProps) {
  const dragState = useRef<{
    pointerId: number;
    startPointer: Position;
    startPosition: Position;
  } | null>(null);

  const handleTitleBarPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    // Don't hijack pointer capture when the press starts on a control (e.g.
    // the close button) — capturing here would reroute its pointerup away
    // from the button and silently swallow the click.
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
    onDrag({
      x: drag.startPosition.x + (e.clientX - drag.startPointer.x),
      y: drag.startPosition.y + (e.clientY - drag.startPointer.y),
    });
  };

  const handleTitleBarPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (dragState.current?.pointerId === e.pointerId) {
      dragState.current = null;
    }
  };

  return (
    <div
      className={styles.window}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex,
      }}
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
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label={`Close ${title}`}
        >
          &times;
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

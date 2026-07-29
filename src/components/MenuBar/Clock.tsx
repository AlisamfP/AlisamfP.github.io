"use client";

import { useEffect, useState } from "react";
import styles from "./MenuBar.module.scss";

const UPDATE_INTERVAL_MS = 15000;

export function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  // Render nothing time-specific until after mount — the server has no
  // meaningful "current time" to render, so avoid a hydration mismatch.
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), UPDATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);


  return (
    <span className={styles.clock}>
      {now?.toDateString()}{" "}{now?.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
    </span>
  );
}

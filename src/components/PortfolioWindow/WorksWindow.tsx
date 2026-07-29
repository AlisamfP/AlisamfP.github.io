"use client";

import { projects } from "@/data/projects";
import { useWindowManager } from "@/components/Desktop/window-manager";
import styles from "./WorksWindow.module.scss";

export function WorksWindow() {
  const { openOrFocus } = useWindowManager();

  return (
    <ul className={styles.works} role="list">
      {projects.map((project) => (
        <li key={project.id}>
          <button
            type="button"
            className={styles.workItem}
            onClick={() => openOrFocus(`project:${project.id}`, project.title)}
          >
            <span className={styles.workTitle}>{project.title}</span>
            <span className={styles.workSubtitle}>{project.subtitle}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

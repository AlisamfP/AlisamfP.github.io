import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import styles from "./projects.module.scss";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Alisa Palson — web apps and design projects, with a case study for each.",
};

export default function ProjectsPage() {
  return (
    <div className="page">
      <h1>Projects</h1>
      <p className={styles.lead}>
        A mix of web apps and design work. Each one has a full case study —
        pick one to dig in.
      </p>
      <ul className={styles.grid} role="list">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

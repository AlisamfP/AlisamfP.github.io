import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import type { Project } from "@/types/project-types";
import { Button } from "@/components/Button/Button";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import styles from "./ProjectWindow.module.scss";

function WriteupSection({ title, html }: { title: string; html: string }) {
  if (!html) return null;
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.prose} dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}

export function ProjectWindow({ project }: { project: Project }) {
  return (
    <div className={styles.projectWindow}>
      <header className={styles.header}>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <div className={styles.links}>
          {project.projectLink && (
            <Button href={project.projectLink} external icon={TbExternalLink} size="sm">
              View live
            </Button>
          )}
          {project.github && (
            <Button
              href={project.github}
              external
              variant="secondary"
              icon={TbBrandGithub}
              size="sm"
            >
              Source
            </Button>
          )}
        </div>
      </header>

      <ImageGallery images={project.images} />

      <div className={styles.writeup}>
        <WriteupSection title="Background" html={project.background} />
        <WriteupSection title="The problem" html={project.problem} />
        <WriteupSection title="My process" html={project.process} />
        <WriteupSection title="Results" html={project.results} />
      </div>
    </div>
  );
}

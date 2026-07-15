import Link from "next/link";
import Image from "next/image";
import { getHeroImage, type Project } from "@/types/project-types";
import styles from "./ProjectCard.module.scss";

export function ProjectCard({ project }: { project: Project }) {
  const hero = getHeroImage(project);

  return (
    <Link href={`/projects/${project.id}`} className={styles.card}>
      {hero && (
        <div className={styles.thumb}>
          <Image
            src={hero.link}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.thumbImg}
          />
        </div>
      )}
      <div className={styles.body}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.desc}>{project.description}</p>
        <span className={styles.more} aria-hidden>
          View case study →
        </span>
      </div>
    </Link>
  );
}

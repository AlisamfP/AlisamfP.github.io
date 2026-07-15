import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TbArrowLeft, TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { projects } from "@/data/projects";
import { Button } from "@/components/Button/Button";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import styles from "./detail.module.scss";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

function WriteupSection({ title, html }: { title: string; html: string }) {
  if (!html) return null;
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.prose} dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <div className="page">
      <Link href="/projects" className={styles.back}>
        <TbArrowLeft aria-hidden /> Back to projects
      </Link>

      <header className={styles.header}>
        <h1>{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <div className={styles.links}>
          {project.projectLink && (
            <Button href={project.projectLink} external icon={TbExternalLink}>
              View live
            </Button>
          )}
          {project.github && (
            <Button
              href={project.github}
              external
              variant="secondary"
              icon={TbBrandGithub}
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

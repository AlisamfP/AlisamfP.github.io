export interface ProjectImage {
  link: string;
  alt: string;
  description: string;
  isHeroImage?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  /** Short summary shown on the project card */
  description: string;
  github: string;
  projectLink: string;
  /** Rich HTML write-up fields (may contain <a>, <br>) */
  background: string;
  problem: string;
  process: string;
  results: string;
  images: ProjectImage[];
}

/** The image flagged as hero, falling back to the first image. */
export function getHeroImage(project: Project): ProjectImage | undefined {
  return project.images.find((img) => img.isHeroImage) ?? project.images[0];
}

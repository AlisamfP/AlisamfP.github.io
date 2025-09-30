import React, { useState, useMemo } from "react";
import ProjectSelect from "./ProjectSelect";
import { projectData } from "../data/projects";
import TopActionButtons from "./TopActionButtons";
import ImageGallery from "./ImageGallery";

import "./Projects.css";

type Project = ReturnType<typeof projectData>[0];

interface ProjectHeaderProps {
  title: string;
  description?: string;
}

interface HeroImageSectionProps {
  image: { link: string; alt: string; };
}

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

const projects = projectData();

const PROJECT_SECTIONS = [
  { key: 'background', title: 'Background Info', required: false, fallback: undefined },
  { key: 'problem', title: 'Problem To Solve', required: false, fallback: undefined },
  { key: 'process', title: 'My Process', required: false, fallback: undefined },
  { key: 'results', title: 'The End Result', required: true, fallback: 'TBD' },
] as const;

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, description }) => (
  <section className="project-header">
    <div className="project-title-container">
      <h2 className="section-title">
        {title}
      </h2>
    </div>
    <hr className="section-divider" />
    {description && (
      <div className="project-description">{description}</div>
    )}
  </section>
)

const HeroImageSection: React.FC<HeroImageSectionProps> = ({ image }) => (
  <section className="hero-image-section">
    <img className="hero-image" src={image.link} alt={image.alt} loading="lazy" />
  </section>
)

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, children }) => (
  <section className="project-section">
    <h2 className="section-title">{title}</h2>
    <hr className="section-divider" />
    {children}
  </section>
);


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const actionButtons = useMemo(() => {
    const githubButton = {
      type: "github" as const,
      text: "View The Code",
      link: selectedProject.github,
    };
    const externalLink = {
      type: "link" as const,
      text: "View The Project",
      link: selectedProject.projectLink,
    };
    return {
      primary: externalLink,
      secondary: selectedProject.github ? githubButton : undefined,
    }
  }, [selectedProject.github, selectedProject.projectLink])

  const heroImage = useMemo(() =>
    selectedProject.images.find(img => img.isHeroImage),
    [selectedProject.images]
  )

  const renderSection = (
    sectionKey: string,
    title: string,
    content: string | undefined,
    isRequired: boolean = false,
    fallback?: string
  ) => {
    if (!isRequired && !content) return null;
    return (
      <ProjectSection key={sectionKey} title={title}>
        {content ? (
          <div className="section-content" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <p className="section-fallback">{fallback}</p>
        )}
      </ProjectSection>
    )
  }

  if (!selectedProject) {
    return <div>No project selected</div>;
  }

  return (
    <div className="projects-page">
      <TopActionButtons
        button1={actionButtons.primary}
        button2={actionButtons.secondary}
      />


      <ProjectSelect
        value={selectedProject}
        onChange={setSelectedProject}
        options={projects}
      />

      {/* the project info */}
      <div className="project-content px-2 flex flex-col gap-2 md:gap-4 grow">
        {selectedProject.title && (
          <ProjectHeader title="Project Summary" description={selectedProject.description} />
        )}
        {heroImage && (
          <HeroImageSection image={heroImage} />
        )}
        {PROJECT_SECTIONS.map(({ key, title, required, fallback }) =>
          renderSection(
            key, title, selectedProject[key as keyof Project] as string,
            required,
            fallback
          )
        )}

        {/* images section */}
        <ImageGallery images={selectedProject.images} />
      </div>

    </div>
  );
};

export default Projects;

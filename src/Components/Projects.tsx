import React from "react";
import ProjectSelect from "./ProjectSelect";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { useState } from "react";
import { projectData } from "../data/projects";

const projects = projectData.projects;

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <>
      {selectedProject && (


        <div className={`flex gap-4 py-2 ${selectedProject.github === "" ? "grow justify-end" : "justify-evenly sm:justify-between"}`}>
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100"
            >
              <TbBrandGithub className="text-2xl md:text-3xl" />
              View The Code
            </a>
          )}
          <div className={`inline-block min-h-[1em] w-0.5 self-stretch bg-[#003333] ${selectedProject.github === "" ? "hidden" : ""}`}></div>
             <a
              href={selectedProject.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100`}
            >
            <TbExternalLink className="text-2xl md:text-3xl" />
            View The Project
            </a>
        </div>
      )
      }
      <ProjectSelect
        value={selectedProject}
        onChange={setSelectedProject}
        options={projects}
      />
      {selectedProject && (
        <div className="projects flex flex-col gap-4 p-4 grow">
          <section>
            <h2 className="font-bold">Background</h2>
            <p>{selectedProject.background || "TBD"}</p>
          </section>
          <section>
            <h2 className="font-bold">Problem</h2>
            <p>{selectedProject.problem || "TBD"}</p>
          </section>
          <section>
            <h2 className="font-bold">Process</h2>
            <p>{selectedProject.process || "TBD"}</p>
          </section>
          <section>
            <h2 className="font-bold">Results</h2>
            <p>{selectedProject.results || "TBD"}</p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 md:gap-2 justify-items-center">
            <h2 className="sr-only">Project Images</h2>
            {selectedProject.images.map((image) => (
              <figure className="mb-4 inline-block max-w-sm" key={image.link}>
                <img className="mb-4 h-auto max-w-full align-middle leading-none" src={image.link} alt={image.alt} />
                <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">{image.description}</figcaption>
              </figure>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Projects;

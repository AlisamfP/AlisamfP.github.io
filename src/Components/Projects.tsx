import React from "react";
import ProjectSelect from "./ProjectSelect";
import { Button } from "@headlessui/react";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { useState } from "react";
import { projectData } from "../data/projects";

const projects = projectData.projects;

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <>
      <div className="flex justify-evenly sm:justify-between gap-4 py-2">
        <Button className="flex flex-col text-xs sm:text-sm sm:flex-row items-center rounded gap-1 p-2 text-stone-900 data-hover:bg-[#006666] data-hover:text-stone-100">
          <TbBrandGithub className="text-2xl md:text-3xl" />
          View The Code
        </Button>
          <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-[#003333]"></div>
        <Button className="flex flex-col text-xs sm:text-sm items-center sm:flex-row-reverse rounded gap-1 p-2 text-stone-900 data-hover:bg-[#006666] data-hover:text-stone-100">
          <TbExternalLink className="text-2xl md:text-3xl" />
          View The Project
        </Button>
      </div>
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
          <section className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
            <h2 className="sr-only">Project Images</h2>
          {selectedProject.images.map((image) => (
            <figure key={image.link}>
              <img src={image.link} alt={image.alt} />
              <figcaption>{image.description}</figcaption>
            </figure>
          ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Projects;

import React from "react";
import ProjectSelect from "./ProjectSelect";
import { TbBrandGithub, TbCornerLeftUp, TbExternalLink } from "react-icons/tb";
import { useState } from "react";
import { projectData } from "../data/projects";
import TopActionButtons from "./TopActionButtons";

const projects = projectData();

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const githubButton = {
    text: "View The Code",
    name: "github",
    link: selectedProject.github,
  };
  const externalLink = {
    name: "link",
    text: "View The Project",
    link: selectedProject.projectLink,
  };
  return (
    <>
      {selectedProject.github ? (
        <TopActionButtons button1={externalLink} button2={githubButton} />
      ) : (
        <TopActionButtons button1={externalLink} />
      )}

      <ProjectSelect
        value={selectedProject}
        onChange={setSelectedProject}
        options={projects}
      />

      {/* the project info */}
      {selectedProject && (
        <div className="projects px-2 flex flex-col gap-2 md:gap-4 grow">
          <section className="-mb-4 py-2 flex flex-col">
            {selectedProject.title ? (
              <div className="flex flex-col md:flex-row md:items-center">
                <h2 className="font-bold text-xl text-[#003333] min-w-[11ch]">
                  Project Name:{" "}
                  <span className="text-xl font-medium">
                    {selectedProject.title}
                  </span>
                </h2>
              </div>
            ) : null}

            <hr className="mb-2 text-[#003333]" />
            {selectedProject.description ? (
              <div className="ml-2">{selectedProject.description}</div>
            ) : null}
          </section>
          {selectedProject.heroImage ? (
            <div className="py-2">
              <img
                className="object-cover"
                src={selectedProject.heroImage.link}
                alt={selectedProject.heroImage.alt}
              />
            </div>
          ) : null}

          {selectedProject.background ? (
            <section className="py-2 flex flex-col">
              <h2 className="font-bold text-lg text-[#003333]">
                Background Info
              </h2>
              {/* using dangerously set to have anchor tags be rendered */}
              <hr className="mb-2 text-[#003333]" />
              <div
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: selectedProject.background }}
              />
            </section>
          ) : null}
          {selectedProject.problem ? (
            <section className="py-2 flex flex-col">
              <h2 className="font-bold text-lg text-[#003333]">
                Problem To Solve
              </h2>
              <hr className="mb-2 text-[#003333]" />
              <div
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: selectedProject.problem }}
              />
            </section>
          ) : null}
          {selectedProject.process ? (
            <section className="py-2 flex flex-col">
              <h2 className="font-bold text-lg text-[#003333]">My Process</h2>
              <hr className="mb-2 text-[#003333]" />
              <div
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: selectedProject.process }}
              />
            </section>
          ) : null}
          <section className="py-2 flex flex-col">
            <h2 className="font-bold text-lg text-[#003333]">The End Result</h2>
            <hr className="mb-2 text-[#003333]" />
            {selectedProject.results ? (
              <div
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: selectedProject.results }}
              />
            ) : (
              <p>TBD</p>
            )}
          </section>
          {/* images section */}
          <section
            className={`grid grid-cols-1 ${
              selectedProject.images.length > 1 ? "md:grid-cols-2 md:gap-2" : ""
            } justify-items-center`}
          >
            <h2 className="font-bold text-lg justify-self-start col-span-full text-[#003333]">
              Project Images
            </h2>
            <hr className="mb-2 w-full h-px text-[#003333] bg-[#003333] col-span-full" />
            {/* loop through images in project */}
            {selectedProject.images.length === 0 ? (
              <p className="col-span-full text-neutral-600 dark:text-neutral-400 italic ml-2 justify-self-start">
                No images available for this project.
              </p>
            ) : (
              selectedProject.images.map((image) => (
                <figure
                  className="mb-4 max-w-2xl flex flex-col"
                  key={image.link}
                >
                  <img
                    className="mb-1 h-auto max-w-full align-middle leading-none"
                    src={image.link}
                    alt={image.alt}
                  />
                  <figcaption className="text-xs text-neutral-600 dark:text-neutral-400 italic text-center">
                    <TbCornerLeftUp className="text-lg inline mb-4" />
                    {image.description}
                  </figcaption>
                </figure>
              ))
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Projects;

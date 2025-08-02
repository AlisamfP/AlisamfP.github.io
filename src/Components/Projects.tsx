import React from "react";
import ProjectSelect from "./ProjectSelect";
import { TbBrandGithub, TbCornerLeftUp, TbExternalLink } from "react-icons/tb";
import { useState } from "react";
import { projectData } from "../data/projects";

const projects = projectData();

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <>
      {selectedProject && (
        <div
          className={`flex gap-4 py-2 ${selectedProject.github === ""
              ? "justify-end"
              : "justify-evenly sm:justify-between"
            }`}
        >
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100"
            >
              <TbBrandGithub className="text-2xl md:text-3xl" />
              View The Code
            </a>
          )}
          <div
            className={`${selectedProject.github === ""
                ? "hidden"
                : "inline-block min-h-[1em] w-0.5 self-stretch bg-[#003333] "
              }`}
          ></div>
          <a
            href={selectedProject.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col md:flex-row-reverse items-center justify-end rounded p-2 gap-1 md:gap-2 text-stone-900 hover:bg-[#006666] hover:text-stone-100`}
          >
            <TbExternalLink className="text-2xl md:text-3xl" />
            View The Project
          </a>
        </div>
      )}
      <ProjectSelect
        value={selectedProject}
        onChange={setSelectedProject}
        options={projects}
      />


      {/* the project info */}
      {selectedProject && (
        <div className="projects px-2 flex flex-col gap-2 md:gap-4 grow">
          <section className="py-2 flex flex-col md:flex-row mt-4 -mb-4 md:items-center">
            <h2 className="font-bold text-xl text-[#003333] min-w-[11ch]">
              Project Name
            </h2>
            <hr className="mb-2 text-[#003333] flex md:hidden" />
            <span className="hidden md:inline text-2xl -pl-1 font-semibold">
              :{" "}
            </span>
            {selectedProject.title ? (
              <div className="ml-2 text-xl font-medium">
                {selectedProject.title}
              </div>
            ) : (
              <p>TBD</p>
            )}
          </section>
          <section className="py-2 flex flex-col">
            <h2 className="font-bold text-lg text-[#003333]">
              Background Info
            </h2>
            {/* using dangerously set to have anchor tags be rendered */}
            <hr className="mb-2 text-[#003333]" />
            {selectedProject.background ? (
              <div
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: selectedProject.background }}
              />
            ) : (
              <p>TBD</p>
            )}
          </section>
          <section className="py-2 flex flex-col">
            <h2 className="font-bold text-lg text-[#003333]">
              Problem To Solve
            </h2>
            <hr className="mb-2 text-[#003333]" />
            {selectedProject.problem ? (
              <div
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: selectedProject.problem }}
              />
            ) : (
              <p>TBD</p>
            )}
          </section>
          <section className="py-2 flex flex-col">
            <h2 className="font-bold text-lg text-[#003333]">My Process</h2>
            <hr className="mb-2 text-[#003333]" />
            {selectedProject.process ? (
              <div
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: selectedProject.process }}
              />
            ) : (
              <p>TBD</p>
            )}
          </section>
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
            className={`grid grid-cols-1 ${selectedProject.images.length > 1 ? "md:grid-cols-2 md:gap-2" : ""
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

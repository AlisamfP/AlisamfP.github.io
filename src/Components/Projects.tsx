import React from "react";
import ProjectSelect from "./ProjectSelect";
import { Button } from "@headlessui/react";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { useState } from "react";
import projects from "../data/projects.json"

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState(projects.projects[0].id);
  const selectedProject = projects.projects.find((p) => p.id === selectedId)

  return (
    <>
      <div className="flex justify-between p-4 gap-4">
        <Button className="flex flex-col md:flex-row items-center rounded gap-1 py-2 text-stone-900 data-hover:bg-[#006666] data-hover:text-stone-100">
          <TbBrandGithub className="text-3xl" />
          View The Code
        </Button>
          <div class="inline-block min-h-[1em] w-0.5 self-stretch bg-[#003333]"></div>
        <Button className="flex flex-col md:flex-row items-center md:flex-row-reverse rounded gap-1 py-2 text-stone-900 data-hover:bg-[#006666] data-hover:text-stone-100">
          <TbExternalLink className="text-3xl" />
          View The Project
        </Button>
      </div>
      <ProjectSelect
        value={selectedId}
        onChange={setSelectedId}
        options={projects.projects}
      />
      {selectedProject && (
        <div className="projects flex flex-col gap-4 p-4">
          <section>
            <h2>Background</h2>
            <p>{selectedProject.background || "TBD"}</p>
          </section>
          <section>
            <h2>Problem</h2>
            <p>{selectedProject.problem || "TBD"}</p>
          </section>
          <section>
            <h2>Process</h2>
            <p>{selectedProject.process || "TBD"}</p>
          </section>
          <section>
            <h2>Results</h2>
            <p>{selectedProject.results || "TBD"}</p>
          </section>
        </div>
      )}
    </>
  );
};

export default Projects;

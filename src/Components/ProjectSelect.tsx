import { Field, Label, Select } from "@headlessui/react";
import { TbChevronDown } from "react-icons/tb";


function ProjectSelect({ value, onChange, options }) {
  return (
    <div className="w-full max-w-md px-4 bg-[#B0BCBF] self-center">
      <Field>
        <Label className="text-sm/6 font-medium sr-only">Project list</Label>
        <div className="relative">
          <Select name="projects"
            className="block w-full appearance-none rounded-lg border-none bg-white/5 p-3 text-sm/6 focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
            aria-label="Project list"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map((project) => (
              <option key={project.id} value={project.id}>{project.title}</option>
            ))}
          </Select>
          <TbChevronDown
            className="group pointer-events-none absolute top-4 right-2.5 size-4"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  );
}

export default ProjectSelect;

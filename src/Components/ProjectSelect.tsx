import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Field 
} from "@headlessui/react";

import {
  TbChevronDown,
  TbCheck,
  TbCornerRightDownDouble,
} from "react-icons/tb";

import type { Project } from "../types/project-types";

type ProjectSelectProps = {
  value: Project;
  onChange: (project: Project) => void;
  options: Project[];
};

export default function ProjectSelect({
  value,
  onChange,
  options,
}: ProjectSelectProps) {
  return (
    <Field className="flex flex-col p-2 gap-2">
      <Label className="-mb-2 -ml-2 text-xs font-medium uppercase flex">
        Choose a project
        <TbCornerRightDownDouble className="text-2xl my-0.5 text-[#003333]" />
      </Label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-[#B0BCBF] py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-[#003333 ] sm:text-sm/6">
            <span className="col-start-1 row-start-1 flex flex-col pr-6">
              <span className="block font-bold truncate text-lg md:text-2xl">
                {value.title}
              </span>
              <span className="text-xs text-[#003333] group-data-focus:text-white group-data-selected:text-gray-600 group-data-focus:group-data-selected:text-white">
                {value.subtitle}
              </span>
            </span>
            <TbChevronDown
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#B0BCBF] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {options.map((project) => (
              <ListboxOption
                key={project.id}
                value={project}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-[#003333] data-focus:text-white data-focus:outline-hidden"
              >
                <div className="flex flex-col">
                  <p className="font-normal group-data-selected:font-bold">
                    {project.title}
                  </p>
                  <p className="text-xs text-[#003333] group-data-focus:text-white group-data-selected:text-gray-600 group-data-focus:group-data-selected:text-white">
                    {project.subtitle}
                  </p>
                  {/* <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{project.title}</span> */}
                </div>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#003333] group-not-data-selected:hidden group-data-focus:text-white">
                  <TbCheck aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
}

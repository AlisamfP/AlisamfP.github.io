import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { TbChevronDown, TbCheck } from "react-icons/tb";

type Project = {
  id: string,
  title: string
}

type ProjectSelectProps = {
  value: Project,
  onChange: (project: Project) => void;
  options: Project[]
}

export default function ProjectSelect({ value, onChange, options }: ProjectSelectProps) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative mt-2">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate">{value.title}</span>
          </span>
          <TbChevronDown
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {options.map((project) => (
            <ListboxOption
              key={project.id}
              value={project}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{project.title}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <TbCheck aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>



  
    // <div className="w-full px-4 bg-[#B0BCBF] self-center">
    //   <Field>
    //     <Label className="text-sm/6 font-medium sr-only">Project list</Label>
    //     <div className="relative">
    //       <Select name="projects"
    //         className="block w-full appearance-none rounded-lg border-none bg-white/5 p-3 text-sm/6 focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
    //         aria-label="Project list"
    //         value={value}
    //         onChange={(e) => onChange(e.target.value)}
    //       >
    //         {options.map((project) => (
    //           <option className="w-full p-4" key={project.id} value={project.id}>{project.title}</option>
    //         ))}
    //       </Select>
    //       <TbChevronDown
    //         className="group pointer-events-none absolute top-4 right-2.5 size-4"
    //         aria-hidden="true"
    //       />
    //     </div>
    //   </Field>
    // </div>
  );
}

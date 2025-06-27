import { Field, Label, Select } from "@headlessui/react";
import { TbChevronDown } from "react-icons/tb";


function ProjectSelect() {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-white">Project list</Label>
        <div className="relative">
          <Select name="projects"
            className=
              "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
              aria-label="Project list"
          >
            <option value="react">React Rally Conference Collateral</option>
            <option value="pokedex">PokeDex Web App</option>
            <option value="cats">The Cats' Website</option>
          </Select>
          <TbChevronDown
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  );
}

export default ProjectSelect;

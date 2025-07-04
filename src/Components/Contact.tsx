import { useState } from "react";
import { Button, Fieldset, Legend, Field, Input, Label, Textarea } from "@headlessui/react";
import { TbBrandGithub, TbBrandLinkedin, TbAt } from 'react-icons/tb';

type Values = {
  first_name: string
  last_name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [values, setValues] = useState<Values>({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values)
  }
  return (
    <>
      <section className="flex flex-row md:flex-col gap-2 justify-between mb-4">
        <h2 className="font-bold">Find me on the web</h2>
        <div className="flex flex-col md:flex-row items-center justify-items-center gap-2 md:justify-evenly">
          <a className="no-underline" href="https://github.com/AlisamfP">
            <Button className="max-w-full min-w-36 min-h-16
              flex items-center justify-center rounded-full p-2 md:p-3 gap-1 md:gap-2 text-stone-100 bg-[#006666] data-hover:bg-[#003333]">
              <TbBrandGithub className="text-3xl" />
              Github
            </Button>
          </a>
          <a className="no-underline" href="https://www.linkedin.com/in/alisamfp/">
            <Button className="max-w-full min-w-36 min-h-16
             flex items-center justify-center rounded-full p-2 md:p-3 gap-1 md:gap-2 text-stone-100 bg-[#006666] data-hover:bg-[#003333]">
              <TbBrandLinkedin className="text-3xl" />
              LinkedIn
            </Button>
          </a>

          <a className="no-underline" href="mailto:alisa@palson.info">
            <Button className="max-w-full min-w-36 min-h-16
             flex items-center justify-center rounded-full p-2 md:p-3 gap-1 md:gap-2 text-stone-100 bg-[#006666] data-hover:bg-[#003333]">
              <TbAt className="text-3xl" />
              Email
            </Button>
          </a>
        </div>
      </section>
      <section>
        <h2 className="font-bold">Or just shoot me a message below</h2>
        <Fieldset className="space-y-6 ">
          <Legend>Enter your information</Legend>
          <Field>
            <Label
              htmlFor="first_name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First Name
            </Label>
            <Input
              value={values.first_name}
              onChange={handleChange}
              id="first_name"
              name="first_name"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-blue-500 focus:border-blue-500 focus:outline-non"
            />
          </Field>
          <Field>
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              value={values.last_name}
              onChange={handleChange}
              id="last_name"
              name="last_name"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-blue-500 focus:border-blue-500 focus:outline-non"
            />
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              name="email"
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-blue-500 focus:border-blue-500 focus:outline-non"
            />
          </Field>

        </Fieldset>
      </section>

    </>
  );
};

export default Contact;

import React from "react";
import { Field, Input, Label } from "@headlessui/react";

const Contact: React.FC = () => {
  return (
    <>
      <Field>
        <Label
          htmlFor="first_name"
          className="block text-sm/6 font-medium text-gray-900"
        >
          First Name
        </Label>
        <Input
          id="first_name"
          name="first_name"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-blue-500 focus:border-blue-500 focus:outline-non"
        />
      </Field>
      <Field>
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          id="last_name"
          name="last_name"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-blue-500 focus:border-blue-500 focus:outline-non"
        />
      </Field>
      <Field>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-blue-500 focus:border-blue-500 focus:outline-non"
        />
      </Field>
    </>
  );
};

export default Contact;

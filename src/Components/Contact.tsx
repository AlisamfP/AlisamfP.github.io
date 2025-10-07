import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { Field, Input, Label, Textarea } from "@headlessui/react";
import { TbBrandGithub, TbBrandLinkedin, TbAt } from "react-icons/tb";
import emailjs from "@emailjs/browser";

import Button from "./Button";
import type { IconType } from "react-icons";

const schema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required"),
  message: yup.string().required("Message is required"),
});

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/alisamfp",
    icon: TbBrandGithub
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alisamfp",
    icon: TbBrandLinkedin
  },
  {
    name: "Email",
    href: "mailto:alisa@palson.info",
    icon: TbAt
  }
];

type FormData = yup.InferType<typeof schema>;

const Contact: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupTimeoutRef = useRef<number | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    return () => {
      if (popupTimeoutRef.current) clearTimeout(popupTimeoutRef.current);
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!recaptchaRef.current) {
      console.error("reCAPTCHA not loaded yet");
      alert("reCAPTCHA not ready. Please wait and try again.");
      return;
    }
    const token = recaptchaRef.current.getValue();

    if (!token) {
      console.error("reCAPTCHA token missing");
      alert("Please complete the captcha");
      return;
    }
    // Honeypot check
    const honeypot = (
      document.querySelector<HTMLInputElement>('input[name="website"]')
        ?.value || ""
    ).trim();
    if (honeypot !== "") {
      console.warn("Bot submission blocked");
      return;
    }
    try {
      await emailjs.send(
        import.meta.env.VITE_EJS_SERVICE_ID,
        import.meta.env.VITE_EJS_TEMPLATE_ID,
        {
          ...data,
          time: new Date().toLocaleTimeString(),
          "g-recaptcha-response": token,
        },
        import.meta.env.VITE_EJS_PUBLIC_KEY
      );

      console.log("SUCCESS!");
      recaptchaRef.current.reset();
      reset();

      setShowPopup(true);
      popupTimeoutRef.current = setTimeout(() => setShowPopup(false), 3000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Form submission error", err.message);
        alert("Failed to send message: " + err.message);
      } else {
        console.error("Form submission error", err);
        alert("Failed to send message: Unknown error");
      }
    }
  };

  return (
    <>
      <section className="flex flex-row md:flex-col gap-2 justify-between mb-4">
        <h2 className="font-bold mb-2">Find me on the web</h2>
        <div className="flex flex-col md:flex-row items-center justify-items-center gap-2 md:justify-evenly">
          {SOCIAL_LINKS.map((link) => {
            return (
              <Button
                href={link.href}
                size="lg"
                variant="primary"
                iconPosition="left"
                icon={link.icon}
              >
                {link.name}
              </Button>
            );
          })}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="font-bold mb-2">
          Or just send me an email with the form below
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <Field>
            <Label
              htmlFor="first_name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First Name
            </Label>
            <Input
              id="first_name"
              {...register("first_name")}
              aria-invalid={!!errors.first_name}
              aria-describedby="error-first_name"
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-[#00c8c8] focus:border-[#00c8c8] focus:outline-none ${
                errors.first_name ? "border-red-500" : ""
              }`}
            />
            {errors.first_name && (
              <p
                role="alert"
                id="error-first_name"
                className="text-red-600 text-sm mt-1"
              >
                {errors.first_name.message}
              </p>
            )}
          </Field>
          <Field>
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              id="last_name"
              {...register("last_name")}
              aria-invalid={!!errors.last_name}
              aria-describedby="error-last_name"
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-[#00c8c8] focus:border-[#00c8c8] focus:outline-none ${
                errors.last_name ? "border-red-500" : ""
              }`}
            />
            {errors.last_name && (
              <p
                role="alert"
                id="error-last_name"
                className="text-red-600 text-sm mt-1"
              >
                {errors.last_name.message}
              </p>
            )}
          </Field>
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby="error-email"
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-[#00c8c8] focus:border-[#00c8c8] focus:outline-none ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p
                role="alert"
                id="error-email"
                className="text-red-600 text-sm mt-1"
              >
                {errors.email.message}
              </p>
            )}
          </Field>

          <Field>
            <div className="flex flex-col w-full">
              <Label htmlFor="message">Message</Label>

              <Textarea
                id="message"
                {...register("message")}
                rows={3}
                className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow hover:border-[#00c8c8] focus:border-[#00c8c8] focus:outline-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              ></Textarea>
              {errors.message && (
                <p
                  role="alert"
                  id="error-message"
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.message.message}
                </p>
              )}
            </div>
          </Field>

          <div>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_GREC_SITE_KEY}
              ref={recaptchaRef}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="max-w-full min-w-36 min-h-16 text-[1.15rem] rounded-md p-2 text-stone-100 bg-[#006666] data-hover:bg-[#003333] data-hover:shadow-lg"
          >
            {isSubmitting ? "Sending" : "Submit"}
          </Button>
        </form>
        {showPopup && (
          <div
            role="alert"
            aria-live="assertive"
            className="fixed bottom-4 left-4 z-50 rounded-md bg-[#006666] p-4 text-white shadow-lg"
          >
            Email sent successfully!
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;

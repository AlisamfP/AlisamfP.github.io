import { TbBrandGithub, TbBrandLinkedin, TbAt } from "react-icons/tb";
import Button from "./Button";
import type { IconType } from "react-icons";
import "../styles/contact.css";
import "../styles/design-system.css"


interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/alisamfp",
    icon: TbBrandGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alisamfp",
    icon: TbBrandLinkedin,
  },
  {
    name: "Email",
    href: "mailto:alisa@palson.info",
    icon: TbAt,
  },
];


const Contact: React.FC = () => {
 

  return (
    <section className="contact-page">
      <h2 className="sr-only">Contact</h2>
      <section className="contact-social w-full">
        <h3 className="section-title">Find me on the web</h3>
        <div className="flex flex-col items-center justify-items-center gap-2 md:justify-evenly">
          {SOCIAL_LINKS.map((link) => {
            return (
              <Button
                key={`link-${link.name}`}
                href={link.href}
                size="lg"
                variant="primary"
                iconPosition="left"
                icon={link.icon}
                className="w-full"
              >
                {link.name}
              </Button>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Contact;

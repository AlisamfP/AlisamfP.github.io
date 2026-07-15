import type { Metadata } from "next";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import type { IconType } from "react-icons";
import { Button } from "@/components/Button/Button";
import styles from "./contact.module.scss";

export const metadata: Metadata = {
  title: "Contact",
  description: "Find Alisa Palson online — GitHub, LinkedIn, and email.",
};

interface Social {
  label: string;
  href: string;
  icon: IconType;
}

// Placeholder URLs — swap in the real handles/addresses here.
const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/alisamfp", icon: TbBrandGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alisamfp",
    icon: TbBrandLinkedin,
  },
  { label: "Email", href: "mailto:alisa@palson.info", icon: TbMail },
];

export default function ContactPage() {
  return (
    <div className="page">
      <h1>Say hello</h1>
      <p className={styles.lead}>
        The best ways to reach me and see what I&apos;m building.
      </p>
      <ul className={styles.links} role="list">
        {SOCIALS.map((social) => (
          <li key={social.label}>
            <Button
              href={social.href}
              external={social.href.startsWith("http")}
              icon={social.icon}
              size="lg"
              variant="secondary"
              className={styles.link}
            >
              {social.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

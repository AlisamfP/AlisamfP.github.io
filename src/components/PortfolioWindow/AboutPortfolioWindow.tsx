"use client";

import Image from "next/image";
import resumeData from "@/data/resume";
import { useAppLauncher } from "@/components/Desktop/use-app-launcher";
import styles from "./AboutPortfolioWindow.module.scss";

export function AboutPortfolioWindow() {
  const { openApp } = useAppLauncher();
  const currentRole = resumeData.experience.find(
    (job) => !job.endDate || job.endDate === "present",
  );

  return (
    <div className={styles.about}>
      <div className={styles.profileHeader}>
        <div className={styles.portrait}>
          <Image
            src="/images/meow-wolf-portrait.jpg"
            alt="Portrait of Alisa Palson at Meow Wolf"
            fill
            sizes="72px"
            className={styles.portraitImg}
          />
        </div>
        <div className={styles.identity}>
          <h2 className={styles.name}>{resumeData.contactInfo.name}</h2>
          {currentRole && <p className={styles.role}>{currentRole.role}</p>}
          <p className={styles.location}>{resumeData.contactInfo.location}</p>
        </div>
      </div>

      <p className={styles.summary}>
        Based in {resumeData.contactInfo.location}, I&apos;m a front-end developer
        who enjoys building clear, reliable, and fast interfaces out of
        complex ideas. I&apos;m currently the lead web developer at Magnolia
        Development, working on Shopify theme architecture, custom sections,
        and store migrations.
      </p>
      <p className={styles.summary}>
        I&apos;m a Recurse Center alum and magna cum laude graduate, and I
        volunteer with HeatSync Labs. Accessibility, open source, and
        inclusive design are things I genuinely care about. You can find me
        on{" "}
        <a href="https://github.com/alisamfp" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        or{" "}
        <a href="https://linkedin.com/in/alisamfp" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>

      <div className={styles.ctas}>
        <button
          type="button"
          className={styles.worksButton}
          onClick={() => openApp("portfolioWorks")}
        >
          View Works →
        </button>
        <button
          type="button"
          className={styles.experienceButton}
          onClick={() => openApp("experience")}
        >
          View Experience →
        </button>
      </div>
    </div>
  );
}

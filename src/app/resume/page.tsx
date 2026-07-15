import type { Metadata } from "next";
import { TbFileCode, TbMapPin } from "react-icons/tb";
import resumeData from "@/data/resume";
import { parseLinkedText } from "@/utils/linkedText";
import { TimelineItem } from "@/components/resume/TimelineItem";
import { EducationItem } from "@/components/resume/EducationItem";
import { SkillList } from "@/components/SkillList/SkillList";
import { Button } from "@/components/Button/Button";
import styles from "./resume.module.scss";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "The full resume of Alisa Palson. Also available as machine-readable JSON.",
};

export default function ResumePage() {
  const {
    contactInfo,
    summary,
    summaryLinks,
    experience,
    education,
    skills,
  } = resumeData;

  return (
    <div className={`page ${styles.resume}`}>
      <div className={styles.header}>
        <div>
          <h1>Resume</h1>
          <p className={styles.contact}>
            <TbMapPin aria-hidden />
            {contactInfo.location}
            {contactInfo.openToRelocation ? " · open to relocation" : ""}
          </p>
        </div>
        <Button href="/resume.json" external variant="secondary" icon={TbFileCode}>
          resume.json
        </Button>
      </div>

      <p className={styles.summary}>{parseLinkedText(summary, summaryLinks)}</p>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        {experience.map((job, i) => (
          <TimelineItem
            key={i}
            role={job.role}
            org={job.company}
            orgLinks={job.links}
            startDate={job.startDate}
            endDate={job.endDate}
            location={job.location}
            bullets={job.description}
            technologies={job.technologies}
          />
        ))}
      </section>

      <section aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        {education.map((edu, i) => (
          <EducationItem key={i} education={edu} />
        ))}
      </section>

      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills</h2>
        <div className={styles.skills}>
          <div>
            <h3>Development</h3>
            <SkillList items={skills.development} />
          </div>
          <div>
            <h3>Design</h3>
            <SkillList items={skills.design} />
          </div>
          <div>
            <h3>Beyond code</h3>
            <SkillList items={skills.additional} />
          </div>
        </div>
      </section>
    </div>
  );
}

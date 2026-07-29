import resumeData from "@/data/resume";
import { parseLinkedText } from "@/utils/linkedText";
import { SkillList } from "@/components/SkillList/SkillList";
import styles from "./ExperienceWindow.module.scss";

function isCurrent(endDate?: string) {
  return !endDate || endDate === "present";
}

export function ExperienceWindow() {
  return (
    <div className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      <p className={styles.subtitle}>A timeline of my experience and professional growth.</p>

      <section>
        <h3 className={styles.sectionLabel}>Career Timeline</h3>
        <ol className={styles.timeline}>
          {resumeData.experience.map((job, i) => (
            <li key={i} className={styles.timelineItem}>
              <span className={styles.dot} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h4 className={styles.role}>{job.role}</h4>
                  {isCurrent(job.endDate) && (
                    <span className={styles.currentBadge}>Current</span>
                  )}
                </div>
                <p className={styles.org}>
                  {parseLinkedText(job.company, job.links)}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                <p className={styles.dates}>
                  {job.startDate}–{job.endDate ?? "present"}
                </p>
                {job.description.length > 0 && (
                  <ul className={styles.bullets}>
                    {job.description.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                )}
                {/* {job.technologies && job.technologies.length > 0 && (
                  <SkillList items={job.technologies} />
                )} */}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

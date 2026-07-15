import type { Education } from "@/data/resume";
import styles from "./resume.module.scss";

export function EducationItem({ education }: { education: Education }) {
  const majors = education.major.join(" & ");

  return (
    <article className={styles.item}>
      <h3 className={styles.role}>
        {education.degree}
        {majors ? `, ${majors}` : ""}
      </h3>
      <p className={styles.org}>{education.school}</p>
      <p className={styles.meta}>
        {education.startDate}&ndash;{education.graduationDate}
        {education.focus ? ` · ${education.focus}` : ""}
      </p>
      {education.achievements && education.achievements.length > 0 && (
        <ul className={styles.bullets}>
          {education.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

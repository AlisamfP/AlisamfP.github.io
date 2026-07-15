import { parseLinkedText } from "@/utils/linkedText";
import type { LinkMap } from "@/data/resume";
import { SkillList } from "@/components/SkillList/SkillList";
import styles from "./resume.module.scss";

interface TimelineItemProps {
  role: string;
  org: string;
  orgLinks?: LinkMap;
  startDate: string;
  endDate?: string;
  location?: string;
  bullets: string[];
  technologies?: string[];
}

export function TimelineItem({
  role,
  org,
  orgLinks,
  startDate,
  endDate,
  location,
  bullets,
  technologies,
}: TimelineItemProps) {
  return (
    <article className={styles.item}>
      <h3 className={styles.role}>{role}</h3>
      <p className={styles.org}>{parseLinkedText(org, orgLinks)}</p>
      <p className={styles.meta}>
        {startDate}&ndash;{endDate ?? "present"}
        {location ? ` · ${location}` : ""}
      </p>
      {bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
      {technologies && technologies.length > 0 && (
        <SkillList items={technologies} />
      )}
    </article>
  );
}

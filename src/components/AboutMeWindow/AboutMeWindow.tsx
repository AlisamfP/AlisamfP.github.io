import resumeData from "@/data/resume";
import { parseLinkedText } from "@/utils/linkedText";
import styles from "./AboutMeWindow.module.scss";

export function AboutMeWindow() {
  return (
    <p className={styles.summary}>
      {parseLinkedText(resumeData.summary, resumeData.summaryLinks)}
    </p>
  );
}

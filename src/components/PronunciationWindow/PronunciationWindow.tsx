import { PronounceButton } from "@/components/PronounceButton/PronounceButton";
import styles from "./PronunciationWindow.module.scss";

export function PronunciationWindow() {
  return (
    <div className={styles.pronunciation}>
      <h2 className={styles.name}>Alisa Palson</h2>
      <p className={styles.pron}>
        pronounced uh-lisa
        <PronounceButton />
      </p>
    </div>
  );
}

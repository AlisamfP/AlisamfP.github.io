import { AppearancePicker } from "@/components/AppearancePicker/AppearancePicker";
import { BackgroundPicker } from "./BackgroundPicker";
import styles from "./SettingsWindow.module.scss";

export function SettingsWindow() {
  return (
    <div className={styles.settings}>
      <section className={styles.section}>
        <h3 className={styles.heading}>Appearance</h3>
        <AppearancePicker />
      </section>

      <section className={styles.section}>
        <h3 className={styles.heading}>Background</h3>
        <BackgroundPicker />
      </section>
    </div>
  );
}

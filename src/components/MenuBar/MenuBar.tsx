import { DisplayOptions } from "@/components/DisplayOptions/DisplayOptions";
import { Clock } from "./Clock";
import styles from "./MenuBar.module.scss";

export function MenuBar() {
  return (
    <header className={styles.menuBar}>
      <div className={styles.status}>
        <Clock />
        <DisplayOptions />
      </div>
    </header>
  );
}

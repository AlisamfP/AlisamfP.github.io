import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.primary}>Made with love, coffee, and Next.js.</p>
        <p className={styles.secondary}>
          Trans rights are human rights. Free Palestine.
        </p>
      </div>
    </footer>
  );
}

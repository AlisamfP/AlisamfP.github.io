import styles from "./SkillList.module.scss";

export function SkillList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list} role="list">
      {items.map((item) => (
        <li key={item} className={styles.chip}>
          {item}
        </li>
      ))}
    </ul>
  );
}

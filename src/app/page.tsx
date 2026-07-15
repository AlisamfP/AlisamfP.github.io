import Image from "next/image";
import Link from "next/link";
import resumeData from "@/data/resume";
import { parseLinkedText } from "@/utils/linkedText";
import { Button } from "@/components/Button/Button";
import { PronounceButton } from "@/components/PronounceButton/PronounceButton";
import { SkillList } from "@/components/SkillList/SkillList";
import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <div className="page">
      <section className={styles.hero}>
        <div className={styles.intro}>
          <p className={styles.hi}>Hello there! The name's</p>
          <h1 className={styles.name}>Alisa Palson</h1>
          <p className={styles.pron}>
            pronounced uh-lisa
            <PronounceButton />
          </p>
          <p className={styles.summary}>
            {parseLinkedText(resumeData.summary, resumeData.summaryLinks)}
          </p>
          <div className={styles.ctas}>
            <Button href="/projects">See my work</Button>
            <Button href="/resume" variant="secondary">
              Resume
            </Button>
          </div>
        </div>

        <div className={styles.portrait}>
          <Image
            src="/images/meow-wolf-portrait.jpg"
            alt="Portrait of Alisa Palson at Meow Wolf"
            fill
            sizes="(max-width: 768px) 78vw, 320px"
            className={styles.portraitImg}
            priority
          />
        </div>
      </section>

      <section className={styles.skills} aria-labelledby="skills-heading">
        <h2 id="skills-heading" className={styles.sectionHeading}>
          What I work with
        </h2>
        <dl className={styles.skillDl}>
          <div className={styles.skillRow}>
            <dt>Development</dt>
            <dd>
              <SkillList items={resumeData.skills.development} />
            </dd>
          </div>
          <div className={styles.skillRow}>
            <dt>Design</dt>
            <dd>
              <SkillList items={resumeData.skills.design} />
            </dd>
          </div>
          <div className={styles.skillRow}>
            <dt>Beyond code</dt>
            <dd>
              <SkillList items={resumeData.skills.additional} />
            </dd>
          </div>
        </dl>
        {/* <p className={styles.resumeLink}>
          <Link href="/resume">Read the full resume</Link>
        </p> */}
      </section>
    </div>
  );
}

import data from "../data/portfolioData.json";
import styles from "../css/Skills.module.css";

const { skills } = data;

const LEVEL_MAP = {
  Advanced: { label: "Thành thạo" },
  Intermediate: { label: "Khá" },
  Basic: { label: "Cơ bản" },
};

const SOFT_ICONS = {
  "Problem Solving": "fa-lightbulb",
  "Self-learning": "fa-book-open",
  "Time Management": "fa-clock",
  Teamwork: "fa-users",
  Communication: "fa-comments",
};

/* ── Sub-components ── */
const SkillBar = ({ name, level }) => {
  const { label } = LEVEL_MAP[level] ?? LEVEL_MAP.Basic;
  return (
    <li className={styles.skillItem}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={`${styles.levelBadge} ${styles[level.toLowerCase()]}`}>
          {label}
        </span>
      </div>
    </li>
  );
};

const CategoryCard = ({ category, items }) => (
  <div className={styles.card}>
    <h3 className={styles.cardTitle}>{category}</h3>
    <ul className={styles.skillList}>
      {items.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </ul>
  </div>
);

/* ── Main Page ── */
const Skills = () => (
  <section className="page-hero" aria-label="Kỹ năng">
    <h1 className={styles.pageTitle}>
      Kỹ <span className="accent">Năng</span>
    </h1>

    {/* Technical Skills */}
    <div className={styles.sectionHeader}>
      <i className="fa-solid fa-code" aria-hidden="true"></i>
      <h2>Technical Skills</h2>
    </div>
    <div className={styles.techGrid}>
      {skills.technical.map((group) => (
        <CategoryCard
          key={group.category}
          category={group.category}
          items={group.items}
        />
      ))}
    </div>

    {/* Soft Skills + Languages */}
    <div className={styles.bottomGrid}>
      <div className={styles.card}>
        <div className={styles.sectionHeader}>
          <i className="fa-solid fa-brain" aria-hidden="true"></i>
          <h2>Soft Skills</h2>
        </div>
        <ul className={styles.softList}>
          {skills.softSkills.map((skill) => (
            <li key={skill} className={styles.softItem}>
              <i
                className={`fa-solid ${SOFT_ICONS[skill] ?? "fa-check-circle"}`}
                aria-hidden="true"
              ></i>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.card}>
        <div className={styles.sectionHeader}>
          <i className="fa-solid fa-globe" aria-hidden="true"></i>
          <h2>Ngoại Ngữ</h2>
        </div>
        <ul className={styles.langList}>
          {skills.languages.map((lang) => (
            <li key={lang} className={styles.langItem}>
              <i className="fa-solid fa-language" aria-hidden="true"></i>
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;

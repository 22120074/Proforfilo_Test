import { Link } from "react-router-dom";
import data from "../data/portfolioData.json";
import styles from "../css/Home.module.css";

const { personalInfo } = data;

const Home = () => (
  <section className={styles.hero} aria-label="Giới thiệu">
    {/* ── Avatar Column (left) ── */}
    <div className={styles.imageColumn}>
      <div className={styles.avatarWrapper}>
        <img
          src={personalInfo.avatarUrl}
          alt={`Ảnh đại diện của ${personalInfo.name}`}
          className={styles.avatar}
          width={240}
          height={240}
        />
      </div>
    </div>

    {/* ── Text Column (right) ── */}
    <div className={styles.textContent}>
      <p className={styles.greeting}>Xin chào, tôi là</p>

      <h1 className={styles.name}>{personalInfo.name}</h1>

      <p className={styles.jobTitle}>{personalInfo.title}</p>

      <p className={styles.intro}>{personalInfo.shortIntro}</p>

      <div className={styles.cta}>
        <Link to="/resume" className={styles.btnPrimary}>
          Xem Hồ Sơ Chi Tiết
        </Link>
        <Link to="/projects" className={styles.btnSecondary}>
          Xem Dự Án{" "}
          <i
            className="fa-solid fa-arrow-down fa-rotate-270"
            style={{ marginLeft: "8px" }}
          ></i>
        </Link>
      </div>
    </div>
  </section>
);

export default Home;

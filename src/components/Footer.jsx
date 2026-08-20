import styles from "../css/Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} &lt;Porforfilo /&gt; — Được xây dựng bằng{" "}
          <span className={styles.accent}>React</span> &amp;{" "}
          <span className={styles.accent}>Vite</span>
        </p>
        <p className={styles.note}>Designed with ♥</p>
      </div>
    </footer>
  );
};

export default Footer;

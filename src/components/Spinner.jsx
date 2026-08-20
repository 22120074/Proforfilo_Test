import styles from "../css/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper} aria-label="Đang tải dữ liệu...">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;

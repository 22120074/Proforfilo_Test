import { Link } from 'react-router-dom';
import styles from "../css/NotFound.module.css";

const NotFound = () => {
  return (
    <main className={styles.container}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Trang không tồn tại</h1>
      <p className={styles.desc}>
        Trang bạn đang tìm kiếm đã bị xoá hoặc chưa được tạo.
      </p>
      <Link to="/" className={styles.btn}>
        ← Quay về trang chủ
      </Link>
    </main>
  );
};

export default NotFound;

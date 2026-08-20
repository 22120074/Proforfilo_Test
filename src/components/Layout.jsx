import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../css/Layout.module.css";

const Layout = () => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.content}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;

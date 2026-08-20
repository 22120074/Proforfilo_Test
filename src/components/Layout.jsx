import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../css/Layout.module.css";

const Layout = () => {
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    el.classList.remove(styles.fadeIn);
    const frame = requestAnimationFrame(() => {
      el.classList.add(styles.fadeIn);
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div ref={mainRef} className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

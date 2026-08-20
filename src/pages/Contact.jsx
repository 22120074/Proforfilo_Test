import { useState } from "react";
import data from "../data/portfolioData.json";
import styles from "../css/Contact.module.css";
import Spinner from "../components/Spinner";

const { contactLinks } = data;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên.";

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!formData.subject.trim()) newErrors.subject = "Vui lòng nhập tiêu đề.";

    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Nội dung tối thiểu 20 ký tự.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 2000);
    }, 1500);
  };

  return (
    <section className="page-hero" aria-label="Liên hệ">
      <h1 className={styles.pageTitle}>
        Liên <span className="accent">Hệ</span>
      </h1>

      <div className={styles.contactGrid}>
        {/* ── Thông tin liên hệ ── */}
        <div className={styles.infoCol}>
          <h2>Let's talk!</h2>
          <p className={styles.infoDesc}>
            Nếu bạn có bất kỳ thắc mắc nào, hoặc muốn trao đổi về cơ hội hợp
            tác, đừng ngần ngại nhắn tin cho tôi. Tôi sẽ phản hồi lại sớm nhất
            có thể.
          </p>

          <ul className={styles.contactList}>
            <li>
              <div className={styles.iconBox}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${contactLinks.email}`}>
                  {contactLinks.email}
                </a>
              </div>
            </li>
            <li>
              <div className={styles.iconBox}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <strong>Điện thoại</strong>
                <a href={`tel:${contactLinks.phone}`}>{contactLinks.phone}</a>
              </div>
            </li>
          </ul>
        </div>

        {/* ── Form liên hệ ── */}
        <div className={styles.formCol}>
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* Tên & Email trên cùng 1 dòng ở Desktop */}
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nhập tên của bạn"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? styles.inputError : ""}
                />
                {errors.name && (
                  <span className={styles.errorText}>{errors.name}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.inputError : ""}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Tiêu đề</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Vấn đề bạn quan tâm..."
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? styles.inputError : ""}
              />
              {errors.subject && (
                <span className={styles.errorText}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Nội dung</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Nhập nội dung tin nhắn (tối thiểu 20 ký tự)..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? styles.inputError : ""}
              ></textarea>
              {errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
            </div>

            {status === "success" && (
              <div className={styles.successMsg} role="alert">
                <i className="fa-solid fa-circle-check"></i>
                Tin nhắn của bạn đã được gửi thành công!
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                <>
                  <div className={styles.miniSpinner}></div> Đang gửi...
                </>
              ) : status === "success" ? (
                <>
                  <i className="fa-solid fa-check"></i> Đã gửi
                </>
              ) : (
                <>
                  <i className="fa-regular fa-paper-plane"></i> Gửi Tin Nhắn
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

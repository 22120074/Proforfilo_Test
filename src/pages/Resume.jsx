import { useState } from "react";
import data from "../data/portfolioData.json";
import styles from "../css/Resume.module.css";

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { personalInfo, education, experience, activities } = data;
  const dobStr = `${personalInfo.dob}/${personalInfo.mob}/${personalInfo.yob}`;

  return (
    <section className="page-hero" aria-label="Hồ sơ chi tiết">
      <h1 className={styles.pageTitle}>
        Hồ Sơ <span className="accent">Chi Tiết</span>
      </h1>

      <div className={styles.resumeGrid}>
        {/* Cột trái: Thông tin cá nhân & Mục tiêu */}
        <div className={styles.column}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <i className="fa-solid fa-user"></i> Thông Tin Cá Nhân
            </h2>
            <ul className={styles.infoList}>
              <li>
                <i className="fa-solid fa-calendar-days"></i>
                <strong>Ngày sinh:</strong> {dobStr}
              </li>
              <li>
                <i className="fa-solid fa-venus-mars"></i>
                <strong>Giới tính:</strong> {personalInfo.gender}
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <strong>Địa chỉ:</strong> {personalInfo.address}
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <strong>SĐT:</strong>{" "}
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <i className="fa-solid fa-bullseye"></i> Mục Tiêu Nghề Nghiệp
            </h2>
            <div 
              className={styles.objectiveContainer}
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsModalOpen(true);
              }}
              aria-label="Xem toàn bộ mục tiêu nghề nghiệp"
            >
              <p className={styles.objectiveText}>{personalInfo.objective}</p>
              <span className={styles.readMore}>Xem chi tiết</span>
            </div>
          </div>
        </div>

        {/* Cột phải: Học vấn, Kinh nghiệm, Ngoại khóa */}
        <div className={styles.column}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <i className="fa-solid fa-graduation-cap"></i> Học Vấn
            </h2>
            <div className={styles.timeline}>
              {education?.map((edu) => (
                <div key={edu.id} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <h3 className={styles.timelineTitle}>{edu.school}</h3>
                  <p className={styles.timelineSubtitle}>{edu.major}</p>
                  <div className={styles.timelineMeta}>
                    <span><i className="fa-regular fa-calendar"></i> {edu.time}</span>
                    <span><i className="fa-solid fa-star"></i> GPA: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {experience && experience.length > 0 && (
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <i className="fa-solid fa-briefcase"></i> Kinh Nghiệm Làm Việc
              </h2>
              <div className={styles.timeline}>
                {experience.map((exp) => (
                  <div key={exp.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3 className={styles.timelineTitle}>{exp.company}</h3>
                    <p className={styles.timelineSubtitle}>{exp.position}</p>
                    <div className={styles.timelineMeta}>
                      <span><i className="fa-regular fa-calendar"></i> {exp.time}</span>
                    </div>
                    {exp.description && (
                      <ul className={styles.bulletPoints}>
                        {exp.description.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activities && activities.length > 0 && (
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <i className="fa-solid fa-users"></i> Hoạt Động Ngoại Khóa
              </h2>
              <div className={styles.timeline}>
                {activities.map((act) => (
                  <div key={act.id} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <h3 className={styles.timelineTitle}>{act.organization}</h3>
                    <p className={styles.timelineSubtitle}>{act.role}</p>
                    <div className={styles.timelineMeta}>
                      <span><i className="fa-regular fa-calendar"></i> {act.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Popup for Objective */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-title"
          >
            <div className={styles.modalHeader}>
              <h3 id="modal-title"><i className="fa-solid fa-bullseye"></i> Mục Tiêu Nghề Nghiệp</h3>
              <button 
                className={styles.closeBtn} 
                onClick={() => setIsModalOpen(false)}
                aria-label="Đóng popup"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>{personalInfo.objective}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;

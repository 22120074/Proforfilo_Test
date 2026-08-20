import { useState, useMemo, useEffect } from "react";
import projectsData from "../data/projects.json";
import Spinner from "../components/Spinner";
import styles from "../css/Projects.module.css";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesTag =
        activeTags.length === 0 ||
        activeTags.every((tag) => project.tags.includes(tag));
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, activeTags]);

  return (
    <section className="page-hero" aria-label="Dự án">
      <h1 className={styles.pageTitle}>
        Dự <span className="accent">Án</span>
      </h1>

      {/* ── Filters & Search ── */}
      <div className={styles.controls}>
        <div className={styles.searchWrapper}>
          <i className="fa-solid fa-search" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Tìm kiếm dự án..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            aria-label="Tìm kiếm dự án"
          />
        </div>

        <div className={styles.filterDropdownWrapper}>
          <button
            className={styles.dropdownToggle}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
          >
            <span>
              <i className="fa-solid fa-filter"></i>{" "}
              {activeTags.length === 0
                ? "Lọc theo công nghệ"
                : `Đã chọn ${activeTags.length}`}
            </span>
            <i
              className={`fa-solid fa-chevron-down ${
                isDropdownOpen ? styles.rotated : ""
              }`}
            ></i>
          </button>

          {isDropdownOpen && (
            <div className={styles.dropdownMenu} role="listbox">
              {activeTags.length > 0 && (
                <button
                  className={styles.clearTagsBtn}
                  onClick={() => setActiveTags([])}
                >
                  Xóa bộ lọc
                </button>
              )}
              <div className={styles.tagList}>
                {allTags.map((tag) => (
                  <label key={tag} className={styles.dropdownItem}>
                    <input
                      type="checkbox"
                      checked={activeTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                    />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Projects Grid ── */}
      {isLoading ? (
        <Spinner />
      ) : filteredProjects.length > 0 ? (
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.thumbnailWrapper}>
                <img
                  src={project.thumbnail}
                  alt={`Thumbnail của ${project.name}`}
                  className={styles.thumbnail}
                  loading="lazy"
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectTime}>
                  <i className="fa-regular fa-calendar-days"></i> {project.time}
                </p>

                <p className={styles.projectDesc}>{project.shortDesc}</p>

                <div className={styles.tagsContainer}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tagBadge}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardActions}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btnAction}
                    aria-label={`Source code của ${project.name}`}
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.btnAction} ${styles.btnPrimary}`}
                      aria-label={`Live demo của ${project.name}`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                      Demo
                    </a>
                  ) : (
                    <button
                      className={`${styles.btnAction} ${styles.disabled}`}
                      disabled
                      title="Chưa triển khai"
                      aria-label="Chưa triển khai"
                    >
                      <i className="fa-solid fa-link-slash"></i> Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <i className="fa-solid fa-box-open"></i>
          <p>Không tìm thấy dự án nào phù hợp.</p>
        </div>
      )}
    </section>
  );
};

export default Projects;

import { education, experience, skills } from "@/data/site";
import styles from "./about.module.css";


export default function AboutPage() {
  return (
    <main className={styles.homeRoot}>
      {/* =====================================================
          ABOUT HERO
      ====================================================== */}
      <section className="page-hero section-shell">
        <span className="eyebrow">About</span>

        <h1>
          From operational problems to{" "}
          <span>trusted data products.</span>
        </h1>

        <p>
          I work across data engineering and analytics, with a strong
          interest in systems that make complex operational data reliable,
          explainable and useful.
        </p>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="section-block section-shell about-grid">
        <div className="about-photo">
          <img
            src="/images/profile.png"
            alt="Rajratna Patil outdoors"
          />
        </div>

        <div className="about-copy">
          <span className="eyebrow">How I work</span>

          <h2>
            Understand the process. Design the data. Make the output usable.
          </h2>

          <p>
            My background combines industrial engineering, quality, supply
            chain operations and analytics. That makes me naturally
            interested in the full path from a source process to a reliable
            metric.
          </p>

          <p>
            I enjoy building reusable ingestion patterns, dimensional models,
            business-rule enrichment, validation checks and Power BI
            experiences that help teams understand what is happening and why.
          </p>

          <p>
            The goal is not simply to move data. It is to create a trusted
            layer that can support decisions repeatedly.
          </p>

          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}
      <section className={styles.experienceSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                EXPERIENCE
              </span>

              <h2>
                Engineering context. Analytics perspective.
              </h2>
            </div>
          </div>

          <div className={styles.experienceList}>
            {experience.map((item) => (
              <article
                className={styles.experienceRow}
                key={`${item.role}-${item.period}`}
              >
                <span className={styles.period}>
                  {item.period}
                </span>

                <div className={styles.role}>
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                </div>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}
      <section className={`${styles.section} ${styles.shell}`}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>
              EDUCATION
            </span>

            <h2>Technical foundation.</h2>
          </div>
        </div>

        <div className={styles.educationGrid}>
          {education.map((item) => (
            <article
              className={styles.educationCard}
              key={item.school}
            >
              <span className={styles.period}>
                {item.period}
              </span>

              <div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import { education, experience, featuredProjects } from "@/data/site";

function getProjectThumbnail(title: string) {
  const fileName = title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  return `/images/thumbnail_${fileName}.png`;
}

const projectRoutes: Record<string, string> = {
  "Transport Delivery Precision Platform": "/projects/transport-delivery-precision-platform",
  "Weekly Workforce Snapshot": "/projects/weekly-workforce-snapshot",
  "Andon Screens": "/projects/andon-screens",
};

function getProjectHref(title: string) {
  return (
    projectRoutes[title] ??
    `/projects/${title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`
  );
}

export default function Home() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-photo-wrap">
            <img
              src="/images/profile.png"
              alt="Rajratna Patil"
              className="hero-photo"
            />
          </div>

          <div className="hero-card">
            <span className="eyebrow hero-eyebrow">
              ✦ DATA ENGINEERING · ANALYTICS · PRODUCT THINKING
            </span>

            <h1>
              I build at the intersection of{" "}
              <span>data, engineering &amp; analytics.</span>
            </h1>

            <p className="hero-lead">
              Data Engineer focused on building reliable data platforms,
              analytics systems, and products that turn operational data into
              decisions.
            </p>

            <div className="hero-actions">
              <Link className="button primary" href="/projects/">
                View projects <span>→</span>
              </Link>

              <Link className="button secondary" href="/about/">
                About me
              </Link>
            </div>

            <div className="hero-meta">
              <span>Data Platforms</span>
              <span>BI &amp; Analytics</span>
              <span>Data Engineering</span>
            </div>
          </div>
        </div>

        <aside className="hero-video">
          <div className="video-frame">
            <button
              className="video-play"
              type="button"
              aria-label="Play intro video"
            >
              ▶
            </button>

            <strong>Intro video</strong>
            <span>Coming soon</span>
          </div>
        </aside>
      </section>

      {/* =========================
          SKILL STRIP
      ========================== */}
      <section className="skill-strip" aria-label="Core technologies">
        <div className="skill-strip-track">
          <strong>DATABRICKS</strong>
          <span>✦</span>
          <strong>AZURE</strong>
          <span>✦</span>
          <strong>PYTHON</strong>
          <span>✦</span>
          <strong>SQL</strong>
          <span>✦</span>
          <strong>POWER BI</strong>
          <span>✦</span>
          <strong>DATA MODELING</strong>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================== */}
      <section className="section-block section-shell" id="projects">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Featured Projects</span>
            <h2>Data products built for real operations.</h2>
            <p>
              Reliable pipelines, analytical models and reporting systems
              designed around real business workflows.
            </p>
          </div>

          <Link className="text-link" href="/projects/">
            All projects →
          </Link>
        </div>

        <div className="projects-grid featured-grid">
          {featuredProjects.map((project) => {
            const projectHref = getProjectHref(project.title);

            return (
              <article className="project-card" key={project.title}>
                <Link
                  href={projectHref}
                  aria-label={`Open ${project.title}`}
                >
                  <div className={`project-visual ${project.accent}`}>
                    <div
                      className="project-thumbnail"
                      style={{
                        backgroundImage: `url("${getProjectThumbnail(
                          project.title
                        )}")`,
                      }}
                    />
                    <div className="project-visual-overlay" />
                  </div>
                </Link>

                <div className="project-card-body">
                  <span className="pill">{project.category}</span>

                  <h3>
                    <Link href={projectHref}>{project.title}</Link>
                  </h3>

                  <p>{project.description}</p>

                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <Link
                    className="text-link"
                    href={projectHref}
                    style={{ marginTop: "18px", marginBottom: 0 }}
                  >
                    View project →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================
          EXPERIENCE
      ========================== */}
      <section className="section-block section-tint">
        <div className="section-shell two-column-layout">
          <div>
            <span className="eyebrow">Experience</span>
            <h2>Engineering mindset, analytics focus.</h2>

            <p className="section-copy">
              My work sits between data engineering and operational analytics:
              understanding messy real-world processes, building trustworthy
              data, and translating it into decisions.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article
                className="timeline-item"
                key={`${item.role}-${item.period}`}
              >
                <span className="timeline-dot" />
                <span className="timeline-period">{item.period}</span>
                <h3>{item.role}</h3>
                <div className="timeline-company">{item.company}</div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================== */}
      <section className="section-block section-shell">
        <div className="section-heading">
          <span className="eyebrow">Education</span>
          <h2>Technical foundation with an analytics lens.</h2>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.school}>
              <div className="school-mark">
                {item.school
                  .split(" ")
                  .map((x) => x[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <span>{item.period}</span>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          CLOSING
      ========================== */}
      <section className="closing-panel section-shell">
        <span className="eyebrow light">What I care about</span>

        <h2>
          Reliable systems first. Useful analytics second. Both have to work
          together.
        </h2>

        <p>
          I like projects where data engineering is not separate from the
          business problem — the pipeline, model and reporting experience
          should reinforce each other.
        </p>

        <Link className="button light-button" href="/about/">
          More about me →
        </Link>
      </section>
    </>
  );
}
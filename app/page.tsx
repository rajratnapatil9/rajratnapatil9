import Link from "next/link";
import { education, experience, featuredProjects, skills } from "@/data/site";

export default function Home() {
  return (
    <>
Library
/
Portfolio
/
hero-section-v20.tsx


<section className="hero hero-background">
  <div className="hero-inner section-shell">
    <div className="hero-copy hero-glass">
      <span className="eyebrow">
        ✦ Data Engineering · Analytics · Product Thinking
      </span>

      <h1>
        I build at the intersection of{" "}
        <span>data, engineering & analytics.</span>
      </h1>

      <p className="hero-lead">
        Data Engineer focused on building reliable data platforms, analytics
        systems, and products that turn operational data into decisions.
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
        <span>BI & Analytics</span>
        <span>Supply Chain</span>
      </div>
    </div>
  </div>

  <div className="hero-video-zone">
    <div
      className="hero-video-placeholder"
      aria-label="Future intro video"
    >
      <div className="video-placeholder-content">
        <div className="video-placeholder-play">▶</div>
        <strong>Intro video</strong>
        <span>Coming soon</span>
      </div>
    </div>
  </div>
</section>
      <section className="ticker" aria-label="Skills">
        <div className="ticker-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill} <b>✦</b></span>
          ))}
        </div>
      </section>

      <section className="section-block section-shell" id="projects">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Data products built for real operations.</h2>
            <p>Projects centered on reliable ingestion, modeling, decision support and reporting.</p>
          </div>
          <Link className="text-link" href="/projects/">All projects →</Link>
        </div>

        <div className="projects-grid featured-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual ${project.accent}`}>
                <span>{project.category}</span>
                <strong>{project.title.split(" ").slice(0, 2).join(" ")}</strong>
              </div>
              <div className="project-card-body">
                <span className="pill">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block section-tint">
        <div className="section-shell two-column-layout">
          <div>
            <span className="eyebrow">Experience</span>
            <h2>Engineering mindset, analytics focus.</h2>
            <p className="section-copy">
              My work sits between data engineering and operational analytics: understanding messy real-world processes, building trustworthy data, and translating it into decisions.
            </p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.role}-${item.period}`}>
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

      <section className="section-block section-shell">
        <div className="section-heading">
          <span className="eyebrow">Education</span>
          <h2>Technical foundation with an analytics lens.</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.school}>
              <div className="school-mark">{item.school.split(" ").map((x) => x[0]).slice(0, 2).join("")}</div>
              <div>
                <span>{item.period}</span>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-panel section-shell">
        <span className="eyebrow light">What I care about</span>
        <h2>Reliable systems first. Useful analytics second. Both have to work together.</h2>
        <p>
          I like projects where data engineering is not separate from the business problem — the pipeline, model and reporting experience should reinforce each other.
        </p>
        <Link className="button light-button" href="/about/">More about me →</Link>
      </section>
    </>
  );
}

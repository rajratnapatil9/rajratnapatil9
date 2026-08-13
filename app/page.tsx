import Link from "next/link";
import styles from "./home.module.css";
import { education, experience, featuredProjects } from "@/data/site";

function getProjectThumbnail(title: string) {
  const fileName = title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  return `/images/thumbnail_${fileName}.png`;
}

function projectHref(title: string) {
  return title === "Transport Delivery Precision Platform"
    ? "/projects/transport-delivery-precision-platform/"
    : "/projects/";
}

const coreStack = [
  "Azure",
  "Databricks",
  "Synapse",
  "Python",
  "SQL",
  "Power BI",
];

export default function Home() {
  const leadProject = featuredProjects[0];
  const supportingProjects = featuredProjects.slice(1, 3);

  return (
    <main className={styles.homeRoot}>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroShell}>
          <div className={styles.heroOuter}>
            <div className={styles.socialRail}>
              <a href="mailto:rajratnapatil9@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/rajratna-patil/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a href="https://github.com/rajratnapatil9" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>

            <div className={styles.heroGrid}>
              {/* LEFT — PROFILE */}
              <article className={`${styles.heroPanel} ${styles.profilePanel}`}>
                <div className={styles.profileCopy}>
                  <span className={styles.eyebrow}>
                    DATA · ANALYTICS · OPERATIONS
                  </span>

                  <h1>Rajratna Patil</h1>
                  <h2>Data Analyst</h2>

                  <p>
                    I build reliable data pipelines, analytical models and
                    reporting products for real operational problems.
                  </p>

                  <div className={styles.heroActions}>
                    <Link href="#selected-work" className={styles.primaryButton}>
                      Featured Projects
                    </Link>

                    <Link href="/about/" className={styles.primaryButton}>
                      My Journey
                    </Link>
                  </div>

                  <div className={styles.focusRow}>
                    <div>
                      <span>01</span>
                      <strong>Platforms</strong>
                    </div>

                    <div>
                      <span>02</span>
                      <strong>Analytics</strong>
                    </div>

                    <div>
                      <span>03</span>
                      <strong>Products</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.portraitStage}>
                  <img
                    className={styles.profileImage}
                    src="/images/profile.png"
                    alt="Rajratna Patil"
                  />
                </div>
              </article>

              {/* RIGHT — VIDEO */}
              <article className={`${styles.heroPanel} ${styles.videoPanel}`}>
                <div className={styles.videoInner}>
                  <div className={styles.videoTop}>
                    <span>INTRO VIDEO</span>

                    <span className={styles.status}>
                      <i />
                      READY
                    </span>
                  </div>

                  <div className={styles.videoCenter}>
                    <div className={styles.playButton} aria-hidden="true">
                      <span>▶</span>
                    </div>

                    <h3>Video introduction</h3>

                    <p>
                      Reserved for your future intro video. Add an MP4,
                      YouTube embed or hosted player later without changing
                      this layout.
                    </p>
                  </div>

                  <div className={styles.videoFooter}>
                    <span>ABOUT ME</span>
                    <span>01:00–01:30</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className={styles.stackBar}>
            <span className={styles.stackLabel}>CORE STACK</span>

            <div className={styles.stackItems}>
              {coreStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK
      ====================================================== */}
      <section className={`${styles.section} ${styles.shell}`} id="selected-work">
        <div className={styles.sectionHeader}>
          <div>

            <h2>Systems built for operational use.</h2>
          </div>

          <Link href="/projects/" className={styles.inlineLink}>
            View all projects →
          </Link>
        </div>

        {leadProject && (
          <article className={styles.leadProject}>
            <Link
              href={projectHref(leadProject.title)}
              className={styles.leadVisual}
            >
              <img
                src={getProjectThumbnail(leadProject.title)}
                alt={`${leadProject.title} architecture`}
              />
            </Link>

            <div className={styles.leadBody}>
              <span className={styles.projectType}>{leadProject.category}</span>

              <h3>{leadProject.title}</h3>
              <p>{leadProject.description}</p>

              <div className={styles.projectFacts}>
                <div>
                  <span>PROBLEM</span>
                  <p>Inconsistent carrier files and reporting definitions.</p>
                </div>

                <div>
                  <span>BUILD</span>
                  <p>Automated ingestion, standardization and modeling.</p>
                </div>

                <div>
                  <span>OUTCOME</span>
                  <p>Trusted delivery-precision analytics.</p>
                </div>
              </div>

              <div className={styles.projectBottom}>
                <div className={styles.projectStack}>
                  {leadProject.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <Link
                  href={projectHref(leadProject.title)}
                  className={styles.projectLink}
                >
                  View Project →
                </Link>
              </div>
            </div>
          </article>
        )}

        <div className={styles.supportGrid}>
          {supportingProjects.map((project) => (
            <article className={styles.supportProject} key={project.title}>
              <Link
                href={projectHref(project.title)}
                className={styles.supportVisual}
              >
                <img
                  src={getProjectThumbnail(project.title)}
                  alt={`${project.title} project`}
                />
              </Link>

              <div className={styles.supportBody}>
                <span className={styles.projectType}>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.supportBottom}>
                  <div className={styles.projectStack}>
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <Link
                    href={projectHref(project.title)}
                    className={styles.projectLink}
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


    </main>
  );
}
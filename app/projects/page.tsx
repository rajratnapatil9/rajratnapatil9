import Link from "next/link";
import { featuredProjects } from "@/data/site";
import styles from "./projects.module.css";

const details = [
  {
    title: "Transport Delivery Precision Platform",
    problem:
      "Carrier files arrive in different structures, date/time conventions and business definitions.",
    build:
      "Reusable Python cleaning, carrier-specific processors, Databricks transformation, dimensional enrichment and SQL fact loading.",
    outcome:
      "A consistent analytics layer for delivery precision, delay analysis, carrier comparison and geographic reporting.",
  },
  {
    title: "Weekly Workforce Snapshot",
    problem:
      "Operational workforce reporting needs stable week definitions and repeatable snapshots instead of point-in-time manual extracts.",
    build:
      "Daily employee snapshots stored as Parquet, weekly snapshot persistence in Azure, and analytical views for workforce movements, hiring, terminations, rollovers and active ETOs.",
    outcome:
      "A consistent historical workforce model supporting weekly headcount reporting, employee movement analysis and operational workforce dashboards.",
  },
  {
    title: "Andon Screens",
    problem:
      "Shop-floor teams need continuously updated operational visuals that can be displayed reliably without depending on manual refreshes or locally hosted files.",
    build:
      "A Databricks notebook runs every 10 minutes, queries the latest operational data, generates Andon screen PNG images, stores them in Azure Blob Storage and exposes them through time-bound SAS URLs.",
    outcome:
      "Near-real-time Andon displays that stay current automatically, with centralized image storage, secure distribution and no manual screen refresh process.",
  },
];

const projectRoutes: Record<string, string> = {
  "Transport Delivery Precision Platform":
    "/projects/transport-delivery-precision-platform",
  "Weekly Workforce Snapshot":
    "/projects/weekly-workforce-snapshot",
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

function getProjectThumbnail(title: string) {
  const fileName = title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  return `/images/thumbnail_${fileName}.png`;
}

export default function ProjectsPage() {
  return (
    <main className={styles.projectsPage}>
      <section className={styles.projectsIntro}>
        <div className={styles.projectsShell}>

          <span className={styles.projectsEyebrow}>
            Projects
          </span>

          <h1>
            Data engineering work built around real operating problems.
          </h1>

          <p className={styles.projectsIntroCopy}>
            A selection of platform, analytics and modeling work focused on
            reliability, traceability and decision support.
          </p>
        </div>
      </section>

      <section
        className={`${styles.projectsList} ${styles.projectsShell}`}
      >
        {details.map((item, index) => {
          const project = featuredProjects[index];

          if (!project) return null;

          const projectHref = getProjectHref(item.title);

          return (
            <article
              className={styles.projectsCard}
              key={item.title}
            >
              <Link
                className={styles.projectsCardImageLink}
                href={projectHref}
                aria-label={`Open ${item.title}`}
              >
                <div
                  className={styles.projectsCardImage}
                  style={{
                    backgroundImage: `url("${getProjectThumbnail(
                      item.title
                    )}")`,
                  }}
                  role="img"
                  aria-label={`${item.title} project thumbnail`}
                />
              </Link>

              <div className={styles.projectsCardContent}>
                <span className={styles.projectsCategory}>
                  {project.category}
                </span>

                <h2>
                  <Link href={projectHref}>
                    {item.title}
                  </Link>
                </h2>

                <div className={styles.projectsInfoGrid}>
                  <div>
                    <strong>Problem</strong>
                    <p>{item.problem}</p>
                  </div>

                  <div>
                    <strong>Build</strong>
                    <p>{item.build}</p>
                  </div>

                  <div>
                    <strong>Outcome</strong>
                    <p>{item.outcome}</p>
                  </div>
                </div>

                <div className={styles.projectsStack}>
                  {project.stack.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>

                <Link
                  className={styles.projectsOpenLink}
                  href={projectHref}
                >
                  Open project <span>→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
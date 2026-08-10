import { featuredProjects } from "@/data/site";

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
      "Daily source snapshots, weekly flag logic, partition-aware storage, calendar modeling and reusable Power BI measures.",
    outcome:
      "Repeatable historical headcount analysis with week-over-week movement, supervisor views and workforce trends.",
  },
  {
    title: "Delivery Precision Geo Analytics",
    problem:
      "Delivery performance needs geographic context without requiring every source record to contain latitude and longitude.",
    build:
      "A managed destination-location dimension, hierarchical country/state/city controls and DAX-driven status bands.",
    outcome:
      "Map-based operational visibility with dynamic granularity and clear performance interpretation.",
  },
];

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
    <>
      <section className="page-hero section-shell">
        <span className="eyebrow">Projects</span>

        <h1>Data engineering work built around real operating problems.</h1>

        <p>
          A selection of platform, analytics and modeling work focused on
          reliability, traceability and decision support.
        </p>
      </section>

      <section className="section-block section-shell project-detail-list">
        {details.map((item, index) => {
          const project = featuredProjects[index];

          if (!project) return null;

          return (
            <article className="project-detail-card" key={item.title}>
              <div
                className={`project-detail-visual ${project.accent}`}
                style={{
                  backgroundImage: `url("${getProjectThumbnail(item.title)}")`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundColor: "#f8faff",
                }}
                role="img"
                aria-label={`${item.title} project thumbnail`}
              />

              <div className="project-detail-copy">
                <span className="pill">{project.category}</span>

                <h2>{item.title}</h2>

                <div className="project-detail-grid">
                  <div>
                    <b>Problem</b>
                    <p>{item.problem}</p>
                  </div>

                  <div>
                    <b>Build</b>
                    <p>{item.build}</p>
                  </div>

                  <div>
                    <b>Outcome</b>
                    <p>{item.outcome}</p>
                  </div>
                </div>

                <div className="stack-list">
                  {project.stack.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
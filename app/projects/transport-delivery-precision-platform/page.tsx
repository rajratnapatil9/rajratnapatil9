import Image from "next/image";
import Link from "next/link";
import "./transport-project.css";

const techStack = [
  "Power Automate",
  "Azure Blob Storage",
  "Synapse Pipelines",
  "Azure SQL",
  "Power BI",
  "SQL",
  "Python / Pandas",
];

const overview = [
  { value: "Multi-carrier", label: "Standardized shipment model" },
  { value: "Bronze → Gold", label: "Traceable lake architecture" },
  { value: "Azure SQL", label: "Curated dimensional model" },
  { value: "Power BI", label: "Operational decision layer" },
];

export default function TransportProjectPage() {
  return (
    <article className="transport-case-study">
      {/* =========================================================
          HERO
          ========================================================= */}
      <header className="transport-hero section-shell">
        <Link className="transport-back" href="/projects">
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <div className="transport-hero-grid">
          <div className="transport-hero-copy">
            <div className="transport-eyebrow">Transport data platform · Case study</div>

            <h1>
              Turning fragmented carrier data into a <span>trusted delivery platform.</span>
            </h1>

            <p className="transport-lead">
              An end-to-end transportation analytics solution that ingests carrier reports,
              standardizes inconsistent shipment data, stores trusted records in Azure,
              upserts a curated dimensional model in Azure SQL, and delivers delivery-precision
              insights through Power BI.
            </p>

            <div className="transport-stack" aria-label="Technology stack">
              {techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <aside className="transport-summary" aria-label="Project summary">
            <div className="transport-summary-top">
              <span className="transport-summary-kicker">System at a glance</span>
              <span className="transport-summary-dot" aria-hidden="true" />
            </div>

            <div className="transport-summary-grid">
              {overview.map((item) => (
                <div className="transport-summary-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </header>

      {/* =========================================================
          STORY NAV
          ========================================================= */}
      <nav className="transport-story-nav" aria-label="Project story">
        <div className="section-shell transport-story-nav-inner">
          <a href="#architecture"><b>01</b><span>Architecture</span></a>
          <a href="#standardization"><b>02</b><span>Standardization</span></a>
          <a href="#model"><b>03</b><span>Data model</span></a>
          <a href="#logic"><b>04</b><span>Business logic</span></a>
          <a href="#insights"><b>05</b><span>Insights</span></a>
        </div>
      </nav>

      <main>
        {/* =========================================================
            CHALLENGE
            ========================================================= */}
        <section className="transport-intro section-block">
          <div className="section-shell transport-intro-grid">
            <div>
              <div className="transport-eyebrow">The challenge</div>
              <h2>One transportation process. Many incompatible data formats.</h2>
            </div>

            <div className="transport-intro-copy">
              <p>
                Every carrier reports shipments differently: column names, date formats,
                service levels, postal codes, delay codes, commitment rules and file structures
                all vary. That inconsistency makes a single delivery-precision definition hard to
                maintain downstream.
              </p>
              <p>
                The project solves that problem upstream. Carrier-specific complexity is absorbed
                once in the data platform, producing a reusable shipment model that analytics can
                trust without rebuilding business rules report by report.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            01 ARCHITECTURE
            ========================================================= */}
        <section className="transport-chapter section-block" id="architecture">
          <div className="section-shell">
            <ChapterHeader
              number="01"
              eyebrow="Platform architecture"
              title="A traceable pipeline from carrier email to analytics."
              copy="Carrier attachments move through an automated ingestion and processing flow. Raw files remain available in the Bronze layer, while Synapse pipelines validate, clean and standardize the data before publishing trusted outputs to Gold storage and curated Azure SQL tables."
            />

            <ProjectVisual
              src="/images/01_transport_architecture.png"
              alt="Transport data pipeline architecture showing carrier reports, Power Automate, Azure Storage Bronze, Synapse Pipelines, Gold storage, Azure SQL and Power BI."
              width={1774}
              height={887}
              caption="01 · Data pipeline & architecture"
              priority
            />

            <div className="transport-explain-grid">
              <ExplainCard
                label="Ingest"
                title="Hands-free file intake"
                text="Power Automate watches incoming carrier reports, captures attachments and preserves the original files in Azure Storage for traceability."
              />
              <ExplainCard
                label="Process"
                title="Standardize once"
                text="Synapse pipelines orchestrate validation, cleansing, deduplication and carrier-specific transformation logic before records move downstream."
              />
              <ExplainCard
                label="Publish"
                title="Two trusted outputs"
                text="Clean records are retained in the Gold container for history and audit while curated dimensional tables are incrementally upserted in Azure SQL for analytics."
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            02 STANDARDIZATION
            ========================================================= */}
        <section className="transport-chapter section-block transport-tint" id="standardization">
          <div className="section-shell">
            <ChapterHeader
              number="02"
              eyebrow="Carrier standardization"
              title="Different carriers in. One shipment model out."
              copy="The transformation layer converts carrier-specific reports into a canonical shipment structure. Mapping, type normalization, date and time parsing, reference cleanup, code mapping, business rules, validation and deduplication all happen before analytics sees the data."
            />

            <ProjectVisual
              src="/images/02_transport_carrier_standardization.png"
              alt="Diagram showing multiple transportation carriers being standardized and normalized into one common shipment model."
              width={1672}
              height={941}
              caption="02 · Carrier standardization & normalization"
            />

            <div className="transport-feature-row">
              <div className="transport-feature-copy">
                <span className="transport-mini-label">Why this layer matters</span>
                <h3>Carrier complexity stops here.</h3>
                <p>
                  A downstream report should not need to know whether a source called a field
                  <em> PRO</em>, shipment number, tracking number or something else. That interpretation
                  belongs in one controlled transformation layer.
                </p>
              </div>

              <div className="transport-check-grid">
                <span>Column mapping</span>
                <span>Data type standardization</span>
                <span>Date / time parsing</span>
                <span>ZIP / postal formatting</span>
                <span>Reference cleanup</span>
                <span>Code & value mapping</span>
                <span>Business-rule alignment</span>
                <span>Validation & deduplication</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            03 MODEL
            ========================================================= */}
        <section className="transport-chapter section-block" id="model">
          <div className="section-shell">
            <ChapterHeader
              number="03"
              eyebrow="Dimensional modeling"
              title="A model designed around delivery precision."
              copy="After standardization, shipment events are loaded into a central transport fact table with conformed carrier, shipper, consignee, service-level, delay-code and time dimensions. This separates reusable business context from transaction-level measures and keeps reporting consistent."
            />

            <ProjectVisual
              src="/images/03_transport_dimensional_data_model.png"
              alt="Dimensional transportation data model with a central transport deliveries fact table connected to carrier, shipper, consignee, service level, delay code and time dimensions."
              width={1536}
              height={1024}
              caption="03 · Dimensional data model"
            />

            <div className="transport-explain-grid transport-explain-grid-model">
              <ExplainCard
                label="Fact"
                title="Shipment-level measures"
                text="The fact table holds the analytical grain: shipment keys, transit time, contracted lead time, delay days, delivery precision and operational flags."
              />
              <ExplainCard
                label="Dimensions"
                title="Reusable business context"
                text="Carrier, shipper, consignee, location, service-level and time dimensions keep descriptive attributes consistent across every report."
              />
              <ExplainCard
                label="Rules"
                title="Performance logic stays governed"
                text="Delay allowances and carrier-specific rules are modeled centrally so the same shipment produces the same delivery-precision result everywhere."
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            04 BUSINESS LOGIC
            ========================================================= */}
        <section className="transport-logic section-block transport-tint" id="logic">
          <div className="section-shell transport-logic-grid">
            <div className="transport-logic-copy">
              <div className="transport-chapter-number">04</div>
              <div className="transport-eyebrow">Business logic</div>
              <h2>Analytics starts with a governed definition of “on time.”</h2>
              <p>
                Delivery precision is not simply actual date versus planned date. The platform
                evaluates commitment time, contracted transit time, carrier-specific delay
                allowances and approved exception codes before assigning the final delivery status.
              </p>
            </div>

            <div className="transport-rule-panel">
              <div className="transport-rule-line">
                <span>01</span>
                <div><strong>Resolve commitment</strong><p>Determine the applicable promised delivery date and time.</p></div>
              </div>
              <div className="transport-rule-line">
                <span>02</span>
                <div><strong>Apply service rules</strong><p>Use carrier and service-level transit expectations.</p></div>
              </div>
              <div className="transport-rule-line">
                <span>03</span>
                <div><strong>Evaluate exceptions</strong><p>Interpret standardized delay codes and approved allowances.</p></div>
              </div>
              <div className="transport-rule-line">
                <span>04</span>
                <div><strong>Publish delivery precision</strong><p>Expose one governed status for dashboards and analysis.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            05 INSIGHTS
            ========================================================= */}
        <section className="transport-chapter section-block" id="insights">
          <div className="section-shell">
            <ChapterHeader
              number="05"
              eyebrow="Operational analytics"
              title="The data model becomes an operating view of transportation performance."
              copy="Power BI converts the trusted model into carrier scorecards, shipment trends, delay-category analysis, geographic performance and operational exception views. The goal is not another dashboard—it is a faster path from shipment behavior to action."
            />

            <ProjectVisual
              src="/images/05_transport_operational_insights.png"
              alt="Transport delivery precision dashboard with KPIs, carrier performance, delay categories, shipment volume trends and destination performance."
              width={1536}
              height={1024}
              caption="05 · Operational insights"
            />

            <div className="transport-outcomes">
              <div className="transport-outcomes-intro">
                <span className="transport-mini-label">What the platform enables</span>
                <h3>From data movement to operational decisions.</h3>
              </div>

              <div className="transport-outcome-list">
                <div><b>01</b><span><strong>Carrier performance</strong>Compare delivery precision and spot deterioration by carrier.</span></div>
                <div><b>02</b><span><strong>Delay analysis</strong>Separate recurring delay patterns from isolated exceptions.</span></div>
                <div><b>03</b><span><strong>Volume context</strong>Read service performance alongside changing shipment demand.</span></div>
                <div><b>04</b><span><strong>Location insight</strong>Identify destination areas with persistent service gaps.</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING
            ========================================================= */}
        <section className="transport-close section-shell">
          <div className="transport-close-card">
            <div>
              <div className="transport-eyebrow transport-eyebrow-light">Outcome</div>
              <h2>One trusted transportation story—from source file to decision.</h2>
              <p>
                The platform turns fragmented carrier reporting into a governed, reusable data
                product: traceable ingestion, standardized records, a curated dimensional model
                and a consistent delivery-precision layer for operational analytics.
              </p>
            </div>

            <Link className="transport-close-link" href="/projects">
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}

function ChapterHeader({
  number,
  eyebrow,
  title,
  copy,
}: {
  number: string;
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="transport-chapter-head">
      <div className="transport-chapter-title">
        <div className="transport-chapter-number">{number}</div>
        <div>
          <div className="transport-eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
        </div>
      </div>
      <p>{copy}</p>
    </div>
  );
}

function ProjectVisual({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="transport-visual">
      <div className="transport-visual-toolbar">
        <span>{caption}</span>
        <span className="transport-visual-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="transport-visual-canvas">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 760px) calc(100vw - 28px), 1180px"
          priority={priority}
        />
      </div>
    </figure>
  );
}

function ExplainCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <article className="transport-explain-card">
      <span>{label}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
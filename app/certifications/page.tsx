import { certifications } from "@/data/site";

export default function CertificationsPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <span className="eyebrow">Certifications</span>
        <h1>Continuous learning across the <span>modern data stack.</span></h1>
        <p>
          Coursework and certification paths that reinforce practical work in cloud data engineering, analytics and data science.
        </p>
      </section>

      <section className="section-block section-shell certification-grid">
        {certifications.map((cert, index) => (
          <article className="certificate-card" key={cert.name}>
            <div className={`certificate-top cert-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{cert.issuer}</strong>
            </div>
            <div>
              <span className="pill">{cert.issuer}</span>
              <h3>{cert.name}</h3>
              <p>{cert.note}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

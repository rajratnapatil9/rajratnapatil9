import { skills } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <span className="eyebrow">About</span>
        <h1>From operational problems to <span>trusted data products.</span></h1>
        <p>
          I work across data engineering and analytics, with a strong interest in systems that make complex operational data reliable, explainable and useful.
        </p>
      </section>

      <section className="section-block section-shell about-grid">
        <div className="about-photo">
          <img src="/images/profile.png" alt="Rajratna Patil outdoors" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">How I work</span>
          <h2>Understand the process. Design the data. Make the output usable.</h2>
          <p>
            My background combines industrial engineering, quality, supply chain operations and analytics. That makes me naturally interested in the full path from a source process to a reliable metric.
          </p>
          <p>
            I enjoy building reusable ingestion patterns, dimensional models, business-rule enrichment, validation checks and Power BI experiences that help teams understand what is happening and why.
          </p>
          <p>
            The goal is not simply to move data. It is to create a trusted layer that can support decisions repeatedly.
          </p>
          <div className="skill-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>
    </>
  );
}

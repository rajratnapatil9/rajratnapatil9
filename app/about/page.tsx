import Image from "next/image";
import { education, experience, skills } from "@/data/site";

export const metadata = { title: "About | RajSavvy" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <div className="eyebrow">Introduction</div>
        <h1>Plan the work. <span>Then work the plan.</span></h1>
        <p>I&apos;m an engineering and analytics professional with experience across project management, automotive engineering, process improvement and data-driven technologies.</p>
      </section>

      <section className="section-shell about-grid section-block">
        <div className="about-photo"><Image src="/images/profile.png" alt="Rajratna Patil" width={700} height={850} /></div>
        <div className="about-copy">
          <div className="eyebrow">Who am I?</div>
          <h2>Curious about the space between a business problem and a technical solution.</h2>
          <p>My background combines automotive project work with industrial engineering and analytics. I&apos;ve worked across commercial planning, audit support, product engineering and production engineering, while developing deeper interests in data visualization, machine learning and process improvement.</p>
          <p>My graduate studies at Wayne State University strengthened that analytical foundation through statistics, data science, optimization, Six Sigma, quality engineering and project management.</p>
          <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </section>

      <section className="section-shell section-block two-column-layout">
        <div><div className="eyebrow">Professional experience</div><h2>A cross-functional automotive foundation.</h2></div>
        <div className="timeline">
          {experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-dot"/><div className="timeline-period">{item.period}</div><h3>{item.role}</h3><div className="timeline-company">{item.company} · {item.location}</div><p>{item.description}</p></article>)}
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading"><div className="eyebrow">Education</div><h2>Academic foundation</h2></div>
        <div className="education-grid">
          {education.map((item) => <article className="education-card" key={item.school}><Image src={item.image} alt="" width={110} height={110}/><div><span>{item.period}</span><h3>{item.degree}</h3><p>{item.school}</p><strong>{item.detail}</strong></div></article>)}
        </div>
      </section>
    </>
  );
}

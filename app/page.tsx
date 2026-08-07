import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";
import { education, experience, projects, skills } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><Icon name="spark" size={16} /> Data Engineering · Analytics · Product Thinking</div>
          <h1>I build at the intersection of <span>data, engineering &amp; analytics.</span></h1>
          <p className="hero-lead">
            Data Engineer focused on building reliable data platforms, analytics systems, and products that turn operational data into decisions.
          </p>
          <div className="hero-actions">
            <Link href="/projects/" className="button primary">View projects <Icon name="arrow" /></Link>
            <Link href="/about/" className="button secondary">About me</Link>
          </div>
          <div className="hero-meta" aria-label="Core focus areas">
            <span>Data Platforms</span><span>BI &amp; Analytics</span><span>Supply Chain</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Rajratna Patil">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="profile-frame">
            <Image src="/images/profile.png" alt="Rajratna Patil" width={321} height={496} priority />
          </div>
          <div className="floating-note note-one"><b>Engineer</b><span>reliable systems</span></div>
          <div className="floating-note note-two"><b>Analyze</b><span>turn data into decisions</span></div>
          <div className="floating-note note-three"><b>Build</b><span>for real operations</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Core skills">
        <div className="ticker-track">
          {[...skills, ...skills].map((skill, i) => <span key={`${skill}-${i}`}>{skill}<b>✦</b></span>)}
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading split-heading">
          <div><div className="eyebrow">Selected work</div><h2>Projects that connect analysis with action.</h2></div>
          <Link href="/projects/" className="text-link">View all projects <Icon name="arrow" size={18} /></Link>
        </div>
        <div className="projects-grid featured-grid">
          {projects.slice(0, 3).map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="section-shell section-block two-column-layout">
        <div>
          <div className="eyebrow">Experience</div>
          <h2>Built through engineering, projects and continuous improvement.</h2>
          <p className="section-copy">My foundation comes from automotive engineering and project work, strengthened by graduate study in industrial engineering and a growing focus on data-driven decision making.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-dot" />
              <div className="timeline-period">{item.period}</div>
              <h3>{item.role}</h3>
              <div className="timeline-company">{item.company} · {item.location}</div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="section-heading"><div className="eyebrow">Education</div><h2>Engineering foundation. Analytical mindset.</h2></div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.school}>
              <Image src={item.image} alt="" width={110} height={110} />
              <div><span>{item.period}</span><h3>{item.degree}</h3><p>{item.school}</p><strong>{item.detail}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell closing-panel">
        <div className="eyebrow light">What&apos;s next</div>
        <h2>This is version one of the new RajSavvy.</h2>
        <p>The foundation is now ready for richer project stories, motion, 3D interactions and eventually the community features we discussed.</p>
        <Link href="/certifications/" className="button light-button">Browse certifications <Icon name="arrow" /></Link>
      </section>
    </>
  );
}

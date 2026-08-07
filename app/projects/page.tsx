import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const metadata = { title: "Projects | RajSavvy" };

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <div className="eyebrow">Projects</div>
        <h1>Ideas become useful when <span>you build them.</span></h1>
        <p>A refreshed collection of the engineering, analytics and visualization projects from the original RajSavvy portfolio.</p>
      </section>
      <section className="section-shell section-block">
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
    </>
  );
}

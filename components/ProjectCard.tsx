import Image from "next/image";
import { Icon } from "./Icon";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image src={project.image} alt="" width={900} height={560} className="project-image" />
      </div>
      <div className="project-card-body">
        <span className="pill">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-actions">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {link.label} <Icon name="external" size={17} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

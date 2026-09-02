import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <div
          className={`project${project.image ? "" : " no-image"}`}
          key={project.title}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={140}
              height={90}
              className="project-thumb"
            />
          )}
          <div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-meta">{project.tech.join(" · ")}</div>
            {(project.codeUrl || project.demoUrl) && (
              <div className="project-links">
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

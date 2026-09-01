import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="animate-on-scroll">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card animate-on-scroll" key={project.title}>
              <div className="project-image">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={400}
                  />
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tag) => (
                    <span className="tech-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.codeUrl || project.demoUrl) && (
                  <div className="project-links">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        className="btn-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="btn-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

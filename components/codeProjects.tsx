import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import projects from "../app/data/projects";

interface Tech {
  name: string;
  url: string;
  iconClass: string;
}

interface ProjectLink {
  url: string;
  icon: IconProp;
  label: string;
}

interface Project {
  techUsed: Tech[];
  thumbnail: string;
  title: string;
  subtitle: string;
  links: ProjectLink[];
}

interface ProjectsData {
  coding: Project[];
}

const codingProjects = (projects as ProjectsData).coding;

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-offPrimary">
        <Image
          src={project.thumbnail}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {featured ? (
            <span className="rounded-full bg-secondary px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              Featured
            </span>
          ) : null}
          {project.title === "TMUCSA" ? (
            <span className="rounded-full border border-white/15 bg-primary/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-lightText">
              In progress
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.subtitle}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used for ${project.title}`}>
          {project.techUsed.map((tech) => (
            <li key={tech.name}>
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-offPrimary px-3 py-1.5 text-xs font-medium text-lightText transition-colors hover:border-secondary hover:text-white"
              >
                <i className={`${tech.iconClass} text-sm text-secondary`} aria-hidden="true" />
                {tech.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
          {project.links.map((link) => (
            <a
              key={`${project.title}-${link.label}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-offPrimary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-elevated hover:text-offSecondary"
              aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
            >
              <FontAwesomeIcon icon={link.icon} className="h-4 w-4 text-secondary" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function CodeProjects() {
  const featuredProjects = codingProjects.slice(0, 3);
  const moreProjects = codingProjects.slice(3);

  return (
    <div className="mt-10">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} featured />
        ))}
      </div>

      <div className="mt-14 flex items-center gap-4">
        <h3 className="shrink-0 text-sm font-bold uppercase tracking-[0.18em] text-lightText">More builds</h3>
        <div className="h-px w-full bg-line" aria-hidden="true" />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {moreProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

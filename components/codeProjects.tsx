import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "../app/data/projects";

interface Tech {
  name: string;
  url: string;
  iconClass: string;
}

interface ProjectLink {
  url: string;
  icon: IconProp;
}

interface Project {
  github: string;
  techUsed: Tech[];
  thumbnail: string;
  title: string;
  subtitle: string;
  links: ProjectLink[];
}

function getLinkLabel(url: string) {
  if (url.includes("github.com")) return "GitHub";
  if (url.includes("youtube.com")) return "Demo";
  if (url.includes("devpost.com")) return "Devpost";
  return "Live site";
}

export default function CodeProjects() {
  const codingProjects = projects.coding as Project[];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {codingProjects.map((project) => (
        <article
          className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-offPrimary transition hover:-translate-y-1 hover:border-secondary/35 hover:shadow-xl hover:shadow-black/20"
          key={project.title}
        >
          <div className="aspect-[16/10] overflow-hidden bg-primary">
            {/* Remote project images come from several hosts, so a native image keeps the data source flexible. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.thumbnail}
              alt={`${project.title} project preview`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-gray-400">{project.subtitle}</p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies used for ${project.title}`}>
              {project.techUsed.map((tech) => (
                <li key={tech.name}>
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/80 px-2.5 py-1 text-[11px] font-medium text-gray-300 transition hover:text-white"
                  >
                    <i aria-hidden="true" className={`${tech.iconClass} text-secondary`} />
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {project.links.map((link) => {
                const label = getLinkLabel(link.url);
                return (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on ${label} (opens in a new tab)`}
                    className="inline-flex min-h-9 items-center gap-2 rounded-lg px-2.5 text-xs font-semibold text-lightText transition hover:bg-primary hover:text-secondary"
                  >
                    <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

import techstacks from "../app/data/tech";

interface Tech {
  name: string;
  url: string;
  iconClass: string;
}

interface TechGroupProps {
  title: string;
  items: Record<string, Tech>;
}

function TechGroup({ title, items }: TechGroupProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-offPrimary p-6">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {Object.values(items).map((tech) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            title={tech.name}
            className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-primary/65 px-2 py-4 text-center text-lightText transition hover:-translate-y-0.5 hover:border-secondary/40 hover:text-white"
          >
            <i aria-hidden="true" className={`${tech.iconClass} text-3xl text-secondary`} />
            <span className="text-xs font-medium leading-tight">{tech.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Techstack() {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      <TechGroup title="Languages" items={techstacks.languages} />
      <TechGroup title="Frameworks & Libraries" items={techstacks.frameworksLbraries} />
      <TechGroup title="Developer Tools" items={techstacks.tools} />
    </div>
  );
}

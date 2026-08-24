import techstack from "../app/data/tech";

const categories = [
  { title: "Languages", items: Object.values(techstack.languages) },
  { title: "Frameworks & libraries", items: Object.values(techstack.frameworksLbraries) },
  { title: "Developer tools", items: Object.values(techstack.tools) },
];

export default function Techstack() {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {categories.map((category) => (
        <article key={category.title} className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
          <div className="flex items-center gap-3 border-b border-line pb-5">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" aria-hidden="true" />
            <h3 className="text-lg font-bold text-white">{category.title}</h3>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {category.items.map((tech) => (
              <li key={tech.name}>
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-offPrimary px-2 py-3 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-elevated"
                  aria-label={`Learn more about ${tech.name}`}
                >
                  <i className={`${tech.iconClass} text-2xl text-secondary`} aria-hidden="true" />
                  <span className="text-[11px] font-semibold leading-4 text-lightText group-hover:text-white">{tech.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import experiences from "../app/data/experiences";

function logoContainerClass(needsLightBackground: boolean) {
  return `flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md transition hover:opacity-80 ${
    needsLightBackground
      ? "bg-[#f5f3eb] p-1"
      : "bg-transparent p-0"
  }`;
}

export default function Experience() {
  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-[1.45fr_0.8fr]">
      <div className="rounded-3xl border border-white/10 bg-offPrimary p-6 sm:p-8">
        <div className="mb-7 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
            <FontAwesomeIcon icon={faLaptopCode} className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">Career</p>
          </div>
        </div>

        <ol className="relative ml-2 border-l border-white/10">
          {experiences.professional.map((item) => (
            <li className="relative mb-9 pl-7 last:mb-0" key={`${item.location}-${item.title}`}>
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-secondary ring-4 ring-offPrimary" />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${item.location} website`}
                    className={logoContainerClass(item.location === "AssistIQ")}
                  >
                    <img src={item.src} alt={`${item.location} logo`} className="max-h-full max-w-full object-contain" />
                  </a>
                  <div className="min-w-0">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block font-semibold text-secondary transition hover:text-offSecondary"
                    >
                      {item.location}
                    </a>
                  </div>
                </div>
                <span className="w-fit shrink-0 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-gray-300">
                  {item.date}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-400">
                {item.description.map((description) => (
                  <li className="flex gap-2" key={description}>
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gray-500" />
                    <span>{description}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div className="h-fit rounded-3xl border border-white/10 bg-offPrimary p-6 sm:p-8">
        <div className="mb-7 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
            <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">Education</p>
          </div>
        </div>

        {experiences.education.map((item) => (
          <article key={item.title}>
            <span className="inline-flex rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-gray-300">
              {item.date}
            </span>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.location} program website`}
                className={logoContainerClass(false)}
              >
                <img src={item.src} alt={`${item.location} logo`} className="max-h-full max-w-full object-contain" />
              </a>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="min-w-0">
                <h4 className="text-lg font-bold text-white transition hover:text-secondary">{item.location}</h4>
              </a>
            </div>
            <p className="mt-2 font-semibold text-lightText">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-gray-400">{item.subtitle}</p>
            <p className="mt-4 text-sm font-semibold text-secondary">{item.grade}</p>
            <p className="mt-4 text-sm leading-6 text-gray-400">{item.description[0]}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import experiences from "../app/data/experiences";

export default function Experience() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1.45fr_0.75fr]">
      <article className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-8">
        <header className="flex items-center gap-4 border-b border-line pb-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
            <FontAwesomeIcon icon={faLaptopCode} className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Professional</p>
            <h3 className="mt-1 text-xl font-bold text-white">Work experience</h3>
          </div>
        </header>

        <ol className="divide-y divide-line">
          {experiences.professional.map((item) => (
            <li key={`${item.location}-${item.title}`} className="py-7 first:pt-7 last:pb-1">
              <div className="flex gap-4 sm:gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-offPrimary text-xs font-extrabold text-offSecondary sm:h-14 sm:w-14">
                  {item.short}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white sm:text-xl">{item.title}</h4>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-offSecondary"
                      >
                        {item.location}
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {"current" in item && item.current ? (
                        <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary">
                          Current
                        </span>
                      ) : null}
                      <time className="w-fit rounded-full border border-line bg-offPrimary px-3 py-1 text-[11px] font-semibold text-lightText">
                        {item.date}
                      </time>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5 text-sm leading-6 text-muted">
                    {item.description.map((description) => (
                      <li key={description} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>

      <article className="h-fit rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-8">
        <header className="flex items-center gap-4 border-b border-line pb-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
            <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Education</p>
            <h3 className="mt-1 text-xl font-bold text-white">Currently studying</h3>
          </div>
        </header>

        {experiences.education.map((item) => (
          <div key={item.location} className="pt-7">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-offPrimary text-xs font-extrabold text-offSecondary">
              {item.short}
            </span>
            <h4 className="mt-5 text-xl font-bold leading-7 text-white">{item.title}</h4>
            <p className="mt-2 text-sm font-semibold leading-6 text-lightText">{item.subtitle}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-offSecondary"
            >
              {item.location}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
            </a>
            <time className="mt-5 block w-fit rounded-full border border-line bg-offPrimary px-3 py-1.5 text-xs font-semibold text-lightText">
              {item.date}
            </time>
            <p className="mt-5 text-sm leading-7 text-muted">{item.description[0]}</p>
            <p className="mt-4 text-sm font-bold text-white">{item.grade}</p>
          </div>
        ))}
      </article>
    </div>
  );
}

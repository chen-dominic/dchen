import Image from "next/image";
import paths from "../data/paths";
import ResumeButton from "../../components/resume-button";
import SocialLinks from "../../components/social-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section id="home" className="relative px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-lightText sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
              Toronto-based software engineer
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              I build <span className="text-secondary">thoughtful software</span> for the real world.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-lightText sm:text-lg">
              Hi, I&apos;m Dominic — a Computer Science student at Toronto Metropolitan University and a Junior Software Engineer at AssistIQ. I turn complex workflows into clear, useful products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-offSecondary"
              >
                Explore my work
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </a>
              <ResumeButton />
            </div>

            <div className="mt-7">
              <SocialLinks />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute -right-3 top-10 h-28 w-28 rounded-[2rem] border border-secondary/40 sm:-right-6" aria-hidden="true" />
            <div className="absolute -left-3 bottom-16 h-16 w-16 rounded-2xl bg-secondary/20 sm:-left-8" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-offPrimary shadow-card">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">build · learn · repeat</p>
              </div>
              <div className="relative mx-auto aspect-[6/5] w-[92%] overflow-hidden pt-5">
                <Image
                  src={paths.me}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-contain object-bottom"
                  alt="Illustrated portrait of Dominic Chen"
                />
              </div>
            </div>

            <div className="relative -mt-7 ml-auto mr-4 flex max-w-sm items-center gap-4 rounded-2xl border border-secondary/30 bg-surface px-5 py-4 shadow-accent sm:mr-8">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-lg font-extrabold text-primary">DC</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Right now</p>
                <p className="mt-1 text-sm font-semibold text-white">Junior Software Engineer at AssistIQ</p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:mt-20">
          {[
            ["Focus", "Full-stack product development"],
            ["Based in", "Toronto, Ontario"],
            ["Driven by", "Curiosity, clarity, and craft"],
          ].map(([term, detail]) => (
            <div key={term} className="bg-surface px-5 py-5 sm:px-6">
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">{term}</dt>
              <dd className="mt-2 text-sm font-semibold text-lightText sm:text-base">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import Image from "next/image";
import paths from "../data/paths";
import Experience from "../../components/experience";
import Techstack from "../../components/techstack";
import SectionHeading from "../../components/section-heading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-6 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about-title"
          eyebrow="About"
          title="Who am I?"
          description="Junior Software Engineer @ AssistIQ Technologies"
        />

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-white/10 bg-offPrimary md:grid-cols-[minmax(240px,0.75fr)_1.25fr]">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[440px]">
            <Image
              src={paths.meFr}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-center"
              alt="Dominic Chen standing outdoors"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12">
            <p className="text-lg leading-8 text-lightText">
              I&apos;m a Computer Science student at Toronto Metropolitan University with a strong interest in full-stack development, thoughtful interfaces, and dependable backend systems.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-400">
              At AssistIQ, I help build React and TypeScript workflows for hospital teams. Outside of work, you&apos;ll usually find me building side projects, learning something new, or lifting weights.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {["Full-Stack Development", "UI/UX Design", "APIs & Databases"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-primary/60 px-4 py-3 font-medium text-lightText">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="" title="Experience" />
          <Experience />
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="" title="SKILLS" />
          <Techstack />
        </div>
      </div>
    </section>
  );
}

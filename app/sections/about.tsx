import Image from "next/image";
import paths from "../data/paths";
import Experience from "../../components/experience";
import SectionHeading from "../../components/section-heading";
import Techstack from "../../components/techstack";

export default function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title={<>Where technical systems meet real people.</>}
          description="I care about the details that make software easier to understand, easier to use, and easier to trust."
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <figure className="relative min-h-[420px] overflow-hidden rounded-3xl border border-line bg-offPrimary shadow-card sm:min-h-[560px] lg:min-h-0">
            <Image
              src={paths.meFr}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
              alt="Dominic Chen in a grey hoodie"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-primary/90 px-5 py-4 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Beyond the keyboard</p>
              <p className="mt-1 text-sm font-medium text-lightText">Lifting, visual art, and always learning something new.</p>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8 lg:p-10">
            <div>
              <p className="text-lg leading-9 text-lightText sm:text-xl">
                I&apos;m drawn to work where thoughtful engineering makes complicated work feel simple. Across healthcare, workforce software, and manufacturing, I&apos;ve built interfaces, APIs, data workflows, and developer tools that help people move with more clarity.
              </p>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                I enjoy working across the stack, asking the extra question, and turning rough ideas into dependable products. That same curiosity carries into the visual art you&apos;ll find in my work section.
              </p>
            </div>

            <dl className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-offPrimary p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">What I build</dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-white">Responsive products, reliable APIs, and useful data workflows.</dd>
              </div>
              <div className="rounded-2xl border border-line bg-offPrimary p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">How I work</dt>
                <dd className="mt-2 text-sm font-semibold leading-6 text-white">Curiously, collaboratively, and with care for the final detail.</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <SectionHeading
            eyebrow="Experience"
            title={<>Learning by building, one role at a time.</>}
            description="Hands-on experience spanning product interfaces, backend systems, data, and developer tooling."
          />
          <Experience />
        </div>

        <div className="mt-24 lg:mt-32">
          <SectionHeading
            eyebrow="Toolkit"
            title={<>Technologies I reach for.</>}
            description="A practical toolkit shaped by coursework, professional teams, hackathons, and personal projects."
          />
          <Techstack />
        </div>
      </div>
    </section>
  );
}

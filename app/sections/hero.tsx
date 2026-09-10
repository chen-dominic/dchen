import Image from "next/image";
import paths from "../data/paths";
import ResumeButton from "../../components/resume-button";
import SocialLinks from "../../components/social-links";

const description =
  "I build thoughtful full-stack products and enjoy turning practical ideas into dependable, easy-to-use software.";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-center gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-20"
    >
      <div className="order-2 flex flex-col items-start md:order-1">
        <h1 id="hero-title" className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="text-secondary">Dominic Chen.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-lightText sm:text-lg">
          {description}
        </p>
        <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Computer Science student at Toronto Metropolitan University and Junior Software Engineer at AssistIQ.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ResumeButton />
          <a
            href="#work"
            className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-secondary hover:text-secondary"
          >
            Explore my work
          </a>
        </div>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[470px]">
          <div className="absolute inset-x-10 bottom-6 top-16 -z-10 rounded-full bg-secondary/15 blur-3xl" />
          <Image
            src={paths.me}
            height={700}
            width={700}
            sizes="(max-width: 768px) 280px, 470px"
            priority
            alt="Dominic Chen"
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

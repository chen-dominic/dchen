import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import socials from "../data/socials";
import SectionHeading from "../../components/section-heading";

const email = "dominic.chen630@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-offPrimary/35 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title={<>Have a role, project, or idea in mind?</>}
          description="I’m always happy to meet thoughtful people, talk through interesting problems, and hear about work worth caring about."
        />

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-line bg-surface shadow-card lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-secondary p-6 text-primary sm:p-10 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em]">Let&apos;s talk</p>
            <h3 className="mt-4 max-w-xl text-2xl font-extrabold leading-tight sm:text-3xl">
              The best projects usually start with a good conversation.
            </h3>
            <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-primary/80 sm:text-base">
              Tell me what you&apos;re working on, what you&apos;re solving, or simply what caught your eye here.
            </p>
            <a
              href={`mailto:${email}`}
              className="group mt-8 inline-flex min-h-12 max-w-full items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-offPrimary"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 shrink-0 text-offSecondary" />
              <span className="truncate">Email Dominic</span>
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <h3 className="text-xl font-bold text-white">Find me here</h3>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-offPrimary p-4 transition-colors hover:border-secondary/60 hover:bg-elevated"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted">Email</span>
                  <span className="mt-1 block break-all text-sm font-semibold text-white">{email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-line bg-offPrimary p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <FontAwesomeIcon icon={faLocationDot} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted">Based in</span>
                  <span className="mt-1 block text-sm font-semibold text-white">Toronto, Ontario</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Social profiles">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-offPrimary px-4 py-2 text-xs font-semibold text-lightText transition-colors hover:border-secondary hover:text-white"
                  aria-label={`${social.name} profile (opens in a new tab)`}
                >
                  <FontAwesomeIcon icon={social.icon} className="h-4 w-4 text-secondary" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../../components/section-heading";

const email = "dominic.chen630@gmail.com";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-6 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-offPrimary p-7 sm:p-10 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let’s get in touch!"
            align="left"
          />

          <div className="rounded-2xl border border-white/10 bg-primary/70 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1 h-4 w-4 text-secondary" />
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Email</p>
                <a href={`mailto:${email}`} className="mt-1 block break-all text-sm font-semibold text-white hover:text-secondary sm:text-base">
                  {email}
                </a>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-5">
              <FontAwesomeIcon icon={faLocationDot} className="mt-1 h-4 w-4 text-secondary" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Based in</p>
                <p className="mt-1 text-sm font-semibold text-white sm:text-base">Toronto, Ontario</p>
              </div>
            </div>
            <a
              href={`mailto:${email}`}
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-offSecondary"
            >
              Send an email
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

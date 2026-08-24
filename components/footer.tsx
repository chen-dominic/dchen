import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "../app/data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-primary px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-white">Dominic Chen</p>
          <p className="mt-1 text-xs text-muted">Designed and built with care in Toronto.</p>
        </div>

        <div className="flex items-center gap-2" aria-label="Footer social links">
          {socials.map((social) => (
            <a
              key={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-offPrimary text-lightText transition-colors hover:border-secondary hover:text-secondary"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} profile (opens in a new tab)`}
            >
              <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted">© {year} Dominic Chen. All rights reserved.</p>
      </div>
    </footer>
  );
}

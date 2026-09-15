import socials from "../app/data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="px-6 pb-28 pt-4 md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-gray-500 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Dominic Chen. All rights reserved.</p>
        <div className="flex gap-2" aria-label="Footer social links">
          {socials.map((social) => (
            <a
              key={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-offPrimary text-gray-300 transition hover:bg-secondary hover:text-white"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} (opens in a new tab)`}
            >
              <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

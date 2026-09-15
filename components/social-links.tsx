import socials from "../app/data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3" aria-label="Social links">
      {socials.map((social) => (
        <a
          key={social.name}
          className="flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-offPrimary px-4 py-2 text-sm font-medium text-lightText transition hover:-translate-y-0.5 hover:border-secondary/60 hover:text-white"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.name} (opens in a new tab)`}
        >
          <FontAwesomeIcon icon={social.icon} className="h-4 w-4 text-secondary" />
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
}

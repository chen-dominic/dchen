import socials from "../app/data/socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SocialLinks(){
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Social profiles">
      {socials.map((social) => (
        <a
          key={social.name}
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-offPrimary hover:text-white"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.name} profile (opens in a new tab)`}
        >
          <FontAwesomeIcon icon={social.icon} className="h-4 w-4 text-secondary" />
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
}

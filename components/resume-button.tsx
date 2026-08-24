import Link from "next/link"
import paths from "../app/data/paths"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function ResumeButton() {
  return (
    <Link
      href={paths.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-line bg-offPrimary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary hover:bg-elevated"
    >
      View resume
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="h-4 w-4 text-secondary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

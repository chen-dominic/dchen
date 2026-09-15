import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import paths from "../app/data/paths";

export default function ResumeButton() {
  return (
    <a
      href={paths.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-secondary/15 transition hover:-translate-y-0.5 hover:bg-offSecondary focus-visible:outline-offset-4"
    >
      View resume
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
    </a>
  );
}

import Link from "next/link"
import paths from "../app/data/paths"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function ResumeButton() {
    return (
        <Link href={paths.resume} target="_blank" className="flex w-fit outline outline-1 outline-secondary rounded-full items-center text-white md:mt-20 ml-2 mt-8 hover:bg-secondary hover:outline-none transition-colors cursor-pointer group">
            <h1 className="md:font-semibold bg-transparent md:text-lg md:px-8 md:py-2 text-md px-6 py-0 font-medium w-fit">
                View Resume
            </h1>
            <div className="px-4 py-4 md:bg-secondary bg-transparent rounded-full group-hover:bg-offSecondary transition-colors flex justify-center items-center">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="md:w-5 md:h-5 w-4 h-4" />
            </div>
        </Link>
    )
}
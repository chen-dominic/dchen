import socials from "../data/socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SocialLinks(){
    return(
        <div className="flex md:justify-start md:gap-8 md:mt-20 justify-around gap-0 mt-12 md:ml-2">
        {socials.map((social, index) => (
            <a key={index} className="text-white bg-secondary rounded-full hover:-translate-y-1 transition-all p-3 flex justify-center items-center" href={social.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} className="md:w-6 md:h-6 w-4 h-4" />
            </a>
          ))}
      </div>
    )
}
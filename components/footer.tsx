import socials from "../app/data/socials"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
      <div className="w-screen py-24 md:py-12 flex flex-col items-center justify-center text-gray-500 gap-4">
        <div className="flex md:gap-8 justify-around gap-4">
        {socials.map((social, index) => (
            <a key={index} className="text-white bg-offPrimary rounded-full hover:bg-white hover:text-offPrimary transition-all p-2 flex justify-center items-center" href={social.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} className="md:w-5 md:h-5 w-5 h-5" />
            </a>
          ))}
      </div>
        <p className="text-sm font-light">© 2025 Dominic Chen. All Rights Reserved.</p>
      </div>
    );
  }
  
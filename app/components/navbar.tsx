import Image from "next/image";
import Logo from "../../public/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
      <div className="sticky top-0 flex justify-between px-40 py-8 font-poppins">
        <div className="flex-1 text-white flex items-center gap-16 font-semibold text-2xl">
            <Image 
                src={Logo}
                width={60}
                height={60}
                alt="logo"
            />
            <h1>chen-dominic</h1>
        </div>
        <div className="flex-1 items-center justify-end gap-12 flex">
          <a className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4" href="#Hero">
            <FontAwesomeIcon icon="home" className="w-6 h-6" />
          </a>
          <a className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4" href="#About">
            <FontAwesomeIcon icon="user" className="w-6 h-6" href="#About" />
          </a>
          <a className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4" href="#Projects">
            <FontAwesomeIcon icon="code" className="w-6 h-6" href="#Projects"/>
          </a>
          <a className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4" href="#Contact">
            <FontAwesomeIcon icon="address-card" className="w-6 h-6" href="#Contact" />
          </a>
        </div>
      </div>
    );
  }
  
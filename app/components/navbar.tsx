import Image from "next/image";
import paths from "../data/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navbar() {
    return (
      <div className="sticky top-4 flex justify-between mx-40 sm:mx-8 my-8 sm:my-4 px-8 py-4 sm:py-2 font-poppins bg-opacity-50 bg-black rounded-full z-50">
        <div className="flex-1 text-white flex items-center gap-16 font-semibold text-2xl sm:text-lg">
          <div className="w-12 h-12 sm:w-10 sm:h-10">
            <Image 
                src={paths.logo}
                layout="responsive"
                width={50}
                height={50}
                alt="logo"
            />
          </div>
          <h1>chen-dominic</h1>
        </div>
        <div className="flex-1 items-center justify-end gap-12 flex">
          <Link href={"#Hero"}>
            <div className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4 sm:p-3" >
              <FontAwesomeIcon icon="home" className="w-6 h-6 sm:w-4 sm:h-4" />
            </div>
          </Link>
          <Link href={"#About"}>
            <div className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4 sm:p-3" >
              <FontAwesomeIcon icon="user" className="w-6 h-6 sm:w-4 sm:h-4"  />
            </div>
          </Link>
          <Link href={"#Projects"}>
            <div className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4 sm:p-3" >
              <FontAwesomeIcon icon="code" className="w-6 h-6 sm:w-4 sm:h-4" />
            </div>
          </Link>
          <Link href={"#Contact"}>
            <div className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4 sm:p-3" >
              <FontAwesomeIcon icon="address-card" className="w-6 h-6 sm:w-4 sm:h-4"  />
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
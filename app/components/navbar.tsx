import Image from "next/image";
import paths from "../data/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import navItems from "../data/nav-items";

export default function Navbar() {
    return (
      <div className="md:sticky md:top-4 fixed bottom-0 
                      flex justify-between 
                      2xl:mx-40 2xl:my-8 2xl:py-4 
                      md:mx-8 md:my-4 md:py-2 px-8 py-2
                      md:w-auto w-screen
                      font-poppins 
                      md:bg-opacity-50 bg-black md:rounded-full 
                      bg-opacity-80 rounded-t-3xl
                      z-50
                      md:hover:bg-opacity-100 transition-all">
        <div className="flex-1 text-white md:flex hidden items-center gap-16 font-semibold text-2xl sm:text-lg">
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
        <div className="flex-1 items-center md:justify-end justify-center gap-12 flex">
          {navItems.map((navItem, index) => (
            <Link href={navItem.location} key={index}>
            <div className="text-white bg-secondary rounded-full hover:text-secondary hover:bg-white transition-colors p-4 sm:p-3" >
              <FontAwesomeIcon icon={navItem.icon} className="2xl:w-6 2xl:h-6 w-4 h-4" />
            </div>
            </Link>
            ))}
        </div>
      </div>
    );
  }
  
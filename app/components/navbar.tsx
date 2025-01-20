import Image from "next/image";
import Logo from "../../public/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
      <div className="white w-screen static top-0 bg-black flex justify-between px-20 py-2 font-poppins">
        <div className="flex-1 text-white flex items-center gap-16 font-semibold text-2xl">
            <Image 
                src={Logo}
                width={60}
                height={60}
                alt="logo"
            />
            <h1>chen-dominic</h1>
        </div>
        <div className="flex-1 items-center white">
            <FontAwesomeIcon icon="alarm-snooze" size="2x"/>
        </div>
      </div>
    );
  }
  
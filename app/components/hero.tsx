import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Me from "../../public/me.png"
import Image from "next/image";
import socials from "../data/socials";

const description = ["I am a third-year student at Toronto Metropolitan University 👨‍🎓.",
                    "I enjoy full stack web development and learning new skills!",
                    "Welcome to my website!"];

export default function Hero() {
    return (
      <div className="flex font-poppins mx-40 sm:mx-12 items-center overflow-hidden min-h-screen" id="Hero">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col gap-6 sm:gap-4">
            <h1 className="text-white font-bold text-5xl sm:text-4xl">Hi there! 😄</h1>
            <h1 className="text-white font-bold text-4xl sm:text-3xl">I am <span className="text-secondary">Dominic Chen</span></h1>
            <div className="text-white flex flex-col gap-2 text-xl mt-4 sm:text-lg">
              {description.map((item,index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="flex justify-start gap-8 mt-40 sm:mt-20 sm:ml-12">
              {socials.map((social, index) => (
                  <a key={index} className="text-white bg-secondary rounded-full hover:-translate-y-1 transition-all p-3" href={social.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                  </a>
                ))}
            </div>
          </div>
          <div className="bg-transparent outline outline-2 outline-secondary px-4 py-2 w-fit rounded-full text-white font-semibold text-lg mt-20 ml-8 sm:mt-16 hover:bg-secondary transition-colors cursor-pointer">
            View Resume
          </div>
        </div>
        <div className="flex-2">
          <div className=" h-[1000px] w-[700px] sm:h-auto sm:w-[500px]">
            <Image src={Me} height={1000} width={700} layout="responsive" alt="Dominic Chen" className="hover:scale-105 transition-all" />
          </div>
        </div>
      </div>
    );
  }
  
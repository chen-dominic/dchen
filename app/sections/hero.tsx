import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import socials from "../data/socials";
import paths from "../data/paths";
import ResumeButton from "../components/resume-button";
import SocialLinks from "../components/social-links";


const description = ["I am a third-year student at Toronto Metropolitan University 👨‍🎓.",
                    "I enjoy full stack web development and learning new skills!",
                    "Welcome to my website!"];

export default function Hero() {
    return (
      <div className="flex font-poppins 2xl:mx-40 md:mx-24 md:flex-row 2xl:pt-0 md:pt-12 items-center overflow-visible flex-col mx-4 pt-12" id="Hero">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col md:gap-6 gap-2">
            <h1 className="text-white font-bold md:text-5xl text-4xl">Hi there! 😄</h1>
            <h1 className="text-white font-bold md:text-4xl text-3xl">I am <span className="text-secondary">Dominic Chen</span></h1>
            <div className="text-white flex flex-col gap-2 md:text-xl mt-4 text-md">
              {description.map((item,index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <ResumeButton />
            <SocialLinks />
          </div>
        </div>
        <div className="flex-2 2xl:pt-0 md:pt-0 pt-6">
          <div className="2xl:w-[700px] md:w-[500px] h-auto w-[300px]">
            <Image src={paths.me} height={100} width={700} layout="responsive" alt="Dominic Chen" className="hover:scale-105 transition-all" />
          </div>
        </div>
      </div>
    );
  }
  
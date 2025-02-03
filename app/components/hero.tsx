import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Me from "../../public/me.png"
import Image from "next/image";

const description = ["I am a third-year student at Toronto Metropolitan University 👨‍🎓.",
                    "I enjoy full stack web development and learning new skills!",
                    "Welcome to my website!"];

export default function Hero() {
    return (
      <div className="flex font-poppins mx-40 items-center overflow-hidden" id="Hero">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col gap-6">
            <h1 className="text-white font-bold text-5xl">Hi there! 😄</h1>
            <h1 className="text-white font-bold text-4xl">I am <span className="text-secondary">Dominic Chen</span></h1>
            <div className="text-white flex flex-col gap-2 text-xl mt-4">
              {description.map((item,index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            <div className="flex justify-start gap-8 mt-40">
              <a className="text-white bg-secondary rounded-full hover:-translate-y-1 transition-all p-3" href="#Hero">
                <FontAwesomeIcon icon="instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-2">
          <Image src={Me} height={1000} width={700} alt="Dominic Chen" className="hover:scale-105 transition-all" />
        </div>
      </div>
    );
  }
  
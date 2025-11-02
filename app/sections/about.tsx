"use client"
import Techstack from "../../components/techstack";
import Image from "next/image";
import paths from "../data/paths";
import ResumeButton from "../../components/resume-button";
import Experience from "../../components/experience";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {

  const [currentImageIndex,setCurrentImageIndex] = useState(0);
  
  const images = [
    paths.me1,
    paths.meFr,
    paths.tofu3,
    paths.tofu,
    paths.tofu2
  ]
  
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

    const aboutText = "I am a Computer Science student at Toronto Metropolitan University, pursuing my passion in the field. My interests lie in coding 💻, lifting weights 💪🏼, and gaming 🕹️.";

    return (
      <div className="mx-4 pt-20 overflow-x-hidden" id="About">
        <h1 className="text-white text-center md:text-6xl tracking-wider text-5xl md:mt-12 mt:6 font-black">WHO AM I?</h1>
        <div className="flex md:flex-row flex-col items-center md:py-20 md:px-40 px-8">
          <div className="flex-1 flex flex-col w-fit md:justify-between justify-center md:m-0 my-4">
            <div className="flex flex-col w-fit">
              <div className="md:h-[300px] md:w-[300px] h-[200px] w-[200px] md:p-2 bg-offPrimary rounded-full overflow-hidden">
                <Image src={images[currentImageIndex]} width={500} height={500} layout="responsive" className="rounded-full" alt="Dominic Chen" />
              </div>
              <div className="flex items-center justify-around opacity-50 hover:opacity-100">
                <div className="bg-secondary rounded-full flex items-center justify-center p-2 cursor-pointer hover:bg-offSecondary transition-all duration-200" onClick={handlePrev}>
                  <FontAwesomeIcon icon={faCaretLeft} className="w-5 h-5 text-white" />
                </div>
                <div className="bg-secondary rounded-full flex items-center justify-center p-2 cursor-pointer hover:bg-offSecondary transition-all duration-200" onClick={handleNext}>
                  <FontAwesomeIcon icon={faCaretRight} className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center text-lightText">
            <p className=" md:text-xl text-lg md:mt-4 mt-2">{aboutText}</p> <br />
            <p className=" md:text-xl text-lg md:mt-4 mt-2">
              I am currently a Software Developer at 
              <a href="http://dayforce.com/" className="text-secondary font-bold hover:text-offSecondary" target="_blank"> Dayforce </a> 
              with experience in building web APIs, working with SQL databases, and developing full stack applications! 🚀
            </p>
            <div className=" md:flex hidden">
              <ResumeButton />
            </div>
          </div>
        </div>

        <h1 className="text-white text-center md:text-4xl md:mt-0 mt-8 tracking-wider md text-3xl font-black">EXPERIENCE</h1>
        <Experience />
        <h1 className="text-white text-center md:text-4xl tracking-wider text-3xl font-black">SKILLS</h1>
        <Techstack />
      </div>
    );
  }
  
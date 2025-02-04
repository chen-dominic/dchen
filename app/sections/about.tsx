import Techstack from "../components/techstack";
import Image from "next/image";
import paths from "../data/paths";
import ResumeButton from "../components/resume-button";
import Experience from "../components/experience";

export default function About() {

    const aboutText = "I am a third-year Computer Science student at Toronto Metropolitan University, pursuing my passion in the field. My interests lie in coding 💻, lifting weights 💪🏼, and gaming 🕹️.";

    return (
      <div className="2xl:mx-40 md:mx-24 mx-4 pt-20 overflow-x-hidden" id="About">
        <h1 className="text-white text-center md:text-6xl tracking-wider text-5xl md:mt-12 mt:6 font-black">WHO'S THIS?</h1>
        <div className="flex md:flex-row flex-col md:py-20 md:px-40 px-8">
          <div className="flex-1 flex md:justify-between justify-center md:m-0 my-4">
            <div className="md:h-[300px] md:w-[300px] h-[200px] w-[200px] md:p-2 bg-offPrimary rounded-full">
              <Image src={paths.meFr} width={500} height={500} layout="responsive" className="rounded-full" alt="Dominic Chen" /> {/* Adjusted width and height */}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center text-lightText">
            <p className=" md:text-xl text-lg md:mt-4 mt-2">{aboutText}</p> <br />
            <p className=" md:text-xl text-lg md:mt-4 mt-2">
              I am currently a .NET Software Developer at 
              <a href='https://www.fgfbrands.com/' className='text-secondary font-bold hover:text-offSecondary'> FGF Brands </a> 
              with experience in building web APIs, working with SQL databases, and developing full stack applications! 🚀
            </p>
            <div className=" md:flex hidden">
              <ResumeButton />
            </div>
          </div>
        </div>

        <h1 className="text-white text-center md:text-4xl md:mt-0 mt-8 tracking-wider md text-3xl font-black">EXPERIENCE</h1>
        <Experience />
        <h1 className="text-white text-center md:text-4xl tracking-wider text-3xl font-black">TECH STACK</h1>
        <Techstack />
      </div>
    );
  }
  
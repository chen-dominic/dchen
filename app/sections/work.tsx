"use client";

import React, { useState, useEffect } from "react";
import CodeProjects from "../../components/codeProjects";
import ArtProjects from "../../components/artProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Work() {

    const [projectType, setProjectType] = useState("coding");
    const [fade, setFade] = useState(false);
    const animationDuration = 200;

    const toggleProjectType = (type: string) => {
      if (projectType === type) return;
      setFade(false);
      setTimeout(() => {
        setProjectType(type);
        setFade(true);
      }, animationDuration); // Duration of fade-out
    }

    useEffect(() => {
      setFade(true);
    }, []);

    return (
      <div className="2xl:mx-40 md:mx-24 mx-4 pt-20 flex flex-col items-center" id="Work">
        <h1 className="text-white text-center md:text-6xl tracking-wider text-5xl md:mt-12 mt:6 font-black">MY WORK</h1>
        <div className="bg-offPrimary rounded-full mt-8 overflow-hidden flex w-fit items-center">
          <div  className={`flex-1 flex items-center justify-center px-4 py-2 ${projectType === "coding" ? "bg-secondary text-white" : "bg-offPrimary text-gray-400 hover:bg-primary"} cursor-pointer transition-all duration-300`} 
                onClick={() => toggleProjectType("coding")}>
            <FontAwesomeIcon icon={faCode} className="h-6 w-6" />
          </div>
          <div  className={`flex-1 flex items-center justify-center px-4 py-2 ${projectType === "artwork" ? "bg-secondary text-white" : "bg-offPrimary text-gray-400 hover:bg-primary"} cursor-pointer transition-all duration-200`} 
                onClick={() => toggleProjectType("artwork")}>
            <FontAwesomeIcon icon={faPalette} className="h-6 w-6" />
          </div>
        </div>
        <div className={`flex flex-col overflow-visible items-center transition-all duration-[${animationDuration}] ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'}`}>
          {projectType === "coding" ? <CodeProjects /> : <ArtProjects />}
        </div>
      </div>
    );
  }
  
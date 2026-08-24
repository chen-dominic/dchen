"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDumbbell, faPalette } from "@fortawesome/free-solid-svg-icons";
import type { WorkoutSession } from "../app/data/workouts";
import ArtProjects from "./artProjects";
import CodeProjects from "./codeProjects";
import WorkoutProjects from "./workoutProjects";

type ProjectType = "coding" | "artwork" | "workouts";

export default function WorkContent({ workouts }: { workouts: WorkoutSession[] }) {
  const [projectType, setProjectType] = useState<ProjectType>("coding");
  const [fade, setFade] = useState(false);
  const animationDuration = 200;

  const toggleProjectType = (type: ProjectType) => {
    if (projectType === type) return;
    setFade(false);
    setTimeout(() => {
      setProjectType(type);
      setFade(true);
    }, animationDuration);
  };

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div className="2xl:mx-40 md:mx-24 mx-4 pt-20 flex flex-col items-center" id="Work">
      <h1 className="text-white text-center md:text-6xl tracking-wider text-5xl md:mt-12 mt:6 font-black">MY WORK</h1>
      <div className="bg-offPrimary rounded-full mt-8 overflow-hidden flex w-fit items-center">
        <button type="button" title="Code projects" aria-label="Show code projects" className={`flex-1 flex items-center justify-center px-4 py-2 ${projectType === "coding" ? "bg-secondary text-white" : "bg-offPrimary text-gray-400 hover:bg-primary"} cursor-pointer transition-all duration-300`}
              onClick={() => toggleProjectType("coding")}>
          <FontAwesomeIcon icon={faCode} className="h-6 w-6" />
        </button>
        <button type="button" title="Art projects" aria-label="Show art projects" className={`flex-1 flex items-center justify-center px-4 py-2 ${projectType === "artwork" ? "bg-secondary text-white" : "bg-offPrimary text-gray-400 hover:bg-primary"} cursor-pointer transition-all duration-200`}
              onClick={() => toggleProjectType("artwork")}>
          <FontAwesomeIcon icon={faPalette} className="h-6 w-6" />
        </button>
        <button type="button" title="Recent workouts" aria-label="Show recent workouts" className={`flex-1 flex items-center justify-center px-4 py-2 ${projectType === "workouts" ? "bg-secondary text-white" : "bg-offPrimary text-gray-400 hover:bg-primary"} cursor-pointer transition-all duration-200`}
              onClick={() => toggleProjectType("workouts")}>
          <FontAwesomeIcon icon={faDumbbell} className="h-6 w-6" />
        </button>
      </div>
      <div className={`flex flex-col overflow-visible items-center transition-all duration-200 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`}>
        {projectType === "coding" && <CodeProjects />}
        {projectType === "artwork" && <ArtProjects />}
        {projectType === "workouts" && <WorkoutProjects workouts={workouts} />}
      </div>
    </div>
  );
}

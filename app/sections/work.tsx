"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import CodeProjects from "../../components/codeProjects";
import ArtProjects from "../../components/artProjects";
import SectionHeading from "../../components/section-heading";

type ProjectType = "coding" | "artwork";

export default function Work() {
  const [projectType, setProjectType] = useState<ProjectType>("coding");

  return (
    <section id="work" aria-labelledby="work-title" className="px-6 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="work-title"
          eyebrow="Work"
          title="Projects"
          description=""
        />

        <div
          role="group"
          aria-label="Project category"
          className="mx-auto mt-8 flex w-fit rounded-full border border-white/10 bg-offPrimary p-1"
        >
          <button
            type="button"
            aria-pressed={projectType === "coding"}
            onClick={() => setProjectType("coding")}
            className={`flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition ${
              projectType === "coding" ? "bg-secondary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faCode} className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-pressed={projectType === "artwork"}
            onClick={() => setProjectType("artwork")}
            className={`flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition ${
              projectType === "artwork" ? "bg-secondary text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faPalette} className="h-4 w-4" />
          </button>
        </div>

        <div id="projects-panel" className="mt-10">
          <div key={projectType} className="project-panel-enter">
            {projectType === "coding" ? <CodeProjects /> : <ArtProjects />}
          </div>
        </div>
      </div>
    </section>
  );
}

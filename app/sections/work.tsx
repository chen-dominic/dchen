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

  const tabs: { id: ProjectType; label: string; icon: typeof faCode }[] = [
    { id: "coding", label: "Software", icon: faCode },
    { id: "artwork", label: "Visual art", icon: faPalette },
  ];

  return (
    <section id="work" className="border-y border-line bg-offPrimary/35 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Projects with purpose — and a little personality.</>}
            description="Things I built to solve a real problem, learn something new, or explore an idea that was too fun to leave alone."
          />

          <div
            className="inline-flex w-fit rounded-full border border-line bg-primary p-1.5"
            role="tablist"
            aria-label="Project category"
          >
            {tabs.map((tab) => {
              const isActive = projectType === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${tab.id}-tab`}
                  aria-selected={isActive}
                  aria-controls="projects-panel"
                  onClick={() => setProjectType(tab.id)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-muted hover:bg-offPrimary hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon icon={tab.icon} className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="projects-panel"
          role="tabpanel"
          aria-labelledby={`${projectType}-tab`}
        >
          {projectType === "coding" ? <CodeProjects /> : <ArtProjects />}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import projects from "../app/data/projects";

type ArtProject = (typeof projects.artwork)[number];

export default function ArtProjects() {
  const [selectedImage, setSelectedImage] = useState<ArtProject | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      lastTriggerRef.current?.focus();
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {projects.artwork.map((project) => (
          <button
            type="button"
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-offPrimary text-left transition hover:-translate-y-1 hover:border-secondary/40"
            key={project.title}
            onClick={(event) => {
              lastTriggerRef.current = event.currentTarget;
              setSelectedImage(project);
            }}
            aria-label={`Open ${project.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pb-4 pt-12">
              <span className="block text-sm font-bold text-white sm:text-base">{project.title}</span>
            </span>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="art-dialog-title"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedImage(null);
          }}
        >
          <div className="relative max-h-[92vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/10 bg-offPrimary shadow-2xl">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-secondary"
              aria-label="Close artwork preview"
            >
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>
            <a href={selectedImage.imageUrl} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[72vh] w-full bg-primary object-contain"
              />
            </a>
            <div className="p-5 sm:p-6">
              <h3 id="art-dialog-title" className="text-xl font-bold text-white">{selectedImage.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">{selectedImage.subtitle}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import projects from "../app/data/projects";

interface ArtProject {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export default function ArtProjects() {
  const artProjects = projects.artwork;
  const [selectedImage, setSelectedImage] = useState<ArtProject | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [selectedImage]);

  const openArtwork = (project: ArtProject, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedImage(project);
  };

  return (
    <div className="mt-10">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {artProjects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
            <button
              type="button"
              className="group block w-full text-left"
              onClick={(event) => openArtwork(project, event.currentTarget)}
              aria-label={`Open ${project.title} artwork`}
            >
              <span className="relative block aspect-square overflow-hidden bg-offPrimary">
                <Image
                  src={project.imageUrl}
                  alt={project.subtitle}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </span>
              <span className="block p-5">
                <span className="block text-lg font-bold text-white">{project.title}</span>
                <span className="mt-2 block text-sm leading-6 text-muted">{project.subtitle}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                  View artwork
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                </span>
              </span>
            </button>
          </article>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="artwork-dialog-title"
          aria-describedby="artwork-dialog-description"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedImage(null);
          }}
        >
          <div
            ref={dialogRef}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-line bg-surface p-3 shadow-card sm:p-5"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-card transition-colors hover:bg-secondary hover:text-primary"
              aria-label="Close artwork dialog"
            >
              <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
            </button>

            <a
              href={selectedImage.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-[68vh] min-h-0 items-center justify-center overflow-hidden rounded-2xl bg-primary"
              aria-label={`Open full-size ${selectedImage.title} in a new tab`}
            >
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.subtitle}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </a>

            <div className="px-2 pb-2 pt-5 sm:px-3">
              <h3 id="artwork-dialog-title" className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h3>
              <p id="artwork-dialog-description" className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                {selectedImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

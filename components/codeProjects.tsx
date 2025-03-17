import projects from "../app/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

interface Tech {
    name: string;
    url: string;
    iconClass: string;
}

interface Link {
    url: string;
    icon: any;
}

interface Project {
    github: string;
    techUsed: Tech[];
    thumbnail: string;
    title: string;
    subtitle: string;
    links: Link[];
}

interface ProjectsData {
    coding: Project[];
}

const typedProjects = projects as ProjectsData;

export default function CodeProjects() {
    const codingProjects: Project[] = typedProjects.coding;
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const projectContent = (project: Project, index: number) => (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 flex flex-row transition-all duration-500 absolute z-10 py-4 px-2 gap-4">
                    {project.techUsed.map((tech: Tech, techIndex: number) => (
                        <div
                            className="bg-black bg-opacity-50 rounded-full px-2 py-1 flex items-center justify-center hover:bg-secondary transition-all"
                            key={techIndex}
                        >
                            <a
                                className="text-white z-10 drop-shadow-lg flex items-center justify-center h-fit"
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={tech.name}
                            >
                                <i className={`${tech.iconClass} 2xl:text-2xl lg:text-2xl text-4xl`}></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[60vw] lg:h-[25vw] overflow-hidden rounded-2xl">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full relative object-cover"
                />
            </div>
            <div className="flex items-center justify-center w-full">
                <div className="opacity-0 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-8 flex flex-row transition-all duration-500 absolute z-10 py-4 px-2 gap-4">
                    {project.links.map((link: Link, linkIndex: number) => (
                        <div
                            className="bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-secondary transition-all"
                            key={linkIndex}
                        >
                            <a
                                className="text-white z-10 drop-shadow-lg flex items-center justify-center h-fit"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={link.icon} className="h-9 w-9 lg:h-7 lg:w-7 p-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-transparent rounded-b-2xl p-0 flex flex-col items-center overflow-visible translate-y-8 group-hover:translate-y-0 transition-all duration-300 h-40">
                <h1 className="text-4xl group-hover:text-3xl lg:text-3xl lg:group-hover:text-2xl font-bold text-white group-hover:text-secondary font-poppins transition-all duration-300 bg-white bg-opacity-5 group-hover:bg-transparent lg:px-2 lg:py-3 text-center">
                    {project.title}
                </h1>
                <div className="group-hover:opacity-100 opacity-0 flex-col transition-all duration-300 px-5 text-xl lg:text-base">
                    <p className="text-white">{project.subtitle}</p>
                </div>
            </div>
        </>
    );

    return (
        <div className="mx-0 w-screen lg:px-24 xl:px-40 h-fit items-center justify-center my-12">
            <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-4 lg:gap-2 lg:gap-y-6">
                {codingProjects.map((project: Project, index: number) =>
                    isLargeScreen ? (
                        <a
                            href={project.github}
                            target="_blank"
                            className="flex flex-col overflow-hidden transition-all duration-300 rounded-xl cursor-pointer group bg-transparent hover:bg-black hover:bg-opacity-30 w-full"
                            key={index}
                        >
                            {projectContent(project, index)}
                        </a>
                    ) : (
                        <div
                            className="flex flex-col overflow-hidden transition-all duration-300 rounded-xl group bg-transparent hover:bg-black hover:bg-opacity-30 w-full"
                            key={index}
                        >
                            {projectContent(project, index)}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
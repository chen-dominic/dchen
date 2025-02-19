import projects from "../app/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CodeProjects() {
    const codingProjects = projects.coding;
    return(
        <div className="mx-0 w-screen px-24 h-fit items-center justify-center my-12">
            <div className="grid grid-cols-4 gap-2">
            {codingProjects.map((project, index) => (
                <div className="flex flex-col overflow-hidden transition-all duration-300 rounded-2xl cursor-pointer outline-dotted outline-1 group bg-black" key={index}>
                    <div className="opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 flex flex-row transition-all duration-500 absolute z-10 py-4 items-center justify-center bg-black bg-opacity-30 rounded-2xl">
                        {project.techUsed.map((tech,index) => (
                            <div className="" key={index}>
                                <a className="text-white rounded-md hover:-translate-y-1 transition-all p-3 z-10 drop-shadow-lg" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                                    <i className={`${tech.iconClass} 2xl:text-2xl lg:text-2xl text-2xl`}></i>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="h-[400px] overflow-hidden">
                        <img src={project.thumbnail} alt={project.title} className="h-full w-full relative object-none" />
                    </div>
                    <div className="bg-transparent overflow-hidden rounded-b-2xl p-2 flex flex-col translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                        <h1 className="text-4xl group-hover:text-2xl font-black text-white transition-all duration-300">{project.title}</h1>
                        <div className="group-hover:opacity-100 opacity-0 flex-col transition-all duration-300">
                            <p className="text-white">{project.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
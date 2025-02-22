import projects from "../app/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CodeProjects() {
    const codingProjects = projects.coding;
    return(
        <div className="mx-0 w-screen px-24 h-fit items-center justify-center my-12">
            <div className="grid grid-cols-4 gap-2 gap-y-6">
            {codingProjects.map((project, index) => (
                <a href={project.github} target="_blank" className="flex flex-col overflow-hidden transition-all duration-300 rounded-xl cursor-pointer group bg-transparent hover:bg-black hover:bg-opacity-30" key={index}>
                    <div className="flex items-center justify-center w-full">
                        <div className="opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 flex flex-row transition-all duration-500 absolute z-10 py-4 px-2 gap-4">
                            {project.techUsed.map((tech,index) => (
                                <div className="bg-black bg-opacity-50 rounded-full px-2 py-1 flex items-center justify-center hover:bg-secondary transition-all" key={index}>
                                    <a className="text-white z-10 drop-shadow-lg flex items-center justify-center h-fit" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                                        <i className={`${tech.iconClass} 2xl:text-3xl lg:text-3xl text-3xl`}></i>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="h-[400px] overflow-hidden rounded-2xl">
                        <img src={project.thumbnail} alt={project.title} className="h-full w-full relative object-cover" />
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <div className="opacity-0 group-hover:opacity-100 translate-y-0 group-hover:-translate-y-8 flex flex-row transition-all duration-500 absolute z-10 py-4 px-2 gap-4">
                            {project.links.map((link,index) => (
                                <div className="bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-secondary transition-all" key={index}>
                                    <a className="text-white z-10 drop-shadow-lg flex items-center justify-center h-fit" href={link.url} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={link.icon} className="h-8 w-8 p-3" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-transparent overflow-hidden rounded-b-2xl p-2 flex flex-col translate-y-8 group-hover:translate-y-0 transition-all duration-300 h-40 ">
                        <h1 className="text-4xl group-hover:text-2xl font-bold text-white group-hover:text-secondary font-poppins transition-all duration-300">{project.title}</h1>
                        <div className="group-hover:opacity-100 opacity-0 flex-col transition-all duration-300">
                            <p className="text-white">{project.subtitle}</p>
                        </div>
                    </div>
                </a>
            ))}
            </div>
        </div>
    );
}
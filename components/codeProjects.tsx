import projects from "../app/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CodeProjects() {
    const codingProjects = projects.coding;
    return(
        <div className="mx-0 w-screen px-24 h-fit items-center justify-center my-12">
            <div className="grid grid-cols-3 gap-2">
            {codingProjects.map((project, index) => (
                <div className="flex flex-col overflow-hidden flex-1 hover:flex-[4] transition-all duration-300 rounded-2xl cursor-pointer outline-dotted outline-1 group" key={index}>
                    <div className="h-[400px] overflow-hidden">
                        <img src={project.thumbnail} alt={project.title} className="h-full w-full relative object-none" />
                    </div>
                    <div className="bg-transparent overflow-hidden rounded-b-2xl p-2 flex flex-col translate-y-12 group-hover:translate-y-0 transition-all duration-300">
                        <h1 className="text-2xl font-black text-white">{project.title}</h1>
                        <div className="group-hover:opacity-100 opacity-0 flex-col transition-all duration-300 w-96">
                            <p className="text-white">{project.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
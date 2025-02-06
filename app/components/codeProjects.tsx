import projects from "../data/projects";

export default function CodeProjects() {
    const codingProjects = projects.coding;
    return(
        <div className="mx-0 w-screen px-24 h-fit items-center justify-center my-12">
            <div className="flex gap-2 h-[400px]">
            {codingProjects.map((project, index) => (
                <div className="flex flex-col flex-1 overflow-hidden hover:flex-[3] transition-all duration-300 rounded-t-2xl cursor-pointer bg-offPrimary group" key={index}>
                    <img src={project.thumbnail} alt={project.title} className="h-full w-full object-none" />
                    <div className="bg-white rounded-b-2xl p-2 flex">
                        <h1 className="text-3xl overflow-hidden text-secondary">{project.title}</h1>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
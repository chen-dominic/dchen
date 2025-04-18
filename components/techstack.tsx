import techstacks from "../app/data/tech"

interface Tech {
    name: string;
    url: string;
    iconClass: string;
}

interface TechStack {
    languages: { [key: string]: Tech };
    frameworksLbraries: { [key: string]: Tech };
    tools: { [key: string]: Tech };
}

const techstack: TechStack = techstacks;

export default function Techstack(){
    return(
        <div className="flex text-white
                        lg:flex-row flex-col 
                        lg:gap-12 lg:mx-32 lg:mt-12
                        2xl:mx-60
                        gap-4 mx-4 mt-4">
            <div className="flex-1 p-4 bg-offPrimary rounded-xl">
                <h1 className="text-xl font-semibold">Languages</h1>
                <div className="lg:grid lg:grid-cols-3 flex lg:overflow-visible overflow-scroll justify-center items-center lg:gap-2 gap-3 pt-4">
                    {Object.keys(techstack.languages).map((key, index) => {
                        const tech = techstack.languages[key];
                        return (
                            <div className="flex flex-col items-center group overflow-visible" key={index}>
                                <a className="text-white rounded-md hover:-translate-y-1 transition-all p-3 z-10 bg-primary drop-shadow-lg" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                                    <i className={`${tech.iconClass} 2xl:text-6xl lg:text-5xl text-4xl`}></i>
                                </a>
                                <p className="text-center -translate-y-1 text-nowrap text-sm lg:flex hidden text-offPrimary lg:group-hover:text-white lg:group-hover:translate-y-0 transition-all">{tech.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex-1 p-4 bg-offPrimary rounded-xl">
                <h1 className="text-xl font-semibold overflow-hidden text-nowrap">Frameworks & Libraries</h1>
                <div className="lg:grid lg:grid-cols-3 flex lg:overflow-visible overflow-scroll justify-center items-center lg:gap-2 gap-3 pt-4">
                {Object.keys(techstack.frameworksLbraries).map((key, index) => {
                        const tech = techstack.frameworksLbraries[key];
                        return (
                            <div className="flex flex-col items-center group overflow-visible" key={index}>
                                <a className="text-white rounded-md hover:-translate-y-1 transition-all p-3 z-10 bg-primary drop-shadow-lg" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                                    <i className={`${tech.iconClass} 2xl:text-6xl lg:text-5xl text-4xl`}></i>
                                </a>
                                <p className="text-center -translate-y-1 text-nowrap text-sm lg:flex hidden text-offPrimary lg:group-hover:text-white lg:group-hover:translate-y-0 transition-all">{tech.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex-1 p-4 bg-offPrimary rounded-xl">
                <h1 className="text-xl font-semibold text-nowrap">Developer Tools</h1>
                <div className="lg:grid lg:grid-cols-3 flex lg:overflow-visible overflow-scroll justify-center items-center lg:gap-2 gap-3 pt-4">
                {Object.keys(techstack.tools).map((key, index) => {
                        const tech = techstack.tools[key];
                        return (
                            <div className="flex flex-col items-center group overflow-visible" key={index}>
                                <a className="text-white rounded-md hover:-translate-y-1 transition-all p-3 z-10 bg-primary drop-shadow-lg" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                                    <i className={`${tech.iconClass} 2xl:text-6xl lg:text-5xl text-4xl`}></i>
                                </a>
                                <p className="text-center -translate-y-1 text-nowrap text-sm lg:flex hidden text-offPrimary lg:group-hover:text-white lg:group-hover:translate-y-0 transition-all">{tech.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
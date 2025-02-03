import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import techstack from "../data/tech";

export default function About() {
    return (
      <div className="flex flex-col text-white font-bold gap-0" id="About">
        <div className="flex justify-start gap-8 mt-8 sm:ml-12">
          {techstack.languages.map((tech, index) => (
              <a key={index} className="text-white rounded-full hover:-translate-y-1 transition-all p-3" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name} >
                <i className={`${tech.iconClass} text-4xl`}></i>
              </a>
            ))}
        </div>
        <div className="flex justify-start gap-8 mt-8 sm:ml-12">
          {techstack.frameworks.map((tech, index) => (
              <a key={index} className="text-white rounded-full hover:-translate-y-1 transition-all p-3" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                <i className={`${tech.iconClass} text-4xl`}></i>
              </a>
            ))}
        </div>
        <div className="flex justify-start gap-8 mt-8 sm:ml-12">
          {techstack.libraries.map((tech, index) => (
              <a key={index} className="text-white rounded-full hover:-translate-y-1 transition-all p-3" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                <i className={`${tech.iconClass} text-4xl`}></i>
              </a>
            ))}
        </div>
        <div className="flex justify-start gap-8 mt-8 sm:ml-12">
          {techstack.tools.map((tech, index) => (
              <a key={index} className="text-white rounded-full hover:-translate-y-1 transition-all p-3" href={tech.url} target="_blank" rel="noopener noreferrer" title={tech.name}>
                <i className={`${tech.iconClass} text-4xl`}></i>
              </a>
            ))}
        </div>
      </div>
    );
  }
  
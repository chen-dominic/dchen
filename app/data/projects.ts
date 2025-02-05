import techstack from "./tech";
import paths from "./paths";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const languages = techstack.languages;
const frameworksLbraries = techstack.frameworksLbraries;

const projects = {
    coding: [
        {
            title: "EcoDex",
            subtitle: "A gamified platform that helps users understand and manage waste more effectively",
            techUsed:   [languages.javascript,languages.python,frameworksLbraries.nextjs,
                        frameworksLbraries.tailwind,frameworksLbraries.flask,frameworksLbraries, 
                        {name: "MongoDB", url: "https://www.mongodb.com/", iconClass: "devicon-mongodb-plain"}],
            github: "https://github.com/josephleungg/EcoDex",
            links: [
                {
                    icon: faDev,
                    url: "https://devpost.com/software/ecodex-76vnu2?ref_content=my-projects-tab&ref_feature=my_projects",
                },
                {
                    icon: faYoutube,
                    url: "https://devpost.com/software/ecodex-76vnu2?ref_content=my-projects-tab&ref_feature=my_projects",
                }
            ],
            thumbnail: "https://www.youtube.com/watch?v=7_p6hZmhYNA4",
        },
        {
            title: "",
            subtitle: "",
            techUsed:   [],
            github: "",
            links: [
                {
                    icon: "",
                    url: "",
                }
            ],
            thumbnail: "",
        },
    ],
    artwork: [
        {

        },
    ]
}

export default projects;
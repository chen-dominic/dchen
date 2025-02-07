import techstack from "./tech";
import paths from "./paths";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const languages = techstack.languages;
const frameworksLbraries = techstack.frameworksLbraries;
const other = techstack.other;

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
                    url: "https://www.youtube.com/watch?v=7_p6hZmhYNA4",
                }
            ],
            thumbnail: paths.ecodex,
        },
        {
            title: "Memory Lane",
            subtitle: "A web application that allows users to walk down a lane full of past memories",
            techUsed:   [languages.typescript,frameworksLbraries.react,frameworksLbraries.expressjs,other.axios],
            github: "https://github.com/jarell-santella/memorylane",
            links: [
                {
                    icon: faDev,
                    url: "https://devpost.com/software/memorylane-25vzlq",
                },
                {
                    icon: faYoutube,
                    url: "https://www.youtube.com/watch?v=AgtgF8Z4h54",
                }
            ],
            thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/739/116/datas/gallery.jpg",
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
            thumbnail: "a",
        },
    ],
    artwork: [
        {

        },
    ]
}

export default projects;
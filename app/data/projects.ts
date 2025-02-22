import techstack from "./tech";
import paths from "./paths";
import { faDev, faGit } from "@fortawesome/free-brands-svg-icons";
import { faYoutube, faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";

const languages = techstack.languages;
const frameworksLbraries = techstack.frameworksLbraries;
const tools = techstack.tools;
const other = techstack.other;

const projects = {
    coding: [
        {
            title: "Rotify",
            subtitle: "Transforms traditional learning materials into dynamic, multi-sensory experiences",
            techUsed:   [languages.javascript,frameworksLbraries.nextjs,frameworksLbraries.tailwind,frameworksLbraries.expressjs],
            github: "https://github.com/chen-dominic/Rotify",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/chen-dominic/Rotify",
                },
                {
                    icon: faDev,
                    url: "https://devpost.com/software/rotify-jn7hul?ref_content=user-portfolio&ref_feature=in_progress",
                },
                {
                    icon: faYoutube,
                    url: "https://www.youtube.com/watch?v=PjXUOong-DI",
                },
            ],
            thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/259/201/datas/gallery.jpg",
        },
        {
            title: "ChainVision",
            subtitle: "A supply chain disruption prediction web application for manufacturing companies",
            techUsed:   [languages.csharp,languages.javascript,languages.python,languages.sql,frameworksLbraries.netcore],
            github: "https://github.com/chen-dominic/ChainVision",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/chen-dominic/ChainVision",
                },
            ],
            thumbnail: paths.fgf,
        },
        {
            title: "EcoDex",
            subtitle: "A gamified platform that helps users understand and manage waste more effectively",
            techUsed:   [languages.javascript,languages.python,frameworksLbraries.nextjs,
                        frameworksLbraries.tailwind,frameworksLbraries.flask,
                        {name: "MongoDB", url: "https://www.mongodb.com/", iconClass: "devicon-mongodb-plain"}],
            github: "https://github.com/chen-dominic/EcoDex",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/chen-dominic/EcoDex",
                },
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
            title: "TMUCSA",
            subtitle: "The official website of TMUCSA, a social club that promotes student wellbeing through various activities at TMU.",
            techUsed:   [languages.javascript,frameworksLbraries.nextjs,frameworksLbraries.tailwind,other.firebase],
            github: "https://github.com/TMUCSA/tmucsa-website",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/TMUCSA/tmucsa-website",
                },
                {
                    icon: faChrome,
                    url: "https://tmucsa.netlify.app/",
                }
            ],
            thumbnail: "https://ugc.production.linktr.ee/yjpSKwHnRiS6IjbAAtQE_PWLar811KGIJVxM2?io=true&size=avatar-v3_0",
        },
        {
            title: "Memory Lane",
            subtitle: "A web application that allows users to walk down a lane full of past memories",
            techUsed:   [languages.typescript,frameworksLbraries.react,frameworksLbraries.expressjs,other.axios],
            github: "https://github.com/jarell-santella/memorylane",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/jarell-santella/memorylane",
                },
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
            title: "Smoggle Maps",
            subtitle: "An alternative to Google Maps, with a twist that is intended to help battle CO2 emissions.",
            techUsed:   [languages.javascript,other.reactnative],
            github: "https://github.com/real2nix/deltahacks-x",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/real2nix/deltahacks-x",
                },
                {
                    icon: faDev,
                    url: "https://devpost.com/software/smoggle-maps",
                },
            ],
            thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/718/006/datas/gallery.jpg",
        },
        {
            title: "self.translate",
            subtitle: "A revolutionary translation web application that can be utilized by users worldwide",
            techUsed:   [languages.python],
            github: "https://github.com/andrearcaina/Self-Translate",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/andrearcaina/Self-Translate",
                },
                {
                    icon: faDev,
                    url: "https://devpost.com/software/self-translate",
                },
                {
                    icon: faYoutube,
                    url: "https://www.youtube.com/watch?v=JoMP6ZF_GDI",
                },
            ],
            thumbnail: "https://chen-dominic.github.io/img/port2.png",
        },
        {
            title: "Java Quest",
            subtitle: "A 2D Adventure Game developed purely from the built-in Java class library",
            techUsed:   [languages.java],
            github: "https://github.com/chen-dominic/Java-Quest",
            links: [
                {
                    icon: faGithub,
                    url: "https://github.com/chen-dominic/Java-Quest",
                },
                {
                    icon: faYoutube,
                    url: "https://www.youtube.com/watch?v=hf3JamjQ39o",
                },
            ],
            thumbnail: "https://chen-dominic.github.io/img/port1.png",
        },
        // {
        //     title: "",
        //     subtitle: "",
        //     techUsed:   [],
        //     github: "",
        //     links: [
        //         {
        //             icon: "",
        //             url: "",
        //         }
        //     ],
        //     thumbnail: "a",
        // },
    ],
    artwork: [
        {

        },
    ]
}

export default projects;
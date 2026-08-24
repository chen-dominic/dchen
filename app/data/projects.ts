import techstack from "./tech";
import paths from "./paths";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faYoutube, faChrome, faGithub } from "@fortawesome/free-brands-svg-icons";

const languages = techstack.languages;
const frameworksLbraries = techstack.frameworksLbraries;
const other = techstack.other;

const projects = {
    coding: [
        {
            title: "Rotify",
            subtitle: "A first-place hackathon project that turns any topic into an AI-generated lesson with interactive quizzes and a chatbot.",
            techUsed:   [languages.javascript,frameworksLbraries.nextjs,frameworksLbraries.tailwind,frameworksLbraries.expressjs],
            github: "https://github.com/chen-dominic/Rotify",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/chen-dominic/Rotify",
                },
                {
                    icon: faDev,
                    label: "Devpost",
                    url: "https://devpost.com/software/rotify-jn7hul?ref_content=user-portfolio&ref_feature=in_progress",
                },
                {
                    icon: faYoutube,
                    label: "Demo",
                    url: "https://www.youtube.com/watch?v=PjXUOong-DI",
                },
            ],
            thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/259/201/datas/gallery.jpg",
        },
        {
            title: "ChainVision",
            subtitle: "A web app that helps manufacturers anticipate potential supply-chain disruptions.",
            techUsed:   [languages.csharp,languages.javascript,languages.python,languages.sql,frameworksLbraries.netcore],
            github: "https://github.com/chen-dominic/ChainVision",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/chen-dominic/ChainVision",
                },
            ],
            thumbnail: paths.chainvision,
        },
        {
            title: "EcoDex",
            subtitle: "A gamified platform that helps people better understand and manage everyday waste.",
            techUsed:   [languages.javascript,languages.python,frameworksLbraries.nextjs,
                        frameworksLbraries.tailwind,frameworksLbraries.flask,
                        {name: "MongoDB", url: "https://www.mongodb.com/", iconClass: "devicon-mongodb-plain"}],
            github: "https://github.com/chen-dominic/EcoDex",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/chen-dominic/EcoDex",
                },
                {
                    icon: faDev,
                    label: "Devpost",
                    url: "https://devpost.com/software/ecodex-76vnu2?ref_content=my-projects-tab&ref_feature=my_projects",
                },
                {
                    icon: faYoutube,
                    label: "Demo",
                    url: "https://www.youtube.com/watch?v=7_p6hZmhYNA4",
                }
            ],
            thumbnail: paths.ecodex,
        },
        {
            title: "TMUCSA",
            subtitle: "The official TMU Chinese Students’ Association website for events, updates, and club information.",
            techUsed:   [languages.javascript,frameworksLbraries.nextjs,frameworksLbraries.tailwind,other.firebase],
            github: "https://github.com/TMUCSA/tmucsa-website",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/TMUCSA/tmucsa-website",
                },
                {
                    icon: faChrome,
                    label: "Live site",
                    url: "https://tmucsa.vercel.app/",
                }
            ],
            thumbnail: "https://ugc.production.linktr.ee/yjpSKwHnRiS6IjbAAtQE_PWLar811KGIJVxM2?io=true&size=avatar-v3_0",
        },
        {
            title: "Memory Lane",
            subtitle: "A nostalgic web experience for revisiting meaningful moments from the past.",
            techUsed:   [languages.typescript,frameworksLbraries.react,frameworksLbraries.expressjs,other.axios],
            github: "https://github.com/jarell-santella/memorylane",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/jarell-santella/memorylane",
                },
                {
                    icon: faDev,
                    label: "Devpost",
                    url: "https://devpost.com/software/memorylane-25vzlq",
                },
                {
                    icon: faYoutube,
                    label: "Demo",
                    url: "https://www.youtube.com/watch?v=AgtgF8Z4h54",
                }
            ],
            thumbnail: "https://img.youtube.com/vi/AgtgF8Z4h54/0.jpg",
        },
        {
            title: "Smoggle Maps",
            subtitle: "A route-planning concept designed to encourage lower-emission travel.",
            techUsed:   [languages.javascript,other.reactnative],
            github: "https://github.com/real2nix/deltahacks-x",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/real2nix/deltahacks-x",
                },
                {
                    icon: faDev,
                    label: "Devpost",
                    url: "https://devpost.com/software/smoggle-maps",
                },
            ],
            thumbnail: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/718/006/datas/gallery.jpg",
        },
        {
            title: "self.translate",
            subtitle: "A Python translation app for converting text between languages.",
            techUsed:   [languages.python],
            github: "https://github.com/andrearcaina/Self-Translate",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/andrearcaina/Self-Translate",
                },
                {
                    icon: faDev,
                    label: "Devpost",
                    url: "https://devpost.com/software/self-translate",
                },
                {
                    icon: faYoutube,
                    label: "Demo",
                    url: "https://www.youtube.com/watch?v=JoMP6ZF_GDI",
                },
            ],
            thumbnail: "https://chen-dominic.github.io/img/port2.png",
        },
        {
            title: "Java Quest",
            subtitle: "A 2D adventure game built entirely with Java’s standard library.",
            techUsed:   [languages.java],
            github: "https://github.com/chen-dominic/Java-Quest",
            links: [
                {
                    icon: faGithub,
                    label: "GitHub",
                    url: "https://github.com/chen-dominic/Java-Quest",
                },
                {
                    icon: faYoutube,
                    label: "Demo",
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
            title: "Depth Design",
            subtitle: "A monochrome portrait study inspired by historical Chinese culture.",
            imageUrl: "https://i.imgur.com/P2Esvsc.png",
        },
        {
            title: "Type Design",
            subtitle: "A typographic response to anti-Asian hate during the COVID-19 pandemic.",
            imageUrl: "https://i.imgur.com/QEKGi7U.png",
        },
        {
            title: "Meal Illustration",
            subtitle: "A vibrant illustration celebrating Asian food and shared meals.",
            imageUrl: "https://i.imgur.com/rzWMhFa.png",
        },
        {
            title: "Great Escape",
            subtitle: "A surreal scene of Dr. Chen opening a portal into another world.",
            imageUrl: "https://i.imgur.com/HUnUsBO.png",
        },
    ]
}

export default projects;

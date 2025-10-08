import paths from "./paths";

const experiences = {
    education: [
        {
            title: "Bachelor of Science (Honours)",
            subtitle: "Computer Science & Co-op, Minoring Cyber Studies",
            location: "Toronto Metropolitan University",
            date: "SEPT 2022 - Present",
            grade: "GPA: 4.1 / 4.33",
            description: [
                "Relevant Coursework: Software Engineering, Data Structure, Cyber Security, Web Development, Operating Systems",
            ],
            src: paths.tmu,
            url: "https://www.torontomu.ca/programs/undergraduate/computer-science/",
        },
    ],
    professional: [
        {
            title: "Software Developer Intern",
            location: "Dayforce",
            date: "Sept 2025 - Present",
            description: [
                "Developed and debugged features across a .NET and Angular JS application.",
                "Collaborated with the team on daily sprints to track tasks efficiently.",
                "Analyzed and debugged code to identify issues and implement solutions.",
            ],
            src: paths.dayforce,
            url: "https://www.dayforce.com/",
        },
        {
            title: ".NET Software Developer Co-op",
            location: "FGF Brands",
            date: "May 2024 - Aug 2025",
            description: [
                "Built web APIs using .NET and Entity Framework Core.",
                "Worked with MS SQL Server databases to store and manage data.",
                "Developed cloud applications using Power Platform and Azure services.",
            ],
            src: paths.fgf,
            url: "https://www.fgfbrands.com/",
        }
    ]
};

export default experiences;
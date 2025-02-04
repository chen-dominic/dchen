import paths from "./paths";

const experiences = {
    education: [
        {
            title: "Bachelor of Science (Honours)",
            subtitle: "Computer Science & Co-op, Minoring Cyber Studies",
            location: "Toronto Metropolitan University",
            date: "2022 - Present",
            grade: "CGPA: 4.1 / 4.33",
            src: paths.tmu
        },
    ],
    professional: [
        {
            title: ".NET Software Developer Co-op",
            location: "FGF Brands",
            date: "May 2024 - Present",
            description: [
                "Built web APIs using .NET and Entity Framework Core.",
                "Worked with MS SQL Server databases to store and manage data.",
                "Developed cloud applications using Power Platform and Azure services.",
            ],
            src: paths.fgf
        }
    ]
};

export default experiences;
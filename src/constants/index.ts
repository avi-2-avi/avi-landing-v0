
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

export const techStack = [
    {
        id: "python",
        title: "Python (FastAPI)",
        icon: "bxl:python"
    },
    {
        id: "aws",
        title: "AWS and SAM",
        icon: "bxl:aws"
    },
    {
        id: "docker",
        title: "Docker",
        icon: "bxl:docker"
    },
]

export const techStack2 = [
    {
        id: "react",
        title: "React",
        icon: "bxl:react"
    },
    {
        id: "ql",
        title: "SQL/NoSQL DBs",
        icon: "charm:database"
    },
    {
        id: "cpp",
        title: "C++",
        icon: "bxl:c-plus-plus"
    }
]

export const experience = [
    {
        id: 0,
        position: "Backend Engineer",
        company: "AGROS",
        acronym: "AGROS",
        date: "April 2022 - September 2022",
        goals: [
            "Restructuring of the communication services, implementing the microservices needed for the notification panel with the serverless framework of AWS (SAM) and the web framework FastAPI (Python).",
            "Support in the modeling and monitoring of the data layer of the company using GraphQL and the toolkit SQLAlchemy."
        ]
    },
    {
        id: 1,
        position: "Data Engineer Intern",
        company: "AGROS",
        acronym: "AGROS",
        date: "January 2022 - March 2022",
        goals: [
            "Support in the implementation of the data base and services for the principal panel of communications, which attends frequent consultations of producers from various regions in Peru.",
            "Creation of microservices that are linked with the relational data base using containers and launching these with AWS Cloud services.",
            "Linking the logic of the data of the Backend (using CRUD APIs) with the Frontend in order to create functional components used in the Dashboard of the panel."
        ]
    },
    {
        id: 2,
        position: "Simunations Intern",
        company: "Joint Institute for Nuclear Research",
        acronym: "JINR",
        date: "July 2020 - September 2020",
        goals: [
            "Thermodynamic analysis of a rack cabinet through heat conduction simulations."
        ]
    },
    {
        id: 3,
        position: "Project Management Intern",
        company: "Airbus S.A.",
        acronym: "Airbus",
        date: "September 2019 - November 2019",
        goals: [
            "Organization of projects concerning the evaluation of quality in the production of military and civil aircraft."
        ]
    },
]

export const projects = [
    {
        id: 0,
        title: "Focus Landing Page",
        description: "Landing Page of the invented company Focus, which offers a mobile and web application for time-management for students.",
        repo: "https://github.com/iFocusNow/landing-page",
        logos: ["bxl:html5", "bxl:css3", "bxl:javascript"]
    },
    {
        id: 1,
        title: "Personal Landing Page",
        description: "Test version of my Landing Page done with Svelte and TailwindCSS, using components from DaisyUI component library.",
        repo: "https://github.com/avi-2-avi/avi-landing-v0",
        logos: ["carbon:logo-svelte", "bxl:tailwind-css", "bxl:typescript"]
    },
    {
        id: 2,
        title: "Karnaugh Map Solver",
        description: "Graphic User Interface program made with Tkinter which constructs a Karnaugh Map from a truth table.",
        repo: "https://github.com/avi-2-avi/karnaugh-gui",
        logos: ["bxl:python"]
    },
    {
        id: 3,
        title: "Planification Processes",
        description: "Script simulating FIFO and SJF processes scheduling algorithms.",
        repo: "https://github.com/avi-2-avi/planification-processes",
        logos: ["bxl:go-lang"]
    },
    {
        id: 4,
        title: "Kirby Recycle Deluxe",
        description: "Fan game of the Kirby series, made with C++.",
        repo: "https://github.com/avi-2-avi/kirby-recycle-deluxe",
        logos: ["bxl:c-plus-plus"]
    },
    {
        id: 5,
        title: "Sifind",
        description: "Word detector of most common words in the Peruvian dictionary, made with Python.",
        repo: "https://github.com/avi-2-avi/sifind",
        logos: ["bxl:python", "carbon:logo-jupyter"]
    },
]